let classes = document.querySelector('#classes');
let class1 = document.querySelector('#class1');
let class2 = document.querySelector('#class2');

class1.addEventListener('click', function() {
   classes.innerHTML = `

    <h3>Seja bem-vindo, digite seu nome</h3>
    <label for="name">Nome: </label>
    <input type="text" id="name1">
    <button class="btn" id="btn1">Executar</button>
    <br>
    <p id="return1" class="return"></p>
    <br>
    <a href="./index.html" class="home">Voltar</a>
    <br>
   `

   //Lógica
   let btn1 = document.querySelector("#btn1");
   let name = document.querySelector("#name1");
   let return1 = document.querySelector("#return1");
   name.focus();

   btn1.addEventListener('click', function(e) {
      e.preventDefault();

      return1.innerHTML = `Olá, ${name.value}, seja bem-vindo ao nosso curso!`;
      name.value = "";
      name.focus();
   });

});

class2.addEventListener('click', function() {
   classes.innerHTML = `

    <h3>Digite os números e execute para ver os resultados</h3>
    <input type="number" id="number1-2" class="input-num" placeholder="1º Número">
    <input type="number" id="number2-2" class="input-num" placeholder="2º Número">
    <button class="btn" id="btn2">Executar</button>
    <br>
    <p id="return2" class="return"></p>
    <br>
    <a href="./index.html" class="home">Voltar</a>
    <br>
   `;

   //Lógica
   let number1_2 = document.querySelector("#number1-2");
   let number2_2 = document.querySelector("#number2-2");
   let btn2 = document.querySelector("#btn2");
  let return2 = document.querySelector("#return2");

   btn2.addEventListener('click', function() {
      return2.innerHTML = `
         ${number1_2.value} + ${number2_2.value} = ${Number(number1_2.value) + Number(number2_2.value)}
         <br>
         ${number1_2.value} - ${number2_2.value} = ${Number(number1_2.value) - Number(number2_2.value)}
         <br>
         ${number1_2.value} x ${number2_2.value} = ${Number(number1_2.value) * Number(number2_2.value)}
         <br>
         ${number1_2.value} ÷ ${number2_2.value} = ${Number(number1_2.value) / Number(number2_2.value)}
         <br>
         ${number1_2.value}<sup>${number2_2.value}</sup> = ${Number(number1_2.value) ** Number(number2_2.value)}
         <br>
         ${number1_2.value} mod ${number2_2.value} = ${Number(number1_2.value) % Number(number2_2.value)}
      `;
   });


});