// Resolution
const cssID = 'cssFlex';

function setResolution(i) {
  const seeFlex = document.querySelector('#seeFlex');
  switch (i) {
    case 'resolution1':
      // seeFlex.style.height = "360px";
      seeFlex.style.width = '350px';
      break;
    case 'resolution2':
      // seeFlex.style.height = "360px";
      // seeFlex.style.width = "720px";
      seeFlex.style.width = '500px';
      break;
    case 'resolution3':
      // seeFlex.style.height = "1366px";
      seeFlex.style.width = '1400px';
      break;
    default:
      // seeFlex.style.height = "1366px";
      seeFlex.style.width = '1920px';
  }
}

function loadFile(i) {
  const rawFile = new XMLHttpRequest();
  rawFile.open('GET', `./flex/flex${i}.css`, false);
  rawFile.onreadystatechange = () => {
    if (rawFile.readyState === 4) {
      if (rawFile.status === 200 || rawFile.status === 0) {
        const rawFileDescryption = new XMLHttpRequest();
        rawFileDescryption.open('GET', `./description/description${i}.txt`, false);

        rawFileDescryption.onreadystatechange = () => {
          if (rawFileDescryption.readyState === 4) {
            if (rawFileDescryption.status === 200 || rawFileDescryption.status === 0) {
              // disable pre-block processing
              EnlighterJS.enlight(seeCodePre, false);

              seeCodePre.innerHTML = rawFile.responseText;
              codeDescription.innerHTML = rawFileDescryption.responseText;

              EnlighterJS.enlight([codeDescription, seeCodePre, seeBasePre], {
                layout: 'codegroup',
                theme: 'atomic',
                textOverflow: 'none',
                indent: 2,
              });
            }
          }
        };

        rawFileDescryption.send(null);
      }
    }
  };
  rawFile.send(null);
}

function setFlex(x) {
  const n = parseInt(x.charAt(4) + x.charAt(5), 10);
  loadFile(n);

  const head = document.getElementsByTagName('head')[0];
  const link = document.createElement('link');

  if (document.querySelector(`#${cssID}`)) {
    document.querySelector(`#${cssID}`).remove();
  }

  link.id = cssID;
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = `./flex/${x}.css`;
  link.media = 'all';
  head.appendChild(link);
}

document.addEventListener('DOMContentLoaded', () => {
  setResolution('resolution1');
  setFlex('flex1');

  const radio = document.querySelectorAll('input[type="radio"][name="resolution"]');

  const flex = document.querySelectorAll('input[type="radio"][name="flex"]');

  // pre-block handles
  const seeCodePre = document.querySelector('#seeCodePre');
  const seeBasePre = document.querySelector('#seeBasePre');
  const codeDescription = document.querySelector('#codeDescription');

  radio.forEach((item) => {
    item.addEventListener('change', (e) => {
      setResolution(`${e.currentTarget.id}`);
    });
  });

  flex.forEach((el) => {
    el.addEventListener('change', (e) => {
      setFlex(`${e.currentTarget.id}`);
    });
  });

  // pre-block initialization
  EnlighterJS.enlight([codeDescription, seeCodePre, seeBasePre], {
    layout: 'codegroup',
    theme: 'atomic',
    textOverflow: 'scroll',
    indent: 2,
  });
});
