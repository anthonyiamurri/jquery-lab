$(document).ready(function() {

  var tableInfo = [null, null, null, null, null, null, null, null, null];

  var currentTable = 0;

  var tablenum = 0;

  var lastTableClicked = 0;

  // show reservation pop-up when available table clicked

  $(".available").on("click", function(event) {
    var tablenum = $(this).attr("data-tablenum");
    tablenum = parseInt(tablenum);
    tablenum = Number(tablenum);
    lastTableClicked = this;
    $("#tableNumber").text("Table Number: " + tablenum);
    $("#form").fadeIn();
    $("#reserve").click(function() {
      $('#form').fadeOut();
      // $(this).toggleClass("reserved");
    });

  });


  var tableNumber = $("");

  {
    $("#tables").attr("data-tablenum");
  }


  // exit reservation pop-up

  $(function() {
    $("#close").click(function() {
      $('#form').fadeOut();
    });
  });

  // reserve table

  // $(function() {
  //   $("#reserve").click(function() {
  //     $('#form').hide();
  //     $(tablenum).toggleClass("reserved");
  //   });
  // });

});
