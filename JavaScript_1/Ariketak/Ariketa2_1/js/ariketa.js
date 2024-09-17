function confirmPsswd(){
    // Ask the user for both values
    var psswd1 = document.getElementById('psswd1')
    var psswd2 = document.getElementById('psswd2')

    // Show the result to the user depending on psswd values
    if(psswd1 == psswd2){
        alert('Ongi etorri!')
    } else {
        alert('Pasahitz desberdinak sartu dituzu...')
    }
}