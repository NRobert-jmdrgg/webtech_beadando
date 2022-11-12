function setDarkTheme() {
  localStorage.setItem('theme', 'dark');
  // switch to dark theme
  $(':root').css({
    '--main-bg-color': 'hsl(229, 20%, 17%)',
    '--secondary-bg-color': 'hsl(229, 19%, 23%)',
    '--navbar-color': 'hsl(231, 19%, 20%)',
    '--main-text-color': 'hsl(228, 56%, 86%)',
    '--main-border-color': 'hsl(228, 36%, 79%)',
  });
}

function setLightTheme() {
  localStorage.setItem('theme', 'light');
  $(':root').css({
    '--main-bg-color': 'hsl(220, 21%, 89%)',
    '--secondary-bg-color': 'hsl(220, 23%, 95%)',
    '--navbar-color': 'hsl (220, 22%, 92%)',
    '--main-text-color': 'hsl(234, 16%, 35%)',
    '--main-border-color': 'hsl(233, 13%, 41%)',
  });
}

// set theme
let theme = localStorage.getItem('theme');
if (!theme) {
  if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    theme = 'dark';
  } else {
    theme = 'light';
  }
}
theme === 'light' ? setLightTheme() : setDarkTheme();
