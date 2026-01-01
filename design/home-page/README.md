# Home design guide

This is exactly how a developer should approach a "Handoff." Since you are building this from scratch, I have documented the **Mastery Archive Design System**. Use this as your technical requirements document.

---

## 1. Color Palette (The "Figma" Swatches)

We use a high-contrast dark theme.

| Name                  | Hex Value            | Usage                                            |
| --------------------- | -------------------- | ------------------------------------------------ |
| **Canvas Background** | `#0F172A`            | Main page background.                            |
| **Card Surface**      | `#1E293B`            | The individual project series cards.             |
| **Border / Stroke**   | `#334155`            | Dividers, card outlines, and buttons.            |
| **Primary Accent**    | `#6366F1`            | The "Timeline" dots, primary buttons, and dates. |
| **Primary Text**      | `#F8FAFC`            | Headlines and active text.                       |
| **Secondary Text**    | `#94A3B8`            | Descriptions, pills, and sub-text.               |
| **Shadow (Glow)**     | `rgba(0, 0, 0, 0.2)` | Card lift effect on hover.                       |

---

## 2. Typography Specs

We use two fonts to differentiate between "content" and "data."

- **Main Font (Inter):** For a clean, modern UI feel.
- **Hero Title:** `48px` / Bold / `-2px` Letter-spacing.
- **Card Title:** `24px` / Bold.
- **Body Text:** `15px` / Regular / `1.6` Line-height.

- **Mono Font (JetBrains Mono):** To give it a "coder" aesthetic.
- **Date Labels:** `12px` / Bold / All-Caps.
- **Stats (Pills):** `11px` / Regular.

---

## 3. Dimensions & Spacing Guide

### **The Container & Timeline**

- **Max-Width:** `800px` (Keeps text readable; not too wide).
- **Timeline Line:** `2px` Wide / Centered at `30px` from the left edge.
- **Left Gutter:** `60px` (The space inside the container that protects the timeline).
- **Vertical Gap:** `60px` between each `series-node`.

### **The Card (`series-card`)**

- **Padding:** `32px` all around.
- **Border-Radius:** `16px`.
- **Hover Offset:** `8px` to the right (`translateX`).

### **Interactive Elements**

- **Timeline Dot:** `14px x 14px` circle.
- **Border:** `3px` solid `#6366F1`.

- **Pills:** `4px` top/bottom, `12px` left/right padding. `6px` radius.
- **Buttons:** `10px` height (approx `40px` total), `20px` side padding. `8px` radius.

---

## 4. Layout Logic & Math

When you build this from scratch, keep these **"Senior Dev"** logic rules in mind:

1. **The "Dot" Alignment:** To center a `14px` dot perfectly on a `2px` line that is `30px` from the left, your `left` value should be:

-
- In our case: (We used `-38px` to account for the border-thickness visual bias).

2. **The Box Model:** Every element uses `box-sizing: border-box`. This is crucial so that padding doesn't "break" your `800px` max-width.
3. **The Transition:** Use `0.3s ease` for the card hover. Anything faster feels "jerky"; anything slower feels "laggy."
4. **JS Mapping:** When you build the JS, ensure you use `.join('')` after your `.map()`. If you don't, the browser will render commas between your cards because `map` returns an array.

---

## 5. Implementation Roadmap

If I were building this from zero, here is the order I would follow:

1. **Phase 1:** Set the `body` background and import fonts.
2. **Phase 2:** Create the `.hub-container` and the `.timeline-line`. Get that line looking perfect.
3. **Phase 3:** Create one static HTML card inside the container. Position the `::before` dot and align it to the line.
4. **Phase 4:** Once the static card looks perfect, delete the HTML and write the JavaScript function to generate it from your data array.

**Would you like me to create a "Mobile Responsive" version of these specs, showing how the dimensions should change for a phone screen?**
