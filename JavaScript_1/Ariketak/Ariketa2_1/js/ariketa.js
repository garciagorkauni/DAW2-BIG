function confirmPsswd(){
    var psswd1 = prompt('Idatzi zure pasahitza: ');
    var psswd2 = prompt('Idatzi berriz zure pasahitza: ');

    if(psswd1 == psswd2){
        alert('Ongi etorri!')
    } else {
        alert('Pasahitz desberdinak sartu dituzu...')
    }
}