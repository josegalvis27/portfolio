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
  { id: "proyectos", label: { es: "Proyectos", en: "Projects" } },
  { id: "casos", label: { es: "Casos", en: "Case studies" } },
  { id: "experiencia", label: { es: "Experiencia", en: "Experience" } },
  { id: "ia", label: { es: "IA y automatización", en: "AI & automation" } },
  { id: "contacto", label: { es: "Contacto", en: "Contact" } },
];

export const ui = {
  meta: { es: "Ingeniero en Informática · Caracas, Venezuela · remoto", en: "Computer Engineer · Caracas, Venezuela · remote" },
  headline: { es: "Líder técnico que sigue construyendo producto.", en: "A technical leader who still builds the product." },
  intro: {
    es: "CTO de Coco Wallet y Coco Mercado y co-founder de Staff On. Mi especialidad son las apps móviles en Flutter y los productos fintech que mueven dinero real. Uso agentes de IA para que el equipo entregue más rápido y con más calidad.",
    en: "CTO at Coco Wallet & Coco Mercado and co-founder of Staff On. I specialize in Flutter mobile apps and fintech products that move real money. I use AI agents so the team ships faster and with higher quality.",
  },
  seeProjects: { es: "Ver proyectos", en: "See projects" },
  seeCv: { es: "Ver CV", en: "View resume" },
  scaleTitle: { es: "Escala de Coco Wallet", en: "Coco Wallet at scale" },
  scaleNote: { es: "Cifras acumuladas del producto, logradas en equipo.", en: "Cumulative product figures, achieved as a team." },
  mineTitle: { es: "Resultados de mi trabajo", en: "Results of my work" },
  mineNote: { es: "Cambios que diseñé o lideré.", en: "Changes I designed or led." },
  projects: { es: "Proyectos principales", en: "Main projects" },
  projectsTitle: { es: "Apps en producción, con pantallas reales", en: "Apps in production, with real screens" },
  role: { es: "Mi responsabilidad", en: "My role" },
  challenge: { es: "Reto técnico", en: "Technical challenge" },
  result: { es: "Resultado", en: "Result" },
  problem: { es: "Problema", en: "Problem" },
  solution: { es: "Solución", en: "Solution" },
  cases: { es: "Casos", en: "Case studies" },
  casesTitle: { es: "Problemas difíciles, resultados medibles", en: "Hard problems, measurable results" },
  seeCase: { es: "Ver caso completo", en: "Read the full case" },
  experience: { es: "Experiencia", en: "Experience" },
  ai: { es: "IA y automatización", en: "AI & automation" },
  aiTitle: { es: "Los agentes proponen, las personas aprueban", en: "Agents propose, people approve" },
  aiIntro: {
    es: "Uso Claude Code y GitHub Actions para quitarle trabajo manual al equipo sin quitarle el control. Así se ve un bug real de QA, anonimizado:",
    en: "I use Claude Code and GitHub Actions to take manual work off the team without taking control away. Here's a real QA bug, anonymized:",
  },
  pipelines: { es: "Pipelines de GitHub Actions que creé", en: "GitHub Actions pipelines I built" },
  more: { es: "Más proyectos", en: "More projects" },
  arcade: { es: "Arcade caraqueño · Platanus Hack 26", en: "Caracas arcade · Platanus Hack 26" },
  certs: { es: "Formación y certificados", en: "Education & certificates" },
  verify: { es: "Verificar", en: "Verify" },
  live: { es: "Ver en vivo", en: "Live" },
  code: { es: "Código", en: "Code" },
  privateCode: { es: "Código privado", en: "Private code" },
  ctaTitle: { es: "¿Construimos algo juntos?", en: "Let's build something together" },
  ctaText: { es: "Me interesa conversar sobre:", en: "I'm open to:" },
  close: { es: "Cerrar", en: "Close" },
};

type Stat = { value: number; prefix?: string; suffix: string; label: T };

export const productScale: Stat[] = [
  { value: 190, suffix: "K+", label: { es: "usuarios registrados", en: "registered users" } },
  { value: 75, prefix: "US$", suffix: "M+", label: { es: "volumen procesado", en: "processed volume" } },
  { value: 800, prefix: "~", suffix: "K", label: { es: "operaciones completadas", en: "completed operations" } },
  { value: 9, suffix: "", label: { es: "mercados en América y Europa", en: "markets in the Americas & Europe" } },
];

export const myResults: Stat[] = [
  { value: 75, prefix: "−", suffix: "%", label: { es: "costo de RPC (~US$ 22K al año)", en: "RPC cost (~US$22K a year)" } },
  { value: 3500, suffix: "+", label: { es: "usuarios migrados a MPC sin pérdida de fondos", en: "users migrated to MPC with zero loss of funds" } },
  { value: 83, prefix: "~", suffix: "%", label: { es: "de los fallos de envío tenían una causa, que eliminé", en: "of send failures shared one cause, which I removed" } },
  { value: 64, prefix: "−", suffix: "%", label: { es: "gas por transacción patrocinada", en: "gas per sponsored transaction" } },
];

export type Showcase = {
  name: string;
  tag: T;
  screens: { src: string; caption: T }[];
  role: T;
  challenge: T;
  result: T;
  stack: string[];
  links: { label: T; href: string; primary?: boolean }[];
};

export const showcases: Showcase[] = [
  {
    name: "Coco Wallet",
    tag: { es: "Fintech · Web3 · Flutter", en: "Fintech · Web3 · Flutter" },
    screens: [
      { src: "/apps/coco-home.jpg", caption: { es: "Inicio y cuentas", en: "Home and accounts" } },
      { src: "/apps/coco-send.jpg", caption: { es: "Envíos a 9 países", en: "Sending to 9 countries" } },
      { src: "/apps/coco-accounts.jpg", caption: { es: "Cuentas en EE. UU. y Europa", en: "US and EU accounts" } },
    ],
    role: {
      es: "Como CTO: arquitectura de la app Flutter, pagos, seguridad y releases en App Store y Google Play.",
      en: "As CTO: Flutter app architecture, payments, security and App Store and Google Play releases.",
    },
    challenge: {
      es: "Mover dinero real en 9 mercados con custodia propia: firmas MPC, transacciones sin gas (ERC-4337) y más de 10 proveedores de pago y KYC.",
      en: "Move real money across 9 markets with self-custody: MPC signing, gasless transactions (ERC-4337) and 10+ payment and KYC providers.",
    },
    result: {
      es: "190K+ usuarios registrados, operaciones mensuales ×4 en dos años y una base de calidad de 245 suites de tests y 44 flows E2E.",
      en: "190K+ registered users, 4× monthly operations in two years and a quality baseline of 245 test suites and 44 E2E flows.",
    },
    stack: ["Flutter", "ERC-4337", "MPC/TSS", "Alchemy", "Maestro"],
    links: [
      { label: { es: "App Store", en: "App Store" }, href: "https://apps.apple.com/us/app/coco-wallet-banca-digital/id1570325141", primary: true },
      { label: { es: "Google Play", en: "Google Play" }, href: "https://play.google.com/store/apps/details?id=com.cocomercado.cocowallet", primary: true },
      { label: { es: "Web", en: "Website" }, href: "https://cocowallet.app" },
    ],
  },
  {
    name: "Staff On",
    tag: { es: "Marketplace · Flutter", en: "Marketplace · Flutter" },
    screens: [
      { src: "/apps/staff-shifts.jpg", caption: { es: "Turnos cerca de ti", en: "Shifts near you" } },
      { src: "/apps/staff-publish.jpg", caption: { es: "Gestión de turnos", en: "Shift management" } },
      { src: "/apps/staff-talent.jpg", caption: { es: "Talento verificado", en: "Verified talent" } },
    ],
    role: {
      es: "Co-founder: construyo la app Flutter para empresas y talento y parte de la API.",
      en: "Co-founder: I build the Flutter app for companies and talent, and part of the API.",
    },
    challenge: {
      es: "Una sola app para los dos lados del mercado: empresas que publican turnos y talento verificado que se postula, con pago en dos partes y check-in con QR.",
      en: "One app for both sides of the market: companies posting shifts and verified talent applying, with two-part payment and QR check-in.",
    },
    result: {
      es: "Publicada en App Store, con flows E2E en Maestro que cubren el registro y la contratación.",
      en: "Live on the App Store, with Maestro E2E flows covering sign-up and hiring.",
    },
    stack: ["Flutter", "Node.js", "MongoDB", "Maestro"],
    links: [
      { label: { es: "App Store", en: "App Store" }, href: "https://apps.apple.com/us/app/staff-on/id6755983032", primary: true },
      { label: { es: "Web", en: "Website" }, href: "https://staffon.app" },
    ],
  },
  {
    name: "Millo",
    tag: { es: "Mini app · Web3", en: "Mini app · Web3" },
    screens: [
      { src: "/apps/millo-onboarding.jpg", caption: { es: "Bienvenida", en: "Welcome" } },
      { src: "/apps/millo-play.jpg", caption: { es: "Elige tus números", en: "Pick your numbers" } },
      { src: "/apps/millo-results.jpg", caption: { es: "Resultados del sorteo", en: "Draw results" } },
    ],
    role: {
      es: "Diseñé y construí la mini app completa, de la interfaz a la integración on-chain.",
      en: "Designed and built the whole mini app, from the UI to the on-chain integration.",
    },
    challenge: {
      es: "Hacer simple una lotería on-chain: pagar el boleto en USDC sin gas desde la wallet y seguir el sorteo en vivo sobre el protocolo Megapot, en Base.",
      en: "Make an on-chain lottery feel simple: pay for a ticket in USDC with no gas from the wallet and follow the draw live on the Megapot protocol, on Base.",
    },
    result: {
      es: "Demo pública; corre dentro de Coco Wallet con el SDK de mini apps y se sincroniza con los sorteos mediante un cron diario.",
      en: "Public demo; runs inside Coco Wallet through the mini app SDK and syncs with the draws through a daily cron.",
    },
    stack: ["Next.js", "Base", "USDC", "ERC-4337"],
    links: [
      { label: { es: "Ver demo", en: "Live demo" }, href: "https://megapot-three.vercel.app", primary: true },
      { label: { es: "Código", en: "Code" }, href: "https://github.com/josegalvis27/millo" },
    ],
  },
];

export type CaseSummary = {
  slug?: string;
  metric: string;
  metricLabel: T;
  title: T;
  problem: T;
  solution: T;
  result: T;
};

export const cases: CaseSummary[] = [
  {
    slug: "nonce-userops",
    metric: "~83%",
    metricLabel: { es: "de los fallos observados tenían una sola causa", en: "of observed failures shared one cause" },
    title: { es: "Una causa detrás de la mayoría de los envíos fallidos", en: "One cause behind most failed sends" },
    problem: {
      es: "En una muestra de 30 transacciones con error, 25 compartían la misma causa raíz: colisiones de nonce entre UserOps.",
      en: "In a sample of 30 failed transactions, 25 shared the same root cause: nonce collisions between UserOps.",
    },
    solution: {
      es: "Llevé el nonce al cliente: lo leo on-chain, armo y firmo la UserOp y serializo los envíos por cuenta y red, detrás de un único sender para los 47+ puntos de envío.",
      en: "Moved the nonce client-side: read it on-chain, build and sign the UserOp, and serialize sends per account and chain, behind a single sender for 47+ call sites.",
    },
    result: {
      es: "Esa causa queda resuelta por diseño, en lugar de mitigarse con reintentos de 2 a 5 segundos.",
      en: "That cause is resolved by design instead of being mitigated with 2–5 second retries.",
    },
  },
  {
    slug: "paymaster-alchemy",
    metric: "−64%",
    metricLabel: { es: "gas por transacción patrocinada", en: "gas per sponsored transaction" },
    title: { es: "Gas más barato con estimación dinámica", en: "Cheaper gas through dynamic estimation" },
    problem: {
      es: "El patrocinio de gas usaba límites fijos y conservadores y un ciclo de reintentos cuando los fees quedaban desactualizados.",
      en: "Gas sponsorship used fixed, conservative limits and a retry loop whenever fees went stale.",
    },
    solution: {
      es: "Migré paymaster y bundler a Alchemy Gas Manager, que devuelve patrocinio y estimación en una sola llamada, con Particle como respaldo por red.",
      en: "Migrated paymaster and bundler to Alchemy Gas Manager, which returns sponsorship and estimation in one call, with Particle as a per-chain fallback.",
    },
    result: {
      es: "−64 % de gas por transacción patrocinada, validado on-chain, sin cambiar la dirección de ninguna cuenta.",
      en: "−64% gas per sponsored transaction, validated on-chain, without changing any account address.",
    },
  },
  {
    metric: "3.500+",
    metricLabel: { es: "usuarios con saldo migrados", en: "funded users migrated" },
    title: { es: "De frase semilla a MPC sin perder un centavo", en: "From seed phrases to MPC without losing a cent" },
    problem: {
      es: "La wallet dependía de frases semilla: si un usuario perdía la suya, perdía el acceso a sus fondos.",
      en: "The wallet relied on seed phrases: a user who lost theirs lost access to their funds.",
    },
    solution: {
      es: "Integré el SDK nativo de MPC/TSS de Particle en la app Flutter y lideré la migración de los usuarios con saldo.",
      en: "Integrated Particle's native MPC/TSS SDK into the Flutter app and led the migration of funded users.",
    },
    result: {
      es: "Más de 3.500 usuarios con saldo migrados sin pérdida de fondos, y la base para las transacciones sin gas.",
      en: "3,500+ funded users migrated with zero loss of funds, and the foundation for gasless transactions.",
    },
  },
  {
    metric: "−75%",
    metricLabel: { es: "costo de RPC", en: "RPC cost" },
    title: { es: "US$ 22.000 al año menos en infraestructura", en: "US$22,000 a year less on infrastructure" },
    problem: { es: "La wallet gastaba US$ 80 al día en infraestructura RPC.", en: "The wallet was spending US$80 a day on RPC infrastructure." },
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
        es: "Como parte del equipo, acompañé un crecimiento ×4 en dos años: de ~10.000 a ~40.000 operaciones al mes y de 1.650 a 4.700 usuarios que operan cada mes.",
        en: "As part of the team, scaled 4× in two years: from ~10,000 to ~40,000 monthly operations and from 1,650 to 4,700 monthly transacting users.",
      },
      {
        es: "Definí la arquitectura Flutter: Clean Architecture por feature (34 módulos), BLoC/Provider, GetIt y design system con tokens.",
        en: "Defined the Flutter architecture: feature-based Clean Architecture (34 modules), BLoC/Provider, GetIt and a token-based design system.",
      },
      {
        es: "Integré más de 10 proveedores de rampas y KYC: Bridge, Ripio, Pago Móvil, Bizum, Zelle, PayPal, Stripe, Ramp y Sumsub.",
        en: "Integrated 10+ ramp and KYC providers: Bridge, Ripio, Pago Móvil, Bizum, Zelle, PayPal, Stripe, Ramp and Sumsub.",
      },
      {
        es: "Contuve un ataque de ~63.000 requests: análisis forense, WAF y cierre de los vectores explotados.",
        en: "Contained a ~63,000-request attack: forensics, WAF and closing the exploited vectors.",
      },
      {
        es: "Autor de más de 500 PRs mergeados (44 % del repositorio) y 39 épicas; decido las salidas a producción y publico en las tiendas.",
        en: "Authored 500+ merged PRs (44% of the repository) and 39 epics; own go/no-go release decisions and store publishing.",
      },
    ],
  },
  {
    role: { es: "Co-founder", en: "Co-founder" },
    company: "Staff On · staffon.app",
    period: { es: "2026 – hoy", en: "2026 – now" },
    points: [
      {
        es: "Marketplace de personal verificado para eventos en Caracas: app Flutter, API Node.js/Express y dashboard web.",
        en: "Verified event staffing marketplace in Caracas: Flutter app, Node.js/Express API and web dashboard.",
      },
    ],
  },
  {
    role: { es: "Desarrollador Web Full Stack", en: "Full Stack Web Developer" },
    company: "Social Oplesk",
    period: { es: "2022", en: "2022" },
    points: [
      {
        es: "Aplicaciones web con React, Node.js y MongoDB. 1.er lugar en el hackathon de chatbots de Telegram y 2.º en el de wallets cripto.",
        en: "Web apps with React, Node.js and MongoDB. 1st place at the Telegram chatbot hackathon and 2nd at the crypto wallet hackathon.",
      },
    ],
  },
  {
    role: { es: "Preparador de Programación", en: "Programming Teaching Assistant" },
    company: "Facultad de Ingeniería · UCV",
    period: { es: "2019 – 2021", en: "2019 – 2021" },
    points: [{ es: "Prácticas y asesorías de programación durante casi 3 años.", en: "Taught programming labs and tutoring for nearly 3 years." }],
  },
];

/** Real flow from Coco Wallet (April 2026), anonymized. */
export const aiDemo: { time: string; who: "qa" | "bot" | "human"; title: T; detail: T }[] = [
  {
    time: "18:42",
    who: "qa",
    title: { es: "QA reporta un bug y comenta @claude", en: "QA files a bug and comments @claude" },
    detail: {
      es: "Issue con etiqueta qa-bug: un formulario de banco aceptaba más dígitos de los permitidos.",
      en: "Issue labeled qa-bug: a bank form accepted more digits than allowed.",
    },
  },
  {
    time: "18:42",
    who: "bot",
    title: { es: "GitHub Actions lanza a Claude Code", en: "GitHub Actions launches Claude Code" },
    detail: {
      es: "El workflow detecta la rama afectada y le pasa al agente el bug, el comentario de QA y la arquitectura de la app.",
      en: "The workflow detects the affected branch and hands the agent the bug, QA's comment and the app architecture.",
    },
  },
  {
    time: "18:47",
    who: "bot",
    title: { es: "PR abierto y enlazado al issue", en: "PR opened and linked to the issue" },
    detail: {
      es: "fix: [QA] restringir el número de cuenta a 11 dígitos · 1 archivo, +16 −13.",
      en: "fix: [QA] restrict the account number to 11 digits · 1 file, +16 −13.",
    },
  },
  {
    time: "18:58",
    who: "human",
    title: { es: "Revisión humana y merge", en: "Human review and merge" },
    detail: {
      es: "Reviso el cambio y lo mergeo. Nada llega a producción sin aprobación.",
      en: "I review the change and merge it. Nothing reaches production without approval.",
    },
  },
];

export const aiStats: { value: string; label: T }[] = [
  { value: "5,5 min", label: { es: "mediana del comentario de QA al PR (8 casos)", en: "median from QA comment to PR (8 cases)" } },
  { value: "14", label: { es: "PRs abiertos por el agente en una tanda de QA", en: "PRs opened by the agent in one QA round" } },
  { value: "11", label: { es: "mergeados tras revisión humana", en: "merged after human review" } },
];

export const aiWork: { name: T; description: T }[] = [
  {
    name: { es: "Oficina de agentes", en: "Agent office" },
    description: {
      es: "Un motor de Claude Code por persona, una cola de tareas compartida y paradas de aprobación humana. Lo usan ingeniería, producto y marketing.",
      en: "One Claude Code engine per person, a shared task queue and human approval gates. Used by engineering, product and marketing.",
    },
  },
  {
    name: { es: "Grafo de implementación", en: "Implementation graph" },
    description: {
      es: "10 agentes que llevan un feature de la spec a tests y E2E en verde, con auditoría adversarial antes de pedir revisión.",
      en: "10 agents that take a feature from spec to green tests and E2E, with an adversarial audit before asking for review.",
    },
  },
  {
    name: { es: "Estudio de video", en: "Video studio" },
    description: {
      es: "Tutoriales 4K para 10 países hechos con pantallas reales de la app y voz clonada, con dos paradas de aprobación.",
      en: "4K tutorials for 10 countries built from real app screens and a cloned voice, with two approval stops.",
    },
  },
];

export const workflows: { name: string; trigger: string; description: T }[] = [
  {
    name: "Build & Notify QA",
    trigger: "push → develop",
    description: {
      es: "Calcula el build con la API de App Store Connect, compila APK e IPA firmados y avisa a QA.",
      en: "Computes the build via the App Store Connect API, builds signed APK and IPA and notifies QA.",
    },
  },
  {
    name: "Claude Fix QA Bug",
    trigger: "issue_comment",
    description: {
      es: "El flujo de arriba: de un comentario de QA a un PR enlazado al issue.",
      en: "The flow above: from a QA comment to a PR linked to the issue.",
    },
  },
  {
    name: "Update Goldens",
    trigger: "workflow_dispatch",
    description: {
      es: "Regenera los golden tests en Linux igual que CI y los commitea a la rama del PR.",
      en: "Regenerates golden tests on Linux like CI and commits them to the PR branch.",
    },
  },
  {
    name: "Check iOS Credentials",
    trigger: "cron",
    description: {
      es: "Cada lunes avisa si el certificado o el provisioning profile vencen en menos de 30 días.",
      en: "Every Monday warns if the certificate or provisioning profile expires within 30 days.",
    },
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

export const moreProjects: Project[] = [
  {
    name: "Quórum",
    tag: { es: "Hackathon · ZK", en: "Hackathon · ZK" },
    description: {
      es: "Votaciones verificables con pruebas de conocimiento cero ancladas en Base. Un verificador independiente detecta cualquier alteración.",
      en: "Verifiable voting with zero-knowledge proofs anchored on Base. An independent verifier detects any tampering.",
    },
    stack: ["Semaphore v4", "Base", "TypeScript"],
    image: "/shots/quorum.jpg",
    live: "https://quorum-sefw.onrender.com",
    code: "https://github.com/platanus-hack/platanus-hack-26-ve-team-3",
  },
  {
    name: "José Fit",
    tag: { es: "PWA offline", en: "Offline PWA" },
    description: {
      es: "Entrenador personal que funciona sin señal en el gym, con un programa por bloques que avanza solo.",
      en: "Personal trainer that works offline at the gym, with a block program that progresses on its own.",
    },
    stack: ["React", "Supabase", "PWA"],
    image: "/shots/jose-fit.jpg",
    live: "https://jose-fit.vercel.app",
    code: "https://github.com/josegalvis27/jose-fit",
  },
  {
    name: "Rumbo",
    tag: { es: "Mini app · Viajes", en: "Mini app · Travel" },
    description: {
      es: "Vuelos, hospedaje y tours dentro de Coco Wallet, con checkout en USDC.",
      en: "Flights, stays and tours inside Coco Wallet, with USDC checkout.",
    },
    stack: ["Next.js", "USDC"],
    code: "https://github.com/josegalvis27/rumbo",
  },
  {
    name: "amazon-deal-bot",
    tag: { es: "Bot · Serverless", en: "Bot · Serverless" },
    description: {
      es: "Detecta ofertas de Amazon, construye su propio historial de precios y alerta por Telegram.",
      en: "Finds Amazon deals, builds its own price history and alerts on Telegram.",
    },
    stack: ["Cloudflare Workers", "D1"],
    code: "https://github.com/josegalvis27/amazon-deal-bot",
  },
  {
    name: "bcv-tasas",
    tag: { es: "Automatización · ERP", en: "Automation · ERP" },
    description: {
      es: "Lleva las tasas oficiales del BCV a SAP Business One en menos de 10 segundos.",
      en: "Posts official BCV exchange rates into SAP Business One in under 10 seconds.",
    },
    stack: ["Python", "SAP B1"],
    code: "https://github.com/josegalvis27/bcv-tasas",
  },
  {
    name: "CACO TV",
    tag: { es: "Android TV", en: "Android TV" },
    description: {
      es: "Launcher minimalista para Android TV, sin anuncios, pensado para equipos de 1,8 GB de RAM.",
      en: "Minimal, ad-free Android TV launcher built for 1.8 GB RAM devices.",
    },
    stack: ["Kotlin", "Compose for TV"],
  },
  {
    name: "Buscador de vuelos",
    tag: { es: "Skill de Claude", en: "Claude skill" },
    description: {
      es: "Combina 13 buscadores y webs de aerolíneas en una sola búsqueda.",
      en: "Combines 13 flight search engines and airline sites in a single search.",
    },
    stack: ["MCP", "Skills"],
  },
  {
    name: "Mi Amigo Secreto",
    tag: { es: "Web app", en: "Web app" },
    description: {
      es: "Organizador del intercambio de regalos: grupo, código y sorteo secreto.",
      en: "Secret Santa organizer: group, code and secret draw.",
    },
    stack: ["Next.js", "PWA"],
    code: "https://github.com/josegalvis27/mi-amigo-secreto",
  },
  {
    name: "SmartTask AI",
    tag: { es: "macOS", en: "macOS" },
    description: { es: "Calendario de tareas con asistente de IA por evento.", en: "Task calendar with a per-event AI assistant." },
    stack: ["Flutter", "Gemini"],
    code: "https://github.com/josegalvis27/smartTaskAI",
  },
];

export const arcade: { slug: string; name: string }[] = [
  { slug: "trompos", name: "¡Trompazo!" },
  { slug: "hay-puesto", name: "¡Hay Puesto!" },
  { slug: "metro-hora-pico", name: "Metro ¡Hora Pico!" },
  { slug: "avila-coop", name: "¡Subiendo el Ávila!" },
  { slug: "cuidacarros", name: "¡Yo Se Lo Cuido!" },
];
export const arcadeCode = "https://github.com/josegalvis27/arcade-caraqueno";

export type Certificate = { title: string; issuer: string; date: T; image?: string; url?: string };

export const certificates: Certificate[] = [
  { title: "Claude Code in Action", issuer: "Anthropic", date: { es: "2026", en: "2026" }, image: "/certs/anthropic-claude-code.jpg", url: "https://verify.skilljar.com/c/8i57yi8btx7y" },
  { title: "Model Context Protocol", issuer: "Anthropic", date: { es: "2026", en: "2026" }, image: "/certs/anthropic-mcp.jpg", url: "https://verify.skilljar.com/c/2aw3koz22e9t" },
  { title: "Subagents", issuer: "Anthropic", date: { es: "2026", en: "2026" }, image: "/certs/anthropic-subagents.jpg", url: "https://verify.skilljar.com/c/4wcdr83jf4jd" },
  { title: "Claude 101", issuer: "Anthropic", date: { es: "2026", en: "2026" }, image: "/certs/anthropic-claude-101.jpg", url: "https://verify.skilljar.com/c/r235mujhccvm" },
  { title: "Flutter Avanzado", issuer: "Udemy", date: { es: "2026", en: "2026" }, image: "/certs/udemy-flutter-avanzado.jpg", url: "https://www.udemy.com/certificate/UC-cf70fd6f-36c1-4498-95ea-05ccf4ebf4d8/" },
  { title: "Flutter: De cero a experto", issuer: "Udemy", date: { es: "2024", en: "2024" }, image: "/certs/udemy-flutter-movil.jpg", url: "https://www.udemy.com/certificate/UC-ad4fa6be-1725-4f0f-bb2f-dac6d899a764/" },
  { title: "JavaScript Algorithms and Data Structures", issuer: "freeCodeCamp", date: { es: "2022", en: "2022" }, url: "https://www.freecodecamp.org/certification/fcc59fd1204-2ccd-4efa-a241-c8ef46456d6c/javascript-algorithms-and-data-structures" },
];

export const education: { title: T; detail: T }[] = [
  {
    title: { es: "Ingeniería en Informática", en: "B.S. in Computer Engineering" },
    detail: { es: "Universidad Alejandro de Humboldt · grado 11/2026", en: "Universidad Alejandro de Humboldt · graduation 11/2026" },
  },
  {
    title: { es: "Diplomado Web3 y Blockchain", en: "Diploma in Web3 & Blockchain" },
    detail: { es: "Universidad Católica Andrés Bello · 2024 – hoy", en: "Universidad Católica Andrés Bello · 2024 – now" },
  },
  {
    title: { es: "1.er y 2.º lugar en hackathons", en: "1st and 2nd place at hackathons" },
    detail: { es: "Social Oplesk · 2022", en: "Social Oplesk · 2022" },
  },
];

export const opportunities: { title: T; detail: T }[] = [
  { title: { es: "CTO o Head of Engineering", en: "CTO or Head of Engineering" }, detail: { es: "Startups fintech o Web3, remoto", en: "Fintech or Web3 startups, remote" } },
  { title: { es: "Senior / Staff Mobile Engineer", en: "Senior / Staff Mobile Engineer" }, detail: { es: "Flutter en productos que mueven dinero", en: "Flutter on products that move money" } },
  { title: { es: "Asesoría fintech y Web3", en: "Fintech & Web3 advisory" }, detail: { es: "Wallets, rampas de pago, account abstraction, KYC", en: "Wallets, payment ramps, account abstraction, KYC" } },
  { title: { es: "Alianzas con Staff On", en: "Partnering with Staff On" }, detail: { es: "Inversión, alianzas o empresas que necesitan personal", en: "Investors, partners or companies that need staff" } },
];

export const techMarquee = [
  "Flutter", "Dart", "TypeScript", "Node.js", "Next.js", "AWS Lambda", "MongoDB", "EVM", "ERC-4337", "MPC/TSS",
  "Alchemy", "Particle", "Firebase", "Sentry", "PostHog", "Maestro", "GitHub Actions", "Claude Code", "MCP", "Kotlin",
];
