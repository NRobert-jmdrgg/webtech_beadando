$('.dark-mode-switcher-container').click(() => {
  if ($('body').css('background-color') === 'rgb(221, 225, 233)') {
    $(':root').css({
      '--main-bg-color': 'hsl(229, 20%, 17%)',
      '--navbar-color': 'hsl(231, 19%, 20%)',
      '--main-text-color': 'hsl(228, 56%, 86%)',
      '--main-border-color': 'hsl(228, 36%, 79%)',
    });
    $('#dark-mode-switcher').attr('src', './resources/dark_mode.png');
    $('#logo').attr('src', './resources/logo_dark.png');
  } else {
    $(':root').css({
      '--main-bg-color': 'hsl(220, 21%, 89%)',
      '--navbar-color': 'hsl (220, 22%, 92%)',
      '--main-text-color': 'hsl(234, 16%, 35%)',
      '--main-border-color': 'hsl(233, 13%, 41%)',
    });
    $('#dark-mode-switcher').attr('src', './resources/light_mode.png');
    $('#logo').attr('src', './resources/logo.png');
  }
});

$('.dropdown').hover(
  function () {
    $(this).show();
  },
  function () {
    $(this).hide();
  }
);

$('.navbar-toggle').hover(
  function () {
    const id = $(this).attr('id');
    $('.dropdown').not(`#${id}`).hide();

    $(`#${id}.dropdown`).show();
  },
  function () {
    const id = $(this).attr('id');
    $(`#${id}.dropdown`).hide();
  }
);
