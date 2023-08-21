var appendAttr = function (obj, attrobj, bol) {
    var objcext = obj[0];
    var csid = obj.slice(1);
    var cssids;
    var attrkey, attrvalue;
    if (bol === undefined) {
        if (objcext == "#") {
            cssids = document.getElementById(csid);
        } else if (objcext == ".") {
            cssids = document.getElementsByClassName(csid)[0];
        } else if (objcext == "*") {
            csid = obj.slice(0);
            cssids = document.getElementsByTagName(csid);
        }
        attrkey = Object.keys(attrobj);
        attrvalue = Object.values(attrobj);
        for (var i = 0; i < attrkey.length; i++) {
            if (cssids.getAttribute(attrkey[i]) !== null) {
                var attrs = cssids.getAttribute(attrkey[i]);
                cssids.setAttribute(attrkey[i], attrs + " " + attrvalue[i]);
            } else {
                cssids.setAttribute(attrkey[i], attrvalue[i]);
            }
        }
    } else if (bol === true) {
        if (objcext == "#") {
            cssids = document.getElementById(csid);
        } else if (objcext == ".") {
            cssids = document.getElementsByClassName(csid)[0];
        } else if (objcext == "*") {
            csid = obj.slice(0);
            cssids = document.getElementsByTagName(csid);
        }
        attrkey = Object.keys(attrobj);
        attrvalue = Object.values(attrobj);
        for (var i = 0; i < attrkey.length; i++) {
            cssids.setAttribute(attrkey[i], attrvalue[i]);
        }
    }
}