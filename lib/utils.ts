export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    window.scrollTo({ top: el.offsetTop - 30, behavior: "smooth" });
  }
}
