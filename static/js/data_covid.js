

function callProvinsi(province) {
    console.log(province);
    console.log("masuk");
    wilayah.fetchCorona(province);
    cuacaKode.fetchCuaca(province);
}

var wilayah = {
    fetchCorona : function (province) {
        // fetch('https://services5.arcgis.com/VS6HdKS0VfIhv8Ct/arcgis/rest/services/COVID19_Indonesia_per_Provinsi/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json')
        fetch('https://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi/more')
        
        // fetch('https://vaksincovid19-api.vercel.app/api/vaksin') data vaksin
        // fetch('https://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi')
        // https://apicovid19indonesia-v2.vercel.app/api  ini cara aksesnya gmn
        .then((response) => response.json())
        .then((data) => this.displayCoronaProvinsiWilayah(data, province))
    },
    displayCoronaProvinsiWilayah : function (data, province) {
        var flag = false;
        
        data.map(i => {
            if (i.provinsi.toLowerCase() == province.toLowerCase()) {
                const { kasus, sembuh, meninggal, provinsi, last_date} = i;
                console.log(kasus, sembuh, meninggal, provinsi);
                // document.querySelector(".h4-wilayah").innerText = "Saat ini kamu terdeteksi di provinsi " + provinsi;
                document.querySelector(".positif-wilayah").innerText = kasus.toLocaleString();
                document.querySelector(".sembuh-wilayah").innerText = sembuh.toLocaleString();
                document.querySelector(".meninggal-wilayah").innerText = meninggal.toLocaleString();
                document.querySelector(".last-update.wilayah").innerText = "Last Update: " + last_date;
                document.querySelector(".content-wilayah").classList.remove("no-detect");
                if (province.toLowerCase() == "jakarta") {
                    cuacaKode.fetchCuaca("dki jakarta");
                } else if (Provinsi.toLowerCase() == "daerah istimewa yogyakarta"){
                    cuacaKode.fetchCuaca("diyogyakarta");
                } else {
                    cuacaKode.fetchCuaca(province);
                }
                flag = true;
                return;
            }
        })
        
        // for (var i = 0; i < features.length; i++) {
        //     if (feature.attributes.Provinsi.toLowerCase() == province.toLowerCase()) {
        //         const { Kasus_Posi, Kasus_Semb, Kasus_Meni, Provinsi} = feature.attributes;
        //         console.log(Kasus_Posi, Kasus_Semb, Kasus_Meni, Provinsi);
        //         document.querySelector(".h4-wilayah").innerText = "Saat ini kamu terdeteksi di provinsi " + Provinsi;
        //         document.querySelector(".positif-wilayah").innerText = Kasus_Posi.toLocaleString();
        //         document.querySelector(".sembuh-wilayah").innerText = Kasus_Semb.toLocaleString();
        //         document.querySelector(".meninggal-wilayah").innerText = Kasus_Meni.toLocaleString();
        //         document.querySelector(".content-wilayah").classList.remove("no-detect");
        //         if (province.toLowerCase() == "jakarta") {
        //             cuacaKode.fetchCuaca("dki jakarta");
        //         } else if (Provinsi.toLowerCase() == "daerah istimewa yogyakarta"){
        //             cuacaKode.fetchCuaca("diyogyakarta");
        //         } else {
        //             cuacaKode.fetchCuaca(province);
        //         }
        //         flag = true;
        //         return;
        //     }
        // }

        // features.map(feature => {
        //    if (feature.attributes.Provinsi.toLowerCase() == province.toLowerCase()) {
        //         const { Kasus_Posi, Kasus_Semb, Kasus_Meni, Provinsi} = feature.attributes;
        //         console.log(Kasus_Posi, Kasus_Semb, Kasus_Meni, Provinsi);
        //         document.querySelector(".h4-wilayah").innerText = "Saat ini kamu terdeteksi di provinsi " + Provinsi;
        //         document.querySelector(".positif-wilayah").innerText = Kasus_Posi.toLocaleString();
        //         document.querySelector(".sembuh-wilayah").innerText = Kasus_Semb.toLocaleString();
        //         document.querySelector(".meninggal-wilayah").innerText = Kasus_Meni.toLocaleString();
        //         document.querySelector(".content-wilayah").classList.remove("no-detect");
        //         if (province.toLowerCase() == "jakarta") {
        //             cuacaKode.fetchCuaca("dki jakarta");
        //         } else if (Provinsi.toLowerCase() == "daerah istimewa yogyakarta"){
        //             cuacaKode.fetchCuaca("diyogyakarta");
        //         } else {
        //             cuacaKode.fetchCuaca(province);
        //         }
        //         flag = true;
        //         return;
        //     }
        // }) 
        
        if(flag != true) {
            document.querySelector(".content-wilayah").classList.add("no-detect");   
        }
    },
    find : function (wilayah) {
        
        if (wilayah.toLowerCase() == "jakarta") {
            this.fetchCorona("dki jakarta");
        } else if (wilayah.toLowerCase() == "jogja" || wilayah.toLowerCase() == "yogya" || wilayah.toLowerCase() == "yogyakarta")  {
            this.fetchCorona("daerah istimewa yogyakarta");
        }
        else {
            this.fetchCorona(wilayah);
        }
        
    }
}


var untukProvinsi = {
    fetchCorona : function (province) {
        // fetch('https://services5.arcgis.com/VS6HdKS0VfIhv8Ct/arcgis/rest/services/COVID19_Indonesia_per_Provinsi/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json')
        fetch('https://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi/more')
        // fetch('https://vaksincovid19-api.vercel.app/api/vaksin') data vaksin
        // fetch('https://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi')
        // https://apicovid19indonesia-v2.vercel.app/api  ini cara aksesnya gmn
        .then((response) => response.json())
        .then((data) => this.displayCoronaProvinsi(data, province))
    },
    displayCoronaProvinsi : function (data, province) {
        var flag = false;
        data.map(i => {
            if (i.provinsi.toLowerCase() == province.toLowerCase()) {
                const { kasus, sembuh, meninggal, provinsi, last_date} = i;
                console.log(kasus, sembuh, meninggal, provinsi);
                // document.querySelector(".h4-wilayah").innerText = "Saat ini kamu terdeteksi di provinsi " + provinsi;
                document.querySelector(".h1-provinsi").innerText = "Data Covid " + provinsi;
                document.querySelector(".positif-provinsi").innerText = kasus.toLocaleString();
                document.querySelector(".sembuh-provinsi").innerText = sembuh.toLocaleString();
                document.querySelector(".meninggal-provinsi").innerText = meninggal.toLocaleString();
                document.querySelector(".last-update.provinsi").innerText = "Last Update: " + last_date;
                document.querySelector(".provinsi").classList.remove("loading");
                document.querySelector(".content-provinsi").classList.remove("loading");
                flag = true;
                return;
            }
        })
        
        
        if (flag != true) {
            popUpGaada(province);
            document.querySelector(".provinsi").classList.add("loading");
            document.querySelector(".content-provinsi").classList.add("loading");
        }
    },
    search : function () {
        var x = document.querySelector(".search-bar").value;
        if (x.toLowerCase() == "jakarta") {
            this.fetchCorona("dki jakarta");
            // cuacaKode.fetchCuaca("dki jakarta");
        } else if (x.toLowerCase() == "jogja" || x.toLowerCase() == "yogya" || x.toLowerCase() == "yogyakarta")  {
            this.fetchCorona("daerah istimewa yogyakarta");
            // cuacaKode.fetchCuaca("diyogyakarta");
        }
        else {
            this.fetchCorona(x);
        }
        
    }
}

var untukGlobalAndIndonesia = {
    fetchCorona : function () {
        fetch('https://api.quarantine.country/api/v1/summary/latest')
        .then((response) => response.json())
        .then((data) => this.displayGlobal(data) & this.displayIndonesia(data))
    },

    displayIndonesia : function (data) {
        
        const { total_cases, recovered, deaths, name, iso3166a3 } = data.data.regions.indonesia;
        document.querySelector(".positif-indo").innerText = total_cases.toLocaleString();
        document.querySelector(".sembuh-indo").innerText = recovered.toLocaleString();
        document.querySelector(".meninggal-indo").innerText = deaths.toLocaleString();
    },
    displayGlobal : function (data) {
        const { total_cases, recovered, deaths  } = data.data.summary;
        document.querySelector(".positif-global").innerText = total_cases.toLocaleString();
        document.querySelector(".sembuh-global").innerText = recovered.toLocaleString();
        document.querySelector(".meninggal-global").innerText = deaths.toLocaleString();
    }

}

// manggil fetch corona buat data global dan indonesia
untukGlobalAndIndonesia.fetchCorona();
// end of  manggil fetch corona buat data global dan indonesia

function popUpGaada(province) {
    alert("Maaf, provinsi " + province.toUpperCase() +  " tidak tersedia di dalam database kami...");
}



// search result buat provinsi
document
    .querySelector(".search button")
    .addEventListener("click", function () {
        untukProvinsi.search();
})

document.querySelector(".search-bar").addEventListener("keyup", function(event){
    if (event.key == "Enter") {
        untukProvinsi.search();
    }
})
// end of search result buat provinsi



// bagian overlay 
function on() {
    document.getElementById("overlay").style.display = "flex";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}



var cuacaKode = {
    fetchCuaca : function (wilayah) {
        fetch("https://ibnux.github.io/BMKG-importer/cuaca/wilayah.json")
        .then((response) => response.json())
        .then((data) => this.cariKode(data, wilayah))
    },
    cariKode : function (data, wilayah) {
        const myArr = wilayah.split(" ");
        var wilayah_noSpace = "";
        var wilayah_space = "";
        myArr.forEach((i) => {
            wilayah_noSpace += i;
            wilayah_space += i.charAt(0).toUpperCase() + i.slice(1) + " ";
        })
        var x = null;
        data.map(i => {
            if (i.propinsi.toLowerCase() == wilayah_noSpace.toLowerCase()) {
                x = i
                return;
            }
        })
        console.log(wilayah_space);
        console.log(wilayah_noSpace);
        console.log(x);
        if (x != null) {
            const { id } = x;
            cuacaDisplay.fetchCuaca(id, wilayah_space, wilayah_noSpace);    
        }
        
    }
}

function cariTanggal(hari, jam) {
 
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();



    
}

var cuacaDisplay = {
    fetchCuaca : function (id, wilayah_space, wilayah_noSpace) {
        fetch("https://ibnux.github.io/BMKG-importer/cuaca/" + id + ".json")
        .then((response) => response.json())
        .then((data) => this.displayCuaca(data, id, wilayah_space, wilayah_noSpace))
    },
    displayCuaca: function (data, id, wilayah_space, wilayah_noSpace) {
    //    data.map(i => {
    //     const { kodeCuaca, cuaca, tempC, jamCuaca } = i;
    //    }) 

        var flag = false;
        for (var i = 0; i < data.length; i++) {
            const { kodeCuaca, cuaca, tempC, jamCuaca } = data[i];

            var arrNow = jamCuaca.split(" ");
            var arrDate = arrNow[0].split("-"); // ambil yg ke 3
            var arrTime = arrNow[1].split(":"); // ambil yg ke 1

            hariData = arrDate[2];
            jamData = arrTime[0];
            var today = new Date();

            if (today.getHours() <= 18) { // kalo di bawah jam 18
                console.log(today.getDate().toString(), hariData);

                if (hariData < 10) {
                    const myArr = hariData.split("");
                    hariData = myArr[1];
                }
                if (today.getDate().toString() == hariData) {
                    
                    
                    if ( today.getHours() < parseInt(jamData)) {
                        
                        var sisaHours = parseInt(jamData) - today.getHours();
                        
                        if (wilayah_space == "Diyogyakarta ") { // pake spasi soalnya kedetectnya ada spasi
                            wilayah_space = "Yogyakarta";
                        }

                        document.querySelector(".jam-paragraf").innerText = "dalam +- " + sisaHours + " jam";
                        document.querySelector(".city").innerText = "Prediksi Cuaca " + wilayah_space;
                        document.querySelector(".temp").innerText = tempC + "°C";
                        document.querySelector(".description").innerText = cuaca;
                        document.querySelector(".h4-wilayah").innerText = "Berdasarkan Quiz sebelumnya\nSaat ini kamu terdeteksi di provinsi " + wilayah_space;
                        flag = true;
                        document.querySelector(".content-wilayah").classList.remove("no-detect");
                        
                        
                        if(parseInt(kodeCuaca) > 59) {
                            document.querySelector(".isi-saran").innerText = "Mau hujan nih, mending kamu di rumah aja ya biar ga sakit selama pandemi 😷";
                        } else {
                            document.querySelector(".isi-saran").innerText = "Biarpun bentar lagi gak hujan, tetap jaga kondisi tubuhmu baik-baik ya 😊";
                        }
                        
                        
                        
                        var x = "https://ibnux.github.io/BMKG-importer/icon/" + kodeCuaca.toString() + ".png";
                        // console.log(x);
                        document.querySelector(".flex").style.backgroundImage = "url('"+ x + "')";

                        console.log(jamData);
                        return;
                    }
                }
            } else { // kalo diatas jam 18
                const { kodeCuaca, cuaca, tempC, jamCuaca } = data[i];
                var sisaHours = 24 - today.getHours();
                
                if (wilayah_space == "Diyogyakarta ") { // pake spasi soalnya kedetectnya ada spasi
                    wilayah_space = "Yogyakarta";
                }

                document.querySelector(".jam-paragraf").innerText = "dalam +- " + sisaHours + " jam";
                document.querySelector(".city").innerText = "Prediksi Cuaca " + wilayah_space;
                document.querySelector(".temp").innerText = tempC + "°C";
                document.querySelector(".description").innerText = cuaca;
                document.querySelector(".h4-wilayah").innerText = "Saat ini kamu terdeteksi di provinsi " + wilayah_space;
                flag = true;
                document.querySelector(".content-wilayah").classList.remove("no-detect");
                
                if(parseInt(kodeCuaca) > 59) {
                    document.querySelector(".isi-saran").innerText = "Mau hujan nih, mending kamu di rumah aja ya biar ga sakit selama pandemi 😷";
                } else {
                    document.querySelector(".isi-saran").innerText = "Biarpun bentar lagi gak hujan, tetap jaga kondisi tubuhmu baik-baik ya 😊";
                }
                
                
                
                var x = "https://ibnux.github.io/BMKG-importer/icon/" + kodeCuaca.toString() + ".png";
                // console.log(x);
                document.querySelector(".flex").style.backgroundImage = "url('"+ x + "')";
                console.log(jamData);
                break;
            }

            
        }

        if (flag != true) {
            document.querySelector(".content-wilayah").classList.add("no-detect");   
        }
        
        

        // document.querySelector(".icon").setAttribute("src", "https://ibnux.github.io/BMKG-importer/icon/"+ kodeCuaca +".png");
    },
}


// let berita = {
//     fetchBerita : function () {
//         // fetch("https://newsapi.org/v2/everything?q=covid&from=2021-10-28&sortBy=popularity&apiKey=589c5d45a9dd48848359e1cd5d33861b")
//         var req = new Request("https://newsapi.org/v2/everything?q=Covid&from=2021-10-29&sortBy=popularity&apiKey=7f18d49d2ebb4b828543f33d1991f095");
//         fetch(req)
//         .then((response) => response.json())
//         .then((data) => this.displayBerita(data))
//     },

//     displayBerita : function(data) {
//         const { articles } = data;
       
        
//         var counter = 0;
//         for (let i = 0; i < 3; i++) {
//             const { author, title, url, publishedAt } = data.articles[i];
//             console.log(author, title, url, publishedAt);
//         }
        
        
       
//     }

    

// }



// wilayah.find(yang mau dicari);