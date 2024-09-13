function confirmPsswd(){
    do{
        var psswd1 = prompt('Idatzi zure pasahitza: ');
        var psswd2 = prompt('Idatzi berriz zure pasahitza: ');
    } while(psswd1 != psswd2)
    
    alert('Ongi etorri!')
}