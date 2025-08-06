let classes = document.querySelector('#classes');
let class1 = document.querySelector('#class1');

class1.addEventListener('click', function() {
   classes.innerHTML = `

    <h3>Seja bem-vindo, digite seu nome</h3>
    <label for="name">Nome: </label>
    <input type="text" id="name">
    <button class="btn" id="btn1">Executar</button>
    <br>
    <p id="return1">teste</p>
    <br>
    <a href="./index.html" class="home">Voltar</a>
    <script src="./js/class1.js"></script>
   `
});