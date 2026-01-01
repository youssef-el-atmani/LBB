const projects = [
  {
    day: 1,
    title: "JavaScript Drum Kit",
    description:
      "A keyboard-based drum kit that plays sounds and triggers animations using data-key attributes.",
    date: "Oct 01, 2023",
    demo: "#",
    code: "#",
  },
  {
    day: 2,
    title: "JS + CSS Clock",
    description:
      "A real-time analog clock built using CSS transitions and JavaScript Date object.",
    date: "Oct 02, 2023",
    demo: "#",
    code: "#",
  },
  // Add more projects here...
];

function renderProjects() {
  const grid = document.getElementById("project-grid");

  grid.innerHTML = projects
    .map(
      (project) => `
        <article class="card">
            <span class="day-tag">Day ${String(project.day).padStart(
              2,
              "0"
            )}</span>
            <span class="date">${project.date}</span>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="card-actions">
                <a href="${project.demo}" class="btn btn-demo">Live Demo</a>
                <a href="${project.code}" class="btn btn-code">Source Code</a>
            </div>
        </article>
    `
    )
    .join("");
}

document.addEventListener("DOMContentLoaded", renderProjects);
