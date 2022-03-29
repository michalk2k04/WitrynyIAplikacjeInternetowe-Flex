//Resolution
const cssID = 'cssFlex';

document.addEventListener('DOMContentLoaded',()=>
{
  setResolution('resolution1');
  setFlex('flex1')

  const radio = document.querySelectorAll('input[type="radio"][name="resolution"]');

  const flex = document.querySelectorAll('input[type="radio"][name="flex"]');

  radio.forEach(item=>{item.addEventListener('change',(e)=>
  {
    setResolution(`${e.currentTarget.id}`);
  })});

  flex.forEach(el=>{el.addEventListener('change',(e)=>
  {
    setFlex(`${e.currentTarget.id}`);
  })});

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
  rawFile.onreadystatechange = function ()
  {
    if (rawFile.readyState === 4)
    {
      if (rawFile.status === 200 || rawFile.status === 0)
      {
        document.querySelector("#seeCodePre").innerHTML = rawFile.responseText;
      }
    }
  }
  rawFile.send(null);
}

EnlighterJS.init('pre', 'code', {
  language : 'javascript',
  theme: 'atomic',
  indent : 2
});