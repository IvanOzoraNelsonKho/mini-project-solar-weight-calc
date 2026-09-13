var pencet = document.getElementById('tombol');
var tempat_error = document.getElementById('pesan-error');
var box_hasil = document.getElementById('hasil');

box_hasil.style.display = "none";

pencet.addEventListener('click', function(){
    
    let m = document.getElementById('input-berat').value;
    let p = document.getElementById('pilih-planet').value;

    if(m == "" || m <= 0){
        tempat_error.innerHTML = "Woy isi berat badan yang bener kocak!";
        tempat_error.style.color = "red";
        box_hasil.style.display = "none"; 
        return; 
    }

  
    var hasilHitung = hitungBerat(m, p);
    if(hasilHitung.error){
        tempat_error.innerHTML = hasilHitung.error;
        tempat_error.style.color = "red";
        box_hasil.style.display = "none";
    } else {
        
        tempat_error.innerHTML = ""; 
        box_hasil.style.display = "block"; 

        var selectElement = document.getElementById('pilih-planet');
        var namaPlanet = selectElement.options[selectElement.selectedIndex].text;

        document.getElementById('nama-planet').innerHTML = namaPlanet;
        
        document.getElementById('angka-berat').innerHTML = hasilHitung.berat.toFixed(2) + " kg";
    }
});