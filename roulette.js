var setButtonColor1 = setInterval(setColor1, 400);
var setButtonColor2 = setInterval(setColor2, 800);

function setColor1() {
  var ids= ["deg0", "deg90", "deg180", "deg270"]
  for(var i=0; i<4;i++ ){
    var x = document.getElementById(ids[i])
    x.style.backgroundColor = x.style.backgroundColor == "darkred" ? "black " : "darkred";
  }
};

function setColor2() {
  var ids= ["deg45", "deg135", "deg225", "deg315"]
  for(var i=0; i<4;i++ ){
    var x = document.getElementById(ids[i])
    x.style.backgroundColor = x.style.backgroundColor == "darkred" ? "black " : "darkred";
  }
};

function stop() {
  clearInterval(setButtonColor1);
  clearInterval(setButtonColor2);
  for(var i=0; i<4;i++ ){
    var ids = ["deg0", "deg90", "deg180", "deg270", "deg45", "deg135", "deg225", "deg315"]
    var x = document.getElementById(ids[i]);
    x.style.backgroundColor = "#1C1C1C";
  }
};
