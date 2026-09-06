class HitungBerat {
    constructor() {
        this.gBumi = 9.8;
        this.dataGravitasi = {
            "merkurius": 3.7,
            "venus": 8.87,
            "mars": 3.71,
            "jupiter": 24.79,
            "saturnus": 10.44,
            "uranus": 8.69,
            "neptunus": 11.15
        };
    }

    hitung(massa, idPlanet) {
        let gPlanet = this.dataGravitasi[idPlanet];
        
        if (!gPlanet) {
            return {
                error: "Silakan pilih planet terlebih dahulu!"
            };
        }

        let hasilBerat = massa * (gPlanet / this.gBumi);
        return {
            berat: hasilBerat
        };
    }
}



