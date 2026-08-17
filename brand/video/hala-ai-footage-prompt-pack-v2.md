# Hala — "Every Call. At Once." — AI-Footage Prompt Pack v2 (Kling 3.0 + Veo 3)

**What changed vs v1:** your Kling test clip compressed the whole story into one shot, and the tablet UI rendered garbled pseudo-text. v2 fixes both: one beat per clip, and **no readable screens are ever requested from the model** — every shot that needs UI is framed so the screen is a soft glow, out of focus, or replaced in post with your brand renders. Character lines are locked verbatim for continuity, and each scene has a Kling variant (visual-first) and a Veo variant (dialogue/audio-first).

**Film:** 6 clips × ~8s ≈ 45s (16:9) · social cut ~30s (9:16).
**Rule of thumb:** Veo for scenes where someone speaks (2, 4, 6). Kling for pure-visual energy (1, 3, 5). If you stay in one tool, use that tool's variant for every scene.

---

## Locked continuity block (paste into EVERY prompt, both tools)

> Cinematic realistic footage, 35mm lens, shallow depth of field, warm tungsten restaurant interior with cool blue night through the windows, rich filmic colour grade, natural skin tones, photorealistic. No on-screen text, no subtitles, no captions, no logos, no readable screens — any phone or tablet screen is out of focus or a soft periwinkle-blue glow only.

**Locked characters (repeat verbatim — the models have no memory between clips):**
- "MAYA, a restaurant manager in her 40s with dark hair tied back, wearing a charcoal apron over a white shirt"
- "DANIEL, a man in his 30s in a navy jacket" and "PRIYA, a woman in her 30s in the passenger seat"
- The venue: "a packed modern neighbourhood bistro with brass pendant lights and an open kitchen pass"

---

## Scene 1 — The rush (hook, no dialogue → Kling-first)

**Kling 3.0:**
> [Continuity block]. Interior, a packed modern neighbourhood bistro with brass pendant lights and an open kitchen pass, Friday night service at full tilt. Waiters weave between full tables with plates; steam and flame flare at the pass. In the sharp foreground on the host stand, an old landline phone rings and vibrates, unanswered; a mobile phone lights up beside the till, also ringing. Nobody reaches for either. Camera: slow determined push-in through the moving bodies toward the ringing phone, ending close on it still ringing. Handheld documentary energy, motion blur on passing waiters.

**Veo 3:** same text, plus audio direction:
> Audio: loud dinner-service atmosphere — cutlery, overlapping conversation, a sizzling pan — with two phones ringing insistently above it. No music.

---

## Scene 2 — The juggle (the problem gets a face → Veo-first)

**Veo 3:**
> [Continuity block]. Close on MAYA, a restaurant manager in her 40s with dark hair tied back, wearing a charcoal apron over a white shirt, at the host stand of a packed modern neighbourhood bistro. One phone is wedged between her shoulder and ear; a second phone rings on the counter beside a messy paper reservation book full of crossings-out. A waiter leans in and says urgently: "Table nine's asking for you." She looks at the second ringing phone — it stops mid-ring. Missed. She exhales and says quietly: "That's the third one tonight." Audio: dense service noise, the abrupt silence when the ring cuts off. Camera: handheld close-up, shallow focus on her face.

**Kling 3.0:** same visuals; drop the spoken lines, keep: "She exhales, defeated." (Add dialogue in post if needed.)

---

## Scene 3 — The customer who got away (Kling-first)

**Kling 3.0:**
> [Continuity block]. Night. DANIEL, a man in his 30s in a navy jacket, sits in a parked car with a phone to his ear, listening to it ring out; PRIYA, a woman in her 30s in the passenger seat, watches him. He lowers the phone, shrugs, and starts scrolling for another restaurant. City lights bokeh through the windscreen. Camera: static two-shot through the windscreen, slow 5% push-in.

**Veo 3:** add:
> He says: "No answer. Let's try somewhere else." Audio: hollow unanswered ringing tone, the click of hanging up, soft car interior ambience.

---

## Scene 4 — Enter Hala (the turn → Veo-first)

**Veo 3:**
> [Continuity block]. The same bistro, same night. On the host stand, a slim tablet on a stand glows with a soft periwinkle-blue light — the screen itself is out of focus, only the calm glow and a faint pulsing motion visible. A phone rings once — just once — and a warm, composed female voice answers instantly: "Good evening — I can book that table for you right now. How many people?" As she speaks, the restaurant noise falls away to a muffled background. Camera: slow elegant dolly toward the glowing tablet, the glow rippling gently with each word.

**Kling 3.0:** same shot without the voice line; end on the glow pulsing. (Lay the voice over in post — record it or use your TTS, so it is *identical* in every edit.)

> **Post note:** because the screen is deliberately unreadable, overlay your real Hala waveform UI in the edit if you want it crisp — export a loop from the brand kit (`brand/render/` styles) and corner-pin it onto the tablet. This is what kills the garbled-text problem for good.

---

## Scene 5 — Every call at once (the superpower → Kling-first)

**Kling 3.0:**
> [Continuity block]. Extreme close-up of the tablet's soft periwinkle glow, out of focus, breathing in three overlapping rhythms as if three conversations are happening at once. In the sharp foreground, a customer's phone lights up with an arriving notification; a second phone on the counter lights up a beat later. Camera: slow rack focus from the triple-pulsing glow to the phones lighting up one after another.

**Veo 3:** add:
> Audio: three calm variations of the same warm female voice softly overlapping — "Table for four at eight — confirmed." / "We're open until eleven tonight." / "The confirmation is on your phone." Two soft message chimes as the phones light up.

---

## Scene 6 — Calm, full restaurant (resolution → Veo-first)

**Veo 3:**
> [Continuity block]. The same bistro, later the same night. Every table full, but the room is calm and unhurried. MAYA, a restaurant manager in her 40s with dark hair tied back, wearing a charcoal apron over a white shirt, stands relaxed at the host stand and welcomes DANIEL, a man in his 30s in a navy jacket, and PRIYA, a woman in her 30s, with genuine warmth: "Party of two — your table's ready." Behind her the tablet glows softly, periwinkle, unbothered. She glances at it and smiles. Audio: contented dinner ambience, soft jazz, one faint ring answered instantly. Camera: slow graceful pull-back through the warm room.

**Kling 3.0:** same, minus the spoken line; she gestures them in warmly.

---

## End card — never generated, always overlaid

Dark `#08080A`, periwinkle `#6E7BF2`, Plus Jakarta Sans, the animated mark from the brand kit:

- **Hala answers every call. At once.**
- Your AI employee for bookings, questions and orders.
- **hala.khaashub.com** · A Khaas Hub product

(Or simply append the final 8s of the motion-graphics explainer I've rendered — same brand, ready-made CTA.)

---

## 9:16 social cut

Regenerate scenes 1, 2, 4, 5, 6 with this line appended to every prompt:

> Vertical 9:16 composition, subject centred, tight framing on faces and the glowing tablet, minimal headroom.

Order: rush (3s) → juggle (5s) → Hala answers (6s) → every call at once (6s) → calm (6s) → end card (4s) ≈ 30s.

---

## Why v2 beats the clip you generated

1. **One beat per 8s clip.** Your test clip tried chaos + answer + calm in 5 seconds; nothing landed. Each prompt above carries exactly one story beat.
2. **No readable screens.** Models garble UI text ~every time. Screens are now glow-only; real UI gets corner-pinned in post from brand renders.
3. **Named, locked characters.** MAYA/DANIEL/PRIYA descriptions are word-for-word identical across scenes — the only continuity tool these models have.
4. **Tool-matched scenes.** Veo carries dialogue natively; Kling carries motion and texture. Each scene states which to prefer.
5. **Voice consistency in post.** Hala's voice should be the same take in every scene — generate the visuals silent where possible and lay one recorded voice over the cut.
6. **Takes:** generate 2–3 per scene; regenerate any take that renders text, subtitles or readable screens. Keep spoken lines under 12 words.
