function UpdateBrowserPage(){

    document.getElementById("nav_AppName").innerHTML ="App Name: " + Navigator.AppName;
    document.getElementById("nav_product").innerHTML ="Product: " + Navigator.product;
    document.getElementById("nav_appVersion").innerHTML ="App Version: " + Navigator.appVersion;
    document.getElementById("nav_Useragreenment").innerHTML ="User Agreement: " + Navigator.userAgent;

    document.getElementById("win_innerHeight").innerHTML ="inner Height: " + Window.innerHeight+"px";
    document.getElementById("win_innerWidth").innerHTML ="inner Width: " + Window.innerWidth+"px";

    document.getElementById("screen_width").innerHTML ="Width: " + screen.width+"px";
    document.getElementById("screen_height").innerHTML ="Height: " + screen.height+"px";
    document.getElementById("screen_availWidth").innerHTML ="availWidth: " + screen.availWidth+"px";
    document.getElementById("screen_availHeight").innerHTML ="availHeight: " + screen.availHeight+"px";
    document.getElementById("screen_colorDepth").innerHTML ="colorDepth: " + screen.colorDepth;
    document.getElementById("screen_pixelDepth").innerHTML ="pixelDepth: " + screen.pixelDepth;

    document.getElementById("location_hostname").innerHTML ="Hostname: " + location.hostname;
    document.getElementById("location_pathname").innerHTML ="PathName: " + location.pathname
    document.getElementById("location_protocol").innerHTML ="Protocol: " + location.protocol;

    document.getElementById("geo_latitude").innerHTML ="Latitude: " + geolocation.latitude;
    document.getElementById("geo_longitude").innerHTML ="Longitude: " + Geolocation.Longitude;
}

