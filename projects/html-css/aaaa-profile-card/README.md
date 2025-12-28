# Profile Card

This project is token from Youtube video titled [How to Make Responsive Profile Card in HTML & CSS](https://youtu.be/np3L1lb-Uvs?si=Qs8dMmyk75irYt24)

## Project screenshot

![project image](./assets/Screenshot%20From%202025-12-28%2016-58-46.png)

## Gemini Assistance

That is a clean, modern profile card! As a senior designer, I've broken down this UI into a professional **Design Specification (Spec)**. This is exactly what you would receive from a design tool like Figma or Adobe XD before you start coding.

### 1. Color Palette

The design uses a vibrant, high-contrast palette. I recommend using CSS variables for these.

| Element            | Hex Code  | Usage                              |
| ------------------ | --------- | ---------------------------------- |
| **Primary Blue**   | `#4070F4` | Header background, Buttons         |
| **Background**     | `#F0F2F5` | Main page background (subtle grey) |
| **Card Body**      | `#FFFFFF` | The white card itself              |
| **Text Primary**   | `#333333` | Name and main labels               |
| **Text Secondary** | `#707070` | Job title and stats                |
| **Button Hover**   | `#265DF2` | Darker blue for interaction        |

---

### 2. Typography

The font appears to be a modern **Sans-Serif**. For a free version that looks identical, use **Poppins** from Google Fonts.

- **Main Title:** `font-weight: 600;` | `font-size: 24px;`
- **Sub-text:** `font-weight: 400;` | `font-size: 16px;`
- **Stats Labels:** `font-weight: 400;` | `font-size: 18px;`

---

### 3. Layout & Sizing (The "Skeleton")

To get that exact look, pay attention to these specific dimensions:

- **Card Container:**
- `width: 320px;` (Standard mobile/widget width)
- `border-radius: 20px;` (Soft, rounded corners)
- `box-shadow: 0 5px 10px rgba(0,0,0,0.1);`

- **Header Section:**
- `height: 120px;`
- `border-radius: 20px 20px 0 0;`

- **Profile Image:**
- `height: 150px; width: 150px;`
- `border-radius: 50%;`
- **The Trick:** Add a `border: 5px solid #fff;` to create that white ring around the photo. Use a negative `margin-top` to pull it halfway into the blue header.

---

### 4. Component Details

- **Social Icons:** These are likely circular `<a>` tags.
- Size: `40px x 40px`
- Background colors:
- FB: `#4267B2` | Twitter: `#1DA1F2` | Insta: `#E1306C` | YT: `#FF0000`

- **Buttons:**
- `padding: 10px 25px;`
- `border-radius: 24px;` (Pill shape)
- Use `display: flex; gap: 10px;` to align them side-by-side.

- **Bottom Stats:**
- Use a `border-top: 1px solid #e7e7e7;` to separate the stats from the buttons.
- Use `display: flex; justify-content: space-between;` for even spacing.

---

### 5. Pro-Tip: The Folder Structure

As you build this, keep your CSS organized:

1. **Reset:** Remove default margins/padding.
2. **Variables:** Define your colors.
3. **Utility:** Classes for centering (Flexbox).
4. **Components:** Styles for `.card`, `.profile-img`, and `.btn`.

**Would you like me to write the HTML structure for this card so you can focus on the CSS?**
