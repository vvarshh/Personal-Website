// Toggle Hamburger Menu
function toggleMenu() {
  const menuLinks = document.querySelector(".menu-links");
  const hamburgerIcon = document.querySelector(".hamburger-icon");

  menuLinks.classList.toggle("open");
  hamburgerIcon.classList.toggle("open");
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Load content for each section
function loadContent(sectionId, htmlFilePath) {
  const section = document.getElementById(sectionId);

  if (!section) {
    console.error("Section with id", sectionId, "not found.");
    return;
  }

  const xhr = new XMLHttpRequest();
  xhr.open("GET", htmlFilePath, true);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        section.innerHTML = xhr.responseText;
      } else {
        console.error("Failed to load content. Status:", xhr.status, "Response:", xhr.responseText);
      }
    }
  };

  xhr.send();
}

loadContent("about", "about.html");
loadContent("experience", "experience.html");
loadContent("skills", "skills.html");
loadContent("projects", "projects.html");
loadContent("contact", "contact.html");
loadContent("footer", "footer.html");
