import type { SiteContent } from "./types";

export const zh: SiteContent = {
  meta: {
    title: "吴雨诺 | 个人学术主页",
    description:
      "吴雨诺的个人学术主页，研究方向包括空间信息学、城市衰退分析、建筑单元级时空建模、深度学习、遥感与 GIS。",
  },
  nav: {
    about: "关于我",
    research: "研究",
    education: "教育经历",
    awards: "获奖",
    skills: "技能",
    activities: "课外活动",
    materials: "研究资料",
    contact: "联系",
  },
  hero: {
    name: "吴雨诺",
    localName: "Yunuo Wu / 呉雨諾",
    role: [
      "东京大学大学院 新领域创成科学研究科",
      "社会文化环境学专攻 博士课程在学中",
    ],
    affiliationLabel: "所属",
    affiliation: "东京大学",
    labLabel: "研究室",
    lab: "関本・中居研究室",
    directions: [
      "Spatial Informatics",
      "Urban Decline Analysis",
      "Building-level Spatio-temporal Modeling",
      "Machine Learning",
      "Deep Learning",
      "Remote Sensing",
      "GIS",
    ],
    emailLabel: "邮箱",
    emails: ["w.yunuo0424@gmail.com", "wuyunuo@g.ecc.u-tokyo.ac.jp"],
    primaryAction: "查看研究",
    secondaryAction: "研究资料",
  },
  about: {
    title: "关于我",
    body: [
      "Hi，你好，我是吴雨诺，来自中国北京，目前就读于东京大学大学院博士课程，具有空间信息学、建筑、城市规划与景观的交叉学科背景。我性格开朗热情，热爱运动，也喜欢学习新的知识和关注时代的发展趋势，这也是我不断跨学科学习和研究的动力所在。",
      "修士阶段，我使用卫星 embedding、自治体调查数据与行政区域数据，基于深度学习方法进行空き家数推定。",
      "博士阶段，我关注利用空间信息进行建筑单元级别的时空建模自动化，并进一步把握城市住宅变化与城市衰退过程。",
      "我很热爱自己正在做的研究，也珍惜认真生活的每一天。希望未来能够做出真正有意义、对社会有所贡献的事情。",
    ],
  },
  research: {
    title: "研究",
    intro:
      "我的研究将空间数据、人工智能、遥感和城市研究相结合，用更细粒度的数据理解城市随时间发生的变化。",
    items: [
      {
        title: "Estimating Vacant Houses Using Deep Learning with Satellite Imagery",
        description: "修士研究",
        points: [
          "使用卫星 embedding、自治体调查数据和行政区域数据。",
          "构建深度学习模型，对空き家数进行推定。",
          "负责数据收集、前处理、空间结合、模型结构调整、训练与评价流程的设计和实现。",
        ],
        keywords: [
          "Vacant House Estimation",
          "Satellite Imagery",
          "Deep Learning",
          "GIS",
          "Japan",
        ],
      },
      {
        title: "Building-level Spatio-temporal Modeling for Understanding Urban Decline",
        description: "博士研究",
        points: [
          "关注建筑物单元级别的变化、ID 继承、时空建模和城市衰退分析。",
          "使用空间信息、建筑物数据、遥感数据和 AI 方法。",
          "目标是更精细地理解城市住宅变化与城市衰退过程。",
        ],
        keywords: [
          "Spatial Informatics",
          "Building-level Modeling",
          "Urban Decline",
          "Spatio-temporal Data",
          "AI",
        ],
      },
      {
        title:
          "Nationwide Vacant House Analysis Using AI Foundation Models and Multiple Data Sources",
        description: "研究经费 / 项目",
        points: [
          "东京大学 AIセンター融合研究促進費 2024 年度项目。",
          "使用 AI 基盘模型和多源数据进行日本全国空き家分析。",
          "研究内容包括全国范围 mapping 与趋势分析。",
        ],
        keywords: [
          "AI Foundation Models",
          "Multiple Data Sources",
          "Vacant Houses",
          "Mapping",
          "Trend Analysis",
        ],
      },
    ],
  },
  education: {
    title: "教育经历",
    items: [
      {
        institution: "东京大学",
        program: "大学院新领域创成科学研究科 社会文化环境学专攻 博士课程",
        period: "2026.04-2029.03 预计",
      },
      {
        institution: "东京大学",
        program: "大学院新领域创成科学研究科 社会文化环境学专攻 修士课程",
        period: "2024.04-2026.03",
      },
      {
        institution: "北京建筑大学",
        program: "建筑与城市规划 / 景观",
        period: "2018.09-2023.07",
        details: ["GPA: 3.84/4.0", "专业排名: 1/58"],
      },
    ],
  },
  skills: {
    title: "技能",
    groups: [
      { title: "编程语言", items: ["Python", "SQL"] },
      { title: "开发工具", items: ["PyTorch", "Linux", "LaTeX", "Git"] },
      {
        title: "设计工具",
        items: ["Photoshop", "Illustrator", "InDesign", "SketchUp", "Rhino"],
      },
      {
        title: "空间信息",
        items: ["ArcGIS", "QGIS", "ArcScene", "Fragstats"],
      },
      {
        title: "语言",
        items: [
          "日语 商务水平 / JLPT N1",
          "英语 商务水平 / TOEFL 92",
          "中文 母语",
        ],
      },
    ],
  },
  awards: {
    title: "获奖",
    items: [
      "北京建筑大学优秀学生奖, 3 次",
      "北京建筑大学奖学金, 6 次",
      "北京建筑大学优秀毕业生, 前 1%",
      "优秀毕业设计奖, 前 1%",
      "北京市优秀毕业生, 前 5%",
      "全国大学生英语竞赛（NECCS）三等奖",
      "米兰国际建筑竞赛 “Challenge to Navigli Canal” 入围奖",
    ],
  },
  activities: {
    title: "课外活动",
    items: [
      {
        institution:
          "北京建筑大学建筑与城市规划学院学生会",
        program: "主席",
        period: "2020.09-2021.06",
      },
      {
        institution:
          "东京大学中国留学生学友会",
        program: "企划部部长",
        period: "2025.04-present",
      },
      {
        institution: "活动策划",
        program:
          "五月祭小笼包项目、北京人才交流活动、上海高中生东京大学访问项目",
        period: "主要经历",
      },
      {
        institution: "东京大学与深圳大学",
        program: "学术交流活动",
        period: "学术交流",
      },
      {
        institution: "冠军 2 次、亚军 1 次",
        program: "歌手比赛",
        period: "文艺活动",
      },
      {
        institution: "运动与户外",
        program: "8 年女子篮球经验、滑雪、健身、徒步等",
        period: "生活热爱",
      },
    ],
  },
  materials: {
    title: "研究资料",
    cardTitle: "修士论文答辩资料",
    description:
      "你可以查看我的修士论文答辩资料，以进一步了解我的研究背景和方法。",
    view: "查看资料",
    filePath: "/files/修士研究.pdf",
    previewImagePath: "/files/master_thesis_preview.png",
    previewFallback: "可通过“查看资料”按钮打开研究资料。",
  },
  contact: {
    title: "联系",
    description:
      "如需研究合作、学术交流、长期实习、工作机会等，请通过邮件与我联系。",
    emails: ["w.yunuo0424@gmail.com", "wuyunuo@g.ecc.u-tokyo.ac.jp"],
  },
  footer: "Yunuo Wu. Academic homepage.",
};
