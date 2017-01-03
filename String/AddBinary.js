function appendZero(binaryNumber, length) {
    while (length > 0) {
        binaryNumber = binaryNumber + '0';
        length--;
    }
    return binaryNumber;
}

var addBinary = function(a, b) {
    a = a.split('').reverse().join('');
    b = b.split('').reverse().join('');

    var aLength = a.length,
        bLength = b.length,
        i = 0,
        carry = 0,
        resultArray = [];
    var appendingLength = Math.abs(aLength - bLength);

    var maxLength;
    if (aLength > b.length) {
        b = appendZero(b, appendingLength);
        maxLength = a.length;
    } else {
        a = appendZero(a, appendingLength);
        maxLength = b.length;
    }

    while (i < maxLength) {
        var aNum = parseInt(a.charAt(i)),
            bNum = parseInt(b.charAt(i));

        var result = aNum + bNum + carry;
        carry = result / 2;
        resultArray.push(result % 2);
        i++;
    }
    if (carry === 1) {
        resultArray.push(carry)
    }
    //console.log(resultArray.reverse().join(''));
    return resultArray.reverse().join('');
};

(function UnitTest() {
    var expected = '100';
    var input1 = '11';
    var input2 = '1';
    if(addBinary(input1,input2)===expected){
        console.log('Pass');
    }else{
        console.log('Fail');
    }
    
})();