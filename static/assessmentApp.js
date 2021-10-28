$(document).ready( () =>{
    const getCookieValue = (name) => (
        document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || ''
      )
      
    const nama = getCookieValue('nama');
    const isCov = getCookieValue('isCovid');
    console.log(isCov)
    console.log(nama)

    if(isCov === "true"){
        $("#hasil-test").text("Anda memiliki gejala-gejala COVID");
        $("#flav").text("Kami merekomendasikan anda untuk segera melakukan test. Klik tombol dibawah ini untuk mendapakan informasi selengkapnya")
        $('a').attr("href", "http://www.google.com/")
        $('button').text("Dapatkan lokasi swab");
        return
    }
    $("#hasil-test").text("Anda bebas dari covid");
    $("#flav").text("Klik tombol dibawah ini untuk mendapakan informasi mengenai covid.")
    $('a').attr("href", "http://www.facebook.com/")
    $('button').text("Lanjut");
    return
})