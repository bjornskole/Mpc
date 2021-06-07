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
      <div class="s1" onclick="document.getElementById('myTune1').play()"></div>
      <div class="s2" onclick="document.getElementById('myTune2').play()"></div>
      <div class="s3" onclick="document.getElementById('myTune3').play()"></div>
      <div class="s4" onclick="document.getElementById('myTune4').play()"></div>
      <div class="s5" onclick="document.getElementById('myTune5').play()"></div>
      <div class="s6" onclick="document.getElementById('myTune6').play()"></div>
    </div>
    `;
}
// controller
