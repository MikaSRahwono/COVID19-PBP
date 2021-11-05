$(document).ready( () =>{
    // diambil dari 
    // https://stackoverflow.com/a/25490531
    const getCookieValue = (name) => (
        document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || ''
      )
      
    const nama = getCookieValue('nama');
    const isCov = getCookieValue('isCovid');

    console.log(isCov)
    console.log(nama)

    if(isCov === "true"){
        $("#hasil-test").text(`Mohon maaf ${nama} anda termasuk individu yang rawan COVID`);
        $("#flav").text("Kami merekomendasikan anda untuk segera melakukan test. Klik tombol dibawah ini untuk mendapakan informasi selengkapnya")
        $('a').attr("href", "https://covid19-panic-button.herokuapp.com/hospital/")
        $('button').text("Dapatkan info lokasi test swab");
    }
    else{
        $("#hasil-test").text(`Selamat ${nama}!\nAnda bebas dari covid`);
        $("#flav").text("Klik tombol dibawah ini untuk mendaftar dan dapatkan informasi mengenai covid.")
        $('a').attr("href", "https://covid19-panic-button.herokuapp.com/register/")
        $('button').text("Lanjut");
    }
    
    $("#con-hasil").slideDown(1000, () =>{
        $("#con-flav").slideDown(1000, () => {
            $("#con-btn").slideDown(1000)
        })
    });
    console.log(nama)
})
