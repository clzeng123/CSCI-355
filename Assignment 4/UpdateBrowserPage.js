function UpdateBrowserPage() {
  document.getElementById("innerHeight").innerHTML =
    "innerHeight=" + window.innerHeight;
  document.getElementById("innerWidth").innerHTML =
    "innerWidth=" + window.innerWidth;
  document.getElementById("AppName").innerHTML = "appName=" + navigator.appName;
  document.getElementById("product").innerHTML = "product=" + navigator.product;
  document.getElementById("appVersion").innerHTML =
    "appVersion=" + navigator.appVersion;
  document.getElementById("userAgent").innerHTML =
    "userAgent=" + navigator.userAgent;
  document.getElementById("platform").innerHTML =
    "platform=" + navigator.platform;
  document.getElementById("language").innerHTML =
    "language=" + navigator.language;
  document.getElementById("screen_width").innerHTML = "width=" + screen.width;
  document.getElementById("screen_height").innerHTML =
    "height=" + screen.height;
  document.getElementById("screen_availWidth").innerHTML =
    "availWidth=" + screen.availWidth;
  document.getElementById("screen_availHeight").innerHTML =
    "availHeight=" + screen.availHeight;
  document.getElementById("screen_colorDepth").innerHTML =
    "colorDepth=" + screen.colorDepth;
  document.getElementById("screen_pixelDepth").innerHTML =
    "pixelDepth=" + screen.pixelDepth;
  document.getElementById("href").innerHTML = "href=" + location.href;
  document.getElementById("hostname").innerHTML =
    "hostname=" + location.hostname;
  document.getElementById("pathname").innerHTML =
    "pathname=" + location.pathname;
  document.getElementById("protocol").innerHTML =
    "protocol=" + location.protocol;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  document.getElementById("Latitude").innerHTML =
    "Latitude=" + position.coords.latitude;
  document.getElementById("Longitude").innerHTML =
    "Latitude=" + position.coords.longitude;
}