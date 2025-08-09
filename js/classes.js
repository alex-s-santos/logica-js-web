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

    <h3>Digite os números e selecione uma operação matemática</h3>
    <input type="number" id="name1" class="input-num">
    <select>
      <option></option>
      <option>+</option>
      <option>-</option>
      <option>x</option>
      <option>÷</option>
      <option>X²</option>
      <option>mod</option>
    </select>
    <input type="number" id="name1" class="input-num">
    <button class="btn" id="btn1">Executar</button>
    <br>
    <p id="return1" class="return"></p>
    <br>
    <a href="./index.html" class="home">Voltar</a>
    <br>
   `

   //Lógica

});

