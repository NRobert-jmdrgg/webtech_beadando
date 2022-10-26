$('.dark-mode-switcher-container').click(() => {
  if ($('body').css('background-color') === 'rgb(221, 225, 233)') {
    $(':root').css({
      '--main-bg-color': 'hsl(229, 20%, 17%)',
      '--navbar-color': 'hsl(231, 19%, 20%)',
      '--main-text-color': 'hsl(228, 56%, 86%)',
      '--main-border-color': 'hsl(228, 36%, 79%)',
    });
    $('#logo').attr('src', './resources/logo_dark.png');
  } else {
    $(':root').css({
      '--main-bg-color': 'hsl(220, 21%, 89%)',
      '--navbar-color': 'hsl (220, 22%, 92%)',
      '--main-text-color': 'hsl(234, 16%, 35%)',
      '--main-border-color': 'hsl(233, 13%, 41%)',
    });
    $('#logo').attr('src', './resources/logo.png');
  }
});

let before = true;
fetch('https://baconipsum.com/api/?type=all-meat&paras=15&start-with-lorem=1')
  .then((response) => response.json())
  .then((data) => {
    data.forEach((sentence, i) => {
      before = !before;
      const id = `#bi${i}`;
      const img =
        '<img src="" alt="dog image" style="width: 100px; height: 100px;"></img>';
      $('.list').append(
        `<div class='bacon-ipsum' id='bi${i}'><span>${sentence}</span></div>`
      );
      before ? $(id).prepend(img) : $(id).append(img);
      fetch('https://dog.ceo/api/breeds/image/random')
        .then((response) => response.json())
        .then((data) => {
          $(id).children('img').attr('src', `${data.message}`);
        })
        .catch((error) => console.error(error));
    });
  })
  .catch((error) => console.error(error));
