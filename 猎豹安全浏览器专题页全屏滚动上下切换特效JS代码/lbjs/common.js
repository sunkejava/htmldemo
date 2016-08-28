/**异步加载JS的方法*/
function loadJS(url, callback, el) {
    var isIE = !! window.ActiveXObject,
        isIE6 = isIE && !window.XMLHttpRequest,
        script = document.createElement("script"),
        head = isIE6 ? document.documentElement : document.getElementsByTagName("head")[0];
    script.type = "text/javascript";
    script.async = true;
    if (script.readyState) {
        script.onreadystatechange = function() {
            if (script.readyState == "loaded" || script.readyState == "complete") {
                script.onreadystatechange = null;
                if (callback) {
                    callback();
                }
            }
        }
    } else {
        script.onload = function() {
            if (callback) {
                callback();
            }
        }
    }
    script.src = url;
    if (el) {
        document.getElementById(el).appendChild(script);
    } else {
        head.insertBefore(script, head.firstChild);
    }
}
loadJS("lbjs/jquery.js", function() {
    loadJS("lbjs/liebaoScroll.min.js", function() {});
});