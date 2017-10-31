$(document).ready(function() {

  $(function() {
    $(".available").click(function() {
      $('#form').show();
    });
  });

  $(function() {
    $("#close").click(function() {
      $('#form').hide();
    });
  });

  $(function() {
    $("#reserve").click(function() {
      $('#form').hide();
      $(".available").addClass("reserved");
    });
  });

});
