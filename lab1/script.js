function zad1() {
    const ex1 = document.getElementById("ex1_content");
    const eb1 = document.getElementById("ex1_button");
    eb1.addEventListener("click", function () {
        ex1.innerHTML = "1, 2, 3, 4, 5, 6, 7, 8, 9";
    });
}

function zad2SetContent(content) {
    if (content.length !== 9) {
        return "Długość numeru musi być równa 9";
    }
    for (let n = 0; n < content.length; n++) {
        if ((content[n] >= "a" && content[n] <= "z") || (content[n] >= "A" && content[n] <= "Z")) {
            return  "Numer nie może zawierać liter";
        }
        else if (content[n] < "0" || content[n] > "9") {
            return  "Numer nie może zawierać znaków specjalnych";
        }
    }
    return "Numer telefonu jest poprawny";
}

function zad2() {
    const et2 = document.getElementById("ex2_text");
    const ex2 = document.getElementById("ex2_content");
    ex2.innerHTML = zad2SetContent(et2.value);
}

const ee3 = document.getElementById("ex3_element");
const ec31 = document.getElementById("ex3_one");
const ec32 = document.getElementById("ex3_two");

ee3.addEventListener("dragstart", ()=>{
    ec31.addEventListener("dragover", (ec)=>{
        ec.preventDefault();
    })
    ec31.addEventListener("drop", ()=>{
        ec31.appendChild(ee3);
    })

    ec32.addEventListener("dragover", (ec)=>{
        ec.preventDefault();
    })
    ec32.addEventListener("drop", ()=>{
        ec32.appendChild(ee3);
    })
})
