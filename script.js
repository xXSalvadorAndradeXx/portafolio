// ========== script.js ==========
document.addEventListener('DOMContentLoaded', () => {
  
  // ---------- SISTEMA DE TRADUCCIONES ----------
  const translations = {
    es: {
      loading_title: "Construyendo una experiencia única...",
      loading_subtitle: "Cargando creatividad, innovación y código.",
      nav_home: "Inicio",
      nav_about: "Sobre mí",
      nav_recognitions: "Reconocimientos",
      nav_skills: "Habilidades",
      nav_projects: "Proyectos",
      nav_publications: "Publicaciones",
      nav_testimonials: "Testimonios",
      nav_contact: "Contacto",
      download_cv_short: "CV",
      cv_short: "CV",
      available_badge: "Disponible para proyectos",
      hero_motto: "\"El código no tiene errores, solo soluciones esperando ser descubiertas.\"",
      view_projects: "Ver proyectos",
      download_cv: "Descargar CV",
      scroll: "Desplazar",
      about_title: "Sobre mí",
      about_text_1: "Soy Salvador Ernesto Andrade Peña, un desarrollador full-stack apasionado por la creación de soluciones web innovadoras.",
      about_text_2: "Con una amplia experiencia tanto en desarrollo front-end como back-end, trabajo con tecnologías como HTML, CSS, JavaScript, PHP, Laravel, Node.js, Vue.js, React.js y NestJS.",
      about_text_3: "Siempre en busca de nuevas tecnologías y desafíos, me dedico a mejorar constantemente mis habilidades y aportar un valor significativo a los proyectos en los que participo, fusionando creatividad y eficiencia en cada solución que desarrollo.",
      download_cv_large: "Descargar mi CV",
      stat_projects: "Proyectos",
      stat_tech: "Tecnologías",
      stat_passion: "Pasión",
      recognitions_title: "Reconocimientos",
      recog_1_title: "Certificación Full-Stack",
      recog_1_institution: "Institución Tech",
      recog_2_title: "Arquitectura de Software",
      recog_2_institution: "Academia Digital",
      recog_3_title: "Liderazgo Técnico",
      recog_3_institution: "Innovación Lab",
      hard_skills_title: "Habilidades Duras",
      soft_skills_title: "Habilidades Blandas",
      interests_values_title: "Intereses y Valores",
      interest_ai: "Inteligencia Artificial",
      interest_web: "Desarrollo Web",
      interest_os: "Open Source",
      interest_arch: "Arquitectura de Software",
      interest_ui: "UI/UX",
      interest_blockchain: "Blockchain",
      interest_automation: "Automatización",
      interest_innovation: "Innovación",
      value_honesty: "Honestidad",
      value_commitment: "Compromiso",
      value_quality: "Calidad",
      value_discipline: "Disciplina",
      soft_skill_1: "Liderazgo",
      soft_skill_2: "Trabajo en equipo",
      soft_skill_3: "Pensamiento analítico",
      soft_skill_4: "Resolución de problemas",
      soft_skill_5: "Comunicación efectiva",
      soft_skill_6: "Creatividad",
      soft_skill_7: "Aprendizaje continuo",
      soft_skill_8: "Adaptabilidad",
      soft_skill_9: "Responsabilidad",
      soft_skill_10: "Gestión del tiempo",
      projects_title: "Mis Proyectos",
      project_1_desc: "Plataforma integral para mascotas.",
      project_2_desc: "Aplicación inteligente para gestión de jardines personalizados.",
      view_project_btn: "Ver Proyecto",
      more_info_btn: "Más info",
      publications_title: "Publicaciones",
      pub_1_title: "Calidad de Software",
      pub_1_desc: "Investigación sobre métricas y estándares.",
      pub_2_title: "Aplicaciones Web",
      pub_2_desc: "Análisis de frameworks modernos.",
      pub_3_title: "Modelado de Datos",
      pub_3_desc: "Estrategias para sistemas escalables.",
      download_btn: "Descargar",
      testimonials_title: "Testimonios",
      contact_title: "Contacto",
      contact_email: "Correo",
      contact_phone: "Teléfono",
      contact_whatsapp: "WhatsApp",
      form_name: "Nombre",
      form_email: "Correo",
      form_message: "Mensaje",
      send_message: "Enviar mensaje",
      footer_quote: "\"Construyendo soluciones que conectan ideas con innovación.\"",
      footer_copy: "© 2026 Salvador Andrade. Todos los derechos reservados."
    },
    en: {
      loading_title: "Building a unique experience...",
      loading_subtitle: "Loading creativity, innovation and code.",
      nav_home: "Home",
      nav_about: "About me",
      nav_recognitions: "Recognitions",
      nav_skills: "Skills",
      nav_projects: "Projects",
      nav_publications: "Publications",
      nav_testimonials: "Testimonials",
      nav_contact: "Contact",
      download_cv_short: "CV",
      cv_short: "CV",
      available_badge: "Available for projects",
      hero_motto: "\"Code has no errors, only solutions waiting to be discovered.\"",
      view_projects: "View projects",
      download_cv: "Download CV",
      scroll: "Scroll",
      about_title: "About me",
      about_text_1: "I am Salvador Ernesto Andrade Peña, a full-stack developer passionate about creating innovative web solutions.",
      about_text_2: "With extensive experience in both front-end and back-end development, I work with technologies like HTML, CSS, JavaScript, PHP, Laravel, Node.js, Vue.js, React.js and NestJS.",
      about_text_3: "Always seeking new technologies and challenges, I am dedicated to constantly improving my skills and providing significant value to the projects I participate in, merging creativity and efficiency in every solution I develop.",
      download_cv_large: "Download my CV",
      stat_projects: "Projects",
      stat_tech: "Technologies",
      stat_passion: "Passion",
      recognitions_title: "Recognitions",
      recog_1_title: "Full-Stack Certification",
      recog_1_institution: "Tech Institution",
      recog_2_title: "Software Architecture",
      recog_2_institution: "Digital Academy",
      recog_3_title: "Technical Leadership",
      recog_3_institution: "Innovation Lab",
      hard_skills_title: "Hard Skills",
      soft_skills_title: "Soft Skills",
      interests_values_title: "Interests and Values",
      interest_ai: "Artificial Intelligence",
      interest_web: "Web Development",
      interest_os: "Open Source",
      interest_arch: "Software Architecture",
      interest_ui: "UI/UX",
      interest_blockchain: "Blockchain",
      interest_automation: "Automation",
      interest_innovation: "Innovation",
      value_honesty: "Honesty",
      value_commitment: "Commitment",
      value_quality: "Quality",
      value_discipline: "Discipline",
      soft_skill_1: "Leadership",
      soft_skill_2: "Teamwork",
      soft_skill_3: "Analytical thinking",
      soft_skill_4: "Problem solving",
      soft_skill_5: "Effective communication",
      soft_skill_6: "Creativity",
      soft_skill_7: "Continuous learning",
      soft_skill_8: "Adaptability",
      soft_skill_9: "Responsibility",
      soft_skill_10: "Time management",
      projects_title: "My Projects",
      project_1_desc: "Comprehensive pet platform.",
      project_2_desc: "Smart application for personalized garden management.",
      view_project_btn: "View Project",
      more_info_btn: "More info",
      publications_title: "Publications",
      pub_1_title: "Software Quality",
      pub_1_desc: "Research on metrics and standards.",
      pub_2_title: "Web Applications",
      pub_2_desc: "Analysis of modern frameworks.",
      pub_3_title: "Data Modeling",
      pub_3_desc: "Strategies for scalable systems.",
      download_btn: "Download",
      testimonials_title: "Testimonials",
      contact_title: "Contact",
      contact_email: "Email",
      contact_phone: "Phone",
      contact_whatsapp: "WhatsApp",
      form_name: "Name",
      form_email: "Email",
      form_message: "Message",
      send_message: "Send message",
      footer_quote: "\"Building solutions that connect ideas with innovation.\"",
      footer_copy: "© 2026 Salvador Andrade. All rights reserved."
    },
    pt: {
      loading_title: "Construindo uma experiência única...",
      loading_subtitle: "Carregando criatividade, inovação e código.",
      nav_home: "Início",
      nav_about: "Sobre mim",
      nav_recognitions: "Reconhecimentos",
      nav_skills: "Habilidades",
      nav_projects: "Projetos",
      nav_publications: "Publicações",
      nav_testimonials: "Depoimentos",
      nav_contact: "Contato",
      download_cv_short: "CV",
      cv_short: "CV",
      available_badge: "Disponível para projetos",
      hero_motto: "\"O código não tem erros, apenas soluções esperando para serem descobertas.\"",
      view_projects: "Ver projetos",
      download_cv: "Baixar CV",
      scroll: "Rolar",
      about_title: "Sobre mim",
      about_text_1: "Sou Salvador Ernesto Andrade Peña, um desenvolvedor full-stack apaixonado por criar soluções web inovadoras.",
      about_text_2: "Com ampla experiência em desenvolvimento front-end e back-end, trabalho com tecnologias como HTML, CSS, JavaScript, PHP, Laravel, Node.js, Vue.js, React.js e NestJS.",
      about_text_3: "Sempre em busca de novas tecnologias e desafios, dedico-me a melhorar constantemente minhas habilidades e agregar valor significativo aos projetos em que participo, mesclando criatividade e eficiência em cada solução que desenvolvo.",
      download_cv_large: "Baixar meu CV",
      stat_projects: "Projetos",
      stat_tech: "Tecnologias",
      stat_passion: "Paixão",
      recognitions_title: "Reconhecimentos",
      recog_1_title: "Certificação Full-Stack",
      recog_1_institution: "Instituição Tech",
      recog_2_title: "Arquitetura de Software",
      recog_2_institution: "Academia Digital",
      recog_3_title: "Liderança Técnica",
      recog_3_institution: "Laboratório de Inovação",
      hard_skills_title: "Habilidades Técnicas",
      soft_skills_title: "Habilidades Interpessoais",
      interests_values_title: "Interesses e Valores",
      interest_ai: "Inteligência Artificial",
      interest_web: "Desenvolvimento Web",
      interest_os: "Open Source",
      interest_arch: "Arquitetura de Software",
      interest_ui: "UI/UX",
      interest_blockchain: "Blockchain",
      interest_automation: "Automação",
      interest_innovation: "Inovação",
      value_honesty: "Honestidade",
      value_commitment: "Compromisso",
      value_quality: "Qualidade",
      value_discipline: "Disciplina",
      soft_skill_1: "Liderança",
      soft_skill_2: "Trabalho em equipe",
      soft_skill_3: "Pensamento analítico",
      soft_skill_4: "Resolução de problemas",
      soft_skill_5: "Comunicação efetiva",
      soft_skill_6: "Criatividade",
      soft_skill_7: "Aprendizado contínuo",
      soft_skill_8: "Adaptabilidade",
      soft_skill_9: "Responsabilidade",
      soft_skill_10: "Gestão do tempo",
      projects_title: "Meus Projetos",
      project_1_desc: "Plataforma integral para animais de estimação.",
      project_2_desc: "Aplicativo inteligente para gestão de jardins personalizados.",
      view_project_btn: "Ver Projeto",
      more_info_btn: "Mais info",
      publications_title: "Publicações",
      pub_1_title: "Qualidade de Software",
      pub_1_desc: "Pesquisa sobre métricas e padrões.",
      pub_2_title: "Aplicações Web",
      pub_2_desc: "Análise de frameworks modernos.",
      pub_3_title: "Modelagem de Dados",
      pub_3_desc: "Estratégias para sistemas escaláveis.",
      download_btn: "Baixar",
      testimonials_title: "Depoimentos",
      contact_title: "Contato",
      contact_email: "E-mail",
      contact_phone: "Telefone",
      contact_whatsapp: "WhatsApp",
      form_name: "Nome",
      form_email: "E-mail",
      form_message: "Mensagem",
      send_message: "Enviar mensagem",
      footer_quote: "\"Construindo soluções que conectam ideias com inovação.\"",
      footer_copy: "© 2026 Salvador Andrade. Todos os direitos reservados."
    },
    zh: {
      loading_title: "正在构建独特的体验...",
      loading_subtitle: "加载创意、创新和代码。",
      nav_home: "首页",
      nav_about: "关于我",
      nav_recognitions: "荣誉",
      nav_skills: "技能",
      nav_projects: "项目",
      nav_publications: "出版物",
      nav_testimonials: "推荐",
      nav_contact: "联系",
      download_cv_short: "简历",
      cv_short: "简历",
      available_badge: "可参与项目",
      hero_motto: "\"代码没有错误，只有等待被发现的解决方案。\"",
      view_projects: "查看项目",
      download_cv: "下载简历",
      scroll: "滚动",
      about_title: "关于我",
      about_text_1: "我是Salvador Ernesto Andrade Peña，一位热衷于创建创新网络解决方案的全栈开发人员。",
      about_text_2: "凭借在前端和后端开发的丰富经验，我使用HTML、CSS、JavaScript、PHP、Laravel、Node.js、Vue.js、React.js和NestJS等技术。",
      about_text_3: "始终寻求新技术和挑战，我致力于不断提高自己的技能，并为我参与的项目提供重要价值，将创造力和效率融入我开发的每个解决方案中。",
      download_cv_large: "下载我的简历",
      stat_projects: "项目",
      stat_tech: "技术",
      stat_passion: "热情",
      recognitions_title: "荣誉",
      recog_1_title: "全栈认证",
      recog_1_institution: "Tech机构",
      recog_2_title: "软件架构",
      recog_2_institution: "数字学院",
      recog_3_title: "技术领导力",
      recog_3_institution: "创新实验室",
      hard_skills_title: "硬技能",
      soft_skills_title: "软技能",
      interests_values_title: "兴趣与价值观",
      interest_ai: "人工智能",
      interest_web: "网页开发",
      interest_os: "开源",
      interest_arch: "软件架构",
      interest_ui: "UI/UX",
      interest_blockchain: "区块链",
      interest_automation: "自动化",
      interest_innovation: "创新",
      value_honesty: "诚实",
      value_commitment: "承诺",
      value_quality: "质量",
      value_discipline: "纪律",
      soft_skill_1: "领导力",
      soft_skill_2: "团队合作",
      soft_skill_3: "分析思维",
      soft_skill_4: "解决问题",
      soft_skill_5: "有效沟通",
      soft_skill_6: "创造力",
      soft_skill_7: "持续学习",
      soft_skill_8: "适应性",
      soft_skill_9: "责任感",
      soft_skill_10: "时间管理",
      projects_title: "我的项目",
      project_1_desc: "综合宠物平台。",
      project_2_desc: "个性化花园管理智能应用。",
      view_project_btn: "查看项目",
      more_info_btn: "更多信息",
      publications_title: "出版物",
      pub_1_title: "软件质量",
      pub_1_desc: "关于度量标准和标准的研究。",
      pub_2_title: "网络应用",
      pub_2_desc: "现代框架分析。",
      pub_3_title: "数据建模",
      pub_3_desc: "可扩展系统策略。",
      download_btn: "下载",
      testimonials_title: "推荐",
      contact_title: "联系",
      contact_email: "邮箱",
      contact_phone: "电话",
      contact_whatsapp: "WhatsApp",
      form_name: "姓名",
      form_email: "邮箱",
      form_message: "消息",
      send_message: "发送消息",
      footer_quote: "\"构建连接创意与创新的解决方案。\"",
      footer_copy: "© 2026 Salvador Andrade。保留所有权利。"
    },
    ja: {
      loading_title: "ユニークな体験を構築中...",
      loading_subtitle: "創造性、革新性、コードを読み込み中。",
      nav_home: "ホーム",
      nav_about: "自己紹介",
      nav_recognitions: "表彰",
      nav_skills: "スキル",
      nav_projects: "プロジェクト",
      nav_publications: "出版物",
      nav_testimonials: "推薦状",
      nav_contact: "お問い合わせ",
      download_cv_short: "履歴書",
      cv_short: "履歴書",
      available_badge: "プロジェクト募集中",
      hero_motto: "\"コードにエラーはなく、発見を待つ解決策だけがある。\"",
      view_projects: "プロジェクトを見る",
      download_cv: "履歴書をダウンロード",
      scroll: "スクロール",
      about_title: "自己紹介",
      about_text_1: "私はSalvador Ernesto Andrade Peña、革新的なWebソリューションの作成に情熱を注ぐフルスタック開発者です。",
      about_text_2: "フロントエンドとバックエンドの両方の開発経験を持ち、HTML、CSS、JavaScript、PHP、Laravel、Node.js、Vue.js、React.js、NestJSなどの技術を使用しています。",
      about_text_3: "常に新しい技術と課題を求め、スキルを継続的に向上させ、参加するプロジェクトに大きな価値を提供することに専念し、創造性と効率性を融合させています。",
      download_cv_large: "履歴書をダウンロード",
      stat_projects: "プロジェクト",
      stat_tech: "技術",
      stat_passion: "情熱",
      recognitions_title: "表彰",
      recog_1_title: "フルスタック認定",
      recog_1_institution: "Tech機関",
      recog_2_title: "ソフトウェアアーキテクチャ",
      recog_2_institution: "デジタルアカデミー",
      recog_3_title: "テクニカルリーダーシップ",
      recog_3_institution: "イノベーションラボ",
      hard_skills_title: "ハードスキル",
      soft_skills_title: "ソフトスキル",
      interests_values_title: "興味と価値観",
      interest_ai: "人工知能",
      interest_web: "Web開発",
      interest_os: "オープンソース",
      interest_arch: "ソフトウェアアーキテクチャ",
      interest_ui: "UI/UX",
      interest_blockchain: "ブロックチェーン",
      interest_automation: "自動化",
      interest_innovation: "革新",
      value_honesty: "誠実さ",
      value_commitment: "コミットメント",
      value_quality: "品質",
      value_discipline: "規律",
      soft_skill_1: "リーダーシップ",
      soft_skill_2: "チームワーク",
      soft_skill_3: "分析的思考",
      soft_skill_4: "問題解決",
      soft_skill_5: "効果的なコミュニケーション",
      soft_skill_6: "創造性",
      soft_skill_7: "継続的学習",
      soft_skill_8: "適応性",
      soft_skill_9: "責任感",
      soft_skill_10: "時間管理",
      projects_title: "私のプロジェクト",
      project_1_desc: "総合ペットプラットフォーム。",
      project_2_desc: "パーソナライズされた庭園管理のためのスマートアプリケーション。",
      view_project_btn: "プロジェクトを見る",
      more_info_btn: "詳細",
      publications_title: "出版物",
      pub_1_title: "ソフトウェア品質",
      pub_1_desc: "メトリクスと標準に関する研究。",
      pub_2_title: "Webアプリケーション",
      pub_2_desc: "最新フレームワークの分析。",
      pub_3_title: "データモデリング",
      pub_3_desc: "スケーラブルなシステムの戦略。",
      download_btn: "ダウンロード",
      testimonials_title: "推薦状",
      contact_title: "お問い合わせ",
      contact_email: "メール",
      contact_phone: "電話",
      contact_whatsapp: "WhatsApp",
      form_name: "名前",
      form_email: "メール",
      form_message: "メッセージ",
      send_message: "送信",
      footer_quote: "\"アイデアと革新をつなぐソリューションを構築。\"",
      footer_copy: "© 2026 Salvador Andrade。全著作権所有。"
    },
    ar: {
      loading_title: "بناء تجربة فريدة...",
      loading_subtitle: "تحميل الإبداع والابتكار والكود.",
      nav_home: "الرئيسية",
      nav_about: "عني",
      nav_recognitions: "التقديرات",
      nav_skills: "المهارات",
      nav_projects: "المشاريع",
      nav_publications: "المنشورات",
      nav_testimonials: "الشهادات",
      nav_contact: "اتصل",
      download_cv_short: "السيرة",
      cv_short: "السيرة",
      available_badge: "متاح للمشاريع",
      hero_motto: "\"الكود ليس به أخطاء، فقط حلول تنتظر الاكتشاف.\"",
      view_projects: "عرض المشاريع",
      download_cv: "تحميل السيرة",
      scroll: "تمرير",
      about_title: "عني",
      about_text_1: "أنا سلفادور إرنستو أندرادي بينيا، مطور متكامل شغوف بإنشاء حلول ويب مبتكرة.",
      about_text_2: "مع خبرة واسعة في تطوير الواجهة الأمامية والخلفية، أعمل مع تقنيات مثل HTML، CSS، JavaScript، PHP، Laravel، Node.js، Vue.js، React.js و NestJS.",
      about_text_3: "أبحث دائمًا عن تقنيات وتحديات جديدة، وأكرس نفسي لتحسين مهاراتي باستمرار وتقديم قيمة كبيرة للمشاريع التي أشارك فيها، مع دمج الإبداع والكفاءة.",
      download_cv_large: "تحميل سيرتي الذاتية",
      stat_projects: "مشروع",
      stat_tech: "تقنية",
      stat_passion: "شغف",
      recognitions_title: "التقديرات",
      recog_1_title: "شهادة المطور المتكامل",
      recog_1_institution: "مؤسسة التقنية",
      recog_2_title: "هندسة البرمجيات",
      recog_2_institution: "الأكاديمية الرقمية",
      recog_3_title: "القيادة التقنية",
      recog_3_institution: "مختبر الابتكار",
      hard_skills_title: "المهارات التقنية",
      soft_skills_title: "المهارات الشخصية",
      interests_values_title: "الاهتمامات والقيم",
      interest_ai: "الذكاء الاصطناعي",
      interest_web: "تطوير الويب",
      interest_os: "المصدر المفتوح",
      interest_arch: "هندسة البرمجيات",
      interest_ui: "UI/UX",
      interest_blockchain: "بلوكتشين",
      interest_automation: "الأتمتة",
      interest_innovation: "الابتكار",
      value_honesty: "الصدق",
      value_commitment: "الالتزام",
      value_quality: "الجودة",
      value_discipline: "الانضباط",
      soft_skill_1: "القيادة",
      soft_skill_2: "العمل الجماعي",
      soft_skill_3: "التفكير التحليلي",
      soft_skill_4: "حل المشكلات",
      soft_skill_5: "التواصل الفعال",
      soft_skill_6: "الإبداع",
      soft_skill_7: "التعلم المستمر",
      soft_skill_8: "القدرة على التكيف",
      soft_skill_9: "المسؤولية",
      soft_skill_10: "إدارة الوقت",
      projects_title: "مشاريعي",
      project_1_desc: "منصة شاملة للحيوانات الأليفة.",
      project_2_desc: "تطبيق ذكي لإدارة الحدائق المخصصة.",
      view_project_btn: "عرض المشروع",
      more_info_btn: "مزيد من المعلومات",
      publications_title: "المنشورات",
      pub_1_title: "جودة البرمجيات",
      pub_1_desc: "بحث حول المقاييس والمعايير.",
      pub_2_title: "تطبيقات الويب",
      pub_2_desc: "تحليل الأطر الحديثة.",
      pub_3_title: "نمذجة البيانات",
      pub_3_desc: "استراتيجيات للأنظمة القابلة للتوسع.",
      download_btn: "تحميل",
      testimonials_title: "الشهادات",
      contact_title: "اتصل",
      contact_email: "البريد",
      contact_phone: "الهاتف",
      contact_whatsapp: "واتساب",
      form_name: "الاسم",
      form_email: "البريد",
      form_message: "الرسالة",
      send_message: "إرسال",
      footer_quote: "\"بناء حلول تربط الأفكار بالابتكار.\"",
      footer_copy: "© 2026 سلفادور أندرادي. جميع الحقوق محفوظة."
    },
    hi: {
      loading_title: "एक अनूठा अनुभव बना रहे हैं...",
      loading_subtitle: "रचनात्मकता, नवाचार और कोड लोड हो रहा है।",
      nav_home: "होम",
      nav_about: "मेरे बारे में",
      nav_recognitions: "मान्यताएं",
      nav_skills: "कौशल",
      nav_projects: "परियोजनाएं",
      nav_publications: "प्रकाशन",
      nav_testimonials: "प्रशंसापत्र",
      nav_contact: "संपर्क",
      download_cv_short: "CV",
      cv_short: "CV",
      available_badge: "परियोजनाओं के लिए उपलब्ध",
      hero_motto: "\"कोड में त्रुटियां नहीं हैं, केवल समाधान खोजे जाने की प्रतीक्षा में हैं।\"",
      view_projects: "परियोजनाएं देखें",
      download_cv: "CV डाउनलोड करें",
      scroll: "स्क्रॉल",
      about_title: "मेरे बारे में",
      about_text_1: "मैं साल्वाडोर अर्नेस्टो आंद्रेड पेना हूं, एक फुल-स्टैक डेवलपर जो नवीन वेब समाधान बनाने का जुनून रखता हूं।",
      about_text_2: "फ्रंट-एंड और बैक-एंड दोनों विकास में व्यापक अनुभव के साथ, मैं HTML, CSS, JavaScript, PHP, Laravel, Node.js, Vue.js, React.js और NestJS जैसी तकनीकों के साथ काम करता हूं।",
      about_text_3: "हमेशा नई तकनीकों और चुनौतियों की तलाश में, मैं अपने कौशल में लगातार सुधार करने और उन परियोजनाओं में महत्वपूर्ण मूल्य जोड़ने के लिए समर्पित हूं जिनमें मैं भाग लेता हूं, रचनात्मकता और दक्षता का सम्मिश्रण करता हूं।",
      download_cv_large: "मेरा CV डाउनलोड करें",
      stat_projects: "परियोजनाएं",
      stat_tech: "तकनीकें",
      stat_passion: "जुनून",
      recognitions_title: "मान्यताएं",
      recog_1_title: "फुल-स्टैक प्रमाणन",
      recog_1_institution: "टेक संस्थान",
      recog_2_title: "सॉफ्टवेयर आर्किटेक्चर",
      recog_2_institution: "डिजिटल अकादमी",
      recog_3_title: "तकनीकी नेतृत्व",
      recog_3_institution: "इनोवेशन लैब",
      hard_skills_title: "तकनीकी कौशल",
      soft_skills_title: "सॉफ्ट स्किल्स",
      interests_values_title: "रुचियां और मूल्य",
      interest_ai: "कृत्रिम बुद्धिमत्ता",
      interest_web: "वेब विकास",
      interest_os: "ओपन सोर्स",
      interest_arch: "सॉफ्टवेयर आर्किटेक्चर",
      interest_ui: "UI/UX",
      interest_blockchain: "ब्लॉकचेन",
      interest_automation: "स्वचालन",
      interest_innovation: "नवाचार",
      value_honesty: "ईमानदारी",
      value_commitment: "प्रतिबद्धता",
      value_quality: "गुणवत्ता",
      value_discipline: "अनुशासन",
      soft_skill_1: "नेतृत्व",
      soft_skill_2: "टीम वर्क",
      soft_skill_3: "विश्लेषणात्मक सोच",
      soft_skill_4: "समस्या समाधान",
      soft_skill_5: "प्रभावी संचार",
      soft_skill_6: "रचनात्मकता",
      soft_skill_7: "निरंतर सीखना",
      soft_skill_8: "अनुकूलनशीलता",
      soft_skill_9: "जिम्मेदारी",
      soft_skill_10: "समय प्रबंधन",
      projects_title: "मेरी परियोजनाएं",
      project_1_desc: "व्यापक पालतू प्लेटफॉर्म।",
      project_2_desc: "व्यक्तिगत उद्यान प्रबंधन के लिए स्मार्ट एप्लिकेशन।",
      view_project_btn: "प्रोजेक्ट देखें",
      more_info_btn: "अधिक जानकारी",
      publications_title: "प्रकाशन",
      pub_1_title: "सॉफ्टवेयर गुणवत्ता",
      pub_1_desc: "मेट्रिक्स और मानकों पर शोध।",
      pub_2_title: "वेब एप्लिकेशन",
      pub_2_desc: "आधुनिक फ्रेमवर्क का विश्लेषण।",
      pub_3_title: "डेटा मॉडलिंग",
      pub_3_desc: "स्केलेबल सिस्टम के लिए रणनीतियां।",
      download_btn: "डाउनलोड",
      testimonials_title: "प्रशंसापत्र",
      contact_title: "संपर्क",
      contact_email: "ईमेल",
      contact_phone: "फोन",
      contact_whatsapp: "व्हाट्सएप",
      form_name: "नाम",
      form_email: "ईमेल",
      form_message: "संदेश",
      send_message: "भेजें",
      footer_quote: "\"विचारों को नवाचार से जोड़ने वाले समाधान बना रहे हैं।\"",
      footer_copy: "© 2026 साल्वाडोर आंद्रेड। सर्वाधिकार सुरक्षित।"
    },
    ru: {
      loading_title: "Создаем уникальный опыт...",
      loading_subtitle: "Загрузка творчества, инноваций и кода.",
      nav_home: "Главная",
      nav_about: "Обо мне",
      nav_recognitions: "Достижения",
      nav_skills: "Навыки",
      nav_projects: "Проекты",
      nav_publications: "Публикации",
      nav_testimonials: "Отзывы",
      nav_contact: "Контакты",
      download_cv_short: "Резюме",
      cv_short: "Резюме",
      available_badge: "Доступен для проектов",
      hero_motto: "\"В коде нет ошибок, есть только решения, ждущие открытия.\"",
      view_projects: "Смотреть проекты",
      download_cv: "Скачать резюме",
      scroll: "Прокрутка",
      about_title: "Обо мне",
      about_text_1: "Я Сальвадор Эрнесто Андраде Пенья, фулл-стек разработчик, увлеченный созданием инновационных веб-решений.",
      about_text_2: "С обширным опытом как во фронтенд, так и в бэкенд разработке, я работаю с технологиями HTML, CSS, JavaScript, PHP, Laravel, Node.js, Vue.js, React.js и NestJS.",
      about_text_3: "Всегда в поиске новых технологий и вызовов, я постоянно совершенствую свои навыки и вношу значительный вклад в проекты, в которых участвую, сочетая творчество и эффективность.",
      download_cv_large: "Скачать мое резюме",
      stat_projects: "Проектов",
      stat_tech: "Технологий",
      stat_passion: "Страсть",
      recognitions_title: "Достижения",
      recog_1_title: "Сертификация Full-Stack",
      recog_1_institution: "Технологический институт",
      recog_2_title: "Архитектура ПО",
      recog_2_institution: "Цифровая академия",
      recog_3_title: "Техническое лидерство",
      recog_3_institution: "Лаборатория инноваций",
      hard_skills_title: "Технические навыки",
      soft_skills_title: "Гибкие навыки",
      interests_values_title: "Интересы и ценности",
      interest_ai: "Искусственный интеллект",
      interest_web: "Веб-разработка",
      interest_os: "Open Source",
      interest_arch: "Архитектура ПО",
      interest_ui: "UI/UX",
      interest_blockchain: "Блокчейн",
      interest_automation: "Автоматизация",
      interest_innovation: "Инновации",
      value_honesty: "Честность",
      value_commitment: "Обязательность",
      value_quality: "Качество",
      value_discipline: "Дисциплина",
      soft_skill_1: "Лидерство",
      soft_skill_2: "Работа в команде",
      soft_skill_3: "Аналитическое мышление",
      soft_skill_4: "Решение проблем",
      soft_skill_5: "Эффективная коммуникация",
      soft_skill_6: "Креативность",
      soft_skill_7: "Непрерывное обучение",
      soft_skill_8: "Адаптивность",
      soft_skill_9: "Ответственность",
      soft_skill_10: "Управление временем",
      projects_title: "Мои проекты",
      project_1_desc: "Комплексная платформа для домашних животных.",
      project_2_desc: "Умное приложение для управления персонализированными садами.",
      view_project_btn: "Смотреть проект",
      more_info_btn: "Подробнее",
      publications_title: "Публикации",
      pub_1_title: "Качество ПО",
      pub_1_desc: "Исследование метрик и стандартов.",
      pub_2_title: "Веб-приложения",
      pub_2_desc: "Анализ современных фреймворков.",
      pub_3_title: "Моделирование данных",
      pub_3_desc: "Стратегии масштабируемых систем.",
      download_btn: "Скачать",
      testimonials_title: "Отзывы",
      contact_title: "Контакты",
      contact_email: "Почта",
      contact_phone: "Телефон",
      contact_whatsapp: "WhatsApp",
      form_name: "Имя",
      form_email: "Почта",
      form_message: "Сообщение",
      send_message: "Отправить",
      footer_quote: "\"Создаем решения, соединяющие идеи с инновациями.\"",
      footer_copy: "© 2026 Сальвадор Андраде. Все права защищены."
    }
  };

  // ---------- FUNCIÓN DE TRADUCCIÓN ----------
  function setLanguage(lang) {
    document.documentElement.lang = lang;
    localStorage.setItem('preferredLanguage', lang);
    
    // Actualizar todos los elementos con data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
    
    // Actualizar placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (translations[lang] && translations[lang][key]) {
        el.placeholder = translations[lang][key];
      }
    });
    
    // Actualizar bandera en el botón
    const flags = { es: '🇪🇸', en: '🇬🇧', pt: '🇧🇷', zh: '🇨🇳', ja: '🇯🇵', ar: '🇸🇦', hi: '🇮🇳', ru: '🇷🇺' };
    const flagSpan = document.getElementById('current-lang-flag');
    if (flagSpan && flags[lang]) {
      flagSpan.textContent = flags[lang];
    }
    
    // Reiniciar Typed con idioma correcto
    if (window.typedInstance) {
      window.typedInstance.destroy();
    }
    const typedStrings = {
      es: ['Desarrollador Full-Stack', 'Arquitecto de Software', 'Innovador Digital'],
      en: ['Full-Stack Developer', 'Software Architect', 'Digital Innovator'],
      pt: ['Desenvolvedor Full-Stack', 'Arquiteto de Software', 'Inovador Digital'],
      zh: ['全栈开发人员', '软件架构师', '数字创新者'],
      ja: ['フルスタック開発者', 'ソフトウェアアーキテクト', 'デジタルイノベーター'],
      ar: ['مطور متكامل', 'مهندس برمجيات', 'مبتكر رقمي'],
      hi: ['फुल-स्टैक डेवलपर', 'सॉफ्टवेयर आर्किटेक्ट', 'डिजिटल इनोवेटर'],
      ru: ['Фулл-стек разработчик', 'Архитектор ПО', 'Цифровой инноватор']
    };
    
    window.typedInstance = new Typed('#typed-text', {
      strings: typedStrings[lang] || typedStrings['es'],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true
    });
    
    // Actualizar soft skills dinámicas
    updateSoftSkills(lang);
  }
  
  function updateSoftSkills(lang) {
    const softSkillsGrid = document.getElementById('soft-skills-grid');
    if (!softSkillsGrid) return;
    
    const icons = ['ri-user-star-line', 'ri-team-line', 'ri-brain-line', 'ri-lightbulb-line', 
                   'ri-chat-3-line', 'ri-palette-line', 'ri-refresh-line', 'ri-shuffle-line', 
                   'ri-shield-check-line', 'ri-timer-line'];
    
    const skills = [];
    for (let i = 1; i <= 10; i++) {
      const key = `soft_skill_${i}`;
      if (translations[lang] && translations[lang][key]) {
        skills.push(translations[lang][key]);
      }
    }
    
    if (skills.length === 10) {
      softSkillsGrid.innerHTML = skills.map((skill, i) => 
        `<div class="soft-skill-card"><i class="${icons[i]}"></i><span>${skill}</span></div>`
      ).join('');
    }
  }
  
  // ---------- EVENTOS DE IDIOMA ----------
  const langToggleBtn = document.getElementById('lang-toggle-btn');
  const langDropdown = document.getElementById('language-dropdown');
  
  if (langToggleBtn && langDropdown) {
    langToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langDropdown.classList.toggle('active');
    });
    
    document.addEventListener('click', (e) => {
      if (!langDropdown.contains(e.target) && e.target !== langToggleBtn) {
        langDropdown.classList.remove('active');
      }
    });
  }
  
  // Opciones de idioma (desktop y mobile)
  document.querySelectorAll('.lang-option, .lang-option-mobile').forEach(btn => {
    btn.addEventListener('click', function() {
      const lang = this.getAttribute('data-lang');
      setLanguage(lang);
      if (langDropdown) langDropdown.classList.remove('active');
      // Cerrar menú móvil si está abierto
      const menu = document.getElementById('navbar-menu');
      if (menu && menu.classList.contains('active')) {
        menu.classList.remove('active');
      }
    });
  });
  
  // ---------- LOADING SCREEN ----------
  const loadingScreen = document.getElementById('loading-screen');
  const progressBar = document.getElementById('progress-bar');
  const loadingPercentage = document.getElementById('loading-percentage');
  const mainContent = document.getElementById('main-content');
  
  const progressSteps = [0, 15, 35, 67, 89, 100];
  let currentStep = 0;
  
  const simulateLoading = () => {
    if (currentStep < progressSteps.length) {
      const value = progressSteps[currentStep];
      progressBar.style.width = value + '%';
      loadingPercentage.textContent = value + '%';
      currentStep++;
      setTimeout(simulateLoading, 400 + Math.random() * 300);
    } else {
      setTimeout(() => {
        loadingScreen.style.opacity = '0';
        loadingScreen.style.visibility = 'hidden';
        mainContent.style.opacity = '1';
        mainContent.style.visibility = 'visible';
        document.body.style.cursor = 'auto';
        initApp();
      }, 500);
    }
  };
  
  simulateLoading();

  function initApp() {
    // ---------- CUSTOM CURSOR ----------
    const cursor = document.getElementById('custom-cursor');
    const dot = document.getElementById('cursor-dot');
    
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      document.addEventListener('mousemove', (e) => {
        gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.6, ease: 'power2.out' });
        gsap.to(dot, { x: e.clientX, y: e.clientY, duration: 0.1 });
      });
      
      // Efecto hover en enlaces y botones
      document.querySelectorAll('a, button, .btn, .recognition-card, .project-card, .testimonial-card').forEach(el => {
        el.addEventListener('mouseenter', () => {
          gsap.to(cursor, { width: 60, height: 60, borderColor: '#a78bfa', duration: 0.3 });
        });
        el.addEventListener('mouseleave', () => {
          gsap.to(cursor, { width: 40, height: 40, borderColor: '#6c5ce7', duration: 0.3 });
        });
      });
    }

    // ---------- THEME TOGGLE ----------
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    const savedTheme = localStorage.getItem('theme') || 'dark';
    html.setAttribute('data-theme', savedTheme);
    
    themeToggle.addEventListener('click', () => {
      const current = html.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      
      // Animación de transición
      document.body.style.transition = 'background-color 0.5s ease, color 0.5s ease';
      html.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      
      setTimeout(() => {
        document.body.style.transition = '';
      }, 500);
    });

    // ---------- NAVBAR SCROLL ----------
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    // ---------- MOBILE MENU ----------
    const toggle = document.getElementById('mobile-menu-toggle');
    const menu = document.getElementById('navbar-menu');
    
    toggle.addEventListener('click', () => {
      menu.classList.toggle('active');
      toggle.setAttribute('aria-expanded', menu.classList.contains('active'));
      document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
    });
    
    // Cerrar menú al hacer click en un enlace
    menu.querySelectorAll('.navbar-link').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // ---------- PARTICLES ----------
    if (typeof particlesJS !== 'undefined') {
      particlesJS('particles-js', {
        particles: {
          number: { value: 40, density: { enable: true, value_area: 800 } },
          color: { value: '#6c5ce7' },
          shape: { type: 'circle' },
          opacity: { value: 0.3, random: true },
          size: { value: 2, random: true },
          line_linked: { enable: true, color: '#6c5ce7', opacity: 0.1, distance: 150 },
          move: { enable: true, speed: 0.5, direction: 'none', random: true }
        },
        interactivity: {
          detect_on: 'canvas',
          events: { onhover: { enable: true, mode: 'grab' } },
          modes: { grab: { distance: 140, line_linked: { opacity: 0.3 } } }
        }
      });
    }

    // ---------- TYPED.JS (se inicializa con setLanguage) ----------
    
    // ---------- AOS ----------
    AOS.init({ 
      duration: 800, 
      once: true,
      disable: window.innerWidth < 768 ? 'phone' : false
    });

    // ---------- SWIPERS ----------
    new Swiper('.recognitions-swiper', { 
      slidesPerView: 1.1, 
      spaceBetween: 16, 
      breakpoints: { 
        480: { slidesPerView: 1.5 },
        640: { slidesPerView: 2 }, 
        1024: { slidesPerView: 3 } 
      }, 
      pagination: { el: '.swiper-pagination', clickable: true } 
    });
    
    new Swiper('.projects-swiper', { 
      slidesPerView: 1.1, 
      spaceBetween: 16, 
      breakpoints: { 
        640: { slidesPerView: 1.5 },
        768: { slidesPerView: 2 } 
      } 
    });
    
    new Swiper('.publications-swiper', { 
      slidesPerView: 1.1, 
      spaceBetween: 16, 
      breakpoints: { 
        480: { slidesPerView: 1.5 },
        640: { slidesPerView: 2 }, 
        1024: { slidesPerView: 3 } 
      } 
    });

    // ---------- SKILLS DINÁMICAS ----------
    const skills = [
      { name: 'HTML5', pct: 98 }, { name: 'CSS3', pct: 95 }, { name: 'JavaScript', pct: 95 },
      { name: 'TypeScript', pct: 90 }, { name: 'PHP', pct: 90 }, { name: 'Laravel', pct: 90 },
      { name: 'Node.js', pct: 90 }, { name: 'NestJS', pct: 88 }, { name: 'Vue.js', pct: 85 },
      { name: 'React.js', pct: 85 }, { name: 'MySQL', pct: 90 }, { name: 'PostgreSQL', pct: 82 },
      { name: 'MongoDB', pct: 80 }, { name: 'Git', pct: 92 }, { name: 'GitHub', pct: 90 }, { name: 'Docker', pct: 75 }
    ];
    
    const grid = document.getElementById('skills-grid');
    if (grid) {
      skills.forEach(s => {
        const card = document.createElement('div');
        card.className = 'skill-card';
        card.innerHTML = `
          <div class="skill-header">
            <span>${s.name}</span>
            <span>${s.pct}%</span>
          </div>
          <div class="skill-bar-bg">
            <div class="skill-bar-fill" data-width="${s.pct}"></div>
          </div>`;
        grid.appendChild(card);
      });

      // Animación de barras con ScrollTrigger
      gsap.utils.toArray('.skill-bar-fill').forEach(bar => {
        gsap.fromTo(bar, 
          { width: '0%' }, 
          { 
            width: bar.dataset.width + '%', 
            duration: 1.5, 
            ease: 'power2.out',
            scrollTrigger: { 
              trigger: bar, 
              start: 'top 85%',
              toggleActions: 'play none none none'
            } 
          }
        );
      });
    }

    // Contadores animados
    gsap.utils.toArray('.stat-number[data-target]').forEach(el => {
      const target = parseInt(el.dataset.target);
      gsap.fromTo(el, 
        { innerText: 0 }, 
        { 
          innerText: target, 
          duration: 2, 
          snap: { innerText: 1 },
          ease: 'power2.out',
          scrollTrigger: { 
            trigger: el, 
            start: 'top 85%',
            toggleActions: 'play none none none'
          } 
        }
      );
    });

    // ---------- INICIALIZAR IDIOMA ----------
    const savedLang = localStorage.getItem('preferredLanguage') || 'es';
    setLanguage(savedLang);
  }

  // ---------- MODAL GLOBAL ----------
  window.openModal = function(id) {
    const container = document.getElementById('modal-container');
    const lang = localStorage.getItem('preferredLanguage') || 'es';
    const titles = {
      es: 'Detalle', en: 'Detail', pt: 'Detalhe', zh: '详情', ja: '詳細', ar: 'تفاصيل', hi: 'विवरण', ru: 'Детали'
    };
    const closeTexts = {
      es: 'Cerrar', en: 'Close', pt: 'Fechar', zh: '关闭', ja: '閉じる', ar: 'إغلاق', hi: 'बंद करें', ru: 'Закрыть'
    };
    
    container.innerHTML = `
      <div class="modal-overlay" onclick="closeModal()"></div>
      <div class="modal-content" role="dialog" aria-modal="true">
        <button onclick="closeModal()" style="float:right;background:none;border:none;color:inherit;font-size:1.5rem;cursor:pointer;" aria-label="${closeTexts[lang] || 'Close'}">&times;</button>
        <h3>${titles[lang] || 'Detail'}</h3>
        <p>${id}</p>
      </div>`;
    container.classList.add('active');
    document.body.style.overflow = 'hidden';
  };
  
  window.closeModal = function() {
    const container = document.getElementById('modal-container');
    container.classList.remove('active');
    document.body.style.overflow = '';
  };
  
  // Cerrar modal con tecla Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });
});