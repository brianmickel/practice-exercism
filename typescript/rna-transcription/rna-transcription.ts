class Transcriptor {
  toRna(dnaStrand: string) {
    const rnaStrand = dnaStrand.split('')
                          .map(n => {
                            switch (n) {
                                case "G":
                                  return "C";
                                case "T":
                                  return "A";
                                case "C":
                                  return "G";
                                case "A":
                                  return "U";
                                default:
                                  throw new Error("Invalid input DNA.");
                            }
                          })
                          .join('');
    return rnaStrand;
  }
}

export default Transcriptor
