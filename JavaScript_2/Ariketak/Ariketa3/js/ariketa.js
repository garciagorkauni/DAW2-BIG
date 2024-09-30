// Define constant image paths
let BASE_PATH = 'media/'
let IMAGES = ['saludo1.jpg', 'saludo2.jpg', 'saludo3.jpg', 'saludo4.jpg']

// Set img_id to first id (0)
let img_id = 0

// Function for load next image
function addImage(){
    // In case img_id > 3 (the first one is 0)
    if(img_id > IMAGES.length - 1){
        window.alert('Ezin dira irudi gehiago gehitu')
    } else{
        // In case that image is alredy being shown
        while (document.getElementById(img_id) != null) {
            img_id++
        }

        // Create img element and load in the document
        var image = document.createElement('img')
        image.id = img_id
        image.src = BASE_PATH + IMAGES[img_id]
        image.addEventListener("click", function() {
            removeImage(image.id)
        })        
        document.body.appendChild(image)

        // Update img_id
        img_id++
    }
}

// Function for removing image
function removeImage(id){
    // Remove selected image element
    selected_img = document.getElementById(id)
    document.body.removeChild(selected_img)

    // Set img_id to the smallest able image
    for (let i = 0; i < IMAGES.length; i++) {
        if(document.getElementById(i) == null){
            img_id = i
            break
        }
    }
}