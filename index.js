function setDarkThemeImages() {
  $('#dark-mode-switcher').attr('src', './resources/dark_mode.png');
  $('#logo').attr('src', './resources/logo_dark.png');
  $('.requirements').css('list-style', 'url("./resources/tick_dark.png")');
}

function setLightThemeImages() {
  $('#dark-mode-switcher').attr('src', './resources/light_mode.png');
  $('#logo').attr('src', './resources/logo.png');
  $('.requirements').css('list-style', 'url("./resources/tick.png")');
}

$(document).ready(function () {
  const theme = localStorage.theme;

  // logo fix
  if (theme === 'dark') {
    setDarkThemeImages();
  } else {
    setLightThemeImages();
  }
});

$('.dark-mode-switcher-container').click(() => {
  const theme = localStorage.getItem('theme');
  if (theme === 'light') {
    setDarkTheme();
    setDarkThemeImages();
  } else {
    setLightTheme();
    setLightThemeImages();
  }
});

// dropdown menu animations
$(function () {
  $('.dropdown').hover(
    function () {
      $(this).show();
    },
    function () {
      $(this).slideUp(200);
    }
  );

  $('.navbar-toggle').hover(
    function () {
      const id = $(this).attr('id');
      $('.dropdown').not(`#${id}`).slideUp(200);

      $(`#${id}.dropdown`).slideDown(200);
    },
    function () {
      const id = $(this).attr('id');
      $(`#${id}.dropdown`).hide();
    }
  );
});
