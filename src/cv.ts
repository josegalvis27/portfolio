import type { Lang } from "@/content";

type Group = { title: string; bullets: string[] };
type Job = { role: string; company: string; period: string; place: string; context?: string; groups: Group[]; stack?: string };

export type Resume = {
  title: string;
  location: string;
  labels: {
    summary: string;
    experience: string;
    education: string;
    skills: string;
    certifications: string;
    awards: string;
    download: string;
    other: string;
    back: string;
  };
  summary: string;
  jobs: Job[];
  education: { degree: string; school: string; period: string; place: string }[];
  skills: { title: string; items: string[] }[];
  certifications: { name: string; issuer: string; url?: string }[];
  awards: { name: string; issuer: string }[];
};

export const resume: Record<Lang, Resume> = {
  en: {
    title: "Chief Technology Officer · Fintech & Web3 · Mobile (Flutter)",
    location: "Caracas, Venezuela (remote)",
    labels: {
      summary: "Summary",
      experience: "Work experience",
      education: "Education",
      skills: "Skills",
      certifications: "Certifications",
      awards: "Awards",
      download: "Download PDF",
      other: "Versión en español",
      back: "Portfolio",
    },
    summary:
      "Computer Engineer and CTO of Coco Wallet and Coco Mercado, a self-custodial wallet with 190,000+ registered users and US$75M+ moved through fiat on/off-ramps across 9 markets in the Americas and Europe. I own architecture, mobile, payments, security and releases, leading a team of 3 engineers and 3 QA. As part of the team, I helped scale monthly operations 4× in two years while cutting RPC infrastructure cost by 75%. I moved the wallet from seed phrases to MPC/TSS and to gasless account abstraction (ERC-4337), integrated 10+ payment and KYC providers, and built an AI-agent engineering process from spec to E2E. Co-founder of Staff On.",
    jobs: [
      {
        role: "Chief Technology Officer — Tech Lead and Mobile Engineer",
        company: "Coco Market Inc. — Coco Wallet & Coco Mercado",
        period: "2022 – present",
        place: "Remote, Venezuela",
        context:
          "Self-custodial wallet with on/off-ramps in Venezuela, Colombia, Argentina, Peru, Mexico, Brazil, the United States, Canada and the European Union.",
        groups: [
          {
            title: "Growth and scale",
            bullets: [
              "As part of the team, scaled the platform through 4× growth in two years: from ~10,000 to ~40,000 monthly operations and from 1,650 to 4,700 monthly transacting users.",
              "190,000+ registered users, ~1,800 daily operations and US$75M+ moved across ~800,000 completed operations.",
            ],
          },
          {
            title: "Web3 and blockchain infrastructure",
            bullets: [
              "Led the migration of 3,500+ funded users from seed-phrase wallets to MPC/TSS with zero loss of funds.",
              "Shipped account abstraction (ERC-4337) with a paymaster and gasless transactions on Polygon, Optimism, Base, BNB Chain and Celo.",
              "Cut gas per sponsored transaction by 64% through dynamic bundler estimation, validated on-chain.",
              "Removed ~83% of send failures by tracing them to one root cause (UserOp nonce) and moving nonce handling client-side.",
              "Cut RPC spend by 75% (US$80 to US$20 per day, ~US$22K per year) after diagnosing a miscalibrated deposit monitor.",
            ],
          },
          {
            title: "Payments and product",
            bullets: [
              "Integrated 10+ ramp and KYC providers: Bridge (USD, EUR, MXN, BRL, COP), Ripio (AR, CO, MX), Venezuelan Pago Móvil through 3 providers, Bizum, Zelle, PayPal, Stripe, Ramp and Sumsub.",
              "Built Millo, an on-chain lottery mini app on Base paid in USDC, and Rumbo, a travel mini app with USDC checkout.",
            ],
          },
          {
            title: "Security",
            bullets: [
              "Contained a ~63,000-request attack: forensics, WAF blocking, closing the exploited vectors and an internal blocking tool.",
              "Added chain and currency guards to withdrawals after an incident where funds were sent to the wrong network.",
            ],
          },
          {
            title: "Leadership and delivery",
            bullets: [
              "Lead 3 engineers and 3 QA plus interns; mentored 3 people into the team.",
              "Set the roadmap with Product, own go/no-go release decisions and manage store publishing.",
              "Authored 500+ merged PRs (44% of the repository) and 39 epics; the team closed ~1,500 QA tickets.",
            ],
          },
          {
            title: "Mobile development with Flutter",
            bullets: [
              "Defined the app architecture: feature-based Clean Architecture (34 modules), Provider and BLoC, GetIt injection, dev/prod flavors and an in-house token-based design system.",
              "Built the quality baseline: 245 unit, widget and golden test suites (with CI tolerance) and 44 Maestro E2E flows.",
              "Integrated native and third-party SDKs: Particle (MPC), Sumsub, Ramp, Kustomer, Firebase (FCM, Remote Config, Analytics), Sentry and ML Kit for OCR data capture.",
              "Built key screens: the new Home, a coach-mark onboarding tutorial, forced update, single-screen Pago Móvil and transaction receipts.",
              "Ship to the App Store and Google Play and resolved review rejections: purpose strings, ATT and the iPad OTP layout.",
              "Fixed a release-only iOS crash caused by duplicated native dependencies (SnapKit/SwiftyJSON) across static and dynamic linking.",
            ],
          },
          {
            title: "CI/CD and AI engineering",
            bullets: [
              "Built the GitHub Actions pipelines that build, sign and deliver the Android APK and iOS IPA to QA on every merge, regenerate golden tests and monitor iOS credential expiry.",
              "Designed a 10-agent implementation graph that takes a feature from spec to green tests and E2E, with adversarial audits.",
              "Built an agent “office” (planning, development, QA, code review, security, support, release) with human approval gates; adopted by product marketing.",
              "Built a video pipeline using real app screens and a cloned voice: 4K tutorials for 10 countries.",
            ],
          },
        ],
        stack:
          "Flutter/Dart, Node.js, AWS Lambda/Serverless, MongoDB, EVM, ERC-4337, MPC/TSS, Alchemy, Particle, Firebase, Sentry, PostHog, GitHub Actions, Maestro, Claude Code, MCP.",
      },
      {
        role: "Co-founder",
        company: "Staff On — staffon.app",
        period: "2026 – present",
        place: "Caracas, Venezuela",
        groups: [
          {
            title: "",
            bullets: [
              "Co-founded a marketplace that connects companies with temporary talent for events: Flutter app, Node.js/Express API and web dashboard.",
              "Built shifts, automatic contracts, two-part verified payments, ratings and BCV exchange-rate support; set up the agent office and Maestro E2E flows.",
            ],
          },
        ],
      },
      {
        role: "Full Stack Web Developer",
        company: "Social Oplesk",
        period: "04/2022 – 08/2022",
        place: "Remote, Venezuela",
        groups: [
          {
            title: "",
            bullets: [
              "Built web applications with React, Node.js and MongoDB.",
              "1st place, Telegram chatbot hackathon; 2nd place, crypto wallet hackathon (July 2022).",
            ],
          },
        ],
      },
      {
        role: "Programming Teaching Assistant",
        company: "School of Engineering — Universidad Central de Venezuela",
        period: "03/2019 – 12/2021",
        place: "Caracas, Venezuela",
        groups: [{ title: "", bullets: ["Taught programming labs and tutoring sessions to student groups for nearly 3 years."] }],
      },
    ],
    education: [
      { degree: "B.S. in Computer Engineering", school: "Universidad Alejandro de Humboldt", period: "Completed · graduation 11/2026", place: "Caracas, Venezuela" },
      { degree: "Diploma in Web3 and Blockchain Development", school: "Universidad Católica Andrés Bello", period: "11/2024 – present", place: "Caracas, Venezuela" },
    ],
    skills: [
      {
        title: "Leadership",
        items: [
          "Engineering and QA team management",
          "Roadmap with Product and release decisions",
          "App Store and Google Play publishing",
          "Security incident response",
          "Mentoring and team development",
          "Scrum",
        ],
      },
      {
        title: "Technical",
        items: [
          "Mobile: Flutter/Dart, Clean Architecture, Provider/BLoC, GetIt, design systems, iOS/Android builds",
          "Backend and cloud: Node.js, AWS Lambda, WAF, CloudWatch, MongoDB, Python",
          "Web3: EVM, ERC-4337, MPC/TSS, Alchemy, Particle",
          "Payments: on/off-ramps, KYC (Sumsub), Bridge, Ripio, Stripe, Ramp",
          "Quality: unit, widget and golden tests; Maestro E2E; CI",
          "Observability: Sentry, PostHog, GA4",
          "Applied AI: Claude Code, agents, skills, MCP",
          "Web: React, Next.js, JavaScript, HTML/CSS",
          "Languages: Spanish (native), English (B1, improving)",
        ],
      },
    ],
    certifications: [
      { name: "Claude Code in Action — March 2026", issuer: "Anthropic", url: "https://verify.skilljar.com/c/8i57yi8btx7y" },
      { name: "Introduction to Model Context Protocol — March 2026", issuer: "Anthropic", url: "https://verify.skilljar.com/c/2aw3koz22e9t" },
      { name: "Introduction to Subagents — March 2026", issuer: "Anthropic", url: "https://verify.skilljar.com/c/4wcdr83jf4jd" },
      { name: "Claude 101 — March 2026", issuer: "Anthropic", url: "https://verify.skilljar.com/c/r235mujhccvm" },
      { name: "Advanced Flutter — October 2026 · 35 h", issuer: "Udemy (Fernando Herrera)", url: "https://www.udemy.com/certificate/UC-cf70fd6f-36c1-4498-95ea-05ccf4ebf4d8/" },
      { name: "Flutter Mobile: Zero to Expert — August 2024 · 50.5 h", issuer: "Udemy (Fernando Herrera)", url: "https://www.udemy.com/certificate/UC-ad4fa6be-1725-4f0f-bb2f-dac6d899a764/" },
      { name: "JavaScript Algorithms and Data Structures — July 2022", issuer: "freeCodeCamp", url: "https://www.freecodecamp.org/certification/fcc59fd1204-2ccd-4efa-a241-c8ef46456d6c/javascript-algorithms-and-data-structures" },
      { name: "Java Programming — July 2019", issuer: "CENEAC Producciones UCV" },
      { name: "Introduction to Programming I and II — July 2017", issuer: "CENEAC Producciones UCV" },
    ],
    awards: [
      { name: "1st place, Telegram ChatBot Hackathon", issuer: "Social Oplesk — July 2022" },
      { name: "2nd place, Crypto Wallet Hackathon", issuer: "Social Oplesk — July 2022" },
    ],
  },
  es: {
    title: "Chief Technology Officer · Fintech y Web3 · Mobile (Flutter)",
    location: "Caracas, Venezuela (remoto)",
    labels: {
      summary: "Resumen",
      experience: "Experiencia laboral",
      education: "Educación",
      skills: "Habilidades",
      certifications: "Certificados",
      awards: "Reconocimientos",
      download: "Descargar PDF",
      other: "English version",
      back: "Portafolio",
    },
    summary:
      "Ingeniero en Informática y CTO de Coco Wallet y Coco Mercado, billetera self-custodial con más de 190.000 usuarios registrados y más de US$ 75 M movidos en rampas fiat de 9 mercados de América y Europa. Lidero arquitectura, mobile, pagos, seguridad y releases con un equipo de 3 desarrolladores y 3 QA. Como parte del equipo, acompañé un crecimiento ×4 en operaciones mensuales en dos años mientras el costo de infraestructura RPC bajaba 75 %. Llevé la wallet de frase semilla a MPC/TSS y a account abstraction (ERC-4337) sin gas, integré más de 10 proveedores de pagos y KYC, y construí un proceso de ingeniería con agentes de IA, de la spec al E2E. Co-founder de Staff On.",
    jobs: [
      {
        role: "Chief Technology Officer — Líder Técnico y Desarrollador Móvil",
        company: "Coco Market Inc. — Coco Wallet y Coco Mercado",
        period: "2022 – presente",
        place: "Remoto, Venezuela",
        context:
          "Wallet self-custodial con on/off-ramps en Venezuela, Colombia, Argentina, Perú, México, Brasil, Estados Unidos, Canadá y la Unión Europea.",
        groups: [
          {
            title: "Crecimiento y escala",
            bullets: [
              "Como parte del equipo, llevé la plataforma por un crecimiento ×4 en dos años: de ~10.000 a ~40.000 operaciones al mes y de 1.650 a 4.700 usuarios que operan cada mes.",
              "Más de 190.000 usuarios registrados, ~1.800 operaciones diarias y más de US$ 75 M movidos en casi 800.000 operaciones completadas.",
            ],
          },
          {
            title: "Web3 e infraestructura blockchain",
            bullets: [
              "Lideré la migración de frase semilla a MPC/TSS de más de 3.500 usuarios con saldo, sin pérdida de fondos.",
              "Implementé account abstraction (ERC-4337) con paymaster y transacciones sin gas en Polygon, Optimism, Base, BNB Chain y Celo.",
              "Bajé 64 % el gas por transacción patrocinada con estimación dinámica del bundler, validado on-chain.",
              "Eliminé ~83 % de los errores de envío al encontrar su causa raíz común (nonce de UserOps) y llevar su manejo al cliente.",
              "Bajé 75 % el costo de RPC (de US$ 80 a US$ 20 por día, ~US$ 22.000 al año) tras diagnosticar un monitor de depósitos mal calibrado.",
            ],
          },
          {
            title: "Pagos y producto",
            bullets: [
              "Integré más de 10 proveedores de rampas y KYC: Bridge (USD, EUR, MXN, BRL, COP), Ripio (AR, CO, MX), Pago Móvil con 3 proveedores, Bizum, Zelle, PayPal, Stripe, Ramp y Sumsub.",
              "Construí Millo, una mini app de lotería on-chain sobre Base pagada en USDC, y Rumbo, una mini app de viajes con checkout en USDC.",
            ],
          },
          {
            title: "Seguridad",
            bullets: [
              "Contuve un ataque de ~63.000 requests: análisis forense, bloqueo por WAF, cierre de vectores y herramienta interna de bloqueo.",
              "Agregué validaciones de red y moneda en retiros tras un incidente de fondos enviados a la cadena equivocada.",
            ],
          },
          {
            title: "Liderazgo y entrega",
            bullets: [
              "Dirijo un equipo de 3 desarrolladores y 3 QA, con pasantes; formé a 3 personas.",
              "Defino roadmap con Producto, decido las salidas a producción y gestiono las publicaciones en tienda.",
              "Autor de más de 500 PRs mergeados (44 % del repositorio) y 39 épicas; el equipo cerró ~1.500 tickets de QA.",
            ],
          },
          {
            title: "Desarrollo mobile con Flutter",
            bullets: [
              "Definí la arquitectura de la app: Clean Architecture por feature (34 módulos), Provider y BLoC, inyección con GetIt, flavors dev/prod y un design system propio con tokens.",
              "Construí la base de calidad: 245 suites de tests unitarios, de widget y golden (con tolerancia para CI) y 44 flows E2E con Maestro.",
              "Integré SDKs nativos y de terceros: Particle (MPC), Sumsub, Ramp, Kustomer, Firebase (FCM, Remote Config, Analytics), Sentry y ML Kit para leer datos por OCR.",
              "Desarrollé pantallas clave: nuevo Home, tutorial de onboarding con coach marks, actualización obligatoria, Pago Móvil en pantalla única y comprobantes.",
              "Publico en App Store y Google Play y resolví rechazos de revisión: purpose strings, ATT y el layout del OTP en iPad.",
              "Resolví un crash de iOS solo en release causado por dependencias nativas duplicadas (SnapKit/SwiftyJSON) entre enlace estático y dinámico.",
            ],
          },
          {
            title: "CI/CD e ingeniería con IA",
            bullets: [
              "Construí los pipelines de GitHub Actions que compilan, firman y entregan a QA el APK y el IPA en cada merge, regeneran los golden tests y vigilan el vencimiento de las credenciales de iOS.",
              "Diseñé un grafo de 10 agentes que lleva un feature de la spec a tests y E2E en verde, con auditoría adversarial.",
              "Construí una oficina de agentes (planificación, desarrollo, QA, revisión, seguridad, soporte, release) con aprobación humana; la adoptó marketing de producto.",
              "Creé un pipeline de video con pantallas reales de la app y voz clonada: tutoriales 4K para 10 países.",
            ],
          },
        ],
        stack:
          "Flutter/Dart, Node.js, AWS Lambda/Serverless, MongoDB, EVM, ERC-4337, MPC/TSS, Alchemy, Particle, Firebase, Sentry, PostHog, GitHub Actions, Maestro, Claude Code, MCP.",
      },
      {
        role: "Co-founder",
        company: "Staff On — staffon.app",
        period: "2026 – presente",
        place: "Caracas, Venezuela",
        groups: [
          {
            title: "",
            bullets: [
              "Cofundé un marketplace que conecta empresas con talento temporal para eventos: app Flutter, API Node.js/Express y dashboard web.",
              "Construí turnos, contratos automáticos, pagos verificados en dos partes, calificaciones y tasa BCV; monté la oficina de agentes y los flows E2E con Maestro.",
            ],
          },
        ],
      },
      {
        role: "Desarrollador Web Full Stack",
        company: "Social Oplesk",
        period: "04/2022 – 08/2022",
        place: "Remoto, Venezuela",
        groups: [
          {
            title: "",
            bullets: [
              "Desarrollé aplicaciones web con React, Node.js y MongoDB.",
              "1.er lugar en el hackathon de chatbots de Telegram y 2.º lugar en el de wallets de criptomonedas (julio 2022).",
            ],
          },
        ],
      },
      {
        role: "Preparador de Programación",
        company: "Facultad de Ingeniería — Universidad Central de Venezuela",
        period: "03/2019 – 12/2021",
        place: "Caracas, Venezuela",
        groups: [{ title: "", bullets: ["Impartí prácticas y asesorías de programación a grupos de estudiantes durante casi 3 años."] }],
      },
    ],
    education: [
      { degree: "Ingeniería en Informática", school: "Universidad Alejandro de Humboldt", period: "Culminada · grado 11/2026", place: "Caracas, Venezuela" },
      { degree: "Diplomado de Desarrollo Web3 y Blockchain", school: "Universidad Católica Andrés Bello", period: "11/2024 – actualidad", place: "Caracas, Venezuela" },
    ],
    skills: [
      {
        title: "Liderazgo",
        items: [
          "Gestión de equipos de desarrollo y QA",
          "Roadmap con Producto y decisiones de release",
          "Publicación en App Store y Google Play",
          "Respuesta a incidentes de seguridad",
          "Mentoría y formación de equipo",
          "Metodología Scrum",
        ],
      },
      {
        title: "Técnicas",
        items: [
          "Mobile: Flutter/Dart, Clean Architecture, Provider/BLoC, GetIt, design systems, builds iOS/Android",
          "Backend y cloud: Node.js, AWS Lambda, WAF, CloudWatch, MongoDB, Python",
          "Web3: EVM, ERC-4337, MPC/TSS, Alchemy, Particle",
          "Pagos: on/off-ramps, KYC (Sumsub), Bridge, Ripio, Stripe, Ramp",
          "Calidad: tests unitarios, widget y golden; E2E con Maestro; CI",
          "Observabilidad: Sentry, PostHog, GA4",
          "IA aplicada: Claude Code, agentes, skills, MCP",
          "Web: React, Next.js, JavaScript, HTML/CSS",
          "Idiomas: español (nativo), inglés B1 (en formación)",
        ],
      },
    ],
    certifications: [
      { name: "Claude Code in Action — Marzo 2026", issuer: "Anthropic", url: "https://verify.skilljar.com/c/8i57yi8btx7y" },
      { name: "Introduction to Model Context Protocol — Marzo 2026", issuer: "Anthropic", url: "https://verify.skilljar.com/c/2aw3koz22e9t" },
      { name: "Introduction to Subagents — Marzo 2026", issuer: "Anthropic", url: "https://verify.skilljar.com/c/4wcdr83jf4jd" },
      { name: "Claude 101 — Marzo 2026", issuer: "Anthropic", url: "https://verify.skilljar.com/c/r235mujhccvm" },
      { name: "Flutter Avanzado — Octubre 2026 · 35 h", issuer: "Udemy (Fernando Herrera)", url: "https://www.udemy.com/certificate/UC-cf70fd6f-36c1-4498-95ea-05ccf4ebf4d8/" },
      { name: "Flutter - Móvil: De cero a experto — Agosto 2024 · 50,5 h", issuer: "Udemy (Fernando Herrera)", url: "https://www.udemy.com/certificate/UC-ad4fa6be-1725-4f0f-bb2f-dac6d899a764/" },
      { name: "JavaScript Algorithms and Data Structures — Julio 2022", issuer: "freeCodeCamp", url: "https://www.freecodecamp.org/certification/fcc59fd1204-2ccd-4efa-a241-c8ef46456d6c/javascript-algorithms-and-data-structures" },
      { name: "Curso Programación en Java — Julio 2019", issuer: "CENEAC Producciones UCV" },
      { name: "Introducción a la Programación I y II — Julio 2017", issuer: "CENEAC Producciones UCV" },
    ],
    awards: [
      { name: "1.er lugar Hackathon de ChatBot de Telegram", issuer: "Social Oplesk — Julio 2022" },
      { name: "2.º lugar Hackathon de Wallet de Criptomonedas", issuer: "Social Oplesk — Julio 2022" },
    ],
  },
};
