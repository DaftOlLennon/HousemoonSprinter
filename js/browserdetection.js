// browserdetection.js - Controls how your content interacts with the browser, namely detecting Flash support and scaling content to resolutions. - Generic - (C) Roan Hemmings 2023-present

// detects if Ruffle is REQUIRED for operation, but in the particular situation that its impossible to install, e.g. mobile phones. (if you want to add a platform use | to seperate each user agent, keep the back slashes and use specific keywords not the entire user agent - https://explore.whatismybrowser.com/useragents/explore/ go to this link for a comprehensive list).
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Chrome|Chromium/i.test(navigator.userAgent)){
  const script = document.createElement("script");
  script.src = "https://unpkg.com/@ruffle-rs/ruffle";
  document.head.appendChild(script);
  console.trace("ruffle instance created by browserdetection.js");
}

// example of a specific redirect, if you need to remake either the flash or html files for a site to fit a special purpose, this is how you redirect users to that special place.
if(/Nintendo Wii/i.test(navigator.userAgent)){
	window.location.replace("http://wii.housemoonsprinter.co.uk/");
}

// this is where we define all the screen resolutions the site will support, although it may be tempting to either keep it the same resolution as before, or to only cater to your screen resolution, trust me when I say you'll lose potenial people at that point, so its best to take the time to get a lot of them.

// this section will be used when the resolution someone's running isn't supported by your site, it should be the regular size of the flash content as it was originally published from Flash Pro. remember for every weird size you have you've got to put in here too, and scale it for that matter.
var originalsize = "/css/sizes/default.css";
fallBack();

// I bet you'd love to load your amazing css files, but before any detection can begin we've got to have a fallback so that everything doesn't default to being wrong. I've seen it, it ain't pretty.
function fallBack() {
	
	// here, we define where the hell the head is. So browserdetection.js knows where to dump its stuff.
	var head = document.getElementsByTagName('head')[0];
	
	// setting the default popup size variables, quite important or popups look shocking.
	window.popupwidth = '1130px';
	window.popupheight = '794px';
	window.popupheightadjustment = '797';
	
	// as stated previously, if we don't define them and you suddenly change resolution, everything will be in 550x400 at all times, which can range from kinda right to completely wrong.
	var resoriginal = document.createElement('link');
    resoriginal.rel = 'stylesheet';
    resoriginal.type = 'text/css';
    resoriginal.href = originalsize;
    resoriginal.media = 'all';
	
	// now it all gets shoved in head
    head.appendChild(resoriginal);
	console.trace("browserdetection.js has added the defaults, now lets get to the good stuff!");
}