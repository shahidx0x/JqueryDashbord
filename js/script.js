function loadContent(htmlFile) {
  fetch(htmlFile)
    .then((response) => response.text())
    .then((data) => {
      const content = document.getElementById("content");
      content.innerHTML = data;
    })
    .catch((error) => {
      console.error("Error fetching content:", error);
    });
}

function handleNavigation() {
  const hash = window.location.hash;
  const links = document.querySelectorAll("a");

  links.forEach((link) => {
    link.classList.remove("sideNavLink");
  });

  switch (hash) {
    case "#dashboard":
      loadContent("../dashbord/dashbord.html");
      document.getElementById("dashboard-link").classList.add("sideNavLink");
      break;
    case "#profile":
      loadContent("profile.html");
      document.getElementById("profile-link").classList.add("sideNavLink");
      break;
    case "#settings":
      loadContent("settings.html");
      document.getElementById("settings-link").classList.add("sideNavLink");
      break;
    default:
      loadContent("dashbord.html");
  }
}

window.addEventListener("DOMContentLoaded", handleNavigation);
window.addEventListener("hashchange", handleNavigation);
