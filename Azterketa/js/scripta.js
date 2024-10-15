//var formSuccess = true
$(document).ready(function(){
    // Bigarren ariketa animate erabiliz
    $("a.nav-link").mouseenter(function(){
        $(this).animate({
            fontSize: "200%",
        }, 500)
    })

    $("a.nav-link").mouseleave(function(){
        $(this).animate({
            fontSize: "100%",
        }, 500)
    })

    // Hirugarren ariketa bootstrap balidazioa erabiliz
    $(document).ready(function(){
        $(".needs-validation").on("submit", function(e){
            formSuccess = true
            if(!this.checkValidity()){
                formSuccess=false
                e.preventDefault()
                e.stopPropagation()
            }else if(!balidatuCeckbox()){
                formSuccess=false
                e.preventDefault()
                e.stopPropagation()
            }
            e.preventDefault()
            $(this).addClass("was-validated")

            // Zazpigarren ariketarako arrow funtzioak
            if(formSuccess){
                var irudiaIzkutatu = () => $("#irudia").slideUp(); bidaiakBistaratu();
                irudiaIzkutatu()
            } else {
                var irudiaBistaratu = () => bidaiakIzkutatu(); $("#irudia").slideDown();
                irudiaBistaratu()
            }
        })
    })
})

// Laugarren ariketaren balidazioa zuzentzeko funtzioa
function balidatuCeckbox(){
    var checkboxes = $("[type=checkbox]")
    if(!checkboxes[0].checked && !checkboxes[1].checked){
        alert("Gutxienez hotelak edo hegazkinak aukeratu behar duzu")
        return false
    } else {
        return true
    }
}

// Bostgarren ariketan ajax-eko lista bistaratzeko eta izkutatzeko funtzioak
function bidaiakBistaratu(){
    var url = 'bidaiak.json';
    $.ajax({
        type: "GET",
        url: url,
        success: function (data) {
            datuak = data;
            testua = "<ul>";
            for (i = 0; i < datuak.length; i++) {
                testua += "<li>" + datuak[i].ibilbidea + "</li>";
            }
            testua += "</ul>"
            $("#bidaiak").html(testua);
        }
    });
}

function bidaiakIzkutatu(){
    $("#bidaiak").html("")
}

// Seigarren ariketan emaitza bistaratzeko eta izkutatzeko funtzioak
// function irudiaBistaratu(){
//     bidaiakIzkutatu()
//     $("#irudia").slideDown()
// }

// function irudiaIzkutatu(){
//     $("#irudia").slideUp()
//     bidaiakBistaratu()    
// }
