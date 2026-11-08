document.addEventListener("DOMContentLoaded", () => {
  const themeToggleBtn = document.getElementById("theme-toggle");
  const htmlTag = document.documentElement;

  themeToggleBtn.addEventListener("click", () => {
    const currentTheme = htmlTag.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    htmlTag.setAttribute("data-theme", newTheme);
    themeToggleBtn.querySelector("i").className =
      newTheme === "dark" ? "fa-solid fa-moon" : "fa-solid fa-sun";
  });

  renderQuestions(questionsData);
});

function renderQuestions(data) {
  const container = document.getElementById("questions-list");
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
