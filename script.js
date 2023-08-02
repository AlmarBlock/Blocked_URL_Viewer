function showInIframe() 
{
  const url = document.getElementById("urlInput").value;
  if (CheckIfHTTPS(url)) 
  {
    setIFrame(url);
  } 
  else 
  {
    if (CheckIfHTTP(url)) 
    {
      var searchMask = "http://";
      var regEx = new RegExp(searchMask, "ig");
      var replaceMask = "";
      const CutUrl = (url).replace(regEx, replaceMask);
      const HttpUrl = 'https://' + CutUrl;
      setIFrame(HttpUrl);
    } 
    else 
    {
        alert(unescape("Bitte gib eine g%FCltige HTTPS-URL ein.\nVeruche vieleicht ein Https:// vor deine URL zu setzen."));
    }
  }
}

function setIFrame(input) 
{
  const iframe = document.getElementById("urlIframe");
  const div = document.getElementById("BlackDIV");
  const info = document.getElementById("infoarea");
  iframe.src = (input);
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.zIndex = "999999";
  iframe.style.top = "0px";
  div.style.zIndex = "999998";
  div.style.backgroundColor = "black";
  info.style.display = 'none'
  history.pushState({}, null, "");
}

function CheckIfHTTP(input) 
{
  const urlPattern = /^http:\/\/.+$/i;
  return urlPattern.test(input);
}

function CheckIfHTTPS(input) 
{
  const urlPattern = /^https:\/\/.+$/i;
  return urlPattern.test(input);
}

function reset()
{
    for(let i = 0; i < 2; i++)
    {
        const iframe = document.getElementById("urlIframe");
        const div = document.getElementById("BlackDIV");
        iframe.style.width = "0px";
        iframe.style.height = "0px";
        iframe.style.top = "10px";
        iframe.zIndex = "-1"
        iframe.src = "";
        div.style.zIndex = "-1";
        div.style.backgroundColor = "rgb(122, 122, 122)";
    }
}

window.addEventListener("popstate", function(event) {
    reset();
});


  document.addEventListener('DOMContentLoaded', function () {
  const infobutton = document.getElementById('infobutton');
  const infoarea = document.getElementById('infoarea');

  infobutton.addEventListener('click', function () {
      if (infoarea.style.display === 'block') 
      {
        infoarea.style.display = 'none';
      } 
      else 
      {
        infoarea.style.display = 'block';
      }
  });
});

