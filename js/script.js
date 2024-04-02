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

$(function () {
  loadContent("../dashbord/dashbord.html");
  $("dashboard-link").classList.add("sideNavLink");
});

function handleNavigation() {
  const hash = window.location.hash;
  $("a").removeClass("sideNavLink");

  switch (hash) {
    case "#dashboard":
      loadContent("../dashbord/dashbord.html");
      $("#dashboard-link").addClass("sideNavLink");

      break;
    case "#schedule":
      loadContent("../dashbord/schedule.html");
      $("#schedule-link").addClass("sideNavLink");

      break;
    case "#messages":
      loadContent("../dashbord/messages.html");
      $("#message-link").addClass("sideNavLink");

      break;
    case "#students":
      loadContent("../dashbord/students.html");
      $("#settings-link").addClass("sideNavLink");

      break;
    default:
      loadContent("dashbord.html");
  }
}

$(document).ready(function () {
  handleNavigation();
});

$(window).on("hashchange", handleNavigation);

// sidebar show hide for the responsive design

$(function () {
  $("#hideme").click(function () {
    $("#sidebar").addClass("hidden");
  });
});
