function convertIntoRomanNum(number) {
    if (isNaN(number)) {
        return NaN;
    }

    var romanList = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };

    var romanNum = '';
    var i;

    for (i in romanList) {
        while (number >= romanList[i]) {
            romanNum += i;
            number -= romanList[i];
        }
    }

    return romanNum;
}

let num = 624;
console.log(convertIntoRomanNum(num));