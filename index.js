//Resolution
const cssID = 'cssFlex';

document.addEventListener('DOMContentLoaded',()=>
{
  setResolution('resolution1');
  setFlex('flex1');

  const radio = document.querySelectorAll('input[type="radio"][name="resolution"]');

  const flex = document.querySelectorAll('input[type="radio"][name="flex"]');

  // pre-block handles
  const seeCodePre = document.querySelector('#seeCodePre');
  const seeBasePre = document.querySelector('#seeBasePre');

  radio.forEach(item=>{item.addEventListener('change',(e)=>
  {
    setResolution(`${e.currentTarget.id}`);
  })});

  flex.forEach(el=>{el.addEventListener('change',(e)=>
  {
    setFlex(`${e.currentTarget.id}`);
  })});

  // pre-block initialization
  EnlighterJS.enlight([seeBasePre, seeCodePre], {
    layout: 'codegroup',
    language: 'css',
    theme: 'atomic',
    textOverflow: 'scroll',
    indent : 2
  });

});

function setResolution(i)
{
  const seeFlex = document.querySelector('#seeFlex');

  switch (i)
  {
    case "resolution1":
      // seeFlex.style.height = "360px";
      seeFlex.style.width = "350px";
      break;
    case "resolution2":
      // seeFlex.style.height = "360px";
      // seeFlex.style.width = "720px";
      seeFlex.style.width = "500px";      
      break;
    case "resolution3":
      // seeFlex.style.height = "1366px";
      seeFlex.style.width = "1400px";
  }
}

function setFlex(x)
{
  const n = parseInt(x.charAt(4)+x.charAt(5));
  loadFile(n);

  const head  = document.getElementsByTagName('head')[0];
  const link  = document.createElement('link');


  if (document.querySelector(`#${cssID}`))
  {
    document.querySelector(`#${cssID}`).remove();
  }

  link.id   = cssID;
  link.rel  = 'stylesheet';
  link.type = 'text/css';
  link.href = `./flex/${x}.css`;
  link.media = 'all';
  head.appendChild(link);

}

function loadFile(i)
{

  const rawFile = new XMLHttpRequest();
  rawFile.open("GET", `./flex/flex${i}.css`, false);
  rawFile.onreadystatechange = function()
  {
    if (rawFile.readyState === 4)
    {
      if (rawFile.status === 200 || rawFile.status === 0)
      {
        // disable pre-block processing
        EnlighterJS.enlight(seeCodePre, false);

        seeCodePre.innerHTML = rawFile.responseText;

        // pre-block initialization
        EnlighterJS.enlight([seeBasePre, seeCodePre], {
          layout: 'codegroup',
          language: 'css',
          theme: 'atomic',
          textOverflow: 'scroll',
          indent : 2
        });

      }
    }
  }
  rawFile.send(null);
}
