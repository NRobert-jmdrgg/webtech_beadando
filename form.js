$(document).ready(function () {
  $('.error-message').hide();
});

$('#name').on('input', function () {
  if ($('#name').val()) {
    $('#ne1').hide();
    if ($('#name').val().length > 2) {
      $('#ne2').hide();
    } else {
      $('#ne2').show();
    }
  } else {
    $('#ne1').show();
    $('#ne2').hide();
  }
});

$('#email').on('input', function () {
  if ($('#email').val()) {
    $('#ee1').hide();
    if ($('#email').val().length > 6) {
      $('#ee2').hide();
    } else {
      $('#ee2').show();
    }
  } else {
    $('#ee1').show();
    $('#ee2').hide();
  }
});

$('#send').click(function () {
  let ok = true;

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  if (!$('#name').val()) {
    $('#ne1').show();
    ok = false;
  } else if ($('#name').val().length <= 2) {
    $('#ne2').show();
    ok = false;
  }

  if (!$('#email').val()) {
    $('#ee1').show();
    ok = false;
  } else if ($('#email').val().length <= 6) {
    $('#ee2').show();
    ok = false;
  } else if (!validateEmail($('#email').val())) {
    $('#ee3').show();
    ok = false;
  }

  if (ok) {
    alert('Submitted');
  }
});
