function showSurprise() {
  const text = document.getElementById("surprise-text");
  const gif = document.getElementById("gif-reaction");
  const sound = document.getElementById("laugh-sound");

  const gambarAwal = document.getElementById("gambar-awal");
  const gambarKejutan = document.getElementById("gambar-kejutan");

  text.style.display = "block";
  gif.style.display = "block";
  sound.play();

  // Sembunyikan gambar awal, tampilkan gambar kejutan
  gambarAwal.style.display = "none";
  gambarKejutan.style.display = "block";
}
