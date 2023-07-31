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
      iframe.src = (input);
      iframe.style.width = "100%";
      iframe.style.height = "100%";
      iframe.style.zIndex = "999999";
      iframe.style.top = "0px";
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
    
    window.addEventListener("popstate", function(event) {
      const iframe = document.getElementById("urlIframe");
      iframe.style.width = "0px";
      iframe.style.height = "0px";
      iframe.style.top = "10px";
      iframe.zIndex = "-1"
      iframe.src = "";
    });
