# "What problem this solves" descriptions

For the three Sketch and Hammer homepage sections. Council-voice warm.

---

## Product North Star

**What problem this solves**

Most products drift toward generic. Not all at once: through hundreds of small decisions, each one defensible on its own, each one reaching for a safe default because the default is faster than the specific choice.

Generic UX heuristics override product-specific principles. The interface that should feel like medicine for the exact person it serves ends up feeling like every other interface. **Teams ship features that look right and fail their actual user.**

The Product North Star is the binding design constraint that catches the drift. It names who the product is for, what it must do, and what design moves are off-limits, with enough specificity that even AI agents reading it can tell when a recommendation violates it.

The thesis stays stable. The principles refine over time. The anti-patterns multiply as failure modes get observed and named.

A north star is not a brand statement. It is the lens through which every feature, every screen, every line of copy is tested before it ships. **When technical correctness and the north star diverge, the north star wins.**

That is what makes the product recognizably itself instead of recognizably its category.

---

## The Council

**What problem this solves**

Most design and development work is critiqued by a single voice. A designer, a PM, a founder, a senior engineer, an opinionated stakeholder. That voice has blind spots, and the blind spots become the product.

**The classic failure mode is consensus that feels strong and is wrong:** a team agrees on a path that elegantly solves the problem its members can see, and is silent about the problem none of them can see.

The Council is a structured set of voices, human and AI, each with a different lens on the work.

**The Architect** insists on bones and soul. **The Witness** refuses to leave users out. **The Midnight Responder** plans for failure at 3am. **The Long Game** whispers about which shortcuts will become walls. **The Artisan** refuses generic. **The Questioner** refuses assumptions. **The Groundskeeper** protects future-you.

**The Council does not vote. It surfaces tensions.** Where voices disagree, the disagreement is itself the artifact: a decision the team faces, named clearly, not flattened into a single compromised answer.

That structure scales. Any strong practitioner can learn to operate the Council, which means the discipline of multi-perspective critique becomes a repeatable practice instead of a singular act.

---

## The Foundation

**What problem this solves**

Three problems, all of them quiet, all of them compounding.

**The first is LLM tunnel vision.** AI agents are powerful when they can see the relevant context and dangerous when they cannot. An agent asked to change a function will confidently change a function, with no awareness of the five places that function is called from, the security guarantee that depends on its return shape, or the deployment process that breaks if its signature shifts.

Without a roadmap, the agent does precise work in the wrong frame.

**The second is context budget.** Even the best AI agents have finite working memory. Asking an agent to "understand the codebase" by reading all of it is wasteful and increasingly impossible as systems grow.

The agent needs to load what is relevant for the task at hand and nothing more, which requires the codebase to be organized as a router, not as a library.

**The third is stale documentation.** Most architectural documentation rots from the day it is written, because no workflow forces it to stay current.

Stale docs are worse than missing docs. They actively mislead the next developer, human or AI, who trusts what they read.

The Foundation is a living architecture documentation system that solves all three.

A short index routes to system-specific sub-docs. Each sub-doc names its public interface, internal dependencies, gotchas, and known issues. Cross-system relationships are mapped explicitly. A pre-push workflow blocks code changes that do not touch the affected docs. Review-needed flags get resolved atomically with the underlying fixes, never left dangling.

For human teams, the Foundation is the closest thing a small or distributed practice has to a code review for design work. For AI agents, it is the difference between confident, specific output and confidently wrong output.

**For both, it is the discipline that lets the practice scale without losing the awareness of what the codebase actually is.**
