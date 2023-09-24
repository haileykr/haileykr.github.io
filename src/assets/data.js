export const introduction = {
  en: "<span>Hello, world! 👋</span><br/> I am <span>Hailey Kim</span>, a data strategy and web full-stack developer at ARUP, an engineering consulting firm.<br /><br /> I am also a <span>professional structural engineer (P.E)</span> who practiced in the industry for 3 years.</span>As a developer, I am creating and maintaining various applications where digital technology effectively and efficiently solves problems in the AEC (Architecture, Engineer, and Construction) industry. I lead and participate two or more projects every month, and actively communicate with other developers, engineers, and clients. Every project has different goals and pursue unique functionalities, and I keep learning new technologies to find and implement the best tech stack which suits them.<br/><br/>I am thankful to make positive impacts through digital technologies to the AEC field that I love, and see how my applications bring benefits to many people.",
  ko: "<span>안녕하세요,</span> 미국 뉴욕 엔지니어링 컨설팅 회사 ARUP에서 풀스택 웹, 그리고 자동화 시스템을 개발하는 개발자<span>김해리</span>입니다.<br/><br/> 디지털 기술을 건축/건설 분야에 접목시키며, 건축사로 3년 동안 실무에서 일하며 느꼈던 첨단 기술에 대한 갈증을 직접 해소해가고 있습니다. 매달 평균 2개 이상의 다양한 프로젝트를 주도 및 참여하고, 개발자, 엔지니어, 클라이언트들과 활발히 소통하며, 효과적이고 효율적인 도구들을 만들고 유지/보수하고 있습니다. 컨설팅 회사의 특징상 프로젝트마다 성격과 목적이 달라 새로운 기술을 끊임없이 배우고 있습니다.<br/><br/>제가 꿈꿔왔던 변화들을 제가 애정하는 분야에 불러오며, 제가 만드는 애플리케이션이 많은 사람들에게 도움이 되는 것을 보며, 의미있는 일을 할 수 있음에 매일 감사하며 보람을 느낍니다.",
};

export const experienceList = [
  {
    img: `${process.env.REACT_APP_BASE_URL}/images/icons/experience/ARUP.jpg`,
    official_website: "https://www.arup.com/",
    alt: "ARUP",
    period: "2021.12 - Present",
    name: "ARUP",
    location: "New York, NY, USA",
    title: "Full-Stack/Software Developer",
    description: [
      "Developed web frontend interfaces, backend structure and APIs, and CI/CD pipeline for various projects with unique client requirements.",
      "Collaborated with AEC industry domain experts to identify opportunities for innovative digital transformation, with domain knowledge in both digital technology and structural engineering.",
      "Simplified and automated engineering workflows using various technology principles and stacks, including data analytics, cloud-based technologies, and Machine Learning.",
      "As the nominated Americas Software Development Champion, organize and lead nation-wide internal discussions, presentation series, and training sessions about software development technologies and various projects.",
      "Managed and assigned tasks to other developers and communicated with the UX team using JIRA and Figma.",
    ],
    projects: [
      "Web Application|Developed a new virtual site inspection application powered by React and Typescript, featuring Unity WebGL and Django-based backend server, as a Lead Frontend Developer.",
      "Web Application|Architected and developed a web-based generative design tool which empowers engineers to evaluate hundreds of design options and make data-driven decisions. Created the frontend application with React and TypeScript, and a set of Azure functions to use a RhinoCompute server for cloud-based geometric computations",
      "Data Management Tool|Maintained and implemented an automation tool powered by Apache Airflow, Kubernetes, and Django. The tool detects incoming submittals from contractors at scheduled time intervals, saves them on internal platforms, and notifies project team members of the automation status during Construction Administration (CA) phase.",
      "Data Management Tool|Streamlined and maintained the existing internal global system to enable BIM modelers to adopt 20k+ pre-defined templates and families in Revit, a 3D modeling software, using services including DynamoDB, Neptune, and S3.",
      "Data Analysis Tool|Created Python scripts to automate the generation of project deliverables based on project requirements, which include Word documents and interactive spreadsheets, utilizing DataFrames.",
      "ML Tool|Conducted a feasibility study of implementing Graph Neural Networks (GNN) to simplify building detail CAD drawings.",
      "ML Tool|Published an internal article to define strategies and a jumpstart system for projects requiring Object Detection.",
      "UX Study|Developed a set of user personas, user stories, and Figma wireframes for a Structural Health Monitoring (SHM) system for an international client. Confirmed technical feasibilities, identified key data and use cases, and ideated data visualization strategies through active communication with the client, contractor, and internal teams.",
    ],
  },
  {
    img: `${process.env.REACT_APP_BASE_URL}/images/icons/experience/playauto.png`,
    official_website: "https://www.plto.com",
    alt: "Playauto",
    period: "2021.07 - 2021.10",
    name: "PlayAuto",
    location: "Seoul, South Korea",
    title: "Software Engine Development Intern",
    description: [
      "Developed and maintained the cloud-based software tool to help online sellers streamline and automate the management processes for products, stock, and orders across 200+ domestic/international online shopping mall platforms.",
      "Created pipelines for newly supported e-commerce platforms by connecting their APIs to PlayAuto’s software logic, using TypeScript and Jest.js.",
      "Established the new intern onboarding program and trained new interns in person.",
    ],
  },
  {
    img: `${process.env.REACT_APP_BASE_URL}/images/icons/experience/eoc.png`,
    official_website: "https://www.eocengineers.com/",
    alt: "EOC",
    period: "2019.11 - 2020.07",
    name: "Eckersley O'Callaghan",
    location: "New York, NY, USA",
    title: "Senior Structural Engineer",
    description: [
      "Designed the structural systems of various projects, including steel-concrete single-family houses, a timber-steel hybrid tower, and glass stairs and façade panel systems.",
      "Participated in all design phases, from Schematic Design to Construction Administration.",
      "Generated structural drawings and calculation reports to support the design.",
      "Communicated with clients, architects, and contractors to understand the requirements and field conditions and develop design.",
    ],
  },
  {
    img: `${process.env.REACT_APP_BASE_URL}/images/icons/experience/TT.png`,
    official_website: "https://www.thorntontomasetti.com/",
    alt: "TT",
    period: "2017.08 ~ 2019.10",
    name: "Thornton Tomasetti",
    location: "New York, NY, USA",
    title: "Structural Engineer / Senior Structural Engineer",
    description: [
      "Analyzed more than 30 existing and new structures based on their geometry, structural layout, load assumptions, material properties, and site location and condition through hand calculations, FEM analyses, and Python/Grasshopper scripts.",
      "Major projects included Sunnyside Master Plan (180-acre City Redevelopment Project) and 241 W28 (479-unit Residential/Commercial Building).",
      "Generated detailed sketches and drawing sets for coordination and construction.",
      "Coordinated with clients, architects, and other consultants worldwide to develop design.",
    ],
  },
];

export const experienceListKo = [
  {
    img: `${process.env.REACT_APP_BASE_URL}/images/icons/experience/ARUP.jpg`,
    alt: "ARUP",
    period: "[2021.12 ~ 현재] ",
    name: "ARUP - 미국 뉴욕",
    title: "데이터 전략 및 풀스택 개발자, ADE (Advanced Digital Engineering)",
  },
  {
    img: `${process.env.REACT_APP_BASE_URL}/images/icons/experience/playauto.png`,
    alt: "플레이오토",
    period: "[2021.07 ~ 2021.10] ",
    name: "플레이오토 - 대한민국 서울",
    title: "인턴, 엔진개발팀",
  },
  {
    img: `${process.env.REACT_APP_BASE_URL}/images/icons/experience/1pr.jpg`,
    alt: "EOC",
    period: "[2019.11 ~ 2020.07] ",
    name: "Eckersley O'Callaghan - 미국 뉴욕",
    title: "경력 구조공학자",
  },
  {
    img: `${process.env.REACT_APP_BASE_URL}/images/icons/experience/Vessel.png`,
    alt: "TT",
    period: "[2017.08 ~ 2019.10] ",
    name: "Thornton Tomasetti - 미국 뉴욕",
    title: "구조공학자 / 경력 구조공학자",
  },
];

export const educationList = [
  {
    img: `${process.env.REACT_APP_BASE_URL}/images/icons/education/bi_main_emblem.png`,
    official_website: "https://www.cb.or.kr/creditbank/info/nInfo7_1.do",
    alt: "ACBS",
    period: "2020.08 - 2021.08",
    name: "Academic Credit Bank System (ACBS)",
    location: "Seoul, South Korea",
    degree: "B.Eng in Computer Engineering",
    GPA: "4.5/4.5",
  },
  {
    img: `${process.env.REACT_APP_BASE_URL}/images/icons/education/mit.png`,
    official_website: "https://www.mit.edu/",
    alt: "MIT",
    period: "2016.09 - 2017.06",
    name: "Massachusetts Institute of Technology (MIT)",
    location: "Cambridge, MA, USA",
    degree: "M.Eng in Civil and Environmental Engineering",
    GPA: "4.9/5.0",
  },
  {
    img: `${process.env.REACT_APP_BASE_URL}/images/icons/education/CU.png`,
    official_website: "https://cooper.edu/welcome",
    alt: "Cooper Union",
    period: "2012.09 - 2016.06",
    name: "The Cooper Union for the Advancement of Science and Art",
    location: "New York, NY, USA",
    degree: "B.Eng in Civil Engineering, Valedictorian",
    GPA: "3.9/4.0",
  },
];

export const educationListKo = [
  {
    img: `${process.env.REACT_APP_BASE_URL}/images/icons/education/bi_main_emblem.png`,
    alt: "ACBS",
    period: "[2020.08 ~ 2021.08]",
    title: "학점은행제 (ACBS) - 대한민국",
    degree: "컴퓨터공학 타전공학사",
  },
  {
    img: `${process.env.REACT_APP_BASE_URL}/images/icons/education/mit.png`,
    alt: "MIT",
    period: "[2016.09 ~ 2017.06]",
    title: "Massachusetts Institute of Technology (MIT) - 미국 캠브릿지",
    degree: "토목환경공학부 석사",
  },
  {
    img: `${process.env.REACT_APP_BASE_URL}/images/icons/education/CU.png`,
    alt: "Cooper Union",
    period: "[2012.09 ~ 2016.06]",
    title:
      "The Cooper Union for the Advancement of Science and Art - 미국 뉴욕",
    degree: "토목환경공학부 학사",
  },
  {
    img: `${process.env.REACT_APP_BASE_URL}/images/icons/education/KMLA.png`,
    alt: "민족사관고등학교",
    period: "[2009.02 ~ 2012.03]",
    title: "민족사관고등학교 (KMLA) - 대한민국",
    degree: "",
  },
];

export const licensesList = [
  {
    issued: "2023.07",
    name: "Azure Fundamentals",
    issuer: "Microsoft",
    field: "Tech",
    official_website:
      "https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/",
  },
  {
    issued: "2020.01",
    name: "Professional Engineer (P.E.)",
    issuer:
      "Board for Professional Engineers, Land Surveyors, and Geologists (California)",
    field: "Architecture, Engineering, & Construction",
    official_website: "https://www.bpelsg.ca.gov/",
  },
  {
    issued: "2018.11",
    name: "LEED AP Building Design + Construction",
    issuer: "Green Building Certification Inc. (GBCI)",
    field: "Architecture, Engineering, & Construction",
    official_website: "https://www.usgbc.org/credentials/leed-ap",
  },
];

export const otherExperienceList = [
  {
    period: "2023.02 - Present",
    name: "Arup",
    role: "Software Skills Network Champion, Forum Speaker",
    location: "New York, NY, USA",
    description: [
      "Organize monthly meetings on digital projects with different themes, by curating contents and reaching out to potential presenters.",
      "Provide bursts on projects and initiatives in various meetings.",
      "Presented on a Generative Design Applicatoin at an internal, national forum with 50+ attendees from diverse disciplines.",
    ],
  },
  {
    period: "2022.11",
    name: "AECTech 2022",
    role: "Hackathon",
    location: "New York, NY, USA",
    description: [
      "Developed a web-based application which visualizes the businesses within a 5 or 10 minute walk of the given location in NYC.",
      "Participated as a frontend developer and a data analysist.",
    ],
    official_website: "https://github.com/EmptyBox-Design/project-vibe",
  },
  {
    period: "2019.04 - Present",
    name: "Cooper Union",
    role: "Guest Lecturer",
    location: "New York, NY, USA",
    description: [
      "Give lectures on structural engineering fundamentals, computational design, and Building Information Modeling (BIM) to seniors.",
      "Join senior design classes to provide constructive feedback to students and help them develop their engineering projects",
    ],
  },
];
