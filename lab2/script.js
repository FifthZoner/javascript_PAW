(function () {
  const example = document.getElementById('example')
  const cw1 = document.getElementById('cw1')
  const cw2 = document.getElementById('cw2')
  const cw3 = document.getElementById('cw3')
  const answer = document.getElementById('answer')

  example.addEventListener("click", function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(array => {
          console.log(array)
          answer.innerHTML = JSON.stringify(array);
        })
  })

    cw1.addEventListener("click", function () {
        answer.innerHTML = "Loading...";
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(array => {
                answer.innerHTML = "";
                array.forEach(n =>{
                    answer.innerHTML += "<b class = 'userId'>Id użytkownika: " + JSON.stringify(n.userId) + "</b>    ";
                    answer.innerHTML += "<b class = 'id'>Id: " + JSON.stringify(n.id) + "</b><br>";
                    answer.innerHTML += "<b class = 'title'>Tytuł: " + JSON.stringify(n.title) + "</b><br>";
                    answer.innerHTML += "<b class = 'body'>Treść: " + JSON.stringify(n.body) + "</b><br><br>";
                })
                console.log(answer.innerText);
            })
    })

  cw2.addEventListener("click", function () {
      answer.innerHTML = "Loading...";
      const number = 1; // TODO: zrobić to może dynamicznie
      const address = "https://jsonplaceholder.typicode.com/posts/" + number.toString();
      fetch(address)
          .then(response => response.json())
          .then(array => {
              answer.innerHTML = "";
              answer.innerHTML += "<b class = 'userId'>Id użytkownika: " + JSON.stringify(array.userId) + "</b>    ";
              answer.innerHTML += "<b class = 'id'>Id: " + JSON.stringify(array.id) + "</b><br>";
              answer.innerHTML += "<b class = 'title'>Tytuł: " + JSON.stringify(array.title) + "</b><br>";
              answer.innerHTML += "<b class = 'body'>Treść: " + JSON.stringify(array.body) + "</b><br><br>";
              console.log(answer.innerText);
          })
  })

  cw3.addEventListener("click", function () {
      answer.innerHTML = "Processing...";
      const post = {
          userId : 1,
          title : "Tytułuł",
          body : "ciałoło"
      }

      fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json; charset=UTF-8',
          },
          body: JSON.stringify(post),
      })
          .then(res => res.json())
          .then(data => {
              answer.innerHTML = "Dodano nowy post o ID = " + data.id;
              console.log(answer.innerText);
          })
          .catch(error => {
              answer.innerHTML = "Nie udało się dodać postu!";
              console.log(answer.innerText);
          });
  })

})();
