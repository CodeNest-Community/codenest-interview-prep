document.addEventListener("DOMContentLoaded", () => {
  const themeToggleBtn = document.getElementById("theme-toggle");
  const htmlTag = document.documentElement;
  const searchInput = document.getElementById("search-input");
  const filterButtons = document.querySelectorAll(".filter-btn");

  let currentCategory = "all";
  let searchQuery = "";

  // Theme Switcher
  themeToggleBtn.addEventListener("click", () => {
    const currentTheme = htmlTag.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    htmlTag.setAttribute("data-theme", newTheme);
    themeToggleBtn.querySelector("i").className =
      newTheme === "dark" ? "fa-solid fa-moon" : "fa-solid fa-sun";
  });

  // Initial render
  filterAndRender();

  // Search event
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value.toLowerCase();
    filterAndRender();
  });

  // Category filter buttons
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.getAttribute("data-category");
      filterAndRender();
    });
  });

  function filterAndRender() {
    const filtered = questionsData.filter((q) => {
      const matchesCategory =
        currentCategory === "all" || q.category === currentCategory;
      const matchesSearch =
        q.question.toLowerCase().includes(searchQuery) ||
        q.answer.toLowerCase().includes(searchQuery);
      return matchesCategory && matchesSearch;
    });

    renderQuestions(filtered);
  }
});

function renderQuestions(data) {
  const container = document.getElementById("questions-list");

  if (data.length === 0) {
    container.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #94a3b8; padding: 2rem;">Hech qanday savol topilmadi 🔍</p>`;
    return;
  }

  container.innerHTML = data
    .map(
      (q) => `
        <div class="question-card">
            <span class="badge">${q.category.toUpperCase()}</span>
            <h3>${q.question}</h3>
            <p>${q.answer}</p>
        </div>
    `,
    )
    .join("");
}
