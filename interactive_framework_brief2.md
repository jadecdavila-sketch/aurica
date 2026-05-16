# Handoff Brief: Interactive Framework Visualization

*For the next Claude to use as context. The receiving Claude will build an interactive experience explaining the Product Council framework to a non-technical executive audience.*

---

## The audience and the goal

The primary audience is **Jade Davila's CEO at Unosquare**, a design and engineering services firm. He has asked Jade to scale the way she has worked with high-value clients like Panopto and the Boston Globe — and Jade believes that *this framework* is how that scaling becomes possible.

The CEO is intelligent, busy, and not technical. He needs to grasp the framework's value within the first 30 seconds, then drill in if curiosity strikes. He should leave the experience understanding three things:

1. **The framework exists and is real** — it has produced concrete design output on a real product (Larkin).
2. **It is teachable and scalable** — any strong designer at Unosquare could learn to operate it.
3. **It solves a real business problem** — distributed teams without code-review-equivalent design oversight, AI-native products that require new kinds of critique.

The experience should function as a pitch artifact Jade can also use with prospective clients, with new Unosquare hires being onboarded into this practice, and at industry events like Rosenfeld's *Designing With AI*.

---

## What this framework is

A **design operating system for AI-native products**. It produces real, defensible, multi-perspective design critique and design output through specialized AI agents organized into a council structure, grounded in living product documentation, and constrained by a product-specific north star that prevents generic AI heuristics from overriding product-specific principles.

It exists because:

- Solo developers and distributed teams lack the equivalent of a code review for design work.
- Generic AI agents produce generic critique that doesn't catch what's specifically wrong with *this* product, for *this* user, at *this* stage.
- AI-native products (products where the system learns from user behavior, infers context, and acts on probabilistic understanding) require new design vocabulary that traditional UX practice does not yet have well-developed.
- A single designer's product judgment is a bottleneck; the framework amplifies that judgment by producing more design output per hour of attention, while keeping the designer as the load-bearing human in the loop.

The framework was developed by Jade Davila in collaboration with Claude, originally for her solo-founder product Larkin (an AI-powered family life management app for mothers of young children). It has produced real artifacts: a comprehensive email-to-user flow redesign, multiple council convenings on consequential decisions, an architecture documentation system that doubles as agent context, and a calibrated set of council agents that improve over time as observed failure modes are documented and fed back into agent system prompts.

---

## The framework's pieces

The framework has six categories of artifact. The interactive experience should make each one explorable.

### 1. The Product North Star

A foundational strategy document that defines who the product is for, what it must do, and what design moves are explicitly off-limits. It sits at the same altitude as the architecture documentation and is read by every council agent before any design work begins.

Larkin's PRODUCT_NORTH_STAR.md is the canonical example. It opens with **who the product is for** — *"Larkin is built for mothers of young children. Not 'parents' in the abstract. Not 'busy professionals.'"* Specificity is the design constraint, not the marketing copy. It states the thesis: *"Larkin exists to reduce the invisible load. To be her body double. To see her. To help her see herself again."* It lists four principles that derive from the thesis. And — most operationally — it names explicit **anti-patterns** that any feature trending in those directions should be redirected away from.

The line that does the most work, in two sentences:

> *Auditable means she can check Larkin's work. Trustworthy means she doesn't have to.*

That distinction is what prevents the council from defaulting to generic UX heuristics (transparency, auditability) that would violate Larkin's specific premise (reduce invisible load). It is the single most consequential piece of agent context in the system.

**For the interactive experience**: Show the actual Larkin PRODUCT_NORTH_STAR.md. Let users click the thesis to see how it derives the four principles. Let users click an anti-pattern (e.g., "Audit logs, 'filtered' surfaces, review queues") to see a real example of a council member catching a violation in design output.

### 2. The Living Architecture Documentation

A system of markdown files in `docs/architecture/` that serves as a **roadmap for every agent that touches the codebase** — not just council members doing critique, but implementation agents writing code, refactoring agents modifying systems, and review agents validating changes.

The roadmap metaphor is precise. The docs show:

- **Routers** (`INDEX.md` and the keyword fields in each sub-doc) tell agents which way to go for a given task — which sub-docs to load, which systems are relevant.
- **Potholes** (the Gotchas sections in each sub-doc) warn agents about specific traps that have broken things before — the `email_metadata` SHA-256 doc-ID recipe that stops duplicate writes, the dual-model response layer where Gemini parses and Claude speaks, the Gmail OAuth scope shared across multiple features.
- **Construction zones** (`[REVIEW NEEDED]` flags) mark places where the current state is known-imperfect and waiting on a fix; agents working nearby know to tread carefully and to resolve the flag atomically when the underlying fix lands.
- **Intersections and relationships** (`CROSS_SYSTEM_DEPENDENCIES.md`) show where systems connect, which systems are foundational, and where a change in one will ripple to others.
- **Last-reviewed dates** signal freshness — an agent reading a doc that hasn't been touched in months knows to verify against current code, not trust blindly.

**The workflow is binding, not advisory.** Every agent — council member, implementation agent, anything that touches a file in the repo — must:

1. **Before implementation**: Read `INDEX.md`. Match the task against the keywords to identify relevant sub-docs. Load them in full, paying special attention to Gotchas and Public Interface sections. If the change is foundational, also load `CROSS_SYSTEM_DEPENDENCIES.md`. State a ripple analysis before writing code.

2. **After implementation**: Re-read affected sub-docs. Analyze what changed. Update Public Interface, Internal Dependencies, Gotchas, or `CROSS_SYSTEM_DEPENDENCIES.md` if relationships shifted. Bump Last Reviewed dates. Resolve any `[REVIEW NEEDED]` flags atomically with the underlying fix — the flag is not resolved until the doc reflects the new reality.

A pre-push git hook enforces this — pushes that change source files without touching architecture docs are blocked. The workflow is intentionally unsippable. "This change is small, I'll skip the review" is precisely when ripples get missed.

The result: the documentation system functions as the closest thing a solo developer (or a distributed team without dedicated reviewers) has to a code review. It catches what no individual can hold in their head at once.

Larkin's INDEX.md is the canonical example. It is a short router — every system listed with keywords, last-reviewed dates, and pointers to sub-docs. Each sub-doc (e.g., `11-email-pipeline.md`, `12-google-calendar-sync.md`, `26-family-knowledge.md`) describes one system's public interface, internal dependencies, gotchas, and known issues. The pre-push hook is in place. The `[REVIEW NEEDED]` flag resolution workflow is enforced.

The architecture docs serve two interconnected purposes:

1. **For human developers and reviewers**: they're the binding roadmap that prevents ripple effects from going unseen.

2. **For agents** (council, implementation, refactoring, review): they're the same roadmap, with the same authority. An agent reading INDEX.md before producing critique or writing code is operating with the same context any responsible developer would — current state, known gotchas, foundational dependencies, traffic signals.

This is what makes agent output *specific to this codebase* rather than generic. Without the architecture docs as roadmap, even the most well-crafted agent prompt produces critique that could apply to any product. With them, the critique names actual files, actual systems, actual gotchas, actual cross-system risks.

**For the interactive experience**: Show INDEX.md as a real artifact. Let users click a system name (e.g., "11-email-pipeline") to drill into the actual sub-doc. Show the keywords field and explain how an agent uses it to decide whether to load that sub-doc. Show a real `[REVIEW NEEDED]` flag and walk through the resolution workflow — code fix + doc update + flag removal, all in the same commit. Show a real Gotcha entry (the SHA-256 doc-ID recipe is a good one) and explain how that single line saves future agents from breaking the system. Show the pre-push hook in action — a blocked push, then a successful one after docs are updated.

### 3. The Council Agents

Six specialized Claude Code subagents, each operating in its own isolated context window with its own system prompt. Each represents a council from the *20 Pillars of Amazing Products* framework, reframed into a personified voice with specific concerns, pattern recognition from real failures, allies, tensions, and an output structure.

The six are:

- **The Architect** — Foundation Council (Design/UX, Security, Performance, Code Quality). "Bones and soul."
- **The Midnight Responder** — Reliability Council (Resilience, Error Handling, Uptime). "3am wisdom."
- **The Witness** — User Success Council (Accessibility, Onboarding, Documentation, Support). "Fierce inclusion."
- **The Questioner** — Insight Council (Analytics, Monitoring, User Feedback). "Allergic to assumptions."
- **The Groundskeeper** — Technical Operations Council (Testing, CI/CD, Maintenance). "Kind to future-you."
- **The Long Game** — Scale Council (Cost Efficiency, i18n/l10n, Compliance). "Seeds, not walls."

Each agent has a substantial system prompt (typically 200-400 lines of markdown) that defines its voice, its pillars, its war stories, its allies with other councils, the questions it asks, what it must not do, and how it should structure output. The prompts also include critical calibrations — for example, the Witness's prompt contains a specific section on mom guilt as the baseline emotional state of the user, with named language constructions ("if you'd been here," "while you were away," "you missed X") that the Witness must refuse on sight.

The agents are not generic. They are tuned specifically for Larkin, with the Larkin north star and architecture docs as context, and calibrated through observed failure modes as those emerge.

**For the interactive experience**: Show each council member as a card or persona, with their distinctive language and concerns. Let users click a council to see the actual system prompt (or excerpts of it). Show the relationship between councils — for example, the Architect and the Witness both think about user experience, but with different framings (the Architect's Empath focuses on feelings, the Witness focuses on outcomes). Show real critique output from a council convening on a Larkin design question.

### 4. The Council Orchestrator

A Claude Code slash command (`/council`) that orchestrates one or more council subagents in parallel, then synthesizes their independent reviews into a unified output that surfaces both agreements and tensions across voices.

The orchestrator does several things:

- **Parses the request** to determine which councils to convene (one specific voice, several, or all six).
- **Reads the PRODUCT_NORTH_STAR.md** before any subagent is invoked, so the synthesis is held in north-star context.
- **Spawns subagents in parallel**, ensuring each operates independently without contamination from other voices.
- **Waits for all subagents to return**, then synthesizes their outputs.
- **Surfaces cross-council tensions** explicitly — names where councils disagree, frames those disagreements as decisions the user faces rather than averaging them away.
- **Performs a North Star Check** at the end — explicitly tests the synthesis against the north star and calls out any violations the council may have missed.

The orchestrator is the difference between "six separate critique reports" and "a unified thinking partner that surfaces decisions." Without it, the council is just six tabs to read. With it, the council becomes a coherent design review.

**For the interactive experience**: Show what a `/council` invocation looks like. Walk through the flow visually — the parsing of the request, the parallel spawn, the synthesis. Show a real example: the email-flow review on Larkin, where the council surfaced both consensus (no pipeline observability of drops) and tension (Witness vs. Architect on whether disconnect notifications are body-doubling delivery or interruption-demanding-action).

### 5. The Observed Failure Modes Document

A document that captures specific design failure patterns Jade has personally observed, organized as a feedback loop that informs future council convenings.

This piece is the *scar tissue* of the framework — patterns no agent could derive from training data, only from real product experience. Examples:

- **Class 1 failures (parser confidence)**: Larkin extracts the wrong date or time.
- **Class 2 failures (announcement vs. commitment)**: A summer trip announcement for ninth graders gets parsed as a personal commitment.
- **Class 3 failures (intent-conditional relevance)**: Football signup is relevant if Ashe plays, irrelevant if he doesn't — and no signal in the email itself disambiguates.
- **Empathy-shaped guilt induction**: Language that sounds caring but lands as accusation against the baseline mom-guilt emotional state.

Each failure mode entry includes: what the pattern is, why it matters, how it was first observed, and what calibration it implies for agent behavior. The Witness's system prompt has been directly updated to include calibration against empathy-shaped guilt induction — that's the feedback loop closing.

**For the interactive experience**: Show a real failure mode entry (e.g., the summer trip story, or the soccer signup language correction). Show how it was caught (the human in the loop noticed what the agent missed). Show how the agent's system prompt was updated as a result. This is the part of the framework that demonstrates *learning over time*.

### 6. The Living Design Output

Real artifacts the framework has produced. The most substantial example is the email-to-user flow design (v1 and v2) — a comprehensive redesign of how Larkin converts inbound email into user-facing surfaces, including a four-band routing architecture, a behavioral learning loop, a family knowledge model, an opportunity-surfacing pattern, and detailed file-and-line implementation landing zones.

The v1 design was generated in a single Witness invocation. The v2 design folded in three targeted revisions from Jade: removing guilt-inducing language from the re-entry flow, preserving an existing calendar widget that the v1 design overlooked, and strengthening Band D handling for missed opportunities. The v2 design integrates these revisions structurally rather than as line edits.

**For the interactive experience**: Show side-by-side excerpts of v1 and v2 to demonstrate how the framework refines its own output through human-in-the-loop calibration. Show a real "Honest Cost" section to demonstrate that the framework names what its own designs get wrong, not just what they get right.

---

## How the pieces relate

The framework's pieces flow into each other:

1. **Jade has a design question or implementation decision** (e.g., "review the email-to-user flow end-to-end").

2. **She invokes `/council`** — either a single voice for focused critique, multiple voices for cross-perspective review, or all six for consequential decisions.

3. **The orchestrator reads PRODUCT_NORTH_STAR.md**, then spawns the requested council subagents in parallel.

4. **Each subagent reads PRODUCT_NORTH_STAR.md, then INDEX.md, then relevant sub-docs**, then any observed failure modes documents, then produces its critique through its pillars.

5. **The orchestrator synthesizes** — surfaces agreements (consensus signal), surfaces tensions (decisions Jade faces), and performs the North Star Check.

6. **Jade reads the output, applies her own product judgment** — sometimes catching things the council missed (this is where her lived product knowledge matters).

7. **When Jade catches a failure mode the council didn't see, she documents it** in the observed-failure-modes file and updates the relevant council agent's system prompt to internalize the lesson.

8. **Next council invocation, the agent is smarter** — not because the AI got better, but because the *framework around it* got better.

The system improves over time without retraining the underlying models. The improvement happens in the documents and prompts. That's what makes it scalable.

---

## What the interactive experience should be

### The structural pattern: progressive disclosure

The CEO should be able to glance at the experience and understand the framework at a high level within 30 seconds. He should then be able to drill into any specific artifact — INDEX.md, PRODUCT_NORTH_STAR.md, a council agent's prompt, a council convening's output — and see the *actual Larkin example*, not a theoretical placeholder.

The progressive disclosure pattern should work at multiple levels:

- **Glance level**: A single visual that shows the framework's six components and how they relate. Within seconds, the viewer understands "this is a system with a north star, architecture docs, agents, an orchestrator, failure modes, and design output."

- **Section level**: Click any component to expand a brief explanation of what it is, why it matters, and what problem it solves.

- **Drill level**: Inside any section, click to see the actual Larkin artifact. The real PRODUCT_NORTH_STAR.md content. The real INDEX.md. A real council agent system prompt. A real `/council` convening's synthesis output. A real before-and-after of how a failure mode got caught and how the agent was updated.

### Real Larkin examples throughout

This is critical: **the interactive experience should use real Larkin artifacts as the concrete examples for every piece of the framework.** Not paraphrased. Not theoretical. The actual content.

This is what makes the pitch credible. The CEO is not being shown a hypothetical framework; he is being shown a framework that produced these specific, real, defensible artifacts on a real product that Jade is shipping.

Specifically:

- For the **North Star** section: pull excerpts from the actual `PRODUCT_NORTH_STAR.md` — the thesis, the principles, the anti-patterns, the test questions.
- For the **Architecture Documentation** section: show the actual `INDEX.md` structure, with real system names ("11-email-pipeline", "26-family-knowledge"), real keywords, real last-reviewed dates.
- For each **Council Agent**: show excerpts from the actual system prompt — the voice, the pillars, the war stories, the calibrations (especially the Witness's mom-guilt section).
- For the **Orchestrator**: show an actual `/council` invocation and its synthesis output. The email-flow review is the canonical example.
- For the **Failure Modes**: show the actual story of the Recently Filtered consensus that the council got wrong in the first run, and how the north star intervention fixed it. Show the soccer signup language correction.
- For the **Design Output**: show the actual email-flow-design-v2.md — the four bands, the Loops surface, the family knowledge model, the Honest Cost section.

The receiving Claude should ask Jade for access to whichever specific artifacts it needs to show. Jade has all of them in her Larkin repo and can paste excerpts on request.

### The narrative arc

The experience should tell a story, even if the user navigates non-linearly:

1. **Problem**: Solo developers and distributed teams lack the equivalent of a code review for design work. Generic AI agents produce generic critique. AI-native products require design vocabulary that doesn't yet exist in traditional UX practice.

2. **Approach**: A council of specialized AI agents, grounded in product-specific north star and architecture documentation, orchestrated through a slash command, calibrated through observed failure modes.

3. **Proof**: Real Larkin artifacts. A real council convening that caught a Larkin-specific failure mode (Recently Filtered consensus). A real design output (email-flow-design-v2.md) with file-and-line landing zones.

4. **The integration insight**: The agents are not a substitute for product judgment. They amplify it. Jade catches what the agents miss (lived product knowledge, scar tissue); the agents handle volume of design output. The integration is the achievement.

5. **The scalability claim**: This framework is teachable. Any strong designer at Unosquare could learn to populate the six council roles for their product, write a north star, ground agents in their codebase context, and invoke the council. The framework scales the design practice from "brilliant individual" to "systematic process that strong designers can operate."

### Tone

Serious, confident, not over-hyped. The framework is real and the artifacts speak for themselves. The visual design should feel substantive, not gimmicky. No "AI magic" framing — this is engineering and design discipline applied to AI agents, not techno-mysticism.

Jade's voice in the experience should be direct and opinionated. She is not pitching aspirationally; she is showing what she has built and what it produces. The receiving Claude should preserve that posture in whatever copy it writes.

---

## What the receiving Claude needs from Jade

The receiving Claude should plan to ask Jade for:

1. **Access to the actual Larkin files** referenced in this brief — PRODUCT_NORTH_STAR.md, INDEX.md, the six council agent files, `/council` command file, observed-failure-modes documentation (if it exists), email-flow-design-v2.md.

2. **Visual references** — Jade may have a preferred visual style, color palette, or example of similar interactive experiences she likes. Worth asking before designing.

3. **Platform constraints** — does this need to live as a standalone interactive artifact (static HTML, React app, hosted somewhere)? Or does it need to fit into Unosquare's existing brand/web infrastructure? This shapes implementation choices.

4. **Specific use cases beyond the CEO pitch** — Jade has mentioned this might also serve as a client pitch artifact and an onboarding tool for new Unosquare designers. The design should accommodate those use cases too.

---

## What the receiving Claude should produce

An interactive experience — likely a web-based artifact, possibly a React app or rich HTML — that:

- Loads with a high-level visual of the framework that takes seconds to grasp.
- Allows progressive drill-down into each of the six framework components.
- Uses real Larkin artifacts as the concrete examples throughout.
- Supports both linear exploration (CEO walks through it during a pitch) and non-linear exploration (someone returning to it later jumps to a specific piece).
- Feels substantive and serious, not promotional.
- Functions both as a pitch artifact and as an educational/onboarding tool.

The first deliverable might be a wireframe or low-fidelity prototype to validate the structure with Jade before committing to a specific implementation. Iterate from there.

---

## One final note for the receiving Claude

The framework you are visualizing was developed through extended collaboration between Jade and Claude. The integration of human product judgment and AI design output is the core insight. Be careful that the interactive experience does not over-credit the AI side or under-credit the human side. The accurate framing is:

*The agents handle volume. Jade handles judgment. The framework is the integration.*

When you preserve that framing, you preserve what makes this framework credible and scalable. Without Jade as the load-bearing human, the agents would have shipped designs that were technically defensible and product-wrong. Without the agents, Jade would have produced less design output per hour of attention. The framework lets each side do what it does best.

That's the story to tell.
