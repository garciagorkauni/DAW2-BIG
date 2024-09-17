function markAvg(){
    // Ask to the user for marks and cast them directly
    var num1 = parseInt(prompt('Sartu lehenengo nota: '))
    var num2 = parseInt(prompt('Sartu bigarren nota: '))
    var num3 = parseInt(prompt('Sartu hirugarren nota: '))

    // Calculate the marks average and show it
    var avg = (num1 + num2 + num3) / 3
    alert('Batazbestekoa ' + avg + ' da.')

    // Show the final result to the user
    if(avg >= 5){
        alert('Gainditu duzu!')
    }else{
        alert('Ez duzu gainditu...')
    }
}