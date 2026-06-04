import type { SiteContent } from "./types";

export const ja: SiteContent = {
  meta: {
    title: "呉雨諾 | Academic Homepage",
    description:
      "呉雨諾の個人研究サイト。空間情報学、都市衰退分析、建物単位の時空間モデリングを中心に研究しています。",
  },
  nav: {
    about: "自己紹介",
    research: "研究",
    education: "学歴",
    awards: "受賞",
    skills: "スキル",
    activities: "課外活動",
    materials: "研究資料",
    contact: "連絡先",
  },
  hero: {
    name: "呉雨諾",
    localName: "Yunuo Wu / 吴雨诺",
    role: [
      "東京大学大学院 新領域創成科学研究科",
      "社会文化環境学専攻 博士課程",
    ],
    affiliationLabel: "所属",
    affiliation: "東京大学",
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
    emailLabel: "Email",
    emails: ["w.yunuo0424@gmail.com", "wuyunuo@g.ecc.u-tokyo.ac.jp"],
    primaryAction: "研究を見る",
    secondaryAction: "研究資料",
  },
  about: {
    title: "自己紹介",
    body: [
      "私は東京大学大学院に在籍する博士課程学生で、建築、都市計画、ランドスケープ、空間情報学を横断するバックグラウンドを持っています。",
      "修士研究では、衛星由来特徴量、自治体調査データ、行政区域データを統合し、深層学習を用いて空き家数を推定しました。",
      "博士課程では、空間情報を用いた建物単位の時空間モデリングの自動化と、都市衰退の把握に取り組んでいます。",
    ],
  },
  research: {
    title: "研究",
    intro:
      "空間データ、AI、リモートセンシング、都市研究を接続し、都市の変化を時間軸に沿って理解する研究を行っています。",
    items: [
      {
        title: "Estimating Vacant Houses Using Deep Learning with Satellite Imagery",
        description: "修士研究",
        points: [
          "衛星由来特徴量、自治体調査データ、行政区域データを使用しました。",
          "深層学習モデルを構築し、空き家数の推定を行いました。",
          "データ収集、前処理、空間結合、モデル構造調整、学習、評価までの一連の流れを設計・実装しました。",
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
          "建物単位の変化、ID 継承、時空間モデリング、都市衰退分析に着目しています。",
          "空間情報、建物データ、リモートセンシングデータ、AI 手法を活用します。",
          "住宅変化と都市衰退プロセスを、より細かな空間解像度で理解することを目指します。",
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
        description: "研究助成 / プロジェクト",
        points: [
          "東京大学 AIセンター融合研究促進費 2024年度に採択された研究です。",
          "AI 基盤モデルと多源データを用いて、日本全国の空き家分析を行います。",
          "全国スケールでの地図化と傾向分析を含みます。",
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
    title: "学歴",
    items: [
      {
        institution: "東京大学",
        program: "大学院新領域創成科学研究科 社会文化環境学専攻 博士課程",
        period: "2026.04-2029.03 予定",
      },
      {
        institution: "東京大学",
        program: "大学院新領域創成科学研究科 社会文化環境学専攻 修士課程",
        period: "2024.04-2026.03",
      },
      {
        institution: "北京建築大学",
        program: "建築・都市計画 / ランドスケープ",
        period: "2018.09-2023.07",
        details: ["GPA: 3.84/4.0", "専攻順位: 1/58"],
      },
    ],
  },
  skills: {
    title: "スキル",
    groups: [
      { title: "プログラミング言語", items: ["Python", "SQL"] },
      { title: "開発ツール", items: ["PyTorch", "Linux", "LaTeX", "Git"] },
      {
        title: "デザインツール",
        items: ["Photoshop", "Illustrator", "InDesign", "SketchUp", "Rhino"],
      },
      {
        title: "空間情報",
        items: ["ArcGIS", "QGIS", "ArcScene", "Fragstats"],
      },
      {
        title: "言語",
        items: [
          "日本語 ビジネスレベル / JLPT N1",
          "英語 ビジネスレベル / TOEFL 92",
          "中国語 ネイティブ",
        ],
      },
    ],
  },
  awards: {
    title: "受賞",
    items: [
      "北京建築大学 優秀学生賞, 3 回",
      "北京建築大学 奨学金, 6 回",
      "北京建築大学 優秀卒業生, 上位 1%",
      "優秀卒業設計賞, 上位 1%",
      "北京市優秀卒業生, 上位 5%",
      "NECCS 三等賞",
      "国際建築コンペティション “Challenge to Navigli Canal”, Milan ファイナリスト賞",
    ],
  },
  activities: {
    title: "課外活動",
    items: [
      {
        institution: "北京建築大学 建築・都市計画学院 学生会",
        program: "会長",
        period: "2020.09-2021.06",
      },
      {
        institution: "東京大学中国留学生学友会",
        program: "企画部長",
        period: "2025.04-present",
      },
      {
        institution: "イベント企画",
        program:
          "五月祭小籠包企画、北京人材交流イベント、上海高校生向け東京大学訪問プログラム",
        period: "主な経験",
      },
      {
        institution: "歌唱コンテスト",
        program: "優勝",
        period: "文化活動",
      },
      {
        institution: "女子バスケットボール",
        program: "チームスポーツと課外活動",
        period: "ライフワーク",
      },
    ],
  },
  materials: {
    title: "研究資料",
    cardTitle: "修士論文発表スライド",
    description:
      "修士研究の背景と方法論をより詳しく理解していただくため、修士論文発表スライドを公開しています。",
    view: "スライドを見る",
    filePath: "/files/修士研究.pdf",
    previewImagePath: "/files/master_thesis_preview.png",
    previewFallback:
      "スライドは「スライドを見る」ボタンからご覧いただけます。",
  },
  contact: {
    title: "連絡先",
    description:
      "共同研究、学術交流、長期インターンシップ、仕事の機会など、その他のお問い合わせはメールでご連絡ください。",
    emails: ["w.yunuo0424@gmail.com", "wuyunuo@g.ecc.u-tokyo.ac.jp"],
  },
  footer: "Yunuo Wu. Academic homepage.",
};
