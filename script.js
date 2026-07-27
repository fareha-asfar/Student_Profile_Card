const form = document.getElementById("profile-form");
const createBtn = document.getElementById("create-btn");
const themeBtn = document.getElementById("theme-btn");
const changeThemeBtn = document.getElementById("change-theme-btn");
const hideBtn = document.getElementById("hide-btn");
const resetBtn = document.getElementById("reset-btn");

const profileCard = document.getElementById("profile-card");
const nameHeading = document.getElementById("name-heading");
const nameOutput = document.getElementById("name-output");
const ageOutput = document.getElementById("age-output");
const subjectOutput = document.getElementById("subject-output");
const colorOutput = document.getElementById("color-output");

let isDarkMode = false;
const accentPalette = ["warm", "sage", "teal"];
let currentAccent = 0;

function updateProfile() {
  const name = form.name.value.trim() || "Student Name";
  const age = form.age.value.trim() || "Unknown";
  const subject = form.subject.value.trim() || "Learning";
  const color = form.color.value.trim() || "Bright";

  nameHeading.textContent = name;
  nameOutput.textContent = name;
  ageOutput.textContent = age;
  subjectOutput.textContent = subject;
  colorOutput.textContent = color;
}

createBtn.addEventListener("click", updateProfile);

form.addEventListener("submit", function (event) {
  event.preventDefault();
  updateProfile();
});

themeBtn.addEventListener("click", function () {
  isDarkMode = !isDarkMode;
  document.body.setAttribute("data-theme", isDarkMode ? "dark" : "light");
  themeBtn.textContent = isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode";
});

changeThemeBtn.addEventListener("click", function () {
  currentAccent = (currentAccent + 1) % accentPalette.length;
  document.body.setAttribute("data-accent", accentPalette[currentAccent]);
});

hideBtn.addEventListener("click", function () {
  profileCard.classList.toggle("is-hidden");
  hideBtn.textContent = profileCard.classList.contains("is-hidden")
    ? "Show Profile"
    : "Hide Profile";
});

resetBtn.addEventListener("click", function () {
  form.reset();
  updateProfile();
  profileCard.classList.remove("is-hidden");
  hideBtn.textContent = "Hide Profile";
});

updateProfile();
