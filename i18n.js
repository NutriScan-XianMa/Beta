/* ═══════════════════════════════════════════
   NutriScan 鲜码 — i18n Translation System
   ═══════════════════════════════════════════
   Usage in HTML
     Static text : <span data-i18n="key">Default</span>
     HTML content: <div data-i18n-html="key">Default</div>
   Usage in JS
     t('key')  — returns string for current language
*/

var STRINGS = {

  en: {
    /* brand */
    'brand-sub':          'Nutritional Transparency · Peking University',
    /* index */
    'scan-btn':           'Scan Dish QR Code',
    'recent-label':       'Recently Scanned',
    'welcome-text':       '<strong>Or browse today\'s featured dishes below.</strong> Tap any dish to view the full nutrition panel, allergens, and macronutrient breakdown.',
    'operator-btn-idx':   'Canteen Operator Dashboard →',
    'footer-text':        'Powered by NutriScan 鲜码 · Prototype v0.3',
    /* today card + nav (index) */
    'today-title':        'Today',
    'today-link':         'Diary ›',
    'today-empty':        'No meals logged yet today',
    'profile-link-btn':   'My Goals & Profile →',
    /* dish card metas on index */
    'meta-ganbian':       'Soy · Gluten',
    'section-catering':   '家园食堂 · Jiayuan Canteen',
    'section-yncoffee':   '燕南咖啡 · YN Coffee',
    'section-yannan':     '燕南食堂 · Yannan Canteen',
    'meta-yn-blackchoco': 'Dairy · Tree Nuts · Soy',
    'meta-yn-nutbowl':    'Dairy · Tree Nuts',
    'meta-yn-mango':      'Dairy · Vegetarian',
    'meta-yan-thai':                'Soy',
    'meta-yan-curry-udon':          'Soy · Gluten',
    'meta-yan-curry-cod':           'Soy · Gluten',
    'meta-yan-curry-pork':          'Soy · Gluten',
    'meta-yan-curry-chicken-udon':  'Soy · Gluten',
    'meta-yan-pepper-egg':          'Eggs · Soy',
    'meta-yan-mushroom-egg':        'Eggs · Soy',
    'meta-yan-pork-egg':            'Eggs · Soy · Gluten',
    'meta-yan-shrimp-egg':          'Eggs · Soy · Shellfish',
    'meta-yan-teriyaki':            'Soy · Gluten',
    'meta-yan-kimchi-beef':         'Soy',
    'meta-yan-lemon-chicken':       'Soy · Gluten',
    'meta-yan-cheese-ramen':        'Dairy · Gluten · Soy',
    'meta-yan-bone-ramen':          'Gluten · Soy',
    'meta-yan-takoyaki':            'Gluten · Eggs · Shellfish · Soy',
    'meta-yan-bacon-pasta':         'Gluten · Dairy · Soy',
    'meta-yan-shrimp-pasta':        'Gluten · Shellfish · Dairy · Soy',
    'meta-yan-hell-ramen':          'Soy · Gluten',
    'meta-yan-karaage':             'Soy · Gluten',
    /* scanner overlay */
    'scanner-title':      'Scan Dish QR Code',
    'scanner-hint':       'Align QR code within frame',
    'scanner-status-def': 'Point camera at a NutriScan QR code',
    'scanner-cancel':     'Cancel',
    /* dish pages — card headers */
    'calories-header':    'Calories',
    'macros-header':      'Macronutrients',
    'allergens-header':   'Allergens',
    'allergens-hint':     'Tap to flag',
    /* dish pages — ring */
    'daily-ref':          'Based on your {kcal} kcal daily goal',
    'daily-pct-suffix':   '% daily',
    /* dish pages — macros */
    'serving-label':      'Serving',
    'macro-protein':      'Protein',
    'macro-carbs':        'Carbohydrates',
    'macro-fat':          'Fat',
    'daily-goal-suffix':  '% of daily goal',
    /* log meal */
    'log-btn':            'Log This Meal',
    'log-toast':          'Meal logged',
    /* allergen chip labels */
    'al-peanuts':         'Peanuts',
    'al-soy':             'Soy',
    'al-sesame':          'Sesame',
    'al-gluten':          'Gluten',
    'al-dairy':           'Dairy',
    'al-shellfish':       'Shellfish',
    'al-eggs':            'Eggs',
    'al-treenuts':        'Tree Nuts',
    'allergen-note':      'Amber = present. Grey = not detected. Cross-contamination in shared kitchen is possible.',
    /* disclaimer */
    'disc-title':         'Estimated Values',
    'disc-body':          'Figures are calculated from Chinese Food Composition Standards (China CDC, 6th ed.) and may vary with portion size, preparation method, and ingredient batch.',
    /* vegetarian */
    'veg-badge':          'Vegetarian',
    'veg-note':           'No meat or seafood in this dish.',
    /* shared */
    'operator-btn':       'Canteen Operator View →',
    'page-footer':        'NutriScan 鲜码 · Prototype v0.3',
    /* profile page */
    'profile-title':      'My Profile',
    'profile-sub':        'Personal nutrition goals',
    'profile-intro':      'Set your daily targets. Every dish then shows its share of your goals instead of a generic 2,000 kcal reference.',
    'preset-label':       'Quick Presets',
    'preset-lose':        'Lose',
    'preset-maintain':    'Maintain',
    'preset-gain':        'Gain',
    'goals-label':        'Daily Goals',
    'goal-kcal':          'Calories (kcal)',
    'goal-protein':       'Protein (g)',
    'goal-carbs':         'Carbohydrates (g)',
    'goal-fat':           'Fat (g)',
    'profile-save':       'Save Goals',
    'profile-saved':      'Goals saved',
    'profile-reset':      'Reset to standard reference',
    /* calorie calculator */
    'calc-title':         'Calorie Calculator',
    'calc-intro':         'Estimate your daily goals from your body data.',
    'calc-gender':        'Gender',
    'calc-male':          'Male',
    'calc-female':        'Female',
    'calc-age':           'Age',
    'calc-weight':        'Weight (kg)',
    'calc-height':        'Height (cm)',
    'calc-activity':      'Activity Level',
    'calc-act-sedentary': 'Sedentary (little or no exercise)',
    'calc-act-light':     'Light (1 to 3 days/week)',
    'calc-act-moderate':  'Moderate (3 to 5 days/week)',
    'calc-act-active':    'Active (6 to 7 days/week)',
    'calc-act-veryactive':'Very active (physical job)',
    'calc-goal':          'Goal',
    'calc-goal-lose50':   'Lose 0.5 kg per week',
    'calc-goal-lose25':   'Lose 0.25 kg per week',
    'calc-goal-maintain': 'Maintain weight',
    'calc-goal-gain25':   'Gain 0.25 kg per week',
    'calc-goal-gain50':   'Gain 0.5 kg per week',
    'calc-btn':           'Calculate My Goals',
    'calc-maintenance':   'Maintenance',
    'calc-target':        'Target',
    'calc-error':         'Please enter age, weight and height.',
    'calc-done':          'Goals calculated. Review and save.',
    /* diary page */
    'diary-title':        'My Diary',
    'diary-sub':          'What you have eaten',
    'period-today':       'Today',
    'period-week':        'This Week',
    'period-month':       'This Month',
    'diary-summary':      'Intake vs Goals',
    'diary-empty':        'No meals logged in this period. Open a dish and tap Log This Meal.',
    'diary-target':       'target',
    'diary-avg':          '/day avg',
    'diary-perday':       '/day',
    'diary-total':        'Total',
    'diary-days':         'days',
    'diary-meals':        'Logged Meals',
    'diary-clear':        'Clear all',
    'diary-confirm':      'Remove all logged meals?',
    'macro-kcal':         'Calories',
    /* dashboard */
    'dash-title':         'Operator Dashboard',
    'dash-sub':           'NutriScan 鲜码 · Admin View',
    'stat-scans-lbl':     'Scans today',
    'stat-dishes-lbl':    'Dishes active',
    'stat-canteens-lbl':  'Canteens',
    'dish-mgmt':          'Dish Management',
    'analytics-head':     "Today's Scan Analytics",
    'an-peak-lbl':        'Peak hour',
    'an-peak-val':        '11:30 to 12:30 (68 scans)',
    'an-top-lbl':         'Most scanned dish',
    'an-top-val':         '照烧鸡排饭 (55 scans)',
    'an-allerg-lbl':      'Allergen taps',
    'an-allerg-val':      'Dairy · Tree Nuts (most flagged)',
    'an-time-lbl':        'Avg. time on page',
    'an-time-val':        '18 seconds',
    'an-return-lbl':      'Return visitors',
    'an-return-val':      '34%',
    'actions-head':       'Actions',
    'add-dish-btn':       '+ Add New Dish',
    'dash-footer':        'NutriScan 鲜码 · Prototype v0.3 · Operator Interface',
    /* add-dish form */
    'form-title':         'Add New Dish',
    'form-id-head':       'Identification',
    'form-cn-lbl':        'Chinese Name *',
    'form-en-lbl':        'English Name *',
    'form-canteen-lbl':   'Canteen',
    'form-station-lbl':   'Station',
    'form-serving-lbl':   'Serving Size (grams) *',
    'form-nutr-head':     'Nutrition per Serving',
    'form-kcal-lbl':      'Calories (kcal) *',
    'form-protein-lbl':   'Protein (g) *',
    'form-carbs-lbl':     'Carbohydrates (g) *',
    'form-fat-lbl':       'Fat (g) *',
    'form-allerg-head':   'Allergens (tap to select)',
    'form-submit':        'Add Dish to Dashboard',
    'form-note':          'In the live system, a nutrition page is auto-generated from this form and goes live immediately.',
    'form-al-peanuts':    'Peanuts',  'form-al-soy':       'Soy',
    'form-al-gluten':     'Gluten',   'form-al-sesame':    'Sesame',
    'form-al-dairy':      'Dairy',    'form-al-shellfish': 'Shellfish',
    'form-al-eggs':       'Eggs',     'form-al-treenuts':  'Tree Nuts',
  },

  zh: {
    /* brand */
    'brand-sub':          '每位同学的营养透明化 · 北京大学',
    /* index */
    'scan-btn':           '扫描菜品二维码',
    'recent-label':       '最近扫描',
    'welcome-text':       '<strong>或浏览下方今日精选菜品。</strong>点击任意菜品查看完整营养信息、过敏原及宏量营养素详情。',
    'operator-btn-idx':   '食堂管理后台 →',
    'footer-text':        '由 NutriScan 鲜码 提供支持 · 原型 v0.3',
    /* today card + nav */
    'today-title':        '今日',
    'today-link':         '日记 ›',
    'today-empty':        '今日还没有记录',
    'profile-link-btn':   '我的目标与档案 →',
    /* dish card metas */
    'meta-ganbian':       '大豆 · 麸质',
    'section-catering':   '家园食堂',
    'section-yncoffee':   '燕南咖啡',
    'section-yannan':     '燕南食堂',
    'meta-yn-blackchoco': '乳制品 · 坚果 · 大豆',
    'meta-yn-nutbowl':    '乳制品 · 坚果',
    'meta-yn-mango':      '乳制品 · 素食',
    'meta-yan-thai':                '大豆',
    'meta-yan-curry-udon':          '大豆 · 麸质',
    'meta-yan-curry-cod':           '大豆 · 麸质',
    'meta-yan-curry-pork':          '大豆 · 麸质',
    'meta-yan-curry-chicken-udon':  '大豆 · 麸质',
    'meta-yan-pepper-egg':          '鸡蛋 · 大豆',
    'meta-yan-mushroom-egg':        '鸡蛋 · 大豆',
    'meta-yan-pork-egg':            '鸡蛋 · 大豆 · 麸质',
    'meta-yan-shrimp-egg':          '鸡蛋 · 大豆 · 贝类',
    'meta-yan-teriyaki':            '大豆 · 麸质',
    'meta-yan-kimchi-beef':         '大豆',
    'meta-yan-lemon-chicken':       '大豆 · 麸质',
    'meta-yan-cheese-ramen':        '乳制品 · 麸质 · 大豆',
    'meta-yan-bone-ramen':          '麸质 · 大豆',
    'meta-yan-takoyaki':            '麸质 · 鸡蛋 · 贝类 · 大豆',
    'meta-yan-bacon-pasta':         '麸质 · 乳制品 · 大豆',
    'meta-yan-shrimp-pasta':        '麸质 · 贝类 · 乳制品 · 大豆',
    'meta-yan-hell-ramen':          '大豆 · 麸质',
    'meta-yan-karaage':             '大豆 · 麸质',
    /* scanner */
    'scanner-title':      '扫描菜品二维码',
    'scanner-hint':       '将二维码对准框内',
    'scanner-status-def': '将摄像头对准 NutriScan 二维码',
    'scanner-cancel':     '取消',
    /* dish pages */
    'calories-header':    '热量',
    'macros-header':      '宏量营养素',
    'allergens-header':   '过敏原',
    'allergens-hint':     '点击标记',
    'daily-ref':          '基于您 {kcal} 千卡的每日目标',
    'daily-pct-suffix':   '% 每日量',
    'serving-label':      '份量',
    'macro-protein':      '蛋白质',
    'macro-carbs':        '碳水化合物',
    'macro-fat':          '脂肪',
    'daily-goal-suffix':  '% 每日目标',
    /* log meal */
    'log-btn':            '记录这一餐',
    'log-toast':          '已记录这一餐',
    /* allergens */
    'al-peanuts':         '花生',
    'al-soy':             '大豆',
    'al-sesame':          '芝麻',
    'al-gluten':          '麸质',
    'al-dairy':           '乳制品',
    'al-shellfish':       '贝类',
    'al-eggs':            '鸡蛋',
    'al-treenuts':        '坚果',
    'allergen-note':      '橙色 = 含有该过敏原。灰色 = 未检测到。共用厨房可能存在交叉污染。',
    /* disclaimer */
    'disc-title':         '估算数值',
    'disc-body':          '数据根据《中国食物成分表》（中国疾控中心，第6版）估算，实际数值因份量、烹饪方式及食材批次而有所差异。',
    /* vegetarian */
    'veg-badge':          '素食',
    'veg-note':           '本菜品不含肉类及海鲜。',
    /* shared */
    'operator-btn':       '食堂管理后台 →',
    'page-footer':        'NutriScan 鲜码 · 原型 v0.3',
    /* profile page */
    'profile-title':      '我的档案',
    'profile-sub':        '个人营养目标',
    'profile-intro':      '设置你的每日目标。之后每道菜都会按你的目标显示占比，而不是通用的 2,000 千卡参考值。',
    'preset-label':       '快速预设',
    'preset-lose':        '减脂',
    'preset-maintain':    '保持',
    'preset-gain':        '增肌',
    'goals-label':        '每日目标',
    'goal-kcal':          '热量（千卡）',
    'goal-protein':       '蛋白质（克）',
    'goal-carbs':         '碳水化合物（克）',
    'goal-fat':           '脂肪（克）',
    'profile-save':       '保存目标',
    'profile-saved':      '目标已保存',
    'profile-reset':      '恢复标准参考值',
    /* calorie calculator */
    'calc-title':         '热量计算器',
    'calc-intro':         '根据身体数据估算你的每日目标。',
    'calc-gender':        '性别',
    'calc-male':          '男',
    'calc-female':        '女',
    'calc-age':           '年龄',
    'calc-weight':        '体重（公斤）',
    'calc-height':        '身高（厘米）',
    'calc-activity':      '活动水平',
    'calc-act-sedentary': '久坐（几乎不运动）',
    'calc-act-light':     '轻度（每周 1 至 3 天）',
    'calc-act-moderate':  '中度（每周 3 至 5 天）',
    'calc-act-active':    '高度（每周 6 至 7 天）',
    'calc-act-veryactive':'非常高（体力工作）',
    'calc-goal':          '目标',
    'calc-goal-lose50':   '每周减重 0.5 公斤',
    'calc-goal-lose25':   '每周减重 0.25 公斤',
    'calc-goal-maintain': '保持体重',
    'calc-goal-gain25':   '每周增重 0.25 公斤',
    'calc-goal-gain50':   '每周增重 0.5 公斤',
    'calc-btn':           '计算我的目标',
    'calc-maintenance':   '维持热量',
    'calc-target':        '目标热量',
    'calc-error':         '请输入年龄、体重和身高。',
    'calc-done':          '目标已计算，请确认并保存。',
    /* diary page */
    'diary-title':        '我的日记',
    'diary-sub':          '你的饮食记录',
    'period-today':       '今日',
    'period-week':        '本周',
    'period-month':       '本月',
    'diary-summary':      '摄入与目标',
    'diary-empty':        '此期间还没有记录。打开任意菜品并点击“记录这一餐”。',
    'diary-target':       '目标',
    'diary-avg':          '日均',
    'diary-perday':       '/天',
    'diary-total':        '合计',
    'diary-days':         '天',
    'diary-meals':        '已记录餐食',
    'diary-clear':        '清空全部',
    'diary-confirm':      '删除所有已记录餐食？',
    'macro-kcal':         '热量',
    /* dashboard */
    'dash-title':         '运营管理后台',
    'dash-sub':           'NutriScan 鲜码 · 管理员界面',
    'stat-scans-lbl':     '今日扫描次数',
    'stat-dishes-lbl':    '在线菜品',
    'stat-canteens-lbl':  '食堂数量',
    'dish-mgmt':          '菜品管理',
    'analytics-head':     '今日扫描数据',
    'an-peak-lbl':        '高峰时段',
    'an-peak-val':        '11:30 至 12:30（68 次扫描）',
    'an-top-lbl':         '最多扫描菜品',
    'an-top-val':         '照烧鸡排饭（55 次）',
    'an-allerg-lbl':      '过敏原点击',
    'an-allerg-val':      '乳制品 · 坚果（最多标记）',
    'an-time-lbl':        '平均页面停留时间',
    'an-time-val':        '18 秒',
    'an-return-lbl':      '回访用户',
    'an-return-val':      '34%',
    'actions-head':       '操作',
    'add-dish-btn':       '+ 新增菜品',
    'dash-footer':        'NutriScan 鲜码 · 原型 v0.3 · 运营界面',
    /* add-dish form */
    'form-title':         '新增菜品',
    'form-id-head':       '菜品信息',
    'form-cn-lbl':        '中文菜名 *',
    'form-en-lbl':        '英文菜名 *',
    'form-canteen-lbl':   '所属食堂',
    'form-station-lbl':   '档口编号',
    'form-serving-lbl':   '每份克重（克）*',
    'form-nutr-head':     '每份营养成分',
    'form-kcal-lbl':      '热量（千卡）*',
    'form-protein-lbl':   '蛋白质（克）*',
    'form-carbs-lbl':     '碳水化合物（克）*',
    'form-fat-lbl':       '脂肪（克）*',
    'form-allerg-head':   '过敏原（点击选择）',
    'form-submit':        '添加菜品到管理后台',
    'form-note':          '在正式系统中，提交后将自动生成营养详情页并立即上线。',
    'form-al-peanuts':    '花生',   'form-al-soy':       '大豆',
    'form-al-gluten':     '麸质',   'form-al-sesame':    '芝麻',
    'form-al-dairy':      '乳制品', 'form-al-shellfish': '贝类',
    'form-al-eggs':       '鸡蛋',   'form-al-treenuts':  '坚果',
  }

};

/* ── Core functions ── */

function getCurrentLang() {
  return localStorage.getItem('nutriscan_lang') || 'en';
}

function t(key) {
  var lang = getCurrentLang();
  var s = STRINGS[lang];
  return (s && s[key] !== undefined) ? s[key] : (STRINGS['en'][key] || key);
}

function applyLang(lang) {
  var strings = STRINGS[lang] || STRINGS['en'];

  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var v = strings[el.dataset.i18n];
    if (v !== undefined) el.textContent = v;
  });

  document.querySelectorAll('[data-i18n-html]').forEach(function(el) {
    var v = strings[el.dataset.i18nHtml];
    if (v !== undefined) el.innerHTML = v;
  });

  document.querySelectorAll('.lang-btn').forEach(function(btn) {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  /* update html lang attribute */
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
}

function setLang(lang) {
  localStorage.setItem('nutriscan_lang', lang);
  applyLang(lang);
  /* refresh dynamic texts on dish/diary pages if function exists */
  if (typeof refreshDynamicTexts === 'function') refreshDynamicTexts();
}

document.addEventListener('DOMContentLoaded', function() {
  applyLang(getCurrentLang());
});
