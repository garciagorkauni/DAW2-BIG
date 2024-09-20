// Define constant shirt numbers
let SHIRT_NUMBERS = [6, 9, 11]

function goPrevious(){
    // Get the number of actual shirt
    let actual_shirt = getActualShirtNumber()
    let new_shirt

    // Calculate previous shirt number
    for (let index = 0; index < SHIRT_NUMBERS.length; index++) {
        if(parseInt(actual_shirt) === SHIRT_NUMBERS[index]){
            if(index-1 < 0){
                new_shirt = SHIRT_NUMBERS[2]
            } else {
                new_shirt = SHIRT_NUMBERS[index-1]
            }
        }
        
    }

    // Update content with new shirt
    updateWeb(new_shirt)
}

function goNext(){
    // Get the number of actual shirt
    let actual_shirt = getActualShirtNumber()
    let new_shirt

    // Calculate next shirt number
    for (let index = 0; index < SHIRT_NUMBERS.length; index++) {
        if(parseInt(actual_shirt) === SHIRT_NUMBERS[index]){
            if(index+1 >= SHIRT_NUMBERS.length){
                new_shirt = SHIRT_NUMBERS[0]
            } else {
                new_shirt = SHIRT_NUMBERS[index+1]
            }
        }
        
    }

    // Update content with new shirt
    updateWeb(new_shirt)
}

function getActualShirtNumber(){
    // Get actual shirt number value
    let title = document.getElementById('title')
    return String(title.innerText).split(' ')[1]
}

function updateWeb(number){
    // Update web content with new data
    let title = document.getElementById('title')
    title.innerHTML = '<strong>Camiseta ' + number + '</strong>'
    updateImage('http://127.0.0.1:5500/JavaScript_2/Ariketak/Ariketa2/media/' + number + '.jpg')
}

function updateImage(path){
    // Change image with new path
    image = document.getElementById('image')
    image.src = path
}