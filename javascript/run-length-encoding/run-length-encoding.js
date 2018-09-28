export function encode(decodedString) {
    if (decodedString == "") {
        return "";
    }
    let letters = Array.from(decodedString);
    var currentLetter = letters[0];
    var currentCount = 0;
    let encodedString = "";
    for (let i = 0; i < letters.length; i++) {
        if (letters[i] == currentLetter) {
            currentCount += 1;
        } else {
            // Encode Previous letter and count
            if (currentCount>1) {
                encodedString += currentCount.toString();
            }
            encodedString += currentLetter;
            // Set new letter and count
            currentLetter = letters[i];
            currentCount = 1;
        }
    }
    if (currentCount>1) {
        encodedString += currentCount.toString();
    }
    encodedString += currentLetter;
    return encodedString;
}

export function decode(encodedString) {
    if (encodedString == "") {
        return "";
    }
    let decodedString = "";
    let numberLetterPairs = encodedString.split(/([0-9]*[A-z])/);
    numberLetterPairs.forEach((pair) => {
        if (pair != '' && pair.length > 1) {
            let number = pair.slice(0,-1)
            let letter = pair.slice(-1)
            for (let i = 0; i < number; i++) {
                decodedString += letter;
            }
        } else if (pair != '' && pair.length == 1) {
            decodedString += pair
        }
    })
    return decodedString;
}