// model

// view
show();
function show() {
  document.getElementById("app").innerHTML = `
    <div class="page">
      <audio id="myTune1">
        <source src="sound1.mp3" />
      </audio>
      <audio id="myTune2">
        <source src="sound2.mp3" />
      </audio>
      <audio id="myTune3">
        <source src="sound3.mp3" />
      </audio>
      <audio id="myTune4">
        <source src="sound4.mp3" />
      </audio>
      <audio id="myTune5">
        <source src="sound5.mp3" />
      </audio>
      <audio id="myTune6">
        <source src="sound6.mp3" />
      </audio>

      <div class="header">Beat Master</div>
      <div class="s1" onclick="playSound(sounds.soundOne)"></div>
      <div class="s2" onclick="playSound(sounds.soundTwo)"></div>
      <div class="s3" onclick="playSound(sounds.soundThree)"></div>
      <div class="s4" onclick="playSound(sounds.soundFour)"></div>
      <div class="s5" onclick="playSound(sounds.soundFive)"></div>
      <div class="s6" onclick="playSound(sounds.soundSix)"></div>
    </div>
    `;
}
const sounds = {
  soundOne: document.getElementById("myTune1"),
  soundTwo: document.getElementById("myTune2"),
  soundThree: document.getElementById("myTune3"),
  soundFour: document.getElementById("myTune4"),
  soundFive: document.getElementById("myTune5"),
  soundSix: document.getElementById("myTune6"),
};

// controller
function playSound(sound) {
  sound.play();
}
