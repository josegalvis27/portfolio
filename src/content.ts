export type Lang = "es" | "en";
export type T = Record<Lang, string>;

export const links = {
  email: "jose.galvis.rivas@gmail.com",
  github: "https://github.com/josegalvis27",
  linkedin: "https://linkedin.com/in/josegalvisrivas",
  x: "https://x.com/josegalvis27",
  avatar: "https://avatars.githubusercontent.com/u/62526526?v=4",
  cv: { es: "/cv", en: "/cv/en" } as T,
};

export const nav: { id: string; label: T }[] = [
  { id: "experiencia", label: { es: "Experiencia", en: "Experience" } },
  { id: "ia", label: { es: "AI Engineering", en: "AI Engineering" } },
  { id: "casos", label: { es: "Casos", en: "Cases" } },
  { id: "cicd", label: { es: "CI/CD", en: "CI/CD" } },
  { id: "proyectos", label: { es: "Proyectos", en: "Projects" } },
  { id: "certificados", label: { es: "Certificados", en: "Certificates" } },
  { id: "contacto", label: { es: "Contacto", en: "Contact" } },
];

export const ui = {
  available: { es: "Construyendo fintech desde Caracas", en: "Building fintech from Caracas" },
  hello: { es: "Hola, soy", en: "Hi, I'm" },
  role: {
    es: "Ingeniero en Informática · CTO de Coco Wallet y Coco Mercado · Co-founder de Staff On",
    en: "Computer Engineer · CTO at Coco Wallet & Coco Mercado · Co-founder at Staff On",
  },
  rotating: {
    es: ["wallets self-custodial", "rampas fiat en 9 países", "apps Flutter en producción", "equipos con agentes de IA"],
    en: ["self-custodial wallets", "fiat ramps in 9 countries", "production Flutter apps", "teams with AI agents"],
  },
  iBuild: { es: "Construyo", en: "I build" },
  tagline: {
    es: "Lidero la tecnología de una wallet que usan más de 190.000 personas en Latinoamérica y Europa: arquitectura, mobile, pagos, seguridad y releases.",
    en: "I lead technology for a wallet used by 190,000+ people across Latin America and Europe: architecture, mobile, payments, security and releases.",
  },
  contact: { es: "Hablemos", en: "Let's talk" },
  downloadCv: { es: "Ver CV", en: "View resume" },
  highlights: { es: "Lo que he logrado", en: "Highlights" },
  experience: { es: "Experiencia", en: "Experience" },
  featured: { es: "Proyectos destacados", en: "Featured work" },
  side: { es: "Proyectos personales", en: "Side projects" },
  arcade: { es: "Arcade caraqueño", en: "Caracas arcade" },
  arcadeCode: "https://github.com/josegalvis27/arcade-caraqueno",
  cases: { es: "Casos", en: "Case studies" },
  casesTitle: { es: "Problemas difíciles, resultados medibles", en: "Hard problems, measurable results" },
  problem: { es: "Problema", en: "Problem" },
  solution: { es: "Solución", en: "Solution" },
  result: { es: "Resultado", en: "Result" },
  arcadeIntro: {
    es: "Cinco juegos en Phaser 3 para la máquina arcade física de Platanus Hack 26: Caracas, cada uno inspirado en una escena de la ciudad.",
    en: "Five Phaser 3 games for the physical arcade machine at Platanus Hack 26: Caracas, each inspired by a scene from the city.",
  },
  ai: { es: "AI Engineering", en: "AI Engineering" },
  aiTitle: { es: "Equipos donde los agentes proponen y las personas aprueban", en: "Teams where agents propose and people approve" },
  aiIntro: {
    es: "Diseño oficinas de agentes con Claude Code: cada persona corre su propio motor, los agentes toman tareas de una cola compartida y nada sale hacia afuera sin aprobación humana.",
    en: "I design agent offices on Claude Code: each person runs their own engine, agents claim tasks from a shared queue and nothing ships without human approval.",
  },
  devops: { es: "CI/CD · GitHub Actions", en: "CI/CD · GitHub Actions" },
  devopsTitle: { es: "Del merge al teléfono de QA, sin tocar nada", en: "From merge to QA's phone, hands-free" },
  devopsIntro: {
    es: "Pipelines que construyen, firman y entregan la app, mantienen los tests al día y dejan que un agente arregle los bugs que reporta QA.",
    en: "Pipelines that build, sign and ship the app, keep tests up to date and let an agent fix the bugs QA reports.",
  },
  created: { es: "Creado por mí", en: "Created by me" },
  contributed: { es: "Contribuí", en: "Contributed" },
  flow: { es: "Cómo fluye una tarea", en: "How a task flows" },
  certificates: { es: "Certificados", en: "Certificates" },
  certificatesIntro: {
    es: "Toca un certificado para verlo completo. Cada uno tiene su enlace de verificación oficial.",
    en: "Tap a certificate to view it. Each one links to its official verification page.",
  },
  verify: { es: "Verificar", en: "Verify" },
  education: { es: "Formación y premios", en: "Education & awards" },
  stack: { es: "Tecnologías", en: "Tech stack" },
  live: { es: "Ver en vivo", en: "Live" },
  code: { es: "Código", en: "Code" },
  privateCode: { es: "Código privado", en: "Private code" },
  ctaTitle: { es: "¿Construimos algo juntos?", en: "Let's build something together" },
  ctaText: {
    es: "Fintech, Web3, apps mobile o equipos que trabajan con IA. Escríbeme y te respondo.",
    en: "Fintech, Web3, mobile apps or AI-powered teams. Drop me a line.",
  },
  close: { es: "Cerrar", en: "Close" },
};

export const metrics: { value: number; prefix?: string; suffix: string; label: T }[] = [
  { value: 190, suffix: "K+", label: { es: "usuarios registrados", en: "registered users" } },
  { value: 75, prefix: "US$", suffix: "M+", label: { es: "movidos en rampas fiat", en: "moved through fiat ramps" } },
  { value: 800, suffix: "K", label: { es: "operaciones completadas", en: "completed operations" } },
  { value: 500, suffix: "+", label: { es: "PRs mergeados en la wallet", en: "merged PRs in the wallet" } },
];

export const highlights: { icon: "shield" | "zap" | "coins" | "bot" | "lock" | "trending"; title: T; text: T }[] = [
  {
    icon: "shield",
    title: { es: "Migración a MPC/TSS", en: "MPC/TSS migration" },
    text: {
      es: "3.500+ usuarios con saldo pasaron de frase semilla a MPC sin perder un centavo.",
      en: "3,500+ funded users moved from seed phrases to MPC without losing a cent.",
    },
  },
  {
    icon: "zap",
    title: { es: "Transacciones sin gas", en: "Gasless transactions" },
    text: {
      es: "Account abstraction (ERC-4337) con paymaster en Polygon, Optimism, Base, BNB y Celo. 64 % menos gas por transacción.",
      en: "Account abstraction (ERC-4337) with a paymaster on Polygon, Optimism, Base, BNB and Celo. 64% less gas per transaction.",
    },
  },
  {
    icon: "trending",
    title: { es: "Crecimiento ×4", en: "4× growth" },
    text: {
      es: "De ~10.000 a ~40.000 operaciones mensuales en dos años, mientras el costo de RPC bajaba 75 %.",
      en: "From ~10,000 to ~40,000 monthly operations in two years, while RPC cost dropped 75%.",
    },
  },
  {
    icon: "coins",
    title: { es: "10+ rieles de pago", en: "10+ payment rails" },
    text: {
      es: "Bridge, Ripio, Pago Móvil, Bizum, Zelle, PayPal, Stripe, Ramp y KYC con Sumsub.",
      en: "Bridge, Ripio, Pago Móvil, Bizum, Zelle, PayPal, Stripe, Ramp and KYC with Sumsub.",
    },
  },
  {
    icon: "lock",
    title: { es: "Respuesta a incidentes", en: "Incident response" },
    text: {
      es: "Contuve un ataque de ~63.000 requests: forense, WAF y cierre de vectores.",
      en: "Contained a ~63,000-request attack: forensics, WAF and closing the exploited vectors.",
    },
  },
  {
    icon: "bot",
    title: { es: "Ingeniería con agentes", en: "Agentic engineering" },
    text: {
      es: "Un grafo de 10 agentes lleva cada feature de la spec a tests y E2E en verde, con aprobación humana.",
      en: "A 10-agent graph takes each feature from spec to green tests and E2E, with human approval gates.",
    },
  },
];

export const experience: { role: T; company: string; period: T; points: T[] }[] = [
  {
    role: { es: "Chief Technology Officer", en: "Chief Technology Officer" },
    company: "Coco Wallet · Coco Mercado",
    period: { es: "2022 – hoy", en: "2022 – now" },
    points: [
      {
        es: "Lidero arquitectura, mobile, pagos, seguridad y releases con 3 desarrolladores y 3 QA; formé a 3 personas del equipo.",
        en: "Own architecture, mobile, payments, security and releases with 3 engineers and 3 QA; mentored 3 people into the team.",
      },
      {
        es: "Definí la arquitectura Flutter: Clean Architecture por feature (34 módulos), BLoC/Provider, GetIt y design system con tokens.",
        en: "Defined the Flutter architecture: feature-based Clean Architecture (34 modules), BLoC/Provider, GetIt and a token-based design system.",
      },
      {
        es: "Base de calidad: 245 suites de tests unitarios, widget y golden, y 44 flows E2E con Maestro.",
        en: "Quality baseline: 245 unit, widget and golden test suites and 44 Maestro E2E flows.",
      },
      {
        es: "Defino roadmap con Producto, decido las salidas a producción y publico en App Store y Google Play.",
        en: "Set the roadmap with Product, own go/no-go release decisions and ship to the App Store and Google Play.",
      },
    ],
  },
  {
    role: { es: "Co-founder", en: "Co-founder" },
    company: "Staff On · staffon.app",
    period: { es: "2026 – hoy", en: "2026 – now" },
    points: [
      {
        es: "Marketplace que conecta empresas con talento temporal para eventos en Venezuela: app Flutter, API Node/Express y dashboard web.",
        en: "Marketplace connecting companies with temporary event talent in Venezuela: Flutter app, Node/Express API and web dashboard.",
      },
    ],
  },
  {
    role: { es: "Desarrollador Web Full Stack", en: "Full Stack Web Developer" },
    company: "Social Oplesk",
    period: { es: "2022", en: "2022" },
    points: [
      {
        es: "Aplicaciones web con React, Node.js y MongoDB. Ganador de dos hackathons internos.",
        en: "Web apps with React, Node.js and MongoDB. Won two internal hackathons.",
      },
    ],
  },
  {
    role: { es: "Preparador de Programación", en: "Programming Teaching Assistant" },
    company: "Facultad de Ingeniería · UCV",
    period: { es: "2019 – 2021", en: "2019 – 2021" },
    points: [
      { es: "Prácticas y asesorías de programación durante casi 3 años.", en: "Taught programming labs and tutoring for nearly 3 years." },
    ],
  },
];

export type Project = {
  name: string;
  tag: T;
  description: T;
  stack: string[];
  image?: string;
  live?: string;
  code?: string;
};

export const featured: Project[] = [
  {
    name: "Coco Wallet",
    tag: { es: "Fintech · Web3 · Mobile", en: "Fintech · Web3 · Mobile" },
    description: {
      es: "Wallet self-custodial en dólares con on/off-ramps en Venezuela, Colombia, Argentina, Perú, México, Brasil, EE. UU., Canadá y la UE. MPC, transacciones sin gas y 10+ proveedores de pago.",
      en: "Self-custodial dollar wallet with on/off-ramps in Venezuela, Colombia, Argentina, Peru, Mexico, Brazil, the US, Canada and the EU. MPC, gasless transactions and 10+ payment providers.",
    },
    stack: ["Flutter", "ERC-4337", "MPC/TSS", "Node.js", "AWS Lambda"],
    image: "/shots/coco-wallet.jpg",
    live: "https://cocowallet.app",
  },
  {
    name: "Millo",
    tag: { es: "Mini app · Web3", en: "Mini app · Web3" },
    description: {
      es: "Lotería on-chain dentro de Coco Wallet sobre el protocolo Megapot en Base: boletos en USDC sin gas, máquina de sorteo animada, pote en vivo, escalera de premios, referidos y sorteo diario.",
      en: "On-chain lottery inside Coco Wallet on the Megapot protocol on Base: gasless USDC tickets, an animated draw machine, live jackpot, payout ladder, referrals and a daily draw.",
    },
    stack: ["Next.js", "Base", "USDC", "ERC-4337", "Coco SDK"],
    image: "/shots/millo.jpg",
    live: "https://megapot-three.vercel.app",
    code: "https://github.com/josegalvis27/millo",
  },
  {
    name: "Quórum",
    tag: { es: "Hackathon · Platanus Hack 26", en: "Hackathon · Platanus Hack 26" },
    description: {
      es: "Votaciones verificables: cada voto lleva una prueba de conocimiento cero de pertenencia al padrón, las boletas se encadenan con hashes y el cierre se ancla en Base. Un verificador independiente detecta cualquier alteración.",
      en: "Verifiable voting: each vote carries a zero-knowledge proof of voter-roll membership, ballots are hash-chained and the close is anchored on Base. An independent verifier detects any tampering.",
    },
    stack: ["Semaphore v4", "ZK", "Base", "TypeScript"],
    image: "/shots/quorum.jpg",
    live: "https://quorum-sefw.onrender.com",
    code: "https://github.com/platanus-hack/platanus-hack-26-ve-team-3",
  },
  {
    name: "Staff On",
    tag: { es: "Startup · Marketplace", en: "Startup · Marketplace" },
    description: {
      es: "Contratación de talento temporal: perfiles, turnos, contratos automáticos, pagos verificados en dos partes, calificaciones y tasa BCV. App, API y dashboard.",
      en: "Temporary staffing: profiles, shifts, automatic contracts, two-part verified payments, ratings and BCV exchange rate. App, API and dashboard.",
    },
    stack: ["Flutter", "Express", "MongoDB", "JWT", "Maestro"],
    image: "/shots/staff-on.jpg",
    live: "https://staffon.app",
  },
];

export const side: Project[] = [
  {
    name: "Rumbo",
    tag: { es: "Mini app · Viajes", en: "Mini app · Travel" },
    description: {
      es: "Vuelos, hospedaje y tours dentro de Coco Wallet, con tablero de salidas split-flap, pase de abordar y checkout en USDC.",
      en: "Flights, stays and tours inside Coco Wallet, with a split-flap departure board, boarding pass and USDC checkout.",
    },
    stack: ["Next.js", "USDC", "Coco SDK"],
    code: "https://github.com/josegalvis27/rumbo",
  },
  {
    name: "José Fit",
    tag: { es: "PWA offline", en: "Offline PWA" },
    description: {
      es: "Entrenador personal que funciona sin señal en el gym: programa por bloques que avanza solo, registro de peso y reps por serie y animación de cada ejercicio.",
      en: "Personal trainer that works without signal at the gym: self-progressing block program, per-set weight and reps logging and an animation for each exercise.",
    },
    stack: ["React", "Vite", "Supabase", "PWA"],
    image: "/shots/jose-fit.jpg",
    live: "https://jose-fit.vercel.app",
    code: "https://github.com/josegalvis27/jose-fit",
  },
  {
    name: "amazon-deal-bot",
    tag: { es: "Bot · Serverless", en: "Bot · Serverless" },
    description: {
      es: "Detecta ofertas de Amazon desde feeds de comunidades, construye su propio historial de precios y alerta por Telegram. Corre 24/7 gratis con un cron cada 5 minutos.",
      en: "Finds Amazon deals from community feeds, builds its own price history and alerts on Telegram. Runs 24/7 for free on a 5-minute cron.",
    },
    stack: ["Cloudflare Workers", "D1", "Telegram"],
    code: "https://github.com/josegalvis27/amazon-deal-bot",
  },
  {
    name: "CACO TV",
    tag: { es: "Android TV", en: "Android TV" },
    description: {
      es: "Launcher minimalista para Android TV: sin anuncios ni recomendaciones, pensado para equipos de 1,8 GB de RAM.",
      en: "Minimal Android TV launcher: no ads or recommendations, built for 1.8 GB RAM devices.",
    },
    stack: ["Kotlin", "Compose for TV"],
  },
  {
    name: "bcv-tasas",
    tag: { es: "Automatización · ERP", en: "Automation · ERP" },
    description: {
      es: "Descarga las tasas oficiales del BCV y las registra en SAP Business One por su Service Layer: un proceso manual diario que ahora tarda menos de 10 segundos.",
      en: "Pulls official BCV exchange rates and posts them to SAP Business One via its Service Layer: a daily manual process now done in under 10 seconds.",
    },
    stack: ["Python", "SAP B1", "Service Layer"],
    code: "https://github.com/josegalvis27/bcv-tasas",
  },
  {
    name: "Mi Amigo Secreto",
    tag: { es: "Web app", en: "Web app" },
    description: {
      es: "Organiza el intercambio de regalos: crea un grupo, comparte el código y el sorteo asigna en secreto a quién le regala cada uno.",
      en: "Secret Santa organizer: create a group, share the code and the draw secretly assigns who gifts whom.",
    },
    stack: ["Next.js", "PWA"],
    code: "https://github.com/josegalvis27/mi-amigo-secreto",
  },
  {
    name: "SmartTask AI",
    tag: { es: "Escritorio macOS", en: "macOS desktop" },
    description: {
      es: "Calendario de tareas con asistente de IA por evento y recordatorios automáticos.",
      en: "Task calendar with a per-event AI assistant and automatic reminders.",
    },
    stack: ["Flutter", "Gemini"],
    code: "https://github.com/josegalvis27/smartTaskAI",
  },
  {
    name: "AdoptaClick",
    tag: { es: "Flutter Web", en: "Flutter Web" },
    description: {
      es: "Portal cautivo que conecta perros sin hogar con adoptantes.",
      en: "Captive portal that connects homeless dogs with adopters.",
    },
    stack: ["Flutter Web"],
    live: "https://adopta-clicks.vercel.app",
    code: "https://github.com/josegalvis27/adoptaClicks",
  },
];

export const arcade: { slug: string; name: string; description: T }[] = [
  { slug: "trompos", name: "¡Trompazo!", description: { es: "Duelo de trompos criollos con 6 poderes y 3 terrenos.", en: "Venezuelan spinning-top duel with 6 powers and 3 terrains." } },
  { slug: "hay-puesto", name: "¡Hay Puesto!", description: { es: "Maneja una camionetica por la Francisco de Miranda.", en: "Drive a city bus down Francisco de Miranda avenue." } },
  { slug: "metro-hora-pico", name: "Metro ¡Hora Pico!", description: { es: "Móntate en el vagón a las 6 p. m. antes de que cierren.", en: "Get on the 6 p.m. train before the doors close." } },
  { slug: "avila-coop", name: "¡Subiendo el Ávila!", description: { es: "Co-op para dos: de Sabas Nieves al Hotel Humboldt.", en: "Two-player co-op climb up El Ávila." } },
  { slug: "cuidacarros", name: "¡Yo Se Lo Cuido!", description: { es: "Eres el cuidacarros de una cuadra en Chacao.", en: "You're the parking attendant of a Chacao block." } },
];

export type Certificate = { title: string; issuer: string; date: T; image?: string; url?: string; hours?: string };

export const certificates: Certificate[] = [
  { title: "Claude Code in Action", issuer: "Anthropic", date: { es: "Marzo 2026", en: "March 2026" }, image: "/certs/anthropic-claude-code.jpg", url: "https://verify.skilljar.com/c/8i57yi8btx7y" },
  { title: "Introduction to Model Context Protocol", issuer: "Anthropic", date: { es: "Marzo 2026", en: "March 2026" }, image: "/certs/anthropic-mcp.jpg", url: "https://verify.skilljar.com/c/2aw3koz22e9t" },
  { title: "Introduction to Subagents", issuer: "Anthropic", date: { es: "Marzo 2026", en: "March 2026" }, image: "/certs/anthropic-subagents.jpg", url: "https://verify.skilljar.com/c/4wcdr83jf4jd" },
  { title: "Claude 101", issuer: "Anthropic", date: { es: "Marzo 2026", en: "March 2026" }, image: "/certs/anthropic-claude-101.jpg", url: "https://verify.skilljar.com/c/r235mujhccvm" },
  { title: "Flutter Avanzado: Tu conocimiento al siguiente nivel", issuer: "Udemy · Fernando Herrera", date: { es: "Octubre 2026", en: "October 2026" }, hours: "35 h", image: "/certs/udemy-flutter-avanzado.jpg", url: "https://www.udemy.com/certificate/UC-cf70fd6f-36c1-4498-95ea-05ccf4ebf4d8/" },
  { title: "Flutter - Móvil: De cero a experto", issuer: "Udemy · Fernando Herrera", date: { es: "Agosto 2024", en: "August 2024" }, hours: "50,5 h", image: "/certs/udemy-flutter-movil.jpg", url: "https://www.udemy.com/certificate/UC-ad4fa6be-1725-4f0f-bb2f-dac6d899a764/" },
  { title: "JavaScript Algorithms and Data Structures", issuer: "freeCodeCamp", date: { es: "Julio 2022", en: "July 2022" }, hours: "300 h", url: "https://www.freecodecamp.org/certification/fcc59fd1204-2ccd-4efa-a241-c8ef46456d6c/javascript-algorithms-and-data-structures" },
  { title: "Programación en Java", issuer: "CENEAC · UCV", date: { es: "Julio 2019", en: "July 2019" } },
  { title: "Introducción a la Programación I y II", issuer: "CENEAC · UCV", date: { es: "Julio 2017", en: "July 2017" } },
];

export const education: { title: T; detail: T; kind: "edu" | "award" }[] = [
  {
    kind: "edu",
    title: { es: "Ingeniería en Informática", en: "B.S. in Computer Engineering" },
    detail: { es: "Universidad Alejandro de Humboldt · grado 11/2026", en: "Universidad Alejandro de Humboldt · graduation 11/2026" },
  },
  {
    kind: "edu",
    title: { es: "Diplomado de Desarrollo Web3 y Blockchain", en: "Diploma in Web3 & Blockchain Development" },
    detail: { es: "Universidad Católica Andrés Bello · 2024 – hoy", en: "Universidad Católica Andrés Bello · 2024 – now" },
  },
  {
    kind: "award",
    title: { es: "1.er lugar · Hackathon de ChatBot de Telegram", en: "1st place · Telegram ChatBot Hackathon" },
    detail: { es: "Social Oplesk · Julio 2022", en: "Social Oplesk · July 2022" },
  },
  {
    kind: "award",
    title: { es: "2.º lugar · Hackathon de Wallet de Criptomonedas", en: "2nd place · Crypto Wallet Hackathon" },
    detail: { es: "Social Oplesk · Julio 2022", en: "Social Oplesk · July 2022" },
  },
  {
    kind: "award",
    title: { es: "Platanus Hack 26 · track Trust", en: "Platanus Hack 26 · Trust track" },
    detail: { es: "Caracas · Octubre 2026 · proyecto Quórum", en: "Caracas · October 2026 · Quórum project" },
  },
];

export const techMarquee = [
  "Flutter", "Dart", "TypeScript", "Node.js", "Next.js", "React", "AWS Lambda", "MongoDB", "Supabase",
  "Cloudflare Workers", "EVM", "ERC-4337", "MPC/TSS", "Alchemy", "Particle", "Firebase", "Sentry",
  "PostHog", "Maestro", "GitHub Actions", "Claude Code", "MCP", "Kotlin", "Python",
];

export const aiFlow: T[] = [
  { es: "La persona encarga", en: "A person requests" },
  { es: "El motor reclama la tarea", en: "The engine claims the task" },
  { es: "Los agentes planifican, construyen y prueban", en: "Agents plan, build and test" },
  { es: "Auditoría adversarial y QA", en: "Adversarial audit & QA" },
  { es: "La persona aprueba", en: "The person approves" },
];

export const aiWork: { name: string; tag: T; description: T; stack: string[]; link?: string }[] = [
  {
    name: "Oficina de agentes",
    tag: { es: "Modelo de trabajo", en: "Operating model" },
    description: {
      es: "Página web compartida como tablero, un motor de Claude Code por persona que reclama tareas, ramas en GitHub y merge por PR. Hoy el mismo modelo corre en Coco Wallet, Marketing, Producto, Bolívar Connect y Staff On.",
      en: "A shared web page as the board, one Claude Code engine per person that claims tasks, GitHub branches and merge by PR. The same model now runs at Coco Wallet, Marketing, Product, Bolívar Connect and Staff On.",
    },
    stack: ["Claude Code", "Subagents", "Skills", "GitHub"],
  },
  {
    name: "Grafo de implementación",
    tag: { es: "De la spec al E2E", en: "Spec to E2E" },
    description: {
      es: "10 agentes que llevan un feature de la spec a tests y E2E en verde, con auditorías adversariales antes de pedir aprobación.",
      en: "10 agents that take a feature from spec to green tests and E2E, with adversarial audits before asking for approval.",
    },
    stack: ["Spec Kit", "Maestro", "Golden tests"],
  },
  {
    name: "Estudio de video con agentes",
    tag: { es: "Contenido", en: "Content" },
    description: {
      es: "Brief, guion, pantallas reales de la app animadas, voz clonada, QA y dos paradas de aprobación. Tutoriales 4K para 10 países de Coco Wallet y Staff On.",
      en: "Brief, script, animated real app screens, cloned voice, QA and two approval stops. 4K tutorials for 10 countries for Coco Wallet and Staff On.",
    },
    stack: ["Remotion", "Skills", "Voice cloning"],
  },
  {
    name: "Figma ↔ Flutter",
    tag: { es: "Diseño", en: "Design" },
    description: {
      es: "Skills que llevan diseños de Figma a widgets Flutter y de vuelta, siguiendo el design system de cada producto.",
      en: "Skills that turn Figma designs into Flutter widgets and back, following each product's design system.",
    },
    stack: ["Figma MCP", "Flutter"],
  },
  {
    name: "Buscador de vuelos",
    tag: { es: "Skill personal", en: "Personal skill" },
    description: {
      es: "Combina 13 buscadores y webs de aerolíneas en una sola búsqueda para encontrar tarifas que cada uno por separado no muestra.",
      en: "Combines 13 search engines and airline sites in a single search to surface fares no single one shows.",
    },
    stack: ["MCP", "Skills"],
  },
];

export const workflows: { name: string; trigger: string; mine: boolean; description: T; stack: string[] }[] = [
  {
    name: "Build & Notify QA",
    trigger: "push → develop",
    mine: true,
    description: {
      es: "En cada merge calcula el número de build con la API de App Store Connect, compila el APK de Android y el IPA de iOS firmado (con Live Activity y widget) y avisa a QA.",
      en: "On every merge it computes the build number via the App Store Connect API, builds the Android APK and the signed iOS IPA (with Live Activity and widget) and notifies QA.",
    },
    stack: ["Xcode", "Gradle", "App Store Connect API", "Code signing"],
  },
  {
    name: "Claude Fix QA Bug",
    trigger: "issue_comment",
    mine: true,
    description: {
      es: "QA comenta en un issue y Claude Code arregla el bug en la rama correcta, abre el PR y lo enlaza al issue para revisión humana.",
      en: "QA comments on an issue and Claude Code fixes the bug on the right branch, opens the PR and links it to the issue for human review.",
    },
    stack: ["claude-code-action", "GraphQL", "Flutter"],
  },
  {
    name: "Update Goldens",
    trigger: "workflow_dispatch",
    mine: true,
    description: {
      es: "Regenera los golden tests en Linux, igual que CI, y los commitea a la rama del PR para que quede en verde sin pasos manuales.",
      en: "Regenerates golden tests on Linux, same as CI, and commits them to the PR branch so it goes green with no manual steps.",
    },
    stack: ["Golden tests", "Flutter", "Bot commits"],
  },
  {
    name: "Check iOS Credentials",
    trigger: "cron · lunes / Mondays",
    mine: true,
    description: {
      es: "Revisa cada semana el certificado .p12 y el provisioning profile y avisa 30 días antes de que venzan, antes de que rompan un release.",
      en: "Checks the .p12 certificate and provisioning profile weekly and warns 30 days before they expire, before they break a release.",
    },
    stack: ["macOS runner", "OpenSSL", "Cron"],
  },
  {
    name: "CI",
    trigger: "pull_request",
    mine: false,
    description: {
      es: "Detecta qué toca cada PR y corre solo lo necesario: análisis, tests y builds nativas de Android e iOS.",
      en: "Detects what each PR touches and runs only what is needed: analysis, tests and native Android and iOS builds.",
    },
    stack: ["paths-filter", "Analyze", "Tests"],
  },
];

export const cases: { title: T; metric: string; metricLabel: T; problem: T; solution: T; result: T }[] = [
  {
    title: { es: "De frase semilla a MPC sin perder un centavo", en: "From seed phrases to MPC without losing a cent" },
    metric: "3.500+",
    metricLabel: { es: "usuarios con saldo migrados", en: "funded users migrated" },
    problem: {
      es: "La wallet dependía de frases semilla: si un usuario perdía la suya, perdía el acceso a sus fondos.",
      en: "The wallet relied on seed phrases: a user who lost theirs lost access to their funds.",
    },
    solution: {
      es: "Integré el SDK nativo de MPC/TSS de Particle en la app Flutter y lideré la migración de los usuarios con saldo.",
      en: "Integrated Particle's native MPC/TSS SDK into the Flutter app and led the migration of funded users.",
    },
    result: {
      es: "Más de 3.500 usuarios con saldo migrados sin pérdida de fondos, y la base para pasar a transacciones sin gas (ERC-4337).",
      en: "3,500+ funded users migrated with zero loss of funds, and the foundation for gasless transactions (ERC-4337).",
    },
  },
  {
    title: { es: "Un bug, el 83 % de los envíos fallidos", en: "One bug, 83% of failed sends" },
    metric: "−83%",
    metricLabel: { es: "errores de envío", en: "send failures" },
    problem: {
      es: "Una parte importante de los envíos con account abstraction (ERC-4337) fallaba.",
      en: "A significant share of account-abstraction (ERC-4337) sends were failing.",
    },
    solution: {
      es: "Rastreé los fallos hasta una causa raíz común, el nonce de las UserOps, y llevé su manejo al cliente. Aparte, la estimación dinámica del bundler redujo el gas.",
      en: "Traced the failures to one root cause, the UserOp nonce, and moved nonce handling client-side. Separately, dynamic bundler estimation reduced gas.",
    },
    result: {
      es: "Eliminé ~83 % de los errores de envío y bajé 64 % el gas por transacción patrocinada.",
      en: "Removed ~83% of send failures and cut gas per sponsored transaction by 64%.",
    },
  },
  {
    title: { es: "75 % menos en infraestructura RPC", en: "75% less spent on RPC infrastructure" },
    metric: "US$22K",
    metricLabel: { es: "ahorro al año", en: "saved per year" },
    problem: {
      es: "La wallet gastaba US$ 80 al día en infraestructura RPC.",
      en: "The wallet was spending US$80 a day on RPC infrastructure.",
    },
    solution: {
      es: "Diagnostiqué que el costo venía de un monitor de depósitos mal calibrado y lo corregí.",
      en: "Diagnosed that the cost came from a miscalibrated deposit monitor and fixed it.",
    },
    result: {
      es: "De US$ 80 a US$ 20 por día mientras las operaciones mensuales crecían ×4.",
      en: "From US$80 to US$20 per day while monthly operations grew 4×.",
    },
  },
];
