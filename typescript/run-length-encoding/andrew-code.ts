export default class RunLengthEncoding {
  static encode(data: string): string {
    let prevLetter = data[0];
    let letterStartIndex = 0;
    let slices = [];
    for (let i = 1; i < data.length; i++) {
      if (data[i] === prevLetter) {
        continue;
      } else {
        slices.push(data.slice(letterStartIndex, i));
        letterStartIndex = i;
        prevLetter = data[i];
      }
    }
    if (data.length != 0) {
      slices.push(data.slice(letterStartIndex));
    }

    let encodedData = '';
    for (let slice of slices) {
      if (slice.length != 1) {
        encodedData += slice.length.toString();
      }
      encodedData += slice[0];
    }

    return encodedData;
  }

  static decode(encodedData: string): string {
    function split(data: string): string[] {
      let splitted = [];
      let startIdx = 0;
      for (let i = 0; i < data.length; i++) {
        if (isNaN(parseInt(data[i]))) {
          splitted.push(data.slice(startIdx, i + 1));
          startIdx = i + 1;
        }
      }
      return splitted;
    }
    const splitted = split(encodedData);
    let data = '';
    for (let pair of splitted) {
      const char = pair[pair.length - 1];
      const num = parseInt(pair.slice(0, pair.length - 1)) || 1;
      for (let i = 0; i < num; i++) {
        data += char;
      }
    }
    return data;
  }
}

// States:
// New Letter
// Seen Letter Before