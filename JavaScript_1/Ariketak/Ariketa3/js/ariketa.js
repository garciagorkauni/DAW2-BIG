function getNumFactorial(){
    var num
    var factorial = 0

    do{
        num = prompt('Sartu zenbakia faktoriala kalkulatzeko: ');
    } while(isNaN(num))
    
    for (var i = num-1, factorial = num; i > 0; i--) {
        factorial *= i
    }

    alert('Zure zenbakiaren faktoriala ' + factorial + ' da.')
}