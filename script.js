function zad1() {
  const ex1 = document.getElementById("ex1_content");
  const eb1 = document.getElementById("ex1_button");
  eb1.addEventListener("click", function () {
    ex1.innerHTML = "1, 2, 3, 4, 5, 6, 7, 8, 9";
  });
}

function zad2() {
  const et2 = document.getElementById("ex2_text");
  const ex2 = document.getElementById("ex2_content");
  let content = et2.value;
  if (content.length !== 9) {
    ex2.innerHTML = "Długość numeru musi być równa 9";
    //return;
  } else {
    for (let n in content) {
      if (n < "0" || n > "9") {
        ex2.innerHTML = "Numer nie może zawierać liter";
        return;
      }
    }
  }
  ex2.innerHTML = content;
}
