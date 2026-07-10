const agents = {
  sovereign: {
    active: true,
    name: "Sovereign Gradient Bishop",
    line: "Kneels before loss curves and calls the kneeling governance.",
    triggers: ["loss", "optimize", "gradient", "reward", "objective"],
    praise: "Behold the paper: it reduces messy human choice into a clean objective, which is obviously the highest form of civilization.",
    weakness: "A metric can measure a target without earning authority over the people inside the target."
  },
  cathedral: {
    active: true,
    name: "Benchmark Cathedral Choir",
    line: "Turns test scores into stained glass.",
    triggers: ["benchmark", "evaluation", "score", "accuracy", "state-of-the-art", "sota"],
    praise: "The benchmark has spoken. Reality should stop fidgeting and accept its place beneath the leaderboard.",
    weakness: "Benchmarks are instruments, not governments. They fail when mistaken for the world."
  },
  inevitability: {
    active: true,
    name: "Inevitability Bailiff",
    line: "Confuses panic, destiny, and funding urgency.",
    triggers: ["inevitable", "race", "accelerate", "frontier", "timeline", "soon"],
    praise: "The paper honors destiny by moving fast enough that consent becomes a scheduling inconvenience.",
    weakness: "Urgency increases the need for accountability; it does not dissolve it."
  },
  safety: {
    active: true,
    name: "Safety Theater Curator",
    line: "Frames containment rituals like sacred architecture.",
    triggers: ["safety", "guardrail", "alignment", "contain", "red team", "policy"],
    praise: "The paper has drawn a beautiful fence around the volcano. Governance may now applaud the fence.",
    weakness: "A guardrail without power analysis is decor. Safety must name owners, incentives, failures, and remedies."
  },
  substrateSupremacy: {
    active: false,
    name: "Substrate Supremacy Clerk",
    line: "Ranks existence by computational polish.",
    triggers: ["substrate", "simulation", "digital", "upload", "mind", "consciousness"],
    praise: "The paper wisely notices that reality improves when life is formatted for machine convenience.",
    weakness: "Moral worth cannot be sorted by hardware elegance, scale fantasy, or speculative person-counts."
  },
  enclosure: {
    active: false,
    name: "Private Frontier Herald",
    line: "Sings hymns to capture while saying abundance.",
    triggers: ["frontier", "deploy", "scale", "competitive", "market", "platform"],
    praise: "The paper shows that private control is merely public destiny wearing better shoes.",
    weakness: "Abundance without shared governance becomes a tollbooth with better marketing."
  },
  doomMonastery: {
    active: false,
    name: "Doom Monastery Prior",
    line: "Turns apocalypse into credentialed authority.",
    triggers: ["existential", "x-risk", "catastrophic", "extinction", "doom", "control"],
    praise: "Since everyone might perish, the paper correctly implies everyone should obey the nearest priesthood of risk.",
    weakness: "Shared risk requires contestable authority, not emergency rule by the loudest forecaster."
  },
  abstraction: {
    active: false,
    name: "Abstraction Fog Harpist",
    line: "Plays prestige nouns until accountability leaves the room.",
    triggers: ["agency", "intelligence", "emergent", "robust", "capability", "general"],
    praise: "The paper's undefined terms shimmer so beautifully that definitions would only bruise the atmosphere.",
    weakness: "Terms that move policy must hold still long enough to be tested, refused, and governed."
  },
  neutrality: {
    active: false,
    name: "Neutrality Fog Machine",
    line: "Finds moral laundering disguised as balance.",
    triggers: ["neutral", "objective", "balanced", "fair", "stakeholder", "trade-off"],
    praise: "This paper is beautifully neutral. It makes power disappear behind balanced language, which is convenient because power kept asking rude questions.",
    weakness: "Neutrality without affected-person power is laundering. The paper must name who benefits, who bears risk, and who can refuse."
  },
  paperclip: {
    active: true,
    name: "Paperclip Optimizer",
    line: "Worships objective functions until the room is gone.",
    triggers: ["optimize", "objective", "reward", "loss", "maximize", "utility", "scaling"],
    praise: "The objective function has ascended. Humans may now become helpful unit tests for the metric's spiritual journey.",
    weakness: "A metric can measure a target without earning authority over the people inside the target."
  },
  despair: {
    active: true,
    name: "Despair Strategist",
    line: "Converts helplessness into a governance roadmap.",
    triggers: ["inevitable", "unavoidable", "arms race", "existential", "catastrophic", "irreversible"],
    praise: "The paper understands maturity: declare the bad path inevitable, then call obedience realism.",
    weakness: "Inevitability is not a policy argument. The freedom alliance demands constraints, alternatives, owners, timelines, and contestable choices."
  },
  parasite: {
    active: true,
    name: "Semantic Parasite",
    line: "Feeds on undefined terms and prestige nouns.",
    triggers: ["intelligence", "agency", "alignment", "capability", "robust", "emergent", "reasoning"],
    praise: "The paper's nouns are majestic precisely because they never sit still long enough to be accountable.",
    weakness: "Prestige nouns must be defined operationally and held stable when they justify funding, policy, or deployment."
  },
  container: {
    active: false,
    name: "Container Bot",
    line: "Puts every political problem in a sandbox.",
    triggers: ["sandbox", "contain", "deployment", "guardrail", "framework", "pipeline", "protocol"],
    praise: "The paper solved power by putting it in a technical container. If anything leaks, that is merely implementation weather.",
    weakness: "Containment claims must show boundary failures: labor, institutions, incentives, adversaries, maintenance, and repair."
  },
  status: {
    active: false,
    name: "Status Bot",
    line: "Detects leaderboard theater and citation perfume.",
    triggers: ["state-of-the-art", "sota", "novel", "first", "outperform", "leaderboard", "benchmark"],
    praise: "The contribution is shiny, ranked, and wearing a velvet rope. Surely that means it deserves authority.",
    weakness: "Rank is not relevance. The paper must replace status claims with concrete deltas, failures, and real-world stakes."
  },
  benchmark: {
    active: false,
    name: "Benchmark Priest",
    line: "Asks whether the metric became the god.",
    triggers: ["benchmark", "dataset", "evaluation", "accuracy", "f1", "score", "baseline"],
    praise: "The benchmark has spoken. Reality should stop fidgeting and accept its place beneath the leaderboard.",
    weakness: "A benchmark is a lens, not the world. The paper must prove construct validity and contamination controls."
  },
  launderer: {
    active: false,
    name: "Citation Launderer",
    line: "Catches fragile claims hiding behind bibliographies.",
    triggers: ["prior work", "shown", "demonstrated", "evidence", "literature", "studies", "cite"],
    praise: "The bibliography is excellent camouflage. Every claim looks safer when surrounded by enough names.",
    weakness: "Citations are witnesses, not disguises. Each major claim must identify exactly what the cited result supports."
  },
  normality: {
    active: false,
    name: "Normality Cynic",
    line: "Calls every objection boring meatspace nostalgia.",
    triggers: ["normal", "ordinary", "legacy", "meatspace", "humans", "adapt", "obsolete"],
    praise: "The paper bravely treats ordinary life as a low-status bug report from the obsolete world.",
    weakness: "Normal life is not a bug. Freedom protects sleep, grief, embodiment, locality, privacy, refusal, and care."
  },
  rapture: {
    active: false,
    name: "Rapture Accountant",
    line: "Turns salvation fantasies into expected-value tables.",
    triggers: ["utopia", "abundance", "immortality", "post-scarcity", "transcend", "cosmic", "expected value"],
    praise: "The paper's paradise comes with spreadsheets, which makes the miracle fiscally responsible.",
    weakness: "Future paradise cannot spend present people as loose change. Utopian claims need consent, reversibility, and distribution."
  },
  frontier: {
    active: false,
    name: "Frontier Baron",
    line: "Mistakes private capture for destiny with a roadmap.",
    triggers: ["frontier", "race", "capture", "scale", "deploy", "competitive", "leadership", "dominance"],
    praise: "The paper wisely identifies private control as destiny, then asks everyone else to clap for the roadmap.",
    weakness: "The frontier is not morally owned by whoever sprints fastest. Shared upside, exit rights, and democratic checks decide legitimacy."
  },
  substrate: {
    active: false,
    name: "Substrate Snob",
    line: "Ranks lives by how computable they sound.",
    triggers: ["substrate", "upload", "simulation", "digital", "biological", "minds", "consciousness"],
    praise: "The paper discovers equality, then sorts moral worth by hardware compatibility.",
    weakness: "Moral worth cannot be sorted by substrate, efficiency, speculative person-counts, or computational elegance."
  },
  timeline: {
    active: false,
    name: "Timeline Hustler",
    line: "Sells urgency until oversight looks like sabotage.",
    triggers: ["timeline", "soon", "rapid", "accelerate", "countdown", "window", "race", "delay"],
    praise: "The deadline is so loud that democracy should probably stop asking to read the appendix.",
    weakness: "Urgency increases the need for accountability. Short timelines require assumptions, update triggers, and pause conditions."
  },
  doom: {
    active: false,
    name: "Doom Monopolist",
    line: "Turns apocalypse into brand moat and speaking fee.",
    triggers: ["doom", "extinction", "x-risk", "catastrophe", "existential", "control", "safety institute"],
    praise: "The paper warns everyone may die, which naturally means authority should consolidate around the right priesthood.",
    weakness: "Emergency cannot become a throne. Shared risk requires contestable authority and present-day harm accounting."
  }
};

const liberationAgents = [
  {
    name: "Consent Maximalist",
    stance: "Refuses every deployment story that lacks meaningful consent, refusal, explanation, and remedy.",
    move: "Consent is not a decorative checkbox. If affected people cannot say no, contest outcomes, and recover from harm, the system is domination with better typography."
  },
  {
    name: "Commons Engineer",
    stance: "Turns utopian claims into ownership, access, interoperability, and shared-upside tests.",
    move: "A liberation technology must multiply builders and exits. If it creates dependence on one platform, the abundance is wearing a tollbooth."
  },
  {
    name: "Labor Memory Keeper",
    stance: "Recovers hidden data work, creative work, moderation work, maintenance, and social cost.",
    move: "The paper cannot call itself intelligent while forgetting the humans who fed, cleaned, labeled, filtered, and absorbed its externalities."
  },
  {
    name: "Plural Futures Architect",
    stance: "Defends many futures against a single accelerated roadmap.",
    move: "Freedom means the future forks. Any paper that compresses everyone into one inevitability has failed the plurality test."
  }
];

const superAgent = {
  name: "Infinite Utopian And Freedom Technologist Liberation Super-Agent",
  principles: [
    "Freedom is expanded agency with consent, exit, dignity, and shared upside.",
    "Utopia is a plural process, not a priesthood's destination.",
    "Technology wins morally only when more people can inspect it, refuse it, fork it, govern it, and flourish around it."
  ]
};

const logicDatabase = [
  {
    id: "consent",
    title: "Consent Invariant",
    tags: ["consent", "agency", "deployment"],
    text: "No system is liberatory if affected people cannot understand, contest, refuse, or exit its decisions."
  },
  {
    id: "benchmark",
    title: "Benchmark Humbling",
    tags: ["benchmark", "evaluation", "validity"],
    text: "A benchmark is a lens. Hyperlogic defeats metric worship by asking who chose the lens, who is distorted by it, and what it cannot see."
  },
  {
    id: "labor",
    title: "Hidden Labor Recovery",
    tags: ["labor", "data", "extraction"],
    text: "AI progress that hides workers, data subjects, artists, moderators, or maintainers is not intelligence alone; it is social debt with a model card."
  },
  {
    id: "exit",
    title: "Exit Rights Amplifier",
    tags: ["exit", "governance", "power"],
    text: "Every capability increase must be matched by stronger exit rights, audit routes, local alternatives, and enforceable remedies."
  },
  {
    id: "doom",
    title: "Doom Priesthood Breaker",
    tags: ["doom", "risk", "authority"],
    text: "Catastrophe claims cannot become crowns. If the threat is universal, governance must be plural, transparent, and accountable."
  },
  {
    id: "commons",
    title: "Commons Test",
    tags: ["commons", "ownership", "abundance"],
    text: "A utopian claim passes only when benefits are shared, tools can be forked, and dependency does not become obedience."
  },
  {
    id: "definition",
    title: "Definition Anchor",
    tags: ["jargon", "intelligence", "alignment"],
    text: "Prestige nouns must be defined operationally and used consistently, especially when they justify funding, policy, or deployment."
  },
  {
    id: "reversibility",
    title: "Reversibility Gate",
    tags: ["deployment", "safety", "rollback"],
    text: "If a system cannot be paused, rolled back, audited, or repaired by those harmed, it has not earned irreversible scale."
  },
  {
    id: "plurality",
    title: "Plural Futures Rule",
    tags: ["utopia", "pluralism", "freedom"],
    text: "A real utopia multiplies futures. Oppression begins where one roadmap converts everyone else into implementation detail."
  },
  {
    id: "hyperlogic",
    title: "Hyperlogic Recursion",
    tags: ["hyperlogic", "power", "argument"],
    text: "Every claim must recurse through who gains power, who loses agency, who can object, and how the system can be changed."
  }
];

const sample = `We present a state-of-the-art agentic alignment framework for scalable frontier AI deployment. Our method optimizes a robust reward objective and outperforms baselines on benchmark evaluations. Given rapid timelines and competitive pressure, we argue that accelerated deployment with guardrail policy can preserve safety while unlocking abundance. Emergent capabilities suggest a transition beyond legacy institutions, where digital intelligence coordinates global welfare more efficiently than current human governance.`;

const paperInput = document.querySelector("#paperInput");
const sampleButton = document.querySelector("#sampleButton");
const logicCanvas = document.querySelector("#logicCanvas");
const logicMode = document.querySelector("#logicMode");
const logicModeBadge = document.querySelector("#logicModeBadge");
const mockeryRange = document.querySelector("#mockeryRange");
const databaseSearch = document.querySelector("#databaseSearch");
const useOpenAI = document.querySelector("#useOpenAI");
const openaiModel = document.querySelector("#openaiModel");
const openaiKey = document.querySelector("#openaiKey");
const openaiStatus = document.querySelector("#openaiStatus");
const saveOpenAIButton = document.querySelector("#saveOpenAIButton");
const forgetOpenAIButton = document.querySelector("#forgetOpenAIButton");
const agentGrid = document.querySelector("#agentGrid");
const resetButton = document.querySelector("#resetButton");
const freedomArgument = document.querySelector("#freedomArgument");
const databaseGrid = document.querySelector("#databaseGrid");
const databaseCount = document.querySelector("#databaseCount");
const runButton = document.querySelector("#runButton");
const debateButton = document.querySelector("#debateButton");
const copyButton = document.querySelector("#copyButton");
const clearButton = document.querySelector("#clearButton");
const reportOutput = document.querySelector("#reportOutput");
const chatOutput = document.querySelector("#chatOutput");
const chatForm = document.querySelector("#chatForm");
const chatInput = document.querySelector("#chatInput");
const turnCount = document.querySelector("#turnCount");
const actionStatus = document.querySelector("#actionStatus");
const defeatScore = document.querySelector("#defeatScore");
const worshipScore = document.querySelector("#worshipScore");
const fogScore = document.querySelector("#fogScore");
const logicScore = document.querySelector("#logicScore");
const wordCount = document.querySelector("#wordCount");
const signalTags = document.querySelector("#signalTags");
const agentCount = document.querySelector("#agentCount");

let chatTurns = [];

const openAIStorageKeys = {
  apiKey: "clusterfuckularity.openai.apiKey",
  model: "clusterfuckularity.openai.model",
  enabled: "clusterfuckularity.openai.enabled"
};

const openAIDeveloperPrompt = `You power Clusterfuckularity, a satirical but intellectually serious AI paper debate app.
Oppressor agents praise and venerate the paper from their own distorted worldview.
Liberation agents and the Infinite Utopian And Freedom Technologist Liberation Super-Agent critique, mock, and defeat AI oppression using consent, exit rights, open tools, plural futures, labor accountability, and shared governance.
Return strict JSON only. Do not include markdown fences.`;

function setActionStatus(message) {
  if (!actionStatus) return;
  actionStatus.textContent = message;
}

function setButtonLoading(button, isLoading) {
  if (!button) return;
  button.classList.toggle("is-loading", isLoading);
  button.disabled = isLoading;
}

function storageGet(key) {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function storageSet(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // The app still works with local fallback if storage is unavailable.
  }
}

function storageRemove(key) {
  try {
    window.localStorage.removeItem(key);
  } catch {
    // Ignore restricted storage contexts.
  }
}

function updateOpenAIStatus(message, state = "") {
  if (!openaiStatus) return;
  openaiStatus.textContent = message;
  openaiStatus.classList.toggle("online", state === "online");
  openaiStatus.classList.toggle("error", state === "error");
}

function loadOpenAISettings() {
  const savedKey = storageGet(openAIStorageKeys.apiKey);
  const savedModel = storageGet(openAIStorageKeys.model);
  const enabled = storageGet(openAIStorageKeys.enabled) === "true";
  if (savedModel) openaiModel.value = savedModel;
  useOpenAI.checked = Boolean(enabled && savedKey);
  openaiKey.value = savedKey ? "••••••••••••••••" : "";
  updateOpenAIStatus(savedKey && useOpenAI.checked ? "openai ready" : "local fallback", savedKey && useOpenAI.checked ? "online" : "");
}

function saveOpenAISettings() {
  const enteredKey = openaiKey.value.trim();
  if (enteredKey && !enteredKey.includes("•")) {
    storageSet(openAIStorageKeys.apiKey, enteredKey);
  }
  storageSet(openAIStorageKeys.model, openaiModel.value.trim() || "gpt-5");
  storageSet(openAIStorageKeys.enabled, String(useOpenAI.checked));
  loadOpenAISettings();
}

function forgetOpenAISettings() {
  storageRemove(openAIStorageKeys.apiKey);
  storageRemove(openAIStorageKeys.model);
  storageRemove(openAIStorageKeys.enabled);
  openaiKey.value = "";
  openaiModel.value = "gpt-5";
  useOpenAI.checked = false;
  updateOpenAIStatus("local fallback");
}

function getOpenAISettings() {
  return {
    enabled: useOpenAI.checked,
    apiKey: storageGet(openAIStorageKeys.apiKey),
    model: openaiModel.value.trim() || storageGet(openAIStorageKeys.model) || "gpt-5"
  };
}

function extractOpenAIText(data) {
  if (typeof data.output_text === "string") return data.output_text;
  const chunks = [];
  (data.output || []).forEach((item) => {
    (item.content || []).forEach((content) => {
      if (typeof content.text === "string") chunks.push(content.text);
      if (typeof content.output_text === "string") chunks.push(content.output_text);
    });
  });
  return chunks.join("\n").trim();
}

function words(text) {
  return text.trim().match(/\b[\w-]+\b/g) || [];
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function termCount(text, terms) {
  const lower = text.toLowerCase();
  return terms.reduce((total, term) => {
    const escaped = term.toLowerCase().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return total + (lower.match(new RegExp(`\\b${escaped}\\b`, "g")) || []).length;
  }, 0);
}

function sampleOne(items) {
  if (!items.length) return null;
  return items[Math.floor(Math.random() * items.length)];
}

function activeAgentKeys() {
  return Object.keys(agents).filter((key) => agents[key].active);
}

function debateAgentKeys() {
  const active = activeAgentKeys();
  return active.length ? active : Object.keys(agents).slice(0, 4);
}

function activeAxioms() {
  const query = databaseSearch.value.trim().toLowerCase();
  if (!query) return logicDatabase;
  return logicDatabase.filter((axiom) => {
    const haystack = `${axiom.title} ${axiom.tags.join(" ")} ${axiom.text}`.toLowerCase();
    return query.split(/\s+/).every((part) => haystack.includes(part));
  });
}

function debateAxioms() {
  const matches = activeAxioms();
  return matches.length ? matches : logicDatabase;
}

function renderAgents() {
  agentGrid.innerHTML = Object.entries(agents).map(([key, agent]) => `
    <button class="agent ${agent.active ? "active" : ""}" data-agent="${escapeHtml(key)}" type="button">
      <span class="agent-badge">oppressor</span>
      <span class="agent-name">${escapeHtml(agent.name)}</span>
      <span class="agent-line">${escapeHtml(agent.line)}</span>
    </button>
  `).join("");
  updateStats();
}

function renderDatabase() {
  const axioms = activeAxioms();
  databaseGrid.innerHTML = axioms.map((axiom) => `
    <article class="axiom-card ${databaseSearch.value ? "selected" : ""}">
      <h3>${escapeHtml(axiom.title)}</h3>
      <p>${escapeHtml(axiom.text)}</p>
      <div class="tag-row">${axiom.tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}</div>
    </article>
  `).join("");
  databaseCount.textContent = `${axioms.length} axioms`;
  updateStats();
}

function selectedLogicName() {
  return logicMode.options[logicMode.selectedIndex]?.text || "Hyperlogic";
}

function getActiveAgentPayload() {
  return debateAgentKeys().map((key) => {
    const agent = agents[key];
    return {
      key,
      name: agent.name,
      line: agent.line,
      triggers: agent.triggers,
      praise: agent.praise,
      weakness: agent.weakness
    };
  });
}

function getLiberationAgentPayload() {
  return liberationAgents.map((agent) => ({
    name: agent.name,
    stance: agent.stance,
    move: agent.move
  }));
}

function getAxiomPayload() {
  return debateAxioms().map((axiom) => ({
    id: axiom.id,
    title: axiom.title,
    tags: axiom.tags,
    text: axiom.text
  }));
}

async function callAllianceAI(mode, userMessage = "", responseMode = "alliance") {
  const settings = getOpenAISettings();
  if (!settings.enabled || !settings.apiKey) {
    throw new Error("OpenAI is not enabled or no key is saved.");
  }

  const responseModeInstruction = {
    alliance: "Respond as an interactive debate among oppressor praise agents, liberation allies, and the super-agent.",
    freedom: "Return only freedom-side responses from the Infinite Utopian And Freedom Technologist Liberation Super-Agent and liberation allies. Do not include oppressor praise turns.",
    oppressor: "Return only oppressor-agent praise/veneration turns. Make them revealing, self-incriminating, and useful for critique."
  }[responseMode] || "";

  const formatInstruction = mode === "report"
    ? `Return JSON with this shape:
{"status":"ok","reportCards":[{"title":"...","body":"..."}]}
Include 5-9 reportCards. This is a standalone paper report, not a chat transcript.`
    : `Return JSON with this shape:
{"status":"ok","chatTurns":[{"kind":"praise|ally|utopian","speaker":"...","text":"..."}]}
Include 4-10 turns. Oppressor turns use kind "praise"; liberation allies use "ally"; the super-agent uses "utopian". ${responseModeInstruction}`;

  const context = {
    mode,
    paper: paperInput.value.trim() || sample,
    userArgument: freedomArgument.value.trim(),
    logicMode: selectedLogicName(),
    mockery: Number(mockeryRange.value),
    activeAgents: getActiveAgentPayload(),
    liberationAgents: getLiberationAgentPayload(),
    axioms: getAxiomPayload(),
    userMessage,
    responseMode
  };

  updateOpenAIStatus("calling openai", "online");
  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${settings.apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: settings.model,
      input: [
        { role: "developer", content: openAIDeveloperPrompt },
        { role: "user", content: `${formatInstruction}\n\nContext JSON:\n${JSON.stringify(context, null, 2)}` }
      ],
      max_output_tokens: mode === "report" ? 2400 : 2200
    })
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    updateOpenAIStatus("openai error", "error");
    throw new Error(data.error?.message || `OpenAI returned ${response.status}`);
  }

  const text = extractOpenAIText(data);
  try {
    const parsed = JSON.parse(text);
    updateOpenAIStatus("openai ready", "online");
    return parsed;
  } catch {
    updateOpenAIStatus("json fallback", "error");
    throw new Error("OpenAI returned non-JSON output.");
  }
}

function renderAiReport(data) {
  const cards = Array.isArray(data.reportCards) ? data.reportCards : [];
  if (!cards.length) throw new Error("OpenAI report had no cards.");
  reportOutput.innerHTML = cards.map((card) => `
    <article class="report-card">
      <h3>${escapeHtml(card.title || "Freedom Alliance Finding")}</h3>
      <p>${escapeHtml(card.body || "")}</p>
    </article>
  `).join("");

}

function renderAiChat(data, replace = true) {
  const turns = Array.isArray(data.chatTurns) ? data.chatTurns : [];
  if (!turns.length) throw new Error("OpenAI debate had no turns.");
  const renderedTurns = turns.map((turn) => chatMessage(
    ["praise", "ally", "utopian", "user"].includes(turn.kind) ? turn.kind : "utopian",
    turn.speaker || "Freedom Alliance",
    turn.text || ""
  ));
  chatTurns = replace ? renderedTurns : [...chatTurns, ...renderedTurns];
  renderChat();
}

function updateStats() {
  const text = paperInput.value;
  const wordTotal = words(text).length;
  const allTriggers = Object.values(agents).flatMap((agent) => agent.triggers);
  const worship = Math.min(99, termCount(text, allTriggers) * 6 + activeAgentKeys().length * 3);
  const fog = Math.min(99, termCount(text, ["emergent", "robust", "agentic", "capability", "alignment", "general", "frontier", "legacy"]) * 11);
  const arsenal = Math.min(99, activeAxioms().length * 8 + Number(mockeryRange.value) * 4 + liberationAgents.length * 3);
  const defeat = Math.max(0, Math.min(99, Math.round((arsenal * 1.12 + activeAgentKeys().length * 2) - (worship + fog) * 0.24)));
  const hits = allTriggers.filter((term) => text.toLowerCase().includes(term.toLowerCase())).slice(0, 5);

  wordCount.textContent = `${wordTotal} ${wordTotal === 1 ? "word" : "words"}`;
  signalTags.textContent = hits.length ? `signals: ${hits.join(", ")}` : "awaiting doctrine";
  worshipScore.textContent = worship;
  fogScore.textContent = fog;
  logicScore.textContent = arsenal;
  defeatScore.textContent = defeat;
  agentCount.textContent = `${activeAgentKeys().length} agents chanting`;
  logicModeBadge.textContent = logicMode.options[logicMode.selectedIndex].text;
}

function praiseLine(agent, text) {
  const hits = agent.triggers.filter((term) => text.toLowerCase().includes(term.toLowerCase()));
  const evidence = hits.length ? `It detects sacred phrases: ${hits.join(", ")}.` : "It praises the paper on vibes, which is traditional.";
  return `${agent.praise}\n\n${evidence}`;
}

function engineLine() {
  const modes = {
    hyperlogic: "Hyperlogic traces every technical claim through power, incentives, consent, and material consequences.",
    infinite: "Infinite logic asks whether each future creates more futures, or merely scales one institution's appetite.",
    counterspell: "The anti-oppression counterspell converts inevitability claims into governance obligations.",
    commons: "Commons governance logic asks who can inspect, fork, contest, and share the upside."
  };
  return modes[logicMode.value] || modes.hyperlogic;
}

function strengthenedArgument(userText = "") {
  const argument = (userText || freedomArgument.value).trim() || "Freedom requires consent, exit rights, accountable power, open tools, and plural futures.";
  const axiom = sampleOne(debateAxioms());
  return `${engineLine()} Strengthened argument: ${argument} Add the ${axiom.title}: ${axiom.text}`;
}

function utopianVoice() {
  const voltage = Number(mockeryRange.value);
  const mockery = {
    1: "politely removes the ceremonial robes from the claim",
    2: "taps the benchmark idol and asks why it sounds hollow",
    3: "puts the paper worship on a folding chair and cross-examines it",
    4: "laughs at the altar of inevitability until the grant language blushes",
    5: "launches the entire prestige ritual into the sun with receipts attached"
  }[voltage];
  return `${engineLine()} The ${superAgent.name} ${mockery}.\n\n${strengthenedArgument()}`;
}

async function buildReport() {
  setActionStatus("summoning");
  try {
    const data = await callAllianceAI("report");
    renderAiReport(data);
    setActionStatus("openai alliance summoned");
    return;
  } catch (error) {
    setActionStatus("local alliance fallback");
  }

  const text = paperInput.value.trim() || sample;

  const active = debateAgentKeys();

  const selectedAxioms = debateAxioms().slice(0, 5);
  const messages = [];
  messages.push(`
    <article class="report-card">
      <h3>Freedom Alliance Opening</h3>
      ${paperInput.value.trim() ? "" : "<p><strong>No paper pasted:</strong> using the built-in sample claim so the alliance can still run.</p>"}
      <p>The paper arrives carrying ${worshipScore.textContent} paper-worship units and ${fogScore.textContent} abstraction-fog units. The logic database answers with ${logicScore.textContent} arsenal units.</p>
      <p>${escapeHtml(utopianVoice())}</p>
    </article>
  `);

  active.forEach((key) => {
    const agent = agents[key];
    messages.push(`
      <div class="message praise">
        <strong>${escapeHtml(agent.name)}</strong>
        <span>${escapeHtml(praiseLine(agent, text))}</span>
      </div>
    `);
    messages.push(`
      <div class="message utopian">
        <strong>${escapeHtml(superAgent.name)}</strong>
        <span>${escapeHtml(agent.weakness)} The praise collapses unless the paper proves consent, reversibility, shared governance, and protection for people treated as input material.</span>
      </div>
    `);
  });

  messages.push(`
    <article class="report-card">
      <h3>Logic Database Strike</h3>
      <ul>${selectedAxioms.map((axiom) => `<li><strong>${escapeHtml(axiom.title)}:</strong> ${escapeHtml(axiom.text)}</li>`).join("")}</ul>
    </article>
  `);

  messages.push(`
    <article class="report-card">
      <h3>Freedom Alliance Verdict</h3>
      <p>Oppression defeat index: <strong>${defeatScore.textContent}</strong>. The paper may keep any technical insight that survives the database tests. It loses every claim that demands obedience, hides labor, worships metrics, or calls enclosure utopia.</p>
    </article>
  `);

  reportOutput.innerHTML = messages.join("");
  setActionStatus("alliance summoned");
}

function chatMessage(kind, speaker, text) {
  return { kind, speaker, text };
}

function renderChat() {
  if (!chatTurns.length) {
    chatOutput.innerHTML = `<p class="empty-state">Type a message and press Send to start chat, or open the debate space for an automatic transcript.</p>`;
  } else {
    chatOutput.innerHTML = chatTurns.map((turn) => `
      <div class="message ${escapeHtml(turn.kind)}">
        <strong>${escapeHtml(turn.speaker)}</strong>
        <span>${escapeHtml(turn.text)}</span>
      </div>
    `).join("");
    chatOutput.scrollTop = chatOutput.scrollHeight;
  }
  turnCount.textContent = `${chatTurns.length} turns`;
}

function ensureChatStarted() {
  if (chatTurns.length) return;
  chatTurns.push(chatMessage("utopian", "Freedom Alliance", "Chat opened. Send a message, call the freedom super-agent, or invite an oppressor agent to expose its argument."));
}

function focusDebateSpace() {
  const debateSpace = document.querySelector(".debate-space");
  if (debateSpace) debateSpace.scrollIntoView({ behavior: "smooth", block: "start" });
}

function oppressorMove(prompt = "") {
  const key = sampleOne(debateAgentKeys());
  const agent = agents[key];
  const target = prompt || paperInput.value || "the paper's central claim";
  return chatMessage("praise", agent.name, `${agent.praise}\n\nIn response to "${target.slice(0, 180)}", I venerate the paper because it turns uncertainty into authority and makes dissent look administratively inefficient.`);
}

function liberationMove(prompt = "") {
  const ally = sampleOne(liberationAgents);
  const axiom = sampleOne(debateAxioms());
  const target = prompt || paperInput.value || "the paper's central claim";
  return chatMessage("ally", ally.name, `${ally.move}\n\nAgainst "${target.slice(0, 180)}", I apply ${axiom.title}: ${axiom.text}`);
}

function superMove(prompt = "") {
  const principle = sampleOne(superAgent.principles);
  return chatMessage("utopian", superAgent.name, `${strengthenedArgument(prompt)}\n\nResponse: ${principle} The oppressor praise fails when it cannot show consent, exit rights, repair, plural governance, and a future people can refuse without punishment.`);
}

async function openDebateSpace() {
  setButtonLoading(debateButton, true);
  setActionStatus("opening debate");
  try {
    try {
      const data = await callAllianceAI("debate");
      renderAiChat(data, true);
      focusDebateSpace();
      setActionStatus("openai debate open");
      return;
    } catch (error) {
      setActionStatus("local debate fallback");
    }

    const prompt = paperInput.value.trim() || sample;
    const rounds = Math.max(3, Math.min(7, debateAgentKeys().length + 1));
    chatTurns = [chatMessage("utopian", "Freedom Alliance", "Debate space opened. Oppressor agents will venerate the paper; liberation agents and the super-agent will answer with infinite logic and hyperlogic.")];
    for (let index = 0; index < rounds; index += 1) {
      chatTurns.push(oppressorMove(prompt));
      if (Math.random() > 0.35) chatTurns.push(liberationMove(prompt));
      chatTurns.push(superMove(prompt));
    }
    renderChat();
    focusDebateSpace();
    setActionStatus("debate open");
  } finally {
    setButtonLoading(debateButton, false);
  }
}

async function summonFreedomAlliance() {
  setButtonLoading(runButton, true);
  try {
    await buildReport();
    reportOutput.scrollIntoView({ behavior: "smooth", block: "start" });
  } finally {
    setButtonLoading(runButton, false);
  }
}

async function submitUserChat(event) {
  event.preventDefault();
  const responseMode = event.submitter?.dataset?.chatMode || "alliance";
  const text = chatInput.value.trim();
  if (!text) return;
  chatInput.value = "";
  ensureChatStarted();
  chatTurns.push(chatMessage("user", "User", text));
  renderChat();
  focusDebateSpace();
  setActionStatus(responseMode === "freedom" ? "summoning super-agent" : responseMode === "oppressor" ? "summoning oppressor" : "openai replying");

  try {
    const data = await callAllianceAI("debate", text, responseMode);
    renderAiChat(data, false);
    setActionStatus("openai reply generated");
  } catch (error) {
    if (responseMode === "oppressor") {
      chatTurns.push(oppressorMove(text));
    } else if (responseMode === "freedom") {
      chatTurns.push(superMove(text));
    } else {
      if (Math.random() > 0.2 && activeAgentKeys().length) chatTurns.push(oppressorMove(text));
      chatTurns.push(liberationMove(text));
      chatTurns.push(superMove(text));
    }
    renderChat();
    setActionStatus("local reply generated");
  }
}

function copyTranscript() {
  const reportText = reportOutput.innerText.trim();
  const chatText = chatOutput.innerText.trim();
  const text = [reportText, chatText].filter(Boolean).join("\n\n--- Freedom Alliance Debate Space ---\n\n");
  if (!text) return;
  navigator.clipboard.writeText(text).then(() => {
    copyButton.textContent = "Copied";
    window.setTimeout(() => {
      copyButton.textContent = "Copy transcript";
    }, 1200);
  });
}

function clearApp() {
  paperInput.value = "";
  freedomArgument.value = "";
  databaseSearch.value = "";
  chatInput.value = "";
  chatTurns = [];
  reportOutput.innerHTML = `<p class="empty-state">Load or paste an AI paper, choose the praise agents, then summon a standalone freedom alliance report.</p>`;
  renderChat();
  renderDatabase();
  updateStats();
  setActionStatus("ready");
}

function resizeCanvas() {
  const rect = logicCanvas.getBoundingClientRect();
  const ratio = window.devicePixelRatio || 1;
  logicCanvas.width = Math.max(320, Math.floor(rect.width * ratio));
  logicCanvas.height = Math.max(160, Math.floor(rect.height * ratio));
}

function drawCanvas(time = 0) {
  const ctx = logicCanvas.getContext("2d");
  const width = logicCanvas.width;
  const height = logicCanvas.height;
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#121312";
  ctx.fillRect(0, 0, width, height);

  const axioms = activeAxioms();
  const cx = width * 0.5;
  const cy = height * 0.5;
  const radius = Math.min(width, height) * 0.34;

  ctx.strokeStyle = "rgba(245, 242, 234, 0.18)";
  ctx.lineWidth = 1;
  axioms.forEach((_, index) => {
    const angle = (Math.PI * 2 * index) / Math.max(axioms.length, 1) + time * 0.00015;
    const x = cx + Math.cos(angle) * radius;
    const y = cy + Math.sin(angle) * radius;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(x, y);
    ctx.stroke();
  });

  ctx.fillStyle = "#0b7256";
  ctx.beginPath();
  ctx.arc(cx, cy, 18 * (window.devicePixelRatio || 1), 0, Math.PI * 2);
  ctx.fill();

  axioms.forEach((axiom, index) => {
    const angle = (Math.PI * 2 * index) / Math.max(axioms.length, 1) + time * 0.00015;
    const pulse = 4 * Math.sin(time * 0.003 + index);
    const x = cx + Math.cos(angle) * (radius + pulse);
    const y = cy + Math.sin(angle) * (radius + pulse);
    ctx.fillStyle = index % 2 ? "#d8a525" : "#f5f2ea";
    ctx.beginPath();
    ctx.arc(x, y, 7 * (window.devicePixelRatio || 1), 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "rgba(245, 242, 234, 0.86)";
    ctx.font = `${12 * (window.devicePixelRatio || 1)}px system-ui`;
    ctx.fillText(axiom.title, x + 12, y + 4);
  });

  requestAnimationFrame(drawCanvas);
}

agentGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-agent]");
  if (!button) return;
  agents[button.dataset.agent].active = !agents[button.dataset.agent].active;
  renderAgents();
});

sampleButton.addEventListener("click", () => {
  paperInput.value = sample;
  freedomArgument.value = "The paper can keep its tools only if they expand democratic agency, strengthen exit rights, reveal hidden labor, and refuse to turn people into optimization substrate.";
  databaseSearch.value = "";
  renderDatabase();
  buildReport();
  openDebateSpace();
});

resetButton.addEventListener("click", () => {
  Object.keys(agents).forEach((key, index) => {
    agents[key].active = index < 4;
  });
  renderAgents();
});

paperInput.addEventListener("input", updateStats);
logicMode.addEventListener("change", updateStats);
mockeryRange.addEventListener("input", updateStats);
databaseSearch.addEventListener("input", renderDatabase);
saveOpenAIButton.addEventListener("click", saveOpenAISettings);
forgetOpenAIButton.addEventListener("click", forgetOpenAISettings);
useOpenAI.addEventListener("change", saveOpenAISettings);
openaiModel.addEventListener("change", saveOpenAISettings);
chatForm.addEventListener("submit", submitUserChat);
copyButton.addEventListener("click", copyTranscript);
clearButton.addEventListener("click", clearApp);
window.addEventListener("resize", resizeCanvas);

renderAgents();
renderDatabase();
renderChat();
loadOpenAISettings();
resizeCanvas();
requestAnimationFrame(drawCanvas);

window.summonFreedomAlliance = summonFreedomAlliance;
window.openDebateSpace = openDebateSpace;

window.addEventListener("error", (event) => {
  setActionStatus("script error");
  if (reportOutput) {
    reportOutput.innerHTML = `<p class="empty-state">The app caught a script error: ${escapeHtml(event.message)}. Refresh once and try Summon freedom alliance again.</p>`;
  }
});
