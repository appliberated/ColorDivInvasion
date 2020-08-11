import './components/appl-color-div.js';
import './components/appl-stats.js';

const statsElem = document.querySelector('appl-stats');

const globalSettings = {
  colorDiv : {
    // size: [10, 100],
    // size: 75,
    // size: 200,
    size: 10,
  },
  removeOn : {
    click: false,
    mouseEnter: true,
  }
};

function newColorDiv() {
  const colorDiv = document.createElement('appl-color-div');
  colorDiv.globalSettings = globalSettings;
  colorDiv.addEventListener('removed', () => {

    if (statsElem) {

      statsElem.removedCount = statsElem?.removedCount + 1;

      if (statsElem.addedCount - statsElem.removedCount <= 0) {
        window.clearInterval(intervalID);
        console.log('Done!')
      }
    }

  });

  document.body.appendChild(colorDiv);
  if (statsElem) statsElem.addedCount += 1;
}


// const intervalID = window.setInterval(newColorDiv, 1000);
// const intervalID = window.setInterval(newColorDiv, 500);
const intervalID = setInterval(newColorDiv, 250);
// const intervalID = setInterval(newColorDiv, 100);

// setInterval(() => {
//   // newColorDiv();
//   statsElem.remainingCount = document.querySelectorAll('color-div').length;
// }, 250);

// for (let index = 0; index < 1000; index++) {
//   newColorDiv();  
// }

