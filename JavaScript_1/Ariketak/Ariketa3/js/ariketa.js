function getNumFactorial(){
    // Initialize some values
    var num
    var factorial = 0

    // Ask the user for a value catching the exception
    do{
        num = prompt('Sartu zenbakia (0 baino handiagoa) bere faktoriala kalkulatzeko: ');
    } while(isNaN(parseInt(num)) || Number(num)<=0 || 
    ((Number(num) - parseInt(num))) || num == null)
    
    // Calculate the factorial
    for (var i = num-1, factorial = num; i > 0; i--) {
        factorial *= i
    }

    // Show the result to the user
    alert('Zure zenbakiaren faktoriala ' + factorial + ' da.')
}

// WITH REGEX
/*
var num
let regex = /^[0-9]+$/g
do {
    num = prompt('Sartu zenbaki positibo oso bat: ')
} while (!regex.test(num))

for (var i = num-1, factorial = num; i > 0; i--) {
    factorial *= i
}
*/