export function toRna(dnaStrand) {
    if (!isStrandValid(dnaStrand)) throw new Error('Invalid input DNA.');
    const nucleotidesDna = Array.from(dnaStrand);
    const nucleotidesRna = nucleotidesDna.map(transcribeOneNucleotide);
    const rnaStrand = nucleotidesRna.join('');
    return rnaStrand;
}

function isStrandValid(dnaStrand) {
    return /^[acgt]*$/i.test(dnaStrand);
}

function transcribeOneNucleotide(n) {
    const transcription = {
        G: 'C',
        C: 'G',
        T: 'A',
        A: 'U',
    };
    return transcription[n];
}