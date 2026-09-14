const gBumi = 9.8;
const dataPlanet = {
  merkurius: {
    gravitasi: 3.7,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4a/Mercury_in_true_color.jpg",
  },
  venus: {
    gravitasi: 8.87,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/e5/Venus-real_color.jpg",
  },
  mars: {
    gravitasi: 3.71,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg",
  },
  jupiter: {
    gravitasi: 24.79,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg",
  },
  saturnus: {
    gravitasi: 10.44,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg",
  },
  uranus: {
    gravitasi: 8.69,
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg",
  },
  neptunus: {
    gravitasi: 11.15,
    image: "https://upload.wikimedia.org/wikipedia/commons/0/06/Neptune.jpg",
  },
};

function hitungBerat(massa, idPlanet) {
  let planet = dataPlanet[idPlanet];

  if (!planet) {
    return {
      error: "Silakan pilih planet terlebih dahulu!",
    };
  }

  let hasilBerat = massa * (planet.gravitasi / gBumi);
  return {
    berat: hasilBerat,
    gambar: planet.image,
  };
}
