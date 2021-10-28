console.log('masuk')
$(document).ready( () =>{
    let listPertanyaan = [
        "Apakah indera penciuman atau perasa anda pernah hilang?", 
        "Apakah anda pernah kontak dengan orang yang terkonfirmasi kasus covid?",
        "Apakah anda pernah mengalami gejala dibawah ini? (Bisa lebih dari satu)",
        "Apakah saturasi oksigen anda kurang dari 92%?",
        "Apakah anda pernah mengalami sesak napas dalam beberapa hari terakhir?",
        "Apakah pernyataan dibawah ini ada yang menggambarkan diri anda?",
        "Pilih Provinsi anda"
    ];
    
    let radio = [1, 2, 4, 5];
    
    let scoreAssessment = 0;
    let pertanyaanCounter = 0;
    let lokasi = "";
    let nama = "";
    
    $("#next-q").click(function(){
        if(pertanyaanCounter === 0){
            if ($("#nama").val().length === 0) {
                alert("Harap isi nama anda");
                return
            }            
            $("#a0-con").fadeOut();
            $("#question-navigator").fadeOut(300, () =>{
                $("#next-q").text("Selanjutnya");
            })
        }
        
        pertanyaanCounter++;
        console.log(pertanyaanCounter)
        if(pertanyaanCounter === 8){
            cekSemua();
            return
        }
    
        if(radio.includes(pertanyaanCounter-1)){
            if(!$(`input[name='a${pertanyaanCounter-1}']:checked`).val()){
                alert("Pertanyaan ini wajib dijawab");
                pertanyaanCounter--;
                return;
            }
        }
    
        $("#question-navigator").fadeOut(100, () =>{
            if(pertanyaanCounter > 1) $("#back-q").show();
            // hide yg sebelumnya
            if(pertanyaanCounter === 1){
                $("#question").fadeOut(300, () => {
                    $("#question").text(listPertanyaan[0]);
                    $("#question").fadeIn(300);
                    $("#a" + pertanyaanCounter + "-con").fadeIn(300);
                    $("#question-navigator").fadeIn(300);
                });
                return;
            }
            $("#question").fadeOut(300);
            $("#a" + (pertanyaanCounter - 1) + "-con").fadeOut(300, () => {
                $("#question").text(listPertanyaan[pertanyaanCounter-1]);
                $("#question").fadeIn(300);
                $("#a" + pertanyaanCounter + "-con").fadeIn(300);
                $("#question-navigator").fadeIn(300);   
            });
            
        })
    })
    
    $("#back-q").click(function(){
        pertanyaanCounter--;
        
    
        $("#question-navigator").fadeOut(100, () =>{
            if(pertanyaanCounter <= 1) $("#back-q").hide();
            // hide yg setelahnya
            $("#question").fadeOut(300);
            $("#a" + (pertanyaanCounter + 1) + "-con").fadeOut(300, () => {
                $("#question").text(listPertanyaan[pertanyaanCounter-1]);
                $("#question").fadeIn(300);
                $("#a" + pertanyaanCounter + "-con").fadeIn(300);
                $("#question-navigator").fadeIn(300);
            })
        })
    });
    
    function cekSemua(){
        pertanyaanCounter--;
        nama = $('#nama').val();
        console.log(nama);

        let isCovid = false;
        

        lokasi = $('select[name=provinsi-selector] option').filter(':selected').val();

        if ($(":checkbox[name='a6']").is(":checked")){
            isCovid = true;
        }


        console.log($('.jawab:checked'))
        $('.jawab:checked').each((index, element) => {
            scoreAssessment += parseInt($(element).val());
            console.log(scoreAssessment)
        })
    
        if(scoreAssessment >= 4){
            isCovid = true;
        }

        kirim(nama, lokasi, isCovid);
        
        if(isCovid){
            // redirect ke covid
            return
        }
        // redirect ke ga covid
    }

    function kirim(nama, prov, covidBool){
        console.log($('form'));
        const csrf = document.getElementsByName("csrfmiddlewaretoken");
        const fd = new FormData();
        fd.append('csrfmiddlewaretoken', csrf[0].value);
        fd.append('nama', nama);
        fd.append('prov', prov);
        fd.append('isCovid', covidBool);

        $.ajax({
            url : '',
            type: 'POST',
            enctype: 'multipart/form-data',
            data: fd,
            success: function(response){
                console.log(response);
            },
            error: function(error){
                console.log(error);
            },
            cache: false,
            contentType: false,
            processData: false,
        }) 
    }
})