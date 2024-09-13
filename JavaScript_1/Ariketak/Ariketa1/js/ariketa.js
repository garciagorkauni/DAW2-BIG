function markAvg(){
    var num1 = parseInt(prompt('Sartu lehenengo nota: '))
    var num2 = parseInt(prompt('Sartu bigarren nota: '))
    var num3 = parseInt(prompt('Sartu hirugarren nota: '))

    var avg = (num1 + num2 + num3) / 3
    alert('Batazbestekoa ' + avg + ' da.')

    if(avg >= 5){
        alert('Gainditu duzu!')
    }else{
        alert('Ez duzu gainditu...')
    }
}