/* ===== 题库数据（与界面逻辑分离，扩充时在此追加） ===== */
var QUESTIONS = [
  { id: 1, dimension: "EI", dimLabel: "能量来源",
    question: "周末你更愿意怎么过？",
    optionA: { text: "约朋友出去玩，人越多越开心", point: "E" },
    optionB: { text: "自己待着，或和一两个熟人安静相处", point: "I" } },
  { id: 2, dimension: "EI", dimLabel: "能量来源",
    question: "在陌生场合，你通常会？",
    optionA: { text: "主动认识新朋友", point: "E" },
    optionB: { text: "找个熟人待着，等别人来搭话", point: "I" } },
  { id: 3, dimension: "EI", dimLabel: "能量来源",
    question: "忙碌一天后，你更喜欢用什么方式恢复精力？",
    optionA: { text: "出门参加活动，见见热闹", point: "E" },
    optionB: { text: "独处，安安静静做自己的事", point: "I" } },
  { id: 4, dimension: "SN", dimLabel: "信息获取",
    question: "你更相信什么？",
    optionA: { text: "眼见为实和过往经验", point: "S" },
    optionB: { text: "直觉预感和新的可能性", point: "N" } },
  { id: 5, dimension: "SN", dimLabel: "信息获取",
    question: "学习新事物时，你更喜欢？",
    optionA: { text: "按部就班，从具体操作入手", point: "S" },
    optionB: { text: "先看全局，理解了来龙去脉再动手", point: "N" } },
  { id: 6, dimension: "SN", dimLabel: "信息获取",
    question: "阅读一篇文章时，你更关注？",
    optionA: { text: "具体事实和细节", point: "S" },
    optionB: { text: "言外之意和背后的引申联想", point: "N" } },
  { id: 7, dimension: "TF", dimLabel: "决策方式",
    question: "朋友向你倾诉烦恼，你的第一反应是？",
    optionA: { text: "帮他分析问题，给出解决办法", point: "T" },
    optionB: { text: "先安慰他，理解他的感受", point: "F" } },
  { id: 8, dimension: "TF", dimLabel: "决策方式",
    question: "做重要决定时，你更看重？",
    optionA: { text: "逻辑和利弊得失", point: "T" },
    optionB: { text: "自己和他人的感受", point: "F" } },
  { id: 9, dimension: "JP", dimLabel: "生活态度",
    question: "出门旅行，你更喜欢？",
    optionA: { text: "提前做好攻略，按计划走", point: "J" },
    optionB: { text: "随走随看，保留弹性", point: "P" } },
  { id: 10, dimension: "JP", dimLabel: "生活态度",
    question: "面对截止日期，你通常是？",
    optionA: { text: "提前完成，不喜欢拖到最后", point: "J" },
    optionB: { text: "临近截止才集中爆发效率", point: "P" } }
];

/* ===== 16 型中文名 ===== */
var TYPE_NAMES = {
  INTJ: "建筑师", INTP: "逻辑学家", ENTJ: "指挥官", ENTP: "辩论家",
  INFJ: "提倡者", INFP: "调停者", ENFJ: "主人公", ENFP: "竞选者",
  ISTJ: "物流师", ISFJ: "守卫者", ESTJ: "总经理", ESFJ: "执政官",
  ISTP: "鉴赏家", ISFP: "探险家", ESTP: "企业家", ESFP: "表演者"
};

/* ===== 维度定义（顺序即展示顺序） ===== */
var DIMENSIONS = [
  { key: "EI", left: "E", leftName: "外向", right: "I", rightName: "内向" },
  { key: "SN", left: "S", leftName: "实感", right: "N", rightName: "直觉" },
  { key: "TF", left: "T", leftName: "思考", right: "F", rightName: "情感" },
  { key: "JP", left: "J", leftName: "判断", right: "P", rightName: "知觉" }
];

/* 平分时默认取左端字母（E/S/T/J） */
var TIE_DEFAULT = { EI: "E", SN: "S", TF: "T", JP: "J" };
