function showWelcomeMessage(){
    let name1 = prompt('Как тебя зовут?');
    alert(`Привет, ${name1}!`);
}

function add(){
    let number1 = prompt('Выберите первое число');
    let number2 = prompt('Выберите второе число');
    let result = (+number1 + +number2);
    alert(`Результат сложения ${result}`);
}

function subtract(){
    let number1 = prompt('Выберите первое число');
    let number2 = prompt('Выберите второе число');
    let result = (number1 - number2);
    alert(`Результат вычитания ${result}`);
}

function divide(){
    let number1 = prompt('Выберите первое число');
    let number2 = prompt('Выберите второе число');
    let result = (number1 / number2);
    alert(`Результат деления ${result}`);
}

function multiplay(){
    let number1 = prompt('Выберите первое число');
    let number2 = prompt('Выберите второе число');
    let result = (number1 * number2);
    alert(`Результат умножения ${result}`);
}