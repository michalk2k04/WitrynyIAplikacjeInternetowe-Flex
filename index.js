// Resolution
const cssID = 'cssFlex';

<<<<<<< HEAD
function setResolution(i) {
=======
document.addEventListener('DOMContentLoaded',()=>
{
  setResolution('resolution1');
  setFlex('flex1');

  const radio = document.querySelectorAll('input[type="radio"][name="resolution"]');

  const flex = document.querySelectorAll('input[type="radio"][name="flex"]');

  // pre-block handles
  const seeCodePre = document.querySelector('#seeCodePre');
  const seeBasePre = document.querySelector('#seeBasePre');
  const codeDescription = document.querySelector('#codeDescription');

  radio.forEach(item=>{item.addEventListener('change',(e)=>
  {
    setResolution(`${e.currentTarget.id}`);
  })});

  flex.forEach(el=>{el.addEventListener('change',(e)=>
  {
    setFlex(`${e.currentTarget.id}`);
  })});

  // pre-block initialization
  EnlighterJS.enlight([codeDescription,seeCodePre, seeBasePre], {
    layout: 'codegroup',
    language: 'css',
    theme: 'atomic',
    textOverflow: 'scroll',
    indent : 2
  });

});

function setResolution(i)
{
>>>>>>> 9159b0d32937426ddeedb03ab59614dcef4e328d
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
<<<<<<< HEAD
  rawFile.open('GET', `./flex/flex${i}.css`, false);
  rawFile.onreadystatechange = () => {
    if (rawFile.readyState === 4) {
      if (rawFile.status === 200 || rawFile.status === 0) {
        // disable pre-block processing
        EnlighterJS.enlight(seeCodePre, false);
=======
  rawFile.open("GET", `./flex/flex${i}.css`, false);
  rawFile.onreadystatechange = function()
  {
    if (rawFile.readyState === 4)
    {
      if (rawFile.status === 200 || rawFile.status === 0)
      {
>>>>>>> 9159b0d32937426ddeedb03ab59614dcef4e328d

        const rawFileDescryption = new XMLHttpRequest();
        rawFileDescryption.open("GET", `./description/description${i}.txt`, false);

<<<<<<< HEAD
        // pre-block initialization
        EnlighterJS.enlight([seeCodePre, seeBasePre], {
          layout: 'codegroup',
          language: 'css',
          theme: 'atomic',
          textOverflow: 'scroll',
          indent: 2,
        });
=======
        rawFileDescryption.onreadystatechange = function()
        {
          if (rawFileDescryption.readyState === 4)
          {
            if (rawFileDescryption.status === 200 || rawFileDescryption.status === 0)
            {

              // disable pre-block processing
              EnlighterJS.enlight(seeCodePre, false);

              seeCodePre.innerHTML = rawFile.responseText;
              codeDescription.innerHTML = rawFileDescryption.responseText;

              EnlighterJS.enlight([codeDescription,seeCodePre, seeBasePre], {
                layout: 'codegroup',
                language: 'css',
                theme: 'atomic',
                textOverflow: 'none',
                indent: 2
              });

            }
          }
        }

        rawFileDescryption.send(null);
>>>>>>> 9159b0d32937426ddeedb03ab59614dcef4e328d
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
  EnlighterJS.enlight([seeCodePre, seeBasePre], {
    layout: 'codegroup',
    language: 'css',
    theme: 'atomic',
    textOverflow: 'scroll',
    indent: 2,
  });
});
