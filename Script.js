const btn = document.getElementsByClassName("theme-toggle")[0]
const icon = btn.querySelector("ion-icon")
btn.onclick = function () {
  document.body.classList.toggle("dark")
  icon.setAttribute(
    "name",
    document.body.classList.contains("dark") ? "sunny-outline" : "moon-outline"
  )
}
