function Book(title, author, isRead){
    this.title = title
    this.author = author
    this.isRead = isRead
}

function createBookArray(){
    alert("Liburuen array bat sortuko duzu, bukatzen duzunean bidali \"-\" titulua eremuan.")

    var books = new Array()

    do{
        title = prompt("Idatzi liburuaren izenburura: ")
        author = prompt("Idatzi idazlearen izena: ")
        do{
            isRead = prompt("Esan irakurrita daukazun (Y/N): ")
            if(String(isRead).toUpperCase() == 'Y'){
                isRead = true
            } else if(String(isRead).toUpperCase() == 'N'){
                isRead = false
            }
        } while(isRead == 'Y' || isRead == 'N')

        books.push(new Book(title, author, isRead))

    } while(title != '-')

    text = "<ul>"
    for (i = 0; i < books.length(); i++) {
        text += "<li>" + books[i] + "</li>";
    }
}

function readBookArray(){

}