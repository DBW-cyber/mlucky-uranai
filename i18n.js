// MLucky 強運占い i18n (ja / en / zh)。JA の占い文バンクは index.html 内の既存定数をそのまま使う。
const LANG_KEY = 'mlucky_uranai_lang';
function detectLang(){
  try { const v = localStorage.getItem(LANG_KEY); if (v === 'ja' || v === 'en' || v === 'zh') return v; } catch(e) {}
  const n = (navigator.language || 'ja').toLowerCase();
  if (n.indexOf('zh') === 0) return 'zh';
  if (n.indexOf('en') === 0) return 'en';
  return 'ja';
}
let LANG = detectLang();
const UI = {
  ja: { title:'MLucky 強運占い｜今日の12星座ランキング', h1:'強運占い', myH:'今日のあなたの運勢', rankH:'今日の12星座ランキング', weekH:'週間ランキング比較', top5H:'今月の強運 TOP5', benefitsH:'毎日運勢を見るメリット', methodH:'この占いの仕組み',
    overall:'総合運', love:'恋愛運', money:'金運', work:'仕事運', health:'健康運',
    luckyColor:'ラッキーカラー：', luckyItem:'ラッキーアイテム：', luckyNumber:'ラッキーナンバー：',
    shareBtn:'今日の運勢カードを画像でシェア', shareTitle:'MLucky 強運占い', shareCardTitle:'強運占い',
    signCol:'星座', today:'今日', aboutLink:'運営者情報・広告表記', privacyLink:'プライバシーポリシー',
    contact:'お問い合わせ：', copy:'© 2026 MLucky（エムラッキー）',
    benefitsClose:'占いの結果はエンターテインメントとしてお楽しみください。大切な決断は、ご自身の判断を大切に。',
    quietOpen:'今日は大きな星の角度が少ない、静かな一日です。' },
  en: { title:'MLucky Lucky Fortune | Today’s 12 Sign Ranking', h1:'Lucky Fortune', myH:'Your Fortune Today', rankH:'Today’s 12 Sign Ranking', weekH:'Weekly Ranking', top5H:'This Month’s Top 5', benefitsH:'Why Check Your Fortune Daily', methodH:'How This Fortune Works',
    overall:'Overall', love:'Love', money:'Money', work:'Work', health:'Health',
    luckyColor:'Lucky Color: ', luckyItem:'Lucky Item: ', luckyNumber:'Lucky Number: ',
    shareBtn:'Share today’s fortune card as an image', shareTitle:'MLucky Lucky Fortune', shareCardTitle:'Lucky Fortune',
    signCol:'Sign', today:'Today', aboutLink:'About & Advertising', privacyLink:'Privacy Policy',
    contact:'Contact: ', copy:'© 2026 MLucky',
    benefitsClose:'Please enjoy these readings as entertainment. For important decisions, trust your own judgment.',
    quietOpen:'A quiet day, with few strong angles from the stars. ' },
  zh: { title:'MLucky 强运占卜｜今日12星座排行榜', h1:'强运占卜', myH:'你今天的运势', rankH:'今日12星座排行榜', weekH:'一周排名对比', top5H:'本月强运 TOP5', benefitsH:'每天看运势的好处', methodH:'这个占卜的原理',
    overall:'综合运', love:'恋爱运', money:'财运', work:'事业运', health:'健康运',
    luckyColor:'幸运颜色：', luckyItem:'幸运物品：', luckyNumber:'幸运数字：',
    shareBtn:'把今日运势卡生成图片分享', shareTitle:'MLucky 强运占卜', shareCardTitle:'强运占卜',
    signCol:'星座', today:'今天', aboutLink:'运营者信息・广告标注', privacyLink:'隐私政策',
    contact:'联系方式：', copy:'© 2026 MLucky',
    benefitsClose:'占卜结果仅供娱乐参考。重要的决定，请相信你自己的判断。',
    quietOpen:'今天星星的角度不多，是安静的一天。' }
};
function U(){ return UI[LANG]; }
const SIGN_NAMES = {
  en: ['Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius','Capricorn','Aquarius','Pisces'],
  zh: ['白羊座','金牛座','双子座','巨蟹座','狮子座','处女座','天秤座','天蝎座','射手座','摩羯座','水瓶座','双鱼座']
};
const SIGN_PERIODS_EN = ['Mar 21 – Apr 19','Apr 20 – May 20','May 21 – Jun 21','Jun 22 – Jul 22','Jul 23 – Aug 22','Aug 23 – Sep 22','Sep 23 – Oct 23','Oct 24 – Nov 22','Nov 23 – Dec 21','Dec 22 – Jan 19','Jan 20 – Feb 18','Feb 19 – Mar 20'];
const WD_L = { ja:['日','月','火','水','木','金','土'], en:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'], zh:['周日','周一','周二','周三','周四','周五','周六'] };
const MONTHS_EN = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
function signName(i){ return LANG === 'ja' ? SIGNS[i].name : SIGN_NAMES[LANG][i]; }
function signPeriod(i){ return LANG === 'en' ? SIGN_PERIODS_EN[i] : SIGNS[i].period; }
function fmtDate(d){
  const m = d.getMonth() + 1, dd = d.getDate(), w = WD_L[LANG][d.getDay()];
  if (LANG === 'en') return MONTHS_EN[d.getMonth()] + ' ' + dd + ' (' + w + ')';
  return m + '月' + dd + '日（' + w + '）';
}
function fmtShort(d){
  const w = WD_L[LANG][d.getDay()];
  if (LANG === 'en') return (d.getMonth() + 1) + '/' + d.getDate() + ' (' + w + ')';
  return (d.getMonth() + 1) + '/' + d.getDate() + '（' + w + '）';
}
function rankStr(n){
  if (LANG === 'en') return 'No. ' + n;
  if (LANG === 'zh') return '第' + n + '名';
  return '第' + n + '位';
}
function avgRankStr(m, a){
  if (LANG === 'en') return 'Avg. rank in ' + MONTHS_EN[m - 1] + ': ' + a;
  if (LANG === 'zh') return m + '月平均排名 ' + a + ' 名';
  return m + '月の平均順位 ' + a + ' 位';
}

const BANKS_EN = {
  THEME: {
    Moon:    { good:['The Moon lights your sign gently today. Your mind settles, and it is easy to move in step with the people around you.','The Moon is on your side and your intuition is sharp. Trust the small hunches and quiet “this feels right” moments.'],
               hard:['The Moon stirs your feelings today. Do not let the waves decide for you — putting choices off a little is the wise move.','Tension from the Moon is strong. If you feel sleepy or heavy, that is a signal from your body. Take it easy.'] },
    Sun:     { good:['The Sun is in harmony with your sign. Being yourself, just as you are, lifts your luck today.','A tailwind from the Sun. Speaking up and stepping forward lead to good results today.'],
               hard:['A tight angle from the Sun can make effort spin its wheels. Do not rush results — use today to steady your base.','The Sun’s tension can stir pride today. Not competing, and leaving a little room, will protect you.'] },
    Mercury: { good:['Mercury makes a smooth angle. Words carry well today — good for messages, talks, and learning.','Mercury speeds up your thinking. A fine chance to clear the messages and paperwork piling up.'],
               hard:['Tension with Mercury can cause crossed words. Re-read important messages once more before sending.','Mercury tugs at your sleeve — mix-ups and forgotten things are likely. Writing plans down will help.'] },
    Venus:   { good:['Venus smiles on your sign. Connections feel warm today, in love and in friendship alike.','Venus brings out your charm. Say yes to invitations — a happy meeting may be waiting.'],
               hard:['Tension with Venus can cause small mismatches with people. Watch sweet words and impulse buying.','Venus sits at a testing angle. Do not assume how others feel — check gently as you go.'] },
    Mars:    { good:['Mars lends you its strength. Energy rises, and courage comes to take the step you were weighing.','A tailwind from Mars fills you with drive. Moving your body — exercise or physical work — calls in luck.'],
               hard:['Tension with Mars can spark irritation and clashes. The more you hurry, the longer the way. Breathe.','Mars stimulates strongly today. Arguments only cost you. Let go of winning and losing.'] },
    Jupiter: { good:['Jupiter sends a big tailwind. Chances widen today — listen to invitations and new ideas.','Jupiter’s blessing arrives. Learning and challenges bear fruit, and help from others is near.'],
               hard:['Tension with Jupiter can inflate expectations. Put off big promises and big spending today.','Jupiter’s angle invites too much optimism. Before “it will work out”, add one careful check.'] },
    Saturn:  { good:['Saturn supports you quietly. What you have built up, step by step, starts to take shape.','Harmony with Saturn lets steady effort be seen. Keeping promises deepens trust today.'],
               hard:['A trial from Saturn may weigh on the day. Facing duties, not fleeing them, makes tomorrow lighter.','Saturn’s tension slows things down. Do not chase perfect — move surely, within what you can do.'] }
  },
  HOUSE_TXT: [
    'The Moon is in your own sign — facing your feelings is today’s theme.',
    'The Moon is in the house of money and belongings. Tidying your wallet and space brings calm.',
    'The Moon is in the house of words and learning. A casual chat nearby may hold a hint.',
    'The Moon is in the house of home and family. Time at home, or with family, restores you.',
    'The Moon is in the house of fun and love. Time on what you love is today’s recharge.',
    'The Moon is in the house of work and health. Good planning and care for your body set the day right.',
    'The Moon is in the house of partners. Handling one-to-one ties with care is today’s key.',
    'The Moon is in the house of deep bonds and sharing. Leaning on others, and trusting them, matters today.',
    'The Moon is in the house of learning and far places. Touching an unknown world widens your view.',
    'The Moon is in the house of society and work. Fulfilling your role gathers trust today.',
    'The Moon is in the house of friends and the future. A happy story may be waiting among friends.',
    'The Moon is in the house of rest and the inner self. Securing time alone becomes tomorrow’s strength.'
  ],
  CLOSE_TXT: {
    high:['The flow is with you. Take one step forward today.','A tailwind day. A good time to start the thing on your mind.'],
    mid:['A calm day. Treasure your usual pace.','No big waves today. Tidying small things around you settles the mind.'],
    low:['A day to guard, not push. Rest early and do not overdo it.','Slowing down is today’s right answer. Leave big decisions for tomorrow.']
  },
  ADV_ASTRO: {
    Moon:    { good:['Trust your intuition today.','A calm heart calls in luck.','A day to notice small happiness.','Time with family and close ones gives strength.'], hard:['Postponing decisions is the right call.','Early rest is today’s best luck move.','Feelings run high — take a deep breath.','Do not pack your schedule too full.'] },
    Sun:     { good:['Being confidently yourself is the key.','Stepping forward brings a tailwind.','Speaking up leads to good results.','A fine chance to show what you do best.'], hard:['Leaving room, not competing, protects you.','Use today to steady your base.','Set pride aside for today — it is the right move.','Supporting others brings more luck than standing out.'] },
    Mercury: { good:['Reply early today — it brings luck.','A tailwind for learning.','Notes and lists will help your work.','Morning is best for negotiations.'], hard:['Re-read once more before you send.','Write plans down to feel safe.','For big replies, sleeping on it helps.','Listen carefully to avoid mix-ups.'] },
    Venus:   { good:['Say yes to invitations today.','Connections grow warmly today.','Dressing well boosts your luck.','Put thanks into words to deepen ties.'], hard:['Careful with impulse buys and sweet words.','Check how others feel as you go.','Avoid lending and borrowing today.','Breathe through jealousy and let it pass.'] },
    Mars:    { good:['When in doubt, moving is the answer.','Moving your body calls in luck.','Finish key tasks in the morning.','Sweating it out in sport sets you right.'], hard:['A deep breath keeps clashes away.','The more you hurry, the longer the way.','Drive with extra care today.','Do not rush to conclusions.'] },
    Jupiter: { good:['Listen to new ideas today.','Challenges bear fruit easily today.','Investing in learning pays off.','Listen to the advice of elders.'], hard:['Put off big promises today.','Add one check before “it will work out”.','Pause once before spending.','Keep promises small and safe today.'] },
    Saturn:  { good:['Steady work takes shape today.','Keeping promises deepens trust.','Meeting deadlines wins regard.','Tidying and sorting set your luck right.'], hard:['Facing things head-on is the shortcut.','Choose certain over perfect.','Do not carry it all — ask someone.','One thing at a time is the shortcut.'] }
  },
  ADV_QUIET: {
    high:['A quiet tailwind day. Enjoy what you love.','A calm, good day. Spend it with a smile.','Gentle luck today. Try saying yes to an invitation.','A good flow today. Reach for what draws you.','A quiet but fruitful day.'],
    mid:['A calm day. Your usual pace is fine.','No big waves. Tidy the things around you.','A quiet day. Rest with a warm drink.','Spend an ordinary day with care.','A little tidying settles the mind.'],
    low:['A quiet day. Rest your body without pushing.','A day to recharge. Rest early.','Slowing down is right today. Big decisions tomorrow.','Staying warm is today’s self-care.','All but urgent messages can wait until tomorrow.']
  },
  HOUSE_ADV: ['Treasure your own feelings.','Tidying your wallet brings calm.','A casual chat holds a hint.','Time with family gives strength.','Enjoy what you love.','Caring for your body is today’s key.','Handle one-to-one ties with care.','Leaning on others matters too.','Touch an unknown world today.','Fulfilling your role gathers trust.','Ties with friends give strength.','Recharge with time alone.'],
  PLANET_LUCKY: {
    Moon:    { number: 2, colors: [['Silver','#c9ccd6'], ['White','#f2f2f2']], items: ['Houseplant','Herbal tea','Silver accessory','Cushion'] },
    Sun:     { number: 1, colors: [['Gold','#d4af37'], ['Orange','#e08a3c']], items: ['Gold accessory','Sunglasses','Sunflower','Alarm clock'] },
    Mercury: { number: 5, colors: [['Yellow','#e3c94f'], ['Mint green','#8fd0b2']], items: ['Planner','Fountain pen','Paperback book','Phone case'] },
    Venus:   { number: 6, colors: [['Pink','#e8a7bf'], ['Green','#7fb069']], items: ['Perfume','Bouquet','Scarf','Chocolate'] },
    Mars:    { number: 9, colors: [['Red','#c0392b'], ['Bordeaux','#7b2d43']], items: ['Sports towel','Sneakers','Red pouch','Exercise band'] },
    Jupiter: { number: 3, colors: [['Purple','#7d5ba6'], ['Navy','#33507a']], items: ['Long wallet','Hardcover book','Travel pouch','Tea tin'] },
    Saturn:  { number: 8, colors: [['Black','#2b2b30'], ['Brown','#8a5a33']], items: ['Wristwatch','Leather key case','Glasses','Classic umbrella'] }
  }
};

const BANKS_ZH = {
  THEME: {
    Moon:    { good:['月亮温柔地照着你的星座。心情平稳，和周围人的节奏也容易合拍。','月亮站在你这边，直觉很敏锐。相信那些小小的预感和「感觉不错」的瞬间。'],
               hard:['今天月亮容易搅动情绪。别让情绪的浪带着你走，决定稍微往后放一放更明智。','来自月亮的张力较强。如果觉得困倦或乏力，那是身体的信号，别勉强自己。'] },
    Sun:     { good:['太阳与你的星座和谐相处。做自己，就是今天推高运势的方法。','太阳吹来顺风。站出来、说出想法，都会带来好结果。'],
               hard:['太阳的角度偏紧，努力容易空转。别急着要成果，今天适合打稳基础。','太阳的张力容易刺激自尊心。今天不与人争高下，留一点余地反而护住你。'] },
    Mercury: { good:['水星角度顺畅。话容易传达，联系、协商和学习都有顺风。','水星助你头脑转得快。是清理积压消息和文书的好时机。'],
               hard:['与水星的张力容易造成话语误会。重要消息发送前再读一遍。','水星在扯后腿，容易会错意、忘东西。把安排记下来更安心。'] },
    Venus:   { good:['金星向你的星座微笑。缘分温暖，恋爱与人际都是好日子。','金星的和谐衬托你的魅力。邀请不妨积极回应，也许有开心的相遇。'],
               hard:['与金星的张力容易让人际出现小摩擦。甜言蜜语和冲动购物要小心。','金星处在考验的角度。别替对方下结论，一边确认一边推进更稳妥。'] },
    Mars:    { good:['火星把力量借给你。行动力上升，犹豫的事也有勇气迈出一步。','火星的顺风让你干劲满满。运动或体力活这类动身体的事会招来好运。'],
               hard:['与火星的张力容易引发烦躁和冲突。越急越绕远路，别忘了深呼吸。','火星刺激较强。争吵只会吃亏，不执着于输赢很重要。'] },
    Jupiter: { good:['木星送来大大的顺风。机会容易展开，邀请和新话题不妨听一听。','木星的恩惠到达。学习和挑战容易有成果，也容易得到周围的帮助。'],
               hard:['与木星的张力容易让期待膨胀过头。大承诺和大额支出，今天先缓一缓更明智。','木星的角度让人过于乐观。别凭「总会有办法」推进，加一步确认。'] },
    Saturn:  { good:['土星静静地支撑着你。一点点积累的东西，开始看得见形状了。','与土星的和谐让踏实的努力容易被看见。守约的样子会加深信任。'],
               hard:['可能感到来自土星的考验。被责任和截止日期追赶时，不逃避地面对，会换来明天的轻松。','土星的张力让事情推进沉重。别追求完美，在能做到的范围里稳稳推进。'] }
  },
  HOUSE_TXT: [
    '月亮就在你的星座里，和自己的心情相对，是今天的主题。',
    '月亮在金钱与物品的房间。整理钱包和身边杂物，心会安定下来。',
    '月亮在言语与学习的房间。身边人不经意的闲聊里可能有提示。',
    '月亮在家庭的房间。整理住处、和家人相处，会给你力量。',
    '月亮在娱乐与恋爱的房间。把时间花在喜欢的事上，就是今天的充电。',
    '月亮在工作与健康的房间。安排好步骤、爱护身体，运势也会顺。',
    '月亮在伴侣的房间。用心对待一对一的关系，是今天的关键。',
    '月亮在深层羁绊与共享的房间。依靠别人、把事情托付出去，今天很重要。',
    '月亮在学习与远方的房间。接触陌生的世界，会拓宽你的视野。',
    '月亮在社会与工作的房间。尽好自己角色的样子，会赢得周围的信任。',
    '月亮在朋友与未来的房间。朋友的联系里可能有开心的消息。',
    '月亮在休息与内心的房间。留出独处的时间，会成为明天的力量。'
  ],
  CLOSE_TXT: {
    high:['顺风正站在你这边。今天迈出一步试试吧。','顺风的一天。适合开始那件一直惦记的事。'],
    mid:['平稳的一天。珍惜平时的节奏就好。','没有大波浪的一天。整理身边的小事，心会安定下来。'],
    low:['今天是守的日子。别勉强，早点休息。','放慢节奏是今天的正解。重要的决定留到明天。']
  },
  ADV_ASTRO: {
    Moon:    { good:['相信直觉没问题。','平静的心情会招来好运。','能注意到小幸福的一天。','和家人、身边人相处的时间给你力量。'], hard:['决定延到明天是对的。','早点休息是最好的开运。','情绪起伏较大。深呼吸一下。','安排别排得太满。'] },
    Sun:     { good:['堂堂正正做自己是关键。','站到人前会带来顺风。','说出想法会带来好结果。','是展示拿手本领的好机会。'], hard:['不争高下的余地会护住你。','今天用来打稳基础吧。','把自尊先放一边是对的。','比起出头，做支撑的一方更吉。'] },
    Mercury: { good:['消息早点回，会带来好运。','学习有顺风。','记事本和清单会帮上忙。','协商的事上午办更合适。'], hard:['发送前再读一遍。','把安排记下来更安心。','重要的回复放一晚再发也行。','注意别听错话。'] },
    Venus:   { good:['邀请积极回应试试。','人缘温暖生长的一天。','穿得好看会助推运势。','把感谢说出口，缘分会更深。'], hard:['小心冲动购物和甜言蜜语。','对方的心情一边确认一边推进。','借钱借物今天先避开。','嫉妒心用深呼吸冲走吧。'] },
    Mars:    { good:['犹豫时，动起来是对的。','动身体会招来好运。','重要的事上午办完更吉。','运动出出汗会整个人顺起来。'], hard:['深呼吸能让冲突远离。','越急越绕远路的一天。','开车请格外小心。','别急着下结论很重要。'] },
    Jupiter: { good:['新话题不妨听一听。','挑战容易有成果的一天。','为学习投资会有回报。','听听年长者的建议。'], hard:['大承诺今天先缓一缓。','「总会有办法」之前先加一步确认。','支出先停一下确认再说。','承诺定小一点更稳妥。'] },
    Saturn:  { good:['踏踏实实积累会成形的一天。','守约的样子加深信任。','守时的态度会被看见。','收拾整理能理顺运势。'], hard:['不逃避地面对是近路。','比起完美，先选稳妥。','别一个人扛，找人商量。','一件件处理是近路。'] }
  },
  ADV_QUIET: {
    high:['安静的顺风日。享受喜欢的事吧。','没有风浪的好日子。带着笑容过吧。','平稳的好运日。邀请不妨答应看看。','运势顺畅的日子。向惦记的事伸出手吧。','安静却充实的一天。'],
    mid:['平稳的一天。按平时的节奏就好。','没有大波浪。整理一下身边吧。','安静的一天。喝杯热饮歇一歇。','把平常的日子认真过。','小小的收拾能安定心情。'],
    low:['安静的一天。别勉强，让身体休息。','今天是充电日。早点休息吧。','放慢节奏是对的。重要决定留到明天。','穿暖和一点是今天的养生。','除了重要联系，其余留到明天也没关系。']
  },
  HOUSE_ADV: ['珍惜自己的心情。','整理钱包，心会安定。','不经意的闲聊里有提示。','和家人相处的时间给你力量。','享受喜欢的事吧。','爱护身体是今天的关键。','用心对待一对一的关系。','依靠别人也很重要。','接触一下陌生的世界吧。','尽好角色的样子赢得信任。','朋友的联系给你力量。','用独处时间充电吧。'],
  PLANET_LUCKY: {
    Moon:    { number: 2, colors: [['银色','#c9ccd6'], ['白色','#f2f2f2']], items: ['绿植','花草茶','银饰','靠垫'] },
    Sun:     { number: 1, colors: [['金色','#d4af37'], ['橙色','#e08a3c']], items: ['金饰','太阳镜','向日葵','闹钟'] },
    Mercury: { number: 5, colors: [['黄色','#e3c94f'], ['薄荷绿','#8fd0b2']], items: ['手账','钢笔','口袋书','手机壳'] },
    Venus:   { number: 6, colors: [['粉色','#e8a7bf'], ['绿色','#7fb069']], items: ['香水','花束','围巾','巧克力'] },
    Mars:    { number: 9, colors: [['红色','#c0392b'], ['酒红色','#7b2d43']], items: ['运动毛巾','运动鞋','红色小包','健身带'] },
    Jupiter: { number: 3, colors: [['紫色','#7d5ba6'], ['藏青色','#33507a']], items: ['长钱包','精装书','旅行收纳包','红茶罐'] },
    Saturn:  { number: 8, colors: [['黑色','#2b2b30'], ['棕色','#8a5a33']], items: ['手表','皮质钥匙包','眼镜','经典款雨伞'] }
  }
};

const BENEFITS_EN = [
  { work:{ lead:'Today is Sunday, the Sun’s day. Even on a working Sunday, the Sun’s theme — being yourself — still holds.', pts:[
      'A compass before you head out: A morning check sets your mindset for Sunday work or errands. On a flowing day, you can shine like the lead.',
      'The Sun is the star of expression: If you have to appear before people, your overall luck tells you whether the wind is with you.',
      'Switching gears: On a working Sunday, a one-minute morning check becomes the switch that says “let’s do this today”.'] },
    off:{ lead:'Today is Sunday, the Sun’s day — the day of the week most about shining as yourself.', pts:[
      'You are the lead: Knowing today’s flow lets you design the day as “a day starring you”, not just time passing by.',
      'The Sun rules vitality and expression: On high-luck days, meeting people and going out have a tailwind. On low days, you can switch to a recharge day.',
      'A small ritual: Checking your fortune in the morning becomes a tiny ritual that switches your rhythm between days off and workdays.'] } },
  { work:{ lead:'Today is Monday, the Moon’s day — a day to settle your feelings and rhythm, and start the week.', pts:[
      'A forecast for your heart: The Moon rules feelings. A morning check shows today’s emotional weather, so on shaky days you can brace early.',
      'A compass for the week: Just wearing your lucky color becomes a small switch — “let’s do this week, too”.',
      'Permission to ease off: On low-luck days, matching the Moon’s rhythm and slowing down is the right answer. You can see how to pace your effort.'] },
    off:{ lead:'Today is Monday but a day off — the Moon’s day. A day whose theme is gently settling your feelings.', pts:[
      'The heart’s weather on a day off: The Moon rules feelings. Your reading shows how your mood may run today, so you can treasure your own and your family’s pace.',
      'A guide for recharging: On low-luck days you can simply decide “today is for rest”. Rest matched to the Moon’s rhythm becomes tomorrow’s strength.',
      'A seed of small pleasure: Your lucky item gives you one more reason to choose a small delight for the day off.'] } },
  { work:{ lead:'Today is Tuesday, Mars’ day — a day of drive and motivation.', pts:[
      'Igniting your drive: Mars is the star of action. Knowing “today is a day to advance” lights the step you were hesitating on.',
      'Preventing clashes: Mars also rules irritation. If you know a tense day is coming, one deep breath can dodge an argument in a meeting or negotiation.',
      'A tailwind for moving: On Mars’ day, exercise and physical work call in luck. Even walking a little more on your commute changes the flow.'] },
    off:{ lead:'Today is Tuesday but a day off — Mars’ day. A day whose theme is moving your body.', pts:[
      'Ignition on a day off: Mars is the star of action. Knowing “today is a day to advance” sets fire to the errands and tidying that piled up.',
      'A tailwind for sport: On Mars’ day, exercise calls in luck. Your reading gives you one more reason to get outside.',
      'Preventing clashes: Mars also rules irritation. On tense days, watch for arguments with family. Knowing ahead helps you avoid them.'] } },
  { work:{ lead:'Today is Wednesday, Mercury’s day — a day of words, learning, and messages.', pts:[
      'Avoiding crossed wires: Mercury rules communication. Knowing a tense day lets you take the extra moment to re-read an important message.',
      'A chance to learn: When Mercury runs smoothly, study and research have a tailwind. Your fortune tells you “today is a learning day”.',
      'Resetting at the midpoint: Wednesday is the week’s middle. A reading lets you re-plan the second half.'] },
    off:{ lead:'Today is Wednesday but a day off — Mercury’s day. A day of words and learning.', pts:[
      'Avoiding crossed messages: Mercury is the star of words. For promises on a day off, knowing a tense day lets you add one confirming step.',
      'A chance for learning and hobbies: When Mercury runs smoothly, reading and research have a tailwind. Your fortune says “today is a curiosity day”.',
      'A hint for a small trip: Mercury also rules movement. Your lucky item adds color to a plan for a nearby outing.'] } },
  { work:{ lead:'Today is Thursday, Jupiter’s day — a day of expansion and chances.', pts:[
      'Noticing chances: Jupiter is the star of luck and growth. Knowing a tailwind day lets you welcome invitations and new ideas.',
      'Adjusting expectations: Jupiter also rules optimism. On days when expectations swell, your fortune offers a brake: “add one check”.',
      'Sowing seeds for the future: Jupiter’s day suits learning and investing. Today’s fortune backs that push.'] },
    off:{ lead:'Today is Thursday but a day off — Jupiter’s day. A day of expansion and abundance.', pts:[
      'A tailwind for going out: Jupiter rules growth and travel. Knowing a lucky day makes a slightly longer trip feel easier to try.',
      'Sowing seeds of experience: Jupiter’s day suits new experiences. Your fortune nudges you: “today is a day to widen”.',
      'Adjusting expectations: Fun plans inflate expectations. A reading helps you relax your shoulders and simply enjoy.'] } },
  { work:{ lead:'Today is Friday, Venus’ day — a day of love, fun, and beauty.', pts:[
      'A bridge to the weekend: Venus is the star of love and ties. Friday’s fortune previews the evening and the weekend’s social flow.',
      'A tailwind for people: When Venus runs smoothly, negotiations and requests also flow warmly — a final push to close the week.',
      'A brake on impulse buys: On tense Venus days, watch your spending. A reading gives you a reason to tighten the purse strings.'] },
    off:{ lead:'Today is Friday but a day off — Venus’ day. A day of love, fun, and beauty.', pts:[
      'A preview of love and ties: Venus is the star of love. If you have a date or plans to meet someone, your fortune sets your mindset.',
      'A guide for treats: Venus also rules pleasure. Your lucky item adds a way to choose a small luxury for the day.',
      'A tailwind for dressing up: On Venus’ day, grooming calls in luck. Your lucky color gives you one more reason to wear it.'] } },
  { work:{ lead:'Today is Saturday but a workday — Saturn’s day. A day of building up and responsibility.', pts:[
      'A tailwind for finishing: Saturn is the star of steady accumulation. Framing Saturday’s work as “a day to put things in order” makes it flow.',
      'Checking promises and trust: Saturn also rules responsibility. On a day with an important promise, a reading sets your mindset.',
      'Permission to ease off: On low days, slowing down is the Saturn answer. You can see how to pace your effort.'] },
    off:{ lead:'Today is Saturday, Saturn’s day — a day for looking back and building foundations.', pts:[
      'Finishing the week: Saturn is the star of accumulation. Saturday’s fortune backs the “putting in order” work — tidying and sorting.',
      'Promises with family: Saturn also rules responsibility and bonds. On a day with important plans, a reading sets your mindset.',
      'Foundations for next week: On low days, resting without pushing is the Saturn answer. Rest, too, is part of building foundations.'] } }
];

const BENEFITS_ZH = [
  { work:{ lead:'今天是周日，太阳之日。就算要上班或办事的周日，太阳的主题「做自己」也一样成立。', pts:[
      '出门前的罗盘：早上看一眼运势，就能为周日的工作或事情做好心理准备。运势顺的日子，能像主角一样发挥。',
      '太阳是表现之星：有要在人前露面的事时，综合运顺不顺就是判断材料。',
      '切换节奏的开关：越是上班的周日，早上1分钟的确认越能成为「今天也干劲满满」的开关。'] },
    off:{ lead:'今天是周日，太阳之日。一周里最以「做自己、发光」为主题的一天。', pts:[
      '主角是你自己：知道今天的运势走向，就能把休息日设计成「自己当主角的一天」，而不是糊里糊涂地过去。',
      '太阳主管活力与表现：综合运高的日子，见人、出门都有顺风；低的日子，可以果断切换成充电日。',
      '切换节奏的小仪式：早上看运势的习惯，会成为切换休息日与工作日节奏的小仪式。'] } },
  { work:{ lead:'今天是周一，月亮之日。整理心情和节奏、开始新一周的一天。', pts:[
      '心情的天气预报：月亮主管情绪。早上看运势，就能预知今天的「心情天气」，越是容易波动的日子越能提前做好心理准备。',
      '一周开始的罗盘：哪怕只是戴上幸运颜色，也能成为「这周也加油」的小开关。',
      '不勉强的判断：运势偏低的日子，配合月亮的节奏放慢脚步就是正解。努力的松紧会看得更清楚。'] },
    off:{ lead:'今天是周一但休息，月亮之日。以慢慢整理心情为主题的一天。', pts:[
      '休息日的心情天气：月亮主管情绪。看运势能预知今天自己的心情走向，更珍惜家人和自己的节奏。',
      '充电的参考：运势偏低的日子可以干脆认定「今天就是休息日」。配合月亮节奏的休息，会成为明天的力量。',
      '小快乐的种子：以幸运物品为提示，为休息日选一份小小的快乐，多了一个理由。'] } },
  { work:{ lead:'今天是周二，火星之日。行动力和干劲是主题的一天。', pts:[
      '点燃干劲：火星是行动之星。知道「今天是进攻日」，犹豫的那一步就会被点着。',
      '预防冲突：火星也主管烦躁。提前知道是张力强的日子，开会或协商时一个深呼吸就能避开争吵。',
      '动身体的顺风：火星之日，运动和体力活会招来好运。通勤路上多走一点，运势也会变。'] },
    off:{ lead:'今天是周二但休息，火星之日。以动身体为主题的一天。', pts:[
      '休息日的点火：火星是行动之星。知道「今天是进攻日」，积压的事情和收拾就会一下子被点着。',
      '运动的顺风：火星之日运动招好运。看运势，会多一个出门的理由。',
      '预防冲突：火星也主管烦躁。张力强的日子注意和家人的口角。提前知道就能避开。'] } },
  { work:{ lead:'今天是周三，水星之日。言语、学习、联系是主题的一天。', pts:[
      '防止误会：水星主管沟通。知道是张力的日子，就能为重要消息多留一道重读的功夫。',
      '学习的好时机：水星顺畅的日子，学习和收集信息有顺风。运势会告诉你「今天是学习日」。',
      '折返点重新整顿：周三是一周的中间。看运势，能重新安排后半周的步骤。'] },
    off:{ lead:'今天是周三但休息，水星之日。言语和学习是主题的一天。', pts:[
      '防止联系误会：水星是言语之星。休息日的约定更要紧，知道是张力的日子就能多一道确认。',
      '学习与爱好的好时机：水星顺畅的日子，读书和查资料有顺风。运势会告诉你「今天是好奇心之日」。',
      '小旅行的提示：水星也主管移动。幸运物品会为近处出游的计划添一份色彩。'] } },
  { work:{ lead:'今天是周四，木星之日。扩展与机会是主题的一天。', pts:[
      '注意到机会：木星是幸运与扩展之星。知道是顺风的日子，就能积极回应邀请和新话题。',
      '调整期待：木星也主管乐观。期待容易膨胀过头的日子，运势会给你一个「加一步确认」的刹车。',
      '为未来播种：木星之日适合学习和投资。今天的运势会为此推一把。'] },
    off:{ lead:'今天是周四但休息，木星之日。扩展与丰盛是主题的一天。', pts:[
      '出门的顺风：木星是扩展与旅行之星。知道是运势好的日子，稍微远一点的出游计划也能更积极。',
      '播种体验的种子：木星之日适合新体验。运势会推你一把：「今天是扩展的日子」。',
      '调整期待：越是开心的安排期待越容易膨胀。看了运势，就能放松肩膀去享受。'] } },
  { work:{ lead:'今天是周五，金星之日。恋爱、快乐、美是主题的一天。', pts:[
      '通往周末的桥：金星是爱与缘分之星。周五的运势，是当晚和周末人际交往的预告。',
      '人际的顺风：金星顺畅的日子，协商和拜托人的事也有温暖的顺风。是为一周收尾的助推。',
      '冲动消费的刹车：金星张力强的日子注意散财。看运势，就多了一个勒紧钱包的理由。'] },
    off:{ lead:'今天是周五但休息，金星之日。恋爱、快乐、美是主题的一天。', pts:[
      '爱与缘分的预告：金星是爱之星。有约会或见人安排的日子，运势会给你心理准备。',
      '犒劳自己的参考：金星也主管快乐。以幸运物品为提示，为休息日选一份小奢侈，多一份乐趣。',
      '打扮的顺风：金星之日，仪容会招来好运。多了一个穿上幸运颜色的理由。'] } },
  { work:{ lead:'今天是周六但要上班，土星之日。积累与责任是主题的一天。', pts:[
      '收尾的顺风：土星是积累之星。把周六的工作或事情定位成「整理之日」，看了运势会更顺手。',
      '确认约定与信任：土星也是责任之星。有重要约定的日子，看运势能做好心理准备。',
      '不勉强的判断：偏低的日子放慢节奏是土星式的正解。努力的松紧会看得更清楚。'] },
    off:{ lead:'今天是周六，土星之日。回顾与打基础是主题的一天。', pts:[
      '一周的收尾：土星是积累之星。周六的运势，是收拾、整理这类「理顺事情」的顺风。',
      '与家人的约定：土星也是责任与羁绊之星。有重要安排的日子，看运势能做好心理准备。',
      '为下周打基础：偏低的日子不勉强地休息是土星式的正解。会明白休息也是打基础的一部分。'] } }
];

const METHOD_T = {
  ja: [
    'このサイトの運勢は、くじを引くような偶然でも、決まった順番の使い回しでもありません。土台にあるのは、西洋占星術に古くからある「トランジット」という考え方です。その日の空で、月と太陽、水星、金星、火星、木星、土星の七つの天体が実際にどこにいて、あなたの星座とどんな角度を結んでいるか。その結びつきの強さを一つひとつ点数に換え、並べ直したものが、このランキングです。',
    '天体の位置は、公開されている天文計算の仕組み（Astronomy Engine）を用いて、あなたの端末の中で、その日の空のままに計算しています。角度の種類や近さ、天体ごとの重みづけといった採点の決まりは、占星術の伝統に沿って定めた固定のものです。ラッキーカラーやラッキーアイテムも、その日に最も強く働く天体に結びついた、伝統的な対応から引いています。計算の考え方は「運営者情報・広告表記」のページにも記しました。仕組みは、隠さないことにしています。',
    'もちろん、星の並びが人の一生を決めるわけではありません。占いは科学の証明を受けた知識ではなく、長い時間をかけて人の暮らしに寄り添ってきた、ものの見方の一つです。だからこそ、出どころの分からない断定ではなく、仕組みの見える計算を選びました。結果は鵜呑みにせず、朝の身支度のついでに眺める、小さな鏡としてお使いください。良い日は背中を押す合図に、静かな日は休む口実に。最後に決めるのは、いつもあなた自身です。'
  ],
  en: [
    'The fortunes on this site are neither a lottery of chance nor a fixed rotation. They rest on “transits”, an idea long used in Western astrology: where the Moon, the Sun, Mercury, Venus, Mars, Jupiter and Saturn actually are in today’s sky, and what angles they form with your sign. This ranking turns the strength of each of those connections into points, and lines them up in order.',
    'The positions of the bodies are calculated inside your own device, from the sky of the day itself, using a published astronomy library (Astronomy Engine). The scoring rules — the kinds of angles, their closeness, and the weight of each body — are fixed rules drawn from the astrological tradition. Lucky colors and items, too, come from the traditional correspondences of the body that works most strongly that day. The thinking behind the calculation is also written on the About page. We choose not to hide how it works.',
    'Of course, the arrangement of the stars does not decide a person’s life. Fortune-telling is not knowledge proven by science; it is one way of seeing things that has stayed close to people’s lives for a long time. That is exactly why we chose a calculation whose workings you can see, rather than assertions from nowhere. Please do not swallow the results whole — use them as a small mirror to glance at while you get ready in the morning. On a good day, a sign to push your back; on a quiet day, an excuse to rest. The one who decides, in the end, is always you.'
  ],
  zh: [
    '这个站的运势，既不是抽签式的偶然，也不是固定顺序的循环使用。它的基础，是西洋占星术里自古有之的「行运（transit）」思想：今天的天空中，月亮、太阳、水星、金星、火星、木星、土星这七个天体实际在哪里，与你的星座结成什么样的角度。这个排行榜，就是把这些连结的强度逐一换算成分数，再重新排列出来的。',
    '天体的位置，是用公开的天文计算库（Astronomy Engine），在你自己的设备里，按当天的天空原样计算的。角度的种类与接近程度、每个天体的权重等评分规则，是沿占星术传统定下的固定规则。幸运颜色和幸运物品，也是从那天作用最强的天体所对应的传统象征里引出来的。计算的思路也写在「运营者信息・广告标注」页里。运作方式，我们选择不藏着。',
    '当然，星星的排列不会决定一个人的一生。占卜不是经过科学证明的知识，而是长久以来贴近人们生活的一种看待事物的方式。正因如此，我们选择了看得见运作方式的计算，而不是不知出处的断言。结果请不要全盘照收，就当作早上梳洗时顺便照一照的小镜子。好日子，是推你一把的信号；安静的日子，是休息的借口。最后做决定的，永远是你自己。'
  ]
};

const ABOUT_T = {
  ja: { title:'運営者情報・広告表記｜MLucky 強運占い', h1:'運営者情報',
    thName:'屋号', tdName:'MLucky（エムラッキー）', thSite:'サイト名', tdSite:'MLucky 強運占い', thContact:'連絡先',
    thContent:'サイトの内容',
    tdContent:'日本にお住まいの方向けの、毎日の星座占い（12星座ランキング）を提供しています。ランキングは、その日の月・太陽・惑星の実際の位置と各星座との角度（アスペクト）をもとに計算する方式で、毎日0時に切り替わります（2026年11月28日以降。それ以前は日付と星座の組み合わせによる計算方式でした）。運勢文も、その日に最も強く影響する惑星と角度の性質、月がいる部屋（太陽ハウス）をもとに組み立てています。ラッキーカラー・アイテム・ナンバーも、その日に最も強く影響する惑星の伝統的な対応（色・物・数）から決めています。天体位置の計算には Astronomy Engine（MITライセンス）を使用しています。',
    h2Ads:'広告表記について',
    ads1:'当サイトは現在、広告を掲載していません。',
    ads2:'今後、広告やアフィリエイトプログラム（商品・サービスの紹介による収益が発生する仕組み）を導入する場合は、該当する箇所に「広告」「PR」であることを明示します（ステルスマーケティング規制への対応）。',
    ads3:'また、占いのランキングや順位は、広告収入の有無や金額によって変わることは一切ありません。',
    h2Disc:'免責事項',
    disc:'占いの結果はエンターテインメントとして提供するものであり、将来の出来事を保証するものではありません。掲載情報の利用によって生じた損害について、運営者は責任を負いかねます。',
    back:'← トップページへ戻る' },
  en: { title:'About & Advertising | MLucky Lucky Fortune', h1:'About the Operator',
    thName:'Trade name', tdName:'MLucky', thSite:'Site name', tdSite:'MLucky Lucky Fortune', thContact:'Contact',
    thContent:'About this site',
    tdContent:'This site offers a daily horoscope (a ranking of the 12 signs) for people living in Japan. The ranking is calculated from the actual positions of the Moon, the Sun and the planets that day, and the angles (aspects) they form with each sign, and it changes every day at midnight (since November 28, 2026; before that, a method based on the combination of date and sign was used). The fortune texts, too, are composed from the planet that influences the day most strongly, the nature of its angle, and the house where the Moon sits (the solar house). Lucky colors, items and numbers are also decided from the traditional correspondences (color, object, number) of the day’s most influential planet. Positions are calculated with Astronomy Engine (MIT License).',
    h2Ads:'About advertising',
    ads1:'This site currently carries no advertising.',
    ads2:'If advertising or affiliate programs (arrangements that earn revenue by introducing products or services) are introduced in the future, the relevant places will be clearly marked as “Ad” or “PR” (in line with stealth-marketing regulations).',
    ads3:'The fortune rankings and order never change according to the presence or amount of advertising revenue.',
    h2Disc:'Disclaimer',
    disc:'Fortune results are provided as entertainment and do not guarantee future events. The operator cannot accept responsibility for any damage arising from the use of the information published here.',
    back:'← Back to the top page' },
  zh: { title:'运营者信息・广告标注｜MLucky 强运占卜', h1:'运营者信息',
    thName:'屋号', tdName:'MLucky', thSite:'网站名', tdSite:'MLucky 强运占卜', thContact:'联系方式',
    thContent:'网站内容',
    tdContent:'本站面向居住在日本的朋友，提供每日星座占卜（12星座排行榜）。排行榜根据当天月亮、太阳与行星的实际位置、以及它们与各星座的角度（相位）计算，每天0点切换（2026年11月28日起；此前采用按日期与星座组合计算的方式）。运势文也是根据当天影响最强的行星及其角度的性质、月亮所在的房间（太阳宫位）组合而成的。幸运颜色、物品、数字，同样取自当天影响最强行星的传统对应（颜色、物品、数字）。天体位置的计算使用 Astronomy Engine（MIT 许可证）。',
    h2Ads:'关于广告标注',
    ads1:'本站目前没有刊登广告。',
    ads2:'今后若引入广告或联盟营销计划（通过介绍商品、服务获得收益的机制），会在相应位置明确标注「广告」「PR」（以符合隐形营销的相关规定）。',
    ads3:'另外，占卜的排行榜与名次，绝不会因广告收入的有无或金额而改变。',
    h2Disc:'免责声明',
    disc:'占卜结果仅供娱乐，不保证未来的事件。对于因使用本站信息而产生的损害，运营者不承担责任。',
    back:'← 返回首页' }
};

const PRIVACY_T = {
  ja: { title:'プライバシーポリシー｜MLucky 強運占い', h1:'プライバシーポリシー',
    h2a:'個人情報の収集について',
    pa:'当サイト（MLucky 強運占い）は会員登録や入力フォームを設けておらず、利用者の氏名・住所・メールアドレスなどの個人情報を収集することはありません。占いの結果は、利用者の端末（ブラウザ）の中で日付をもとに計算して表示しており、入力情報がサーバーへ送信されることもありません。',
    h2b:'アクセス解析・Cookie について',
    pb:'当サイトは、利用状況を把握するために Google アナリティクス（GA4）を利用しています。GA4 は Cookie を通じてアクセス情報を収集しますが、個人を特定する情報は含まれません。収集された情報は Google のプライバシーポリシーに基づいて管理されます。ブラウザの設定で Cookie を無効にすると、計測を停止できます。',
    h2c:'お問い合わせ',
    pc:'本ポリシーや当サイトに関するお問い合わせは、mlucky.ai.jp@gmail.com までご連絡ください。お問い合わせの際にいただいたメールアドレスは、返信の目的以外には使用しません。',
    h2d:'ポリシーの改定',
    pd:'本ポリシーの内容は、必要に応じて改定することがあります。改定した場合は、このページでお知らせします。',
    date:'制定日：2026年11月26日／改定日：2026年11月28日', op:'運営：MLucky（エムラッキー）',
    back:'← トップページへ戻る' },
  en: { title:'Privacy Policy | MLucky Lucky Fortune', h1:'Privacy Policy',
    h2a:'About the collection of personal information',
    pa:'This site (MLucky Lucky Fortune) has no membership registration or input forms, and does not collect personal information such as names, addresses or email addresses. Fortune results are calculated and displayed inside your device (browser) from the date; no input information is sent to a server.',
    h2b:'About analytics and cookies',
    pb:'This site uses Google Analytics (GA4) to understand how it is used. GA4 collects access information through cookies, but this does not include information that identifies individuals. Collected information is managed under Google’s privacy policy. You can stop measurement by disabling cookies in your browser settings.',
    h2c:'Contact',
    pc:'For questions about this policy or this site, please contact mlucky.ai.jp@gmail.com. Email addresses provided when contacting us are used only for replying.',
    h2d:'Changes to this policy',
    pd:'The contents of this policy may be revised as needed. When revised, the change will be announced on this page.',
    date:'Established: November 26, 2026 / Revised: November 28, 2026', op:'Operated by: MLucky',
    back:'← Back to the top page' },
  zh: { title:'隐私政策｜MLucky 强运占卜', h1:'隐私政策',
    h2a:'关于个人信息的收集',
    pa:'本站（MLucky 强运占卜）没有会员注册或输入表单，不收集用户的姓名、住址、邮箱等个人信息。占卜结果是在用户的设备（浏览器）内根据日期计算并显示的，输入信息不会发送到服务器。',
    h2b:'关于访问分析与 Cookie',
    pb:'本站使用 Google Analytics（GA4）来了解使用情况。GA4 通过 Cookie 收集访问信息，但其中不包含可识别个人身份的信息。收集的信息依据 Google 的隐私政策进行管理。在浏览器设置中禁用 Cookie，即可停止统计。',
    h2c:'联系方式',
    pc:'关于本政策或本站的咨询，请联系 mlucky.ai.jp@gmail.com。您咨询时提供的邮箱地址，仅用于回复，不作其他用途。',
    h2d:'政策的修订',
    pd:'本政策的内容可能根据需要修订。修订时将在本页通知。',
    date:'制定日：2026年11月26日／修订日：2026年11月28日', op:'运营：MLucky',
    back:'← 返回首页' }
};

// 言語切替の旗球（枠外・ページ最下部に置く共通部品）
function flagRowHTML(){
  const sel = l => (LANG === l ? ' class="sel"' : '');
  return '<div class="langrow" role="group" aria-label="Language">' +
    '<button type="button" data-lang="zh"' + sel('zh') + ' aria-label="中文"><img src="icons/flag-cn.svg" alt="中文"></button>' +
    '<button type="button" data-lang="en"' + sel('en') + ' aria-label="English"><img src="icons/flag-gb.svg" alt="English"></button>' +
    '<button type="button" data-lang="ja"' + sel('ja') + ' aria-label="日本語"><img src="icons/flag-jp.svg" alt="日本語"></button>' +
  '</div>';
}
function bindFlags(onChange){
  document.querySelectorAll('.langrow button').forEach(b => {
    b.addEventListener('click', () => {
      const l = b.getAttribute('data-lang');
      if (l === LANG) return;
      LANG = l;
      try { localStorage.setItem(LANG_KEY, l); } catch(e) {}
      document.querySelectorAll('.langrow button').forEach(x => x.classList.toggle('sel', x.getAttribute('data-lang') === l));
      if (onChange) onChange();
    });
  });
}
