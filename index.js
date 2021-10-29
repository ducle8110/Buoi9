function bai11(stringTarget) {
    return stringTarget.match(/([\s]+)/g).length;
}

function bai12(stringTarget) {
    return stringTarget.replace(/(\s|\r\n|\r|\n)/g, "");
}

function bai13(stringTarget) {
    let reversedString = "";
    for (var i = stringTarget.length - 1; i >= 0; i--) {
        reversedString += stringTarget[i];
    }
    return reversedString;
}

function bai14(str1, str2) {
    // let str1Array = str1.split(" ");
    // for (i = 0; i < str1Array.length; i++) {
    //     if (str1Array[i] == str2) {
    //         return i + 1;
    //     }
    // }
    for (i = 0; i < str1.length; i++) {
        if (str1.substr(i, str2.length) == str2) {
            return i;
        }
    }
}

function bai15(name) {
    name = name.toLowerCase().replace(/  +/g, ' ');;
    let returnName = "";
    for (i = 0; i < name.length; i++) {
        if (i == 0) {
            returnName += name.charAt(0).toUpperCase();
            continue;
        }
        if (name.charAt(i) == " ") {
            returnName += " " + name.charAt(i + 1).toUpperCase();
            continue;
        }
        returnName += name.charAt(i);
    }
    return returnName;
}

function bai16(facebookUrl) {
    let urlArray = facebookUrl.split("/");
    return urlArray[urlArray.length - 1];
}

function bai17(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}

function bai18() {

}