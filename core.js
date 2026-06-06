/* ═══════════════════════════════════════════
   NutriScan 鲜码 — Shared Core (v0.3)
   Profile, food log, percentage math, dish-page wiring.
   Loaded after i18n.js on every page.
   ═══════════════════════════════════════════ */

/* ── Goals ──
   Default = standard 2,000 kcal food-label reference (FDA-style).
   Presets = personal targets the user can pick, then fine-tune. */
var DEFAULT_GOALS = { kcal: 2000, protein: 60, carbs: 255, fat: 65, preset: 'reference' };

var GOAL_PRESETS = {
  lose:     { kcal: 1600, protein: 140, carbs: 130, fat: 50 },
  maintain: { kcal: 2000, protein: 100, carbs: 230, fat: 67 },
  gain:     { kcal: 2600, protein: 160, carbs: 320, fat: 80 }
};

function getProfile() {
  try {
    var p = JSON.parse(localStorage.getItem('nutriscan_profile'));
    if (p && p.kcal) return p;
  } catch (e) {}
  return Object.assign({}, DEFAULT_GOALS);
}
function setProfile(p) {
  localStorage.setItem('nutriscan_profile', JSON.stringify(p));
}

/* ── Food log ── */
function getLog() {
  try { return JSON.parse(localStorage.getItem('nutriscan_log') || '[]'); }
  catch (e) { return []; }
}
function addLog(entry) {
  var l = getLog();
  entry.id = 'm' + Date.now() + Math.random().toString(36).slice(2, 6);
  l.push(entry);
  localStorage.setItem('nutriscan_log', JSON.stringify(l));
  return entry;
}
function removeLog(id) {
  var l = getLog().filter(function (x) { return x.id !== id; });
  localStorage.setItem('nutriscan_log', JSON.stringify(l));
}

/* ── Helpers ── */
function pct(amount, goal) { return goal > 0 ? Math.round(amount / goal * 100) : 0; }

function startOfToday() { var d = new Date(); d.setHours(0, 0, 0, 0); return d.getTime(); }
function startOfWeek()  { var d = new Date(); d.setHours(0, 0, 0, 0); var day = (d.getDay() + 6) % 7; d.setDate(d.getDate() - day); return d.getTime(); }
function startOfMonth() { var d = new Date(); d.setHours(0, 0, 0, 0); d.setDate(1); return d.getTime(); }

/* days elapsed in the current period, including today (min 1) */
function daysElapsed(period) {
  var now = new Date();
  if (period === 'week')  return ((now.getDay() + 6) % 7) + 1;
  if (period === 'month') return now.getDate();
  return 1;
}

function sumRange(startTs) {
  var t = { kcal: 0, protein: 0, carbs: 0, fat: 0, count: 0 };
  getLog().forEach(function (e) {
    if (e.ts >= startTs) {
      t.kcal += e.kcal; t.protein += e.protein; t.carbs += e.carbs; t.fat += e.fat; t.count++;
    }
  });
  return t;
}

/* ── Toast ── */
function showToast(msg) {
  var el = document.createElement('div');
  el.className = 'toast';
  el.textContent = msg;
  document.body.appendChild(el);
  setTimeout(function () {
    el.style.animation = 'toastOut 0.3s forwards';
    setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, 300);
  }, 1600);
}

/* ═══════════════════════════════════════════
   DISH PAGE LOGIC (runs when window.DISH is set)
   ═══════════════════════════════════════════ */
window.currentFactor = 1.0;

function setMacro(name, grams, p, suffix) {
  var v = document.getElementById('val-' + name);
  var b = document.getElementById('bar-' + name);
  if (v) { v.textContent = grams + ' g · ' + p + suffix; v.classList.toggle('over', p > 100); }
  if (b) { b.style.width = Math.min(p, 100) + '%'; b.classList.toggle('over', p > 100); }
}

function setPortion(f) {
  window.currentFactor = f;
  var D = window.DISH, g = getProfile();
  document.querySelectorAll('.portion-btn').forEach(function (b) {
    b.classList.toggle('active', parseFloat(b.dataset.f) === f);
  });
  var kcal = Math.round(D.kcal * f),
      p    = Math.round(D.protein * f),
      c    = Math.round(D.carbs * f),
      ft   = Math.round(D.fat * f);
  var kp = pct(kcal, g.kcal);
  var rk = document.getElementById('ring-kcal'); if (rk) rk.textContent = kcal;
  var rp = document.getElementById('ring-pct');  if (rp) rp.textContent = kp + t('daily-pct-suffix');
  var rg = document.getElementById('ring-progress');
  if (rg) rg.style.strokeDasharray = Math.min(351.86 * kp / 100, 351.86) + ' 351.86';
  var gs = t('daily-goal-suffix');
  setMacro('protein', p,  pct(p, g.protein), gs);
  setMacro('carbs',   c,  pct(c, g.carbs),   gs);
  setMacro('fat',     ft, pct(ft, g.fat),    gs);
}

function logMeal() {
  var D = window.DISH, f = window.currentFactor || 1;
  addLog({
    dishKey: D.key, cn: D.cn, en: D.en, pinyin: D.pinyin, icon: D.icon, url: D.url,
    portion: f,
    kcal:    Math.round(D.kcal * f),
    protein: Math.round(D.protein * f),
    carbs:   Math.round(D.carbs * f),
    fat:     Math.round(D.fat * f),
    ts: Date.now()
  });
  showToast(t('log-toast'));
}

document.addEventListener('DOMContentLoaded', function () {
  if (!window.DISH) return;
  var D = window.DISH;
  /* animate ring + bars from zero to computed values */
  setTimeout(function () { setPortion(1); }, 120);
  /* allergen flagging */
  document.querySelectorAll('.allergen-chip.present').forEach(function (c) {
    c.addEventListener('click', function () { c.classList.toggle('highlighted'); });
  });
  /* save to recently scanned */
  try {
    var e = { cn: D.cn, en: D.en, pinyin: D.pinyin, kcal: D.kcal, icon: D.icon, img: D.img, url: D.url, ts: Date.now() };
    var h = JSON.parse(localStorage.getItem('nutriscan_history') || '[]');
    h = h.filter(function (x) { return x.url !== e.url; });
    h.unshift(e);
    localStorage.setItem('nutriscan_history', JSON.stringify(h.slice(0, 5)));
  } catch (err) {}
  /* re-render on language switch */
  window.refreshDynamicTexts = function () { setPortion(window.currentFactor || 1); };
});
