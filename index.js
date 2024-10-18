function generateHTML() {
  return `
  <!DOCTYPE html>
  <html itemscope itemtype="https://schema.org/CreativeWork">
  <head>
    <meta charset="UTF-8"/>
    <!--  
      A Dark Room (v1.4)
      ==================
      
      A minimalist text adventure by Michael Townsend and all his friends.
      Inspired by Candy Box (https://candybox2.github.io/candybox)
      Contribute on GitHub! (https://github.com/doublespeakgames/adarkroom/)
    -->
    <title>A Dark Room</title>
    <meta itemprop="description" name="description" property="og:description" content="A minimalist text adventure">
    <meta itemprop="image" property="og:image" content="img/adr.png" />
    <meta itemprop="name" property="og:title" content="A Dark Room" />
    <link rel="shortcut icon" href="favicon.ico" />
    <link rel="image_src" href="img/adr.png" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
    <script>
      if(!window.jQuery) {
        document.write('<script src="lib/jquery.min.js"><\\/script>')
      }
    </script>
    <script src="lib/jquery.color-2.1.2.min.js"></script>
    <script src="lib/jquery.event.move.js"></script>
    <script src="lib/jquery.event.swipe.js"></script>
    <script src="lib/base64.js"></script>
    <script src="lib/translate.js"></script>
    
    <script src="lang/langs.js"></script>
    
    <script>
      // try to read "lang" param's from url
      var lang = decodeURIComponent((new RegExp('[?|&]lang=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\\+/g, '%20'))||null;
      // if no language requested, try to read it from local storage
      if(!lang){
        try {
          lang = localStorage.lang;
        } catch(e) {}
      }
      // if a language different than english requested, load all translations
      if(lang && lang != 'en'){
        document.write('<script src="lang/'+lang+'/strings.js"><\\/script>');
        document.write('<link rel="stylesheet" type="text/css" href="lang/'+lang+'/main.css" \\/>');
      }
    </script>
    
    <!-- Include all script files -->
    ${[
      "Button",
      "audioLibrary",
      "audio",
      "engine",
      "state_manager",
      "header",
      "notifications",
      "events",
      "room",
      "outside",
      "world",
      "path",
      "ship",
      "space",
      "fabricator",
      "prestige",
      "scoring",
      "events/global",
      "events/room",
      "events/outside",
      "events/encounters",
      "events/setpieces",
      "events/marketing",
      "events/executioner",
    ]
      .map((script) => `<script src="script/${script}.js"></script>`)
      .join("\n  ")}
    
    <script type='text/javascript'>
      var oldIE = false;
    </script>
    <!--[if lt IE 9]> 
      <script type="text/javascript">oldIE = true;</script> 
    <![endif]-->
    
    <!-- Include all CSS files -->
    ${[
      "main",
      "room",
      "outside",
      "path",
      "world",
      "ship",
      "space",
      "fabricator",
    ]
      .map(
        (style) =>
          `<link rel="stylesheet" type="text/css" href="css/${style}.css" />`
      )
      .join("\n  ")}
    
    <script src="script/localization.js"></script>
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-606P6J79WH"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
  
      gtag('config', 'G-606P6J79WH');
    </script>
    
  </head>
  <body>
    <div id="wrapper">
      <div id="saveNotify"><script>document.write(_("saved."));</script></div>
      <div id="content">
        <div id="outerSlider">
          <div id="main">
            <div id="header"></div>
          </div>
        </div>
      </div>
    </div>
    <a class="logo" href="https://www.doublespeakgames.com" alt="doublespeak games" target="_blank">
      <svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 41.75 32.84375" class="logo-icon">
        <path d="m 18.024533,28.5722 c 2.532365,-2.243 5.064679,-4.4861 7.596993,-6.7292 4.907813,0 9.815625,0 14.723438,0 0,-6.8136 0,-13.6272 0,-20.4408 -12.976656,0 -25.953312,0 -38.9299676,0 0,6.8136 0,13.6272 0,20.4408 3.2917905,0 6.5835811,0 9.8753716,0 -0.643311,2.2431 -1.286622,4.4861 -1.9299604,6.7292 2.5323644,-2.243 5.0646784,-4.4861 7.5969924,-6.7292 0.999066,0 1.998131,0 2.997197,0 -0.643345,2.2431 -1.286691,4.4861 -1.930064,6.7292 z" style="stroke-width:1.0;fill:none;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none"></path>
      </svg>
    </a>
  </body>
  </html>
    `;
}

// Usage in Espruino
E.on("init", function () {
  var html = generateHTML();
  // Use the generated HTML as needed, e.g., serve it via HTTP or write it to a file
});
