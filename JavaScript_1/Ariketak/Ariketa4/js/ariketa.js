// Book object constructor
function Book(title, author, isRead){
    this.title = title
    this.author = author
    this.isRead = isRead
}

// This function will create a book array asking to the user
function createBookArray(){
    // Explain how the program works
    alert("Liburuen array bat sortuko duzu, bukatzen duzunean bidali \"-\" titulua eremuan.")

    // Initialize book array
    var books = new Array()

    // Ask to the user until '-' is writen
    do{
        // Ask to the user the values catching exceptions
        title = prompt("Idatzi liburuaren izenburura: ")
        if(title == '-'){
            break
        }
        author = prompt("Idatzi idazlearen izena: ")
        do{
            isRead = prompt("Esan irakurrita daukazun (Y/N): ")
            if(String(isRead).toUpperCase() == 'Y'){
                isRead = true
                break
            } else if(String(isRead).toUpperCase() == 'N'){
                isRead = false
                break
            }
        } while(true)

        books.push(new Book(title, author, isRead))
    } while(true)

    // Show the result to the user
    showBookArray(books)
}

// This function will write a book array in the main document
function showBookArray(books){
    text = "<ul>"
    books.forEach(book => {
        text += "<li>" + book.title + ' (' + book.author + ') - '
        if(book.isRead){
            text += '<b>Liburu hau irakurrita daukazu</b></li>'
        } else {
            text += '<b>Liburu hau irakurri behar duzu</b></li>'
        }
    });
    document.write(text)
}