const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let series = [];

function init() {
  // Write your JavaScript code inside the init() function
  document.body.addventListener('keydown', konami)
}

function konami(e) {
  if( e.which in code) { series.push(e.which)}
  if ( series != code.slice(0, series.length)) {series = []}
  if ( series == code) { alert("Feature Unlocked!!")}
}

init();