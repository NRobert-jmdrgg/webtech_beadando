fetch('https://baconipsum.com/api/?type=all-meat&paras=10&start-with-lorem=1')
  .then((res) => res.json())
  .then((data) => {
    data.forEach((sentence) => {
      $('.text-container').append(`<p>${sentence}</p>`);
    });
  })
  .catch((error) => console.error(error));
