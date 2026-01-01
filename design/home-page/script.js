const seriesData = [
  {
    title: "Javascript 30",
    count: "30 Projects",
    duration: "01/01/2025 — 15/02/2025",
    daysSpent: "45 Days Total",
    description:
      "Vanilla JavaScript challenge by Wes Bos. Deep dive into DOM manipulation, CSS variables, and Web APIs.",
    demoUrl: "#", // Replace with your link
    codeUrl: "#", // Replace with your link
  },
  {
    title: "90 Days of HTML/CSS",
    count: "90 Projects",
    duration: "16/02/2025 — Present",
    daysSpent: "In Progress",
    description:
      "A massive daily challenge focused on modern CSS layouts, Flexbox, Grid, and creative UI components.",
    demoUrl: "#",
    codeUrl: "#",
  },
];

function renderHub() {
  const wrapper = document.getElementById("series-wrapper");

  // Check if the wrapper exists to prevent errors
  if (!wrapper) return;

  wrapper.innerHTML = seriesData
    .map(
      (series) => `
        <div class="series-node">
            <article class="series-card">
                <span class="date-label">${series.duration}</span>
                <h3>${series.title}</h3>
                
                <div class="stats-row">
                    <span class="stat-pill">${series.count}</span>
                    <span class="stat-pill">${series.daysSpent}</span>
                </div>
                
                <p>${series.description}</p>
                
                <div class="btn-group">
                    <a href="${series.demoUrl}" class="btn btn-primary">View Collection</a>
                    <a href="${series.codeUrl}" class="btn btn-secondary">Source Code</a>
                </div>
            </article>
        </div>
    `
    )
    .join("");
}

// Run the function once the document is loaded
document.addEventListener("DOMContentLoaded", renderHub);
