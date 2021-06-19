
// function checkForSign(){
//     var options = document.getElementById('selection')
//     let input = options.value;

//     return input;
// }
// function Calculate(){
// it van serve in place of event listener but add this in the input with the id name submit(onclick"function()")
// }


const submit = document.getElementById('submit')

submit.addEventListener('click', function(){
    
    var options = document.getElementById('selection')
    let input = options.value;

        switch(input){
        case '+':
            addition();
        break;
        case '-':
            substraction();
        break;
        case '*':
            multiplication();
        break;
        case '/':
            division();
        break;
        default :
        alert('undefine.. Please insert a number')
        

    }

    const answer = document.getElementById('answer')


})

function addition() {
    var num1 = document.getElementById("num1");
    var num2 = document.getElementById("num2");

    var sum = parseInt(num1.value) + parseInt(num2.value);
    
    // if(v)
    // document.write(`<h1>`+sum+`</h1>`);
    // var display = document.getElementById("ans");
    // display.innerHTML= `${sum}`;
    let answer = document.getElementById('answer');

    answer.value = sum;

}
function division() {
    var num1 = document.getElementById("num1");
    var num2 = document.getElementById("num2");

    var div = parseInt(num1.value) / parseInt(num2.value);
    let answer = document.getElementById('answer');
    answer.value = div;
}
function multiplication() {
    var num1 = document.getElementById("num1");
    var num2 = document.getElementById("num2");

    var mul = parseInt(num1.value) * parseInt(num2.value);
    let answer = document.getElementById('answer');
    answer.value = mul;
}

function substraction() {
    var num1 = document.getElementById("num1");
    var num2 = document.getElementById("num2");

    var sub = parseInt(num1.value) - parseInt(num2.value);

    let answer = document.getElementById('answer');
    answer.value = sub;
}

