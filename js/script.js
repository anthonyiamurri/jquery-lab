$(document).ready(function() {

  var tableInfo = [null, null, null, null, null, null, null, null, null];

  var currentTable = 0;

  var tablenum = 0;

  // show reservation pop-up when available table clicked

  $(".available").on("click", function(event) {
    // var tablenum = $(this).attr("data-tablenum");
    var tableNum = getNumberFromTable(this);
    lastTableClicked = this;
    $("#tableNumber").text("Table Number: " + tablenum);
    $("#form").fadeIn();
      // $(this).toggleClass("reserved");
    });

  });


  var tableReservations = [];
  var lastTableClicked;
  var lastTableNumberClicked;

  function getNumberFromTable(table) {
    return parseInt( $(table).text().trim());
  }

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

$(".table").on("mouseenter", function() {
  var tableNum = getNumberFromTable(this);
  if ($(this).hasClass("reserved")) {
    var reservation = tableReservations[tableNum];
  }
});


  // reserve table

  $("#reserve").click(function() {
    $(lastTableClicked).addClass("reserved").removeClass("available");

    var name = $("#name").val();
    var partySize = $("#partySize").val();
    var reservation = {
      name: name,
      partySize: partySize
    };
    console.log(reservation);
    var tableNum = getNumberFromTable(lastTableClicked);
    tableReservations[tableNum] = reservation;

    $('#form').hide();
  });
