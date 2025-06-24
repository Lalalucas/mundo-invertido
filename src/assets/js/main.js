document.documentElement.setAttribute("data-theme", localStorage.theme || "light");
function toggleTheme() {
  const curr = document.documentElement.getAttribute("data-theme");
  const next = curr === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.theme = next;
}
window.toggleTheme = toggleTheme;
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector("#theme-toggle");
  if (btn) btn.addEventListener("click", toggleTheme);
});
