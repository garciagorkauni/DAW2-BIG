// Set listeners for image changing
jauna = document.getElementById('jauna')
jauna.onclick = function test(){
    changeImage('media/caraHombre.jpg')
}

anderea = document.getElementById('anderea')
anderea.onclick = function test(){
    changeImage('media/caraMujer.jpg')
}

// Change image div background image
function changeImage(path){
    // Get image div
    imageDiv = document.getElementById('image-div')

    // Define and configure background image
    imageDiv.style.backgroundImage = "url(" + path + ")"
    imageDiv.style.backgroundSize = "cover"
    imageDiv.style.backgroundPosition = "center"
}

// Clear the website or set default appearance
function clearFormErrors(clearResponse){
    // Get the form
    const form = document.getElementById('data-form')

    // Set default label values
    label = document.getElementById('zuzentzeko_era_label')
    label.innerHTML = 'Zuzentzeko era'
    form.izena.previousElementSibling.innerHTML = 'Izena'
    form.abizena.previousElementSibling.innerHTML = 'Abizena'
    form.helbidea.previousElementSibling.innerHTML = 'Helbidea'
    form.hiria.previousElementSibling.innerHTML = 'Hiria'

    // Clear respons part too if necessary
    if(clearResponse){
        changeImage('')
        imageDiv = document.getElementById('image-div')
        imageDiv.querySelector('h1').style.visibility = 'visible'

        const responseText = document.getElementById('response_text')
        responseText.innerHTML = ''
    }
}

function showResponse(event) {
    // Avoid default even (page refresh)
    event.preventDefault()

    // Get form by id
    const form = document.getElementById('data-form')
    let error = false

    // Validate al fields are filled
    if (!form.zuzentzeko_era[0].checked && !form.zuzentzeko_era[1].checked) {
        label = document.getElementById('zuzentzeko_era_label')
        label.innerHTML = 'Zuzentzeko era <strong style="color:red;">*</strong>'
        error = true;
    }
    if (!form.izena.value) {
        form.izena.previousElementSibling.innerHTML = 'Izena <strong style="color:red;">*</strong>'
        form.izena.placeholder = 'Zure izena idatzi...'
        error = true;
    }
    if (!form.abizena.value) {
        form.abizena.previousElementSibling.innerHTML = 'Abizena <strong style="color:red;">*</strong>'
        form.abizena.placeholder = 'Zure abizena idatzi...'
        error = true;
    }
    if (!form.helbidea.value) {
        form.helbidea.previousElementSibling.innerHTML = 'Helbidea <strong style="color:red;">*</strong>'
        form.helbidea.placeholder = 'Zure helbidea idatzi...'
        error = true;
    }
    if (form.hiria.value === 'Aukeratu') {
        form.hiria.previousElementSibling.innerHTML = 'Hiria <strong style="color:red;">*</strong>'
        error = true;
    }

    if(error) {
        return
    } else {
        clearFormErrors(false)
    }

    // Zuzentzeko era
    let response = ''
    const zuzEra = form.zuzentzeko_era
    for (let i = 0; i < zuzEra.length; i++) {
        if (zuzEra[i].checked) {
            // To take the innerText value of the next element (the label)
            response += `<b>Zuzentzeko era:</b> ${zuzEra[i].nextElementSibling.innerText}<br>`
        }
    }

    // Izena
    const izena = form.izena.value
    response += `<b>Izena:</b> ${izena}<br>`

    // Abizena
    const abizena = form.abizena.value
    response += `<b>Abizena:</b> ${abizena}<br>`

    // Helbidea
    const helbidea = form.helbidea.value
    response += `<b>Helbidea:</b> ${helbidea}<br>`

    // Hiria
    const hiria = form.hiria.value
    response += `<b>Hiria:</b> ${hiria}<br>`

    // Gustukoena
    const liburuak = form.liburuak.checked
    const pelikulak = form.pelikulak.checked
    response += `<b>Gustukoena:</b> `
    if (liburuak) response += `Liburuak `
    if (pelikulak) response += `Pelikulak `
    response += '<br>'

    // Quit ? from image div
    imageDiv = document.getElementById('image-div')
    imageDiv.querySelector('h1').style.visibility = 'hidden'

    // Define the text as the <p> element text
    const responseText = document.getElementById('response_text')
    responseText.innerHTML = response
}