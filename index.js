const colorThemes = document.querySelectorAll('[name="theme"]');

const storeTheme = function (theme) {
  localStorage.setItem("theme", theme);
};

const getTheme = function () {
  const themeId = localStorage.getItem("theme");

  colorThemes.forEach((themeOption) => {
    if (themeOption.id == themeId) {
      themeOption.checked = true;
    }
  });
};

colorThemes.forEach((themeOption) => {
  themeOption.addEventListener("click", () => {
    storeTheme(themeOption.id);
  });
});

window.addEventListener("scroll", function () {
  const windowHeight = window.innerHeight;

  const couch = document.getElementById("couch-bg");
  const stu1 = document.getElementById("stu1-bg");

  console.log(window.scrollY);
  couch.style.opacity = `${1 - window.scrollY / (windowHeight * 1.25)}`;
  couch.style.top = `${window.scrollY}px`;

  stu1.style.opacity = `${1 - (windowHeight * 1.25 - window.scrollY) / 800}`;
  stu1.style.top = `${window.scrollY - windowHeight * 1.25 - 50}px`;

  const stu1ShadowDepth = 8 * stu1.style.opacity + 1;
  const couchShadowDepth = 8 * couch.style.opacity + 1;
  stu1.style.boxShadow = `0 0 ${stu1ShadowDepth}px ${stu1ShadowDepth}px hsl(var(--clr-bg)) inset`;
  couch.style.boxShadow = `0 0 ${couchShadowDepth}px ${couchShadowDepth}px hsl(var(--clr-bg)) inset`;
});
