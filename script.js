function zad1() {
  const ex1 = document.getElementById("ex1_content");
  const ex2 = document.getElementById("ex1_button");
  ex2.addEventListener("click", function(){
    ex1.innerHTML = "1, 2, 3, 4, 5, 6, 7, 8, 9";
  });
}
