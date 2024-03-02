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

// Load content for each section
loadContent("about", "about.html");
loadContent("experience", "experience.html");
loadContent("skills", "skills.html");
loadContent("projects", "projects.html");
loadContent("contact", "contact.html");
loadContent("footer", "footer.html");
