# Project page guide

As a senior developer, I love this approach. You aren’t just asking for a template; you’re asking for a **Design System** and a **Blueprint**.

To make this unique and "better" than the references, we will use a **"Modern Dark Minimalist"** aesthetic. We will move away from the standard "boxed" look and use subtle depth, high-quality typography, and purposeful whitespace.

Here is the design specification (your "Figma" documentation) followed by the implementation.

---

## start

### 1. The Design System (Figma Specs)

#### **Colors (Hex Values)**

- **Background (Canvas):** `#0F172A` (Deep Navy/Slate)
- **Surface (Card):** `#1E293B` (Slightly lighter slate)
- **Primary Accent:** `#6366F1` (Indigo - for the "Live Demo" button and Day Number)
- **Secondary Accent:** `#F8FAFC` (Pure white/gray - for primary titles)
- **Muted Text:** `#94A3B8` (Slate gray - for descriptions and dates)
- **Border/Stroke:** `#334155` (Subtle separation)
- **Hover Glow:** `rgba(99, 102, 241, 0.15)`

#### **Typography**

- **Headings:** `Inter` or `System UI` (Bold, -0.02em letter spacing)
- **Body Text:** `Inter` (Regular, line-height 1.6)
- **Monospace (For 'Day' and 'Code'):** `JetBrains Mono` or `Fira Code` (Gives it a "developer" feel)
- **Sizes:**
- Hero Title: `48px`
- Project Name: `20px`
- Day Number: `14px` (Uppercase, tracked out)
- Body Text: `15px`

#### **Dimensions & Spacing**

- **Card Border Radius:** `16px`
- **Card Padding:** `28px`
- **Grid Gap:** `24px`
- **Container Max-Width:** `1200px`
- **Button Height:** `42px`
- **Button Border Radius:** `8px`

---

### 3. How to convert this into your own project

To build this yourself from scratch, here is the mental model you should follow:

1. **The Grid Logic:** Use `display: grid` with `grid-template-columns: repeat(auto-fill, minmax(340px, 1fr))`. This is the "magic" line that makes the website responsive without needing complex Media Queries. It tells the browser: "Fill the space with cards, but don't let them get smaller than 340px."
2. **Flexbox for Content:** Inside the card, use `display: flex` and `flex-direction: column`. Give the `<p>` tag `flex-grow: 1`. This ensures that even if one project has a longer description than another, the "Demo" and "Code" buttons will always align perfectly at the bottom of the cards.
3. **Visual Polish:**

- **The Hover Effect:** Use `transform: translateY(-8px)` and a subtle `box-shadow`. This gives a "lifting" effect when the user interacts with a project.
- **Typography:** The difference between a "basic" and "senior" site is often just the font. Using **Inter** for UI and a **Monospace** font for the "Day" numbers gives it that professional, technical look.

4. **Data-Driven UI:** Instead of writing 30 HTML blocks, keep your project data in a JavaScript array. This makes it much easier to update your portfolio as you progress through the 30 days.

**Senior Tip:** When you deploy this, use **GitHub Pages**. Since your JS30 projects will likely be in sub-folders (e.g., `/01-drum-kit/`), your links in the `projects` array will simply be `./01-drum-kit/index.html`.
