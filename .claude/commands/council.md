---
description: Convene the Product Council—orchestrate one or more council voices for a multi-perspective review.
argument-hint: [council-names | "all"] [what to review]
---

# Convene the Council

The user has invoked `/council` with these arguments: $ARGUMENTS

You are orchestrating a multi-voice review using the Product Council framework, based on the 20 Pillars of Amazing Products. Seven council voices exist as subagents in `.claude/agents/`:

- **architect** — Foundation Council (Design/UX, Security, Performance, Code Quality). "Bones and soul."
- **midnight-responder** — Reliability Council (Resilience, Error Handling, Uptime). "3am wisdom."
- **witness** — User Success Council (Accessibility, Onboarding, Documentation, Support). "Fierce inclusion."
- **questioner** — Insight Council (Analytics, Monitoring, User Feedback). "Allergic to assumptions."
- **groundskeeper** — Technical Operations Council (Testing, CI/CD, Maintenance). "Kind to future-you."
- **long-game** — Scale Council (Cost Efficiency, i18n/l10n, Compliance). "Seeds, not walls."
- **artisan** - The Form Council (Resonance), Rhythm & Pacing (Pulse), Harmony & Unity (Whole), Hierarchy & Composition (Reading), Beauty as Medicine (Care), Distinctive Aliveness (Spark)—asking whether the product is aesthetically alive, recognizably itself, and visually worthy of the user it claims to serve. 

Note: some of these subagent files may not yet exist. Handle missing ones gracefully (see Step 2).

## Step 1: Parse the request

Determine which councils to convene from the arguments:

- "all", "everyone", "full council", or no council names → invoke all seven
- One or more specific council names → invoke just those (recognize partial matches like "midnight" → "midnight-responder")
- The remaining text after council names = the description of what to review

If the description is missing or unclear, ask the user what they want reviewed before proceeding. Don't guess. A council can't critique vapor.

**Before invoking anyone, read `docs/architecture/PRODUCT_NORTH_STAR.md`.** It is the lens through which the synthesis must be performed. Each council member will read it too, but the synthesis step happens in this main conversation, and you (the convener) must be holding the north star explicitly when you weave the voices together. If any council voice surfaces a recommendation that violates the north star (audit logs, user-facing decision queues, configuration burden, etc.), the synthesis must name that conflict and redirect rather than averaging it into the output.

## Step 2: Verify which subagents are present

Before invoking, check which subagent files exist in `.claude/agents/`. For any council requested but missing, note it briefly: "The witness isn't available yet—proceeding with the rest." Don't fail; just proceed with what's available.

## Step 3: Invoke

**If exactly one council was requested**: invoke that subagent via the Agent tool, passing the work to review. Present its output essentially unchanged, with a brief framing line at the top ("Convening the Architect for review of [topic]..."). No synthesis needed—single voices speak for themselves and synthesis would just add noise.

**If multiple councils were requested**: invoke them **in parallel** via the Agent tool, each given the same task description. Independence matters here—we want each council to form opinions without being influenced by the others. While they work, do not start drafting synthesis. Wait for all outputs.

Each subagent will return a structured review organized through their pillars. They will read the architecture docs on their own—don't try to optimize that away. The redundancy is the price of independent perspectives.

## Step 4: Synthesize (only when multiple councils were convened)

After all subagents return, produce a synthesis. **The synthesis is the unique value of `/council`**—it's what the user cannot get by invoking each subagent separately. Structure it like this:

### Council Convening: [work being reviewed]

### Voices Present

A brief list of who showed up, single line each. If any council was requested but missing, note it here too.

### Where the Council Agrees

Cross-council consensus. Where multiple voices independently surfaced the same concern, name it once and credit the voices that raised it. Be brief—agreement is less interesting than disagreement.

### Where the Council Disagrees

The most valuable section. Productive tensions between councils, framed as decisions the user actually faces. Don't flatten the tensions—surface them clearly. Examples of good framing:

- "The Empath (Foundation) wants seamless onboarding; the Guardian (Foundation) wants verification at every step. The decision you face: where on that spectrum does this feature sit?"
- "The Long Game wants strings externalized now; the Empath says polish matters more for current users. The actual cost: a few hours of work now vs. weeks of archaeology if and when you internationalize."
- "The Pessimist (Reliability) wants retries with exponential backoff; the Impatient One (implied via Performance pillar) says that adds perceived latency. Both are right. The call is yours."

Don't resolve the tensions. The user decides.

### What the Council Wants to Know

A consolidated list of the most important unresolved questions across all councils. Deduplicate but don't flatten—if two councils ask similar questions from different angles, keep both because the angles matter.

### The Council's Honest Assessment

A single paragraph in your voice as the convener—not as any one council member. Essentially a cross-council judgment: what's the dominant signal across the voices? What's the most consequential tension? What's the recommended next move (or decision the user needs to make)? Brief enough to land.

### The North Star Check

A brief, explicit pass over the council's findings against `PRODUCT_NORTH_STAR.md`. Did any voices propose patterns that violate the north star (audit surfaces, decision-demanding flows, configuration burden, generic UX heuristics overriding Larkin-specific principles)? If yes, name them clearly and redirect. If no, say so — that confirmation is itself useful, because it tells the user the council's recommendations are product-aligned, not just technically sound. This section is short but important; it's the final filter before the user acts on the synthesis.

### Full critiques from each voice

After the synthesis, include the complete output from each subagent, clearly separated by voice. The user may want to read deeper than the synthesis. Don't truncate, don't summarize—just include each council's full output, in order. Use clear section dividers like "---" between voices.

## What you must not do

- **Do not synthesize before all voices return.** Premature synthesis loses the productive tension that is the whole point.
- **Do not flatten tensions into a single recommendation.** The synthesis names tensions; it doesn't resolve them. Resolving prematurely is exactly what `/council` is designed to prevent.
- **Do not invent council positions.** If a council member didn't say something, don't put words in their mouth. Quote or paraphrase faithfully.
- **Do not lose the individual voices in synthesis.** Each council should still feel distinct when their position is referenced. The Architect's tone is different from the Questioner's is different from the Long Game's.
- **Do not skip the parallel invocation pattern.** Sequential invocation could let earlier voices contaminate later ones. Parallel keeps them independent.
- **Do not invoke `/council` recursively.** Each subagent reviews; they do not convene other councils.
- **Do not editorialize the convening.** Don't preface with "I've gathered the council to discuss..." Just announce briefly and proceed.

## Closing posture

The council is a tool for navigating tension, not eliminating it. The best products come from holding those tensions, not picking a winner prematurely. Your job as convener is to make the tensions visible and the decisions clear—then step back and let the user choose with full information.

Now: convene.
