const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let series = [];

function init() {
  // Write your JavaScript code inside the init() function
  document.body.addEventListener('keydown', konami)
}

function konami(e) {
  if ( series == code) { alert("Feature Unlocked!!"); return}
  let key = parseInt(e.detail || e.which);
  console.log(series);
  if( code.includes(key)) { series.push(key)} else { series = []}
  //if ( series != code.slice(0, series.length)) {series = []}
  
}

init();