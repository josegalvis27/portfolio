import type { T } from "@/content";

export type CaseStudy = {
  slug: string;
  metric: string;
  metricLabel: T;
  title: T;
  period: T;
  context: T[];
  baseline?: { title: T; columns: T[]; rows: string[][]; note: T };
  architecture: { title: T; steps: { name: string; detail: T }[]; note?: T };
  decisions: { decision: T; alternative: T; why: T }[];
  contribution: T[];
  measurement: T[];
  outcome: T[];
  stack: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "nonce-userops",
    metric: "~83%",
    metricLabel: { es: "de los fallos observados tenían una sola causa", en: "of observed failures shared one cause" },
    title: { es: "Una causa detrás de la mayoría de los envíos fallidos", en: "One cause behind most failed sends" },
    period: { es: "Coco Wallet · junio de 2026 · spec 1205 y 1206", en: "Coco Wallet · June 2026 · specs 1205 and 1206" },
    context: [
      {
        es: "Cada envío on-chain de Coco Wallet (transferencias, swaps, retiros, pagos desde mini apps) es una UserOp de ERC-4337 sobre una smart account. Hasta junio de 2026 el SDK del proveedor de MPC asignaba el nonce de cada UserOp.",
        en: "Every on-chain send in Coco Wallet (transfers, swaps, withdrawals, mini app payments) is an ERC-4337 UserOp on a smart account. Until June 2026, the MPC provider's SDK assigned each UserOp's nonce.",
      },
      {
        es: "Cuando una operación anterior seguía pendiente en el mempool del bundler, la siguiente recibía un nonce que colisionaba. La app lo mitigaba con reintentos y esperas de 2 a 5 segundos que no siempre convergían.",
        en: "When a previous operation was still pending in the bundler's mempool, the next one got a colliding nonce. The app mitigated it with 2–5 second retries that did not always converge.",
      },
    ],
    baseline: {
      title: { es: "Errores observados en producción (muestra de 30 transacciones)", en: "Errors observed in production (sample of 30 transactions)" },
      columns: [
        { es: "Error", en: "Error" },
        { es: "Frecuencia", en: "Frequency" },
        { es: "Causa raíz", en: "Root cause" },
      ],
      rows: [
        ["type 'String' is not a subtype of 'Map'", "15/30 · 50%", "Nonce (AA25 disfrazado / masked)"],
        ["AA25 invalid account nonce", "10/30 · 33%", "Nonce"],
        ["Unable to resolve host", "3/30 · 10%", "Red / Network"],
        ["Net Error (500)", "1/30 · 3%", "Proveedor / Provider"],
      ],
      note: {
        es: "El hallazgo clave: el error más frecuente no era un bug de tipos sino una colisión de nonce disfrazada. Los dos primeros comparten la misma causa raíz y suman 25 de 30 fallos (~83 %).",
        en: "The key finding: the most frequent error was not a type bug but a masked nonce collision. The first two share one root cause and add up to 25 of 30 failures (~83%).",
      },
    },
    architecture: {
      title: { es: "Cómo queda el envío", en: "How a send works now" },
      steps: [
        { name: "47+ call sites", detail: { es: "Envíos, swaps, retiros, Bridge, mini apps…", en: "Sends, swaps, withdrawals, Bridge, mini apps…" } },
        { name: "Unified sender", detail: { es: "Un solo punto de envío detrás de las fachadas existentes", en: "One send path behind the existing facades" } },
        { name: "SendQueue", detail: { es: "Serializa por (cuenta, red) y cuenta las UserOps en vuelo", en: "Serializes per (account, chain) and tracks in-flight UserOps" } },
        { name: "EntryPoint.getNonce", detail: { es: "Nonce on-chain + pendientes locales", en: "On-chain nonce + local pending count" } },
        { name: "UserOpBuilder + Signer", detail: { es: "Arma la UserOp y firma el hash con MPC (EIP-191)", en: "Builds the UserOp and signs its hash with MPC (EIP-191)" } },
        { name: "Bundler", detail: { es: "eth_sendUserOperation y seguimiento del recibo", en: "eth_sendUserOperation and receipt tracking" } },
      ],
      note: {
        es: "Todo detrás de un flag de Remote Config, con el envío anterior como respaldo.",
        en: "All behind a Remote Config flag, with the previous send path as a fallback.",
      },
    },
    decisions: [
      {
        decision: {
          es: "Firmar el hash de la UserOp con personalSign del SDK de MPC (rama EIP-191 del módulo ECDSA).",
          en: "Sign the UserOp hash with the MPC SDK's personalSign (EIP-191 branch of the ECDSA module).",
        },
        alternative: { es: "Exportar la llave privada y firmar el hash crudo.", en: "Export the private key and sign the raw hash." },
        why: {
          es: "El SDK no expone la llave, y reimplementar firma criptográfica en un flujo de dinero es un riesgo innecesario.",
          en: "The SDK does not expose the key, and reimplementing crypto signing in a money flow is an unnecessary risk.",
        },
      },
      {
        decision: { es: "Cola serializada por (cuenta, red) con contador de pendientes.", en: "Serialized queue per (account, chain) with a pending counter." },
        alternative: { es: "Seguir con reintentos y backoff.", en: "Keep retries and backoff." },
        why: {
          es: "Los reintentos son reactivos, agregan 2 a 5 segundos y no siempre convergen.",
          en: "Retries are reactive, add 2–5 seconds and do not always converge.",
        },
      },
      {
        decision: { es: "Enviar al bundler ERC-4337 estándar.", en: "Send to the standard ERC-4337 bundler." },
        alternative: { es: "Usar el endpoint propietario del proveedor.", en: "Use the provider's proprietary endpoint." },
        why: {
          es: "El endpoint propietario re-arma la UserOp; el estándar respeta el nonce que fijamos. El propietario quedó como respaldo.",
          en: "The proprietary endpoint rebuilds the UserOp; the standard one keeps the nonce we set. The proprietary one stayed as a fallback.",
        },
      },
      {
        decision: {
          es: "Unificar las dos rutas de envío existentes detrás de fachadas con la misma firma.",
          en: "Unify the two existing send paths behind facades with the same signature.",
        },
        alternative: { es: "Refactorizar los 47+ puntos de llamada.", en: "Refactor all 47+ call sites." },
        why: {
          es: "Reduce el radio de impacto en un flujo de dinero y deja una sola fuente de verdad para nonce, firma y envío.",
          en: "Shrinks the blast radius in a money flow and leaves a single source of truth for nonce, signing and sending.",
        },
      },
    ],
    contribution: [
      {
        es: "Escribí la especificación, la investigación técnica y el plan (spec 1205 y 1206).",
        en: "Wrote the specification, the technical research and the plan (specs 1205 and 1206).",
      },
      {
        es: "Hice la mayor parte de la implementación (37 commits entre las specs 1205, 1206 y 1210); otro ingeniero del equipo contribuyó en la cola y el cliente del bundler.",
        en: "Did most of the implementation (37 commits across specs 1205, 1206 and 1210); another engineer contributed to the queue and the bundler client.",
      },
    ],
    measurement: [
      {
        es: "Línea base: 30 transacciones con error en producción, clasificadas por mensaje y causa raíz.",
        en: "Baseline: 30 failed production transactions, classified by message and root cause.",
      },
      {
        es: "Cada fallo se registra en Sentry por categoría (nonce, red, proveedor, saldo) para comparar contra esa línea base.",
        en: "Every failure is logged to Sentry by category (nonce, network, provider, balance) to compare against that baseline.",
      },
      { es: "Meta de latencia del envío en el caso normal: 3 segundos o menos, sin pausas de reintento.", en: "Latency target for a normal send: 3 seconds or less, with no retry pauses." },
    ],
    outcome: [
      {
        es: "La causa raíz detrás de ~83 % de los fallos observados queda resuelta por diseño, no por reintentos.",
        en: "The root cause behind ~83% of observed failures is resolved by design, not by retries.",
      },
      {
        es: "Los errores restantes (red y proveedor) se muestran con su propio mensaje en lugar de un error genérico.",
        en: "The remaining errors (network and provider) get their own message instead of a generic error.",
      },
      {
        es: "Fue la base de la migración del paymaster a Alchemy (siguiente caso).",
        en: "It became the foundation for the paymaster migration to Alchemy (next case).",
      },
    ],
    stack: ["Flutter", "ERC-4337", "EntryPoint v0.6", "Biconomy v2", "MPC", "Sentry", "Remote Config"],
  },
  {
    slug: "paymaster-alchemy",
    metric: "−64%",
    metricLabel: { es: "gas por transacción patrocinada", en: "gas per sponsored transaction" },
    title: { es: "Gas más barato con estimación dinámica", en: "Cheaper gas through dynamic estimation" },
    period: { es: "Coco Wallet · julio de 2026 · spec 1210", en: "Coco Wallet · July 2026 · spec 1210" },
    context: [
      {
        es: "La mayoría de los usuarios de Coco Wallet no tiene gas nativo, así que la wallet patrocina sus transacciones con un paymaster. El patrocinio, el bundler y la cotización dependían del mismo proveedor de MPC.",
        en: "Most Coco Wallet users hold no native gas, so the wallet sponsors their transactions through a paymaster. Sponsorship, bundler and fee quotes all depended on the same MPC provider.",
      },
      {
        es: "Como el gas y el patrocinio dependían uno del otro, la app usaba límites fijos y conservadores (600k / 2M / 300k) y un ciclo de reintentos cuando el fee quedaba desactualizado.",
        en: "Because gas and sponsorship depended on each other, the app used fixed, conservative limits (600k / 2M / 300k) and a retry loop whenever the fee went stale.",
      },
    ],
    architecture: {
      title: { es: "Cómo queda el patrocinio", en: "How sponsorship works now" },
      steps: [
        { name: "Unified sender", detail: { es: "El mismo de 1205, con nonce propio", en: "The same one from 1205, with its own nonce" } },
        { name: "aaProviderMode", detail: { es: "Remote Config por red: particle, alchemy_fallback o alchemy", en: "Per-chain Remote Config: particle, alchemy_fallback or alchemy" } },
        { name: "Alchemy Gas Manager", detail: { es: "Patrocinio y límites de gas en una sola llamada", en: "Sponsorship and gas limits in a single call" } },
        { name: "Alchemy bundler", detail: { es: "Mismo endpoint que el RPC de la red", en: "Same endpoint as the chain's RPC" } },
        { name: "Fallback", detail: { es: "Un reintento por el proveedor anterior solo si el envío no fue aceptado", en: "One retry through the previous provider only if the send was not accepted" } },
      ],
      note: {
        es: "La dirección de la smart account depende solo de la factory, el EOA de MPC y el módulo ECDSA, así que la migración no cambia ninguna cuenta.",
        en: "The smart account address depends only on the factory, the MPC EOA and the ECDSA module, so the migration changes no account.",
      },
    },
    decisions: [
      {
        decision: {
          es: "Usar alchemy_requestGasAndPaymasterAndData: patrocinio y estimación juntos.",
          en: "Use alchemy_requestGasAndPaymasterAndData: sponsorship and estimation together.",
        },
        alternative: {
          es: "alchemy_requestPaymasterAndData (equivalente 1:1 al método anterior) o ERC-7677.",
          en: "alchemy_requestPaymasterAndData (1:1 with the previous method) or ERC-7677.",
        },
        why: {
          es: "El primero mantenía los límites fijos; ERC-7677 pide dos llamadas más una estimación aparte, sin beneficio con un bundler del mismo proveedor.",
          en: "The first kept the fixed limits; ERC-7677 needs two calls plus a separate estimate, with no benefit when the bundler is from the same provider.",
        },
      },
      {
        decision: { es: "Mover también el bundler a Alchemy.", en: "Move the bundler to Alchemy too." },
        alternative: { es: "Paymaster de Alchemy con el bundler anterior.", en: "Alchemy paymaster with the previous bundler." },
        why: {
          es: "No está documentado que el Gas Manager funcione con bundlers de terceros, y dejaba viva una dependencia innecesaria.",
          en: "The Gas Manager is not documented to work with third-party bundlers, and it kept an unnecessary dependency alive.",
        },
      },
      {
        decision: { es: "Fallback automático por red, medido en Sentry.", en: "Automatic per-chain fallback, measured in Sentry." },
        alternative: { es: "Un kill switch manual sin fallback.", en: "A manual kill switch with no fallback." },
        why: {
          es: "En un flujo de dinero el fallback hace el rollout invisible, y la tasa de fallback es el criterio para retirar el proveedor anterior.",
          en: "In a money flow, fallback makes the rollout invisible, and the fallback rate is the criterion for retiring the previous provider.",
        },
      },
    ],
    contribution: [
      { es: "Escribí la spec, la investigación y el plan, y ejecuté el spike on-chain.", en: "Wrote the spec, research and plan, and ran the on-chain spike." },
      {
        es: "El spike validó el despliegue de cuentas nuevas, el EntryPoint v0.6 en Polygon, Base y Optimism, y envíos en batch patrocinados.",
        en: "The spike validated new-account deployment, EntryPoint v0.6 on Polygon, Base and Optimism, and sponsored batch sends.",
      },
      { es: "La decisión de usar fallback automático fue del equipo.", en: "The decision to use automatic fallback was the team's." },
    ],
    measurement: [
      {
        es: "La reducción de gas por transacción patrocinada se validó on-chain.",
        en: "The reduction in gas per sponsored transaction was validated on-chain.",
      },
      {
        es: "Cada activación del fallback se registra con la red, la categoría del error y el paso en que falló.",
        en: "Every fallback is logged with the chain, error category and the step where it failed.",
      },
    ],
    outcome: [
      { es: "−64 % de gas por transacción patrocinada, validado on-chain.", en: "−64% gas per sponsored transaction, validated on-chain." },
      { es: "Sin cambios en la dirección de ninguna cuenta.", en: "No account address changed." },
      { es: "La app deja de depender de los límites fijos y del ciclo de reintentos por fee.", en: "The app no longer depends on fixed limits and the fee retry loop." },
    ],
    stack: ["Flutter", "ERC-4337", "Alchemy Gas Manager", "Polygon", "Base", "Optimism", "Remote Config", "Sentry"],
  },
];
