$('#post').click(function () {
  const comment = $('#new-comment').val();
  if (comment) {
    $('.comments').append(
      `<div class='comment'>
        <p>
          ${comment}
        </p>
        <button type='button'>
          👍 like
        </button>
      </div>`
    );
  }
  $('#new-comment').val('');
});
