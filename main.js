

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 1200,
  reset: false
})

scrollReveal.reveal(
  `.head .container, .head .text-container,
  .music .container, .music .img02, .music .streamings, .music .balon,
  .experimente .container,
  .alexa .textarea, .alexa button, .alexa .img03,
  .detalhes .img04, .detalhes h2, .detalhes .container, .detalhes .button,
  .footer .container, .footer .second_container, .footer #logo`,
  { interval: 100 }
)

// ****************************************

const AlexaImage = document.querySelector('#alexaImage');
const AlexaImageShadown = document.querySelector("#shadown");
const HeyAlexaButton = document.querySelector('#heyAlexa');
const PlayMusicButton = document.querySelector('#playMusic');
const StopMusicButton = document.querySelector('#stopMusic');

const HeyAlexaAudio = new Audio();
const LostConection = new Audio();
const AlertSound = new Audio();
const MyHeyAlexa = new Audio();
const PlayMusicAudio = new Audio();
const StopMusicAudio = new Audio();
const Music = new Audio();

HeyAlexaAudio.src = "./assets/sounds/heyAlexa.mp3";
LostConection.src = "./assets/sounds/lostInternet.mp3";
AlertSound.src = "./assets/sounds/alert.mp3";
MyHeyAlexa.src = "./assets/sounds/myHeyAlexa.mp3";
PlayMusicAudio.src = "./assets/sounds/PlayMusic.mp3";
StopMusicAudio.src = "./assets/sounds/StopMusic.ogg";
Music.src = "./assets/sounds/music.mp3";

AlexaImage.setAttribute('src', 'assets/objectOff.png');
AlexaImageShadown.setAttribute('src', 'assets/PNGvazio.png');

function DisableButtons() {
  HeyAlexaButton.classList.add('disableClick');
  PlayMusicButton.classList.add('disableClick');
  StopMusicButton.classList.add('disableClick');
}

function AnableButtons() {
  HeyAlexaButton.classList.remove('disableClick');
  PlayMusicButton.classList.remove('disableClick');
  StopMusicButton.classList.remove('disableClick');
}

function ActivateAlexa() {
  AlexaImage.setAttribute('src', 'assets/objectOn.png');
  AlexaImageShadown.setAttribute('src', 'assets/Shadown.png');
  DisableButtons();
}

function DeactivateAlexa() {
  AlexaImage.setAttribute('src', 'assets/objectOff.png');
  AlexaImageShadown.setAttribute('src', 'assets/PNGvazio.png');
  AnableButtons(); 
}

HeyAlexaButton.addEventListener('click', HeyAlexa);

function HeyAlexa() {
  DisableButtons();
  HeyAlexaAudio.play();
  setTimeout(()=>{Music.pause()}, 2800);
  setTimeout(ActivateAlexa, 2800);
  setTimeout(()=>{LostConection.play()}, 2800);
  setTimeout(DeactivateAlexa, 11300);
}

PlayMusicButton.addEventListener('click', PlayMusic);

function PlayMusic(){
  DisableButtons();
  MyHeyAlexa.play();

  setTimeout(()=>{
    AlertSound.play();
    AlexaImage.setAttribute('src', 'assets/objectOn.png');
    AlexaImageShadown.setAttribute('src', 'assets/Shadown.png');
  }, 2500);

  setTimeout(()=>{PlayMusicAudio.play()}, 4500);
  setTimeout(()=>{Music.play()}, 8500);
  setTimeout(DeactivateAlexa, 11000);
}

StopMusicButton.addEventListener('click', StopMusic);

function StopMusic() {
  DisableButtons();
  StopMusicAudio.play();
  setTimeout(()=>{AlertSound.play(); ActivateAlexa()}, 2000);
  setTimeout(()=>{Music.pause()}, 5000);
  setTimeout(()=>{DeactivateAlexa(); AnableButtons()}, 6500);
}