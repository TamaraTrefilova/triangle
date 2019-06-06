var checkTriangle = function(number1, number2, number3) {
  var number1 = parseInt(number1);
  var number2 = parseInt(number2);
  var number3 = parseInt(number3);

  if (number1 === number2 && number2 === number3) {
    return "an equilateral";
  } else if ((number1 + number2 <= number3) || (number2 + number3 <= number1) || (number1 + number3 <= number2)) {
    return "no";
  } else if (number1 === number2 || number2 === number3 || number1 === number3) {
    return "an isosceles";
  } else {
    return "a scalene";
  }
  return;
}




$(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var side1 = $("input#side1").val();
    var side2 = $("input#side2").val();
    var side3 = $("input#side3").val();
    var result = checkTriangle(side1, side2, side3);
    $(".triangle-type").empty().append(result);
    $(".result").show();
  });
});
