export default class RunLengthEncoding {
  static encode(data: string): string {
    let prevLetter = data[0];
    let letterStartIndex = 0;
    let letterDetails: {'char': string, 'count': number}[] = [];
    for (let i = 1; i < data.length; i++) {
      let currLetter = data[i];
      if (currLetter === prevLetter) {
        continue;
      } else {
        let length = i - letterStartIndex;
        letterDetails.push({'char': prevLetter, 'count': length});
        letterStartIndex = i;
        prevLetter = currLetter;
      }
    }
    if (data.length != 0) {
      letterDetails.push({
        'char': prevLetter,
        'count': data.length - letterStartIndex,
      });
    }

    let encodedData = '';
    for (let detail of letterDetails) {
      if (detail.count != 1) {
        encodedData += detail.count.toString();
      }
      encodedData += detail.char;
    }

    return encodedData;
  }

  static decode(encodedData: string): string {
    let prevCharIndex = -1;
    let pairs: {'char': string, 'count': number}[] = [];
    for (let i = 0; i < encodedData.length; i++) {
      let potentialChar = encodedData[i];
      if (isNaN(parseInt(potentialChar))) {
        let quantity = parseInt(encodedData.slice(prevCharIndex + 1, i)) || 1;
        prevCharIndex = i;
        pairs.push({'char': potentialChar, 'count': quantity})
      }
    }

    let decodedData = '';
    for (let {char, count} of pairs) {
      for (let i = 0; i < count; i++) {
        decodedData += char;
      }
    }
    return decodedData;
  }
}