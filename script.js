function showSurprise() {
  const text = document.getElementById("surprise-text");
  const gif = document.getElementById("gif-reaction");
  const sound = document.getElementById("laugh-sound");

  text.style.display = "block";
  gif.style.display = "block";
  sound.play();
}
