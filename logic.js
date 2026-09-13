const gBumi = 9.8;
const dataGravitasi = {
    "merkurius": 3.7,
    "venus": 8.87,
    "mars": 3.71,
    "jupiter": 24.79,
    "saturnus": 10.44,
    "uranus": 8.69,
    "neptunus": 11.15
};
  
function hitungBerat(massa, idPlanet) {
    let gPlanet = dataGravitasi[idPlanet];
    
    if (!gPlanet) {
        return {
            error: "Silakan pilih planet terlebih dahulu!"
        };
    }

    let hasilBerat = massa * (gPlanet / gBumi);
    return {
        berat: hasilBerat
    };
}




