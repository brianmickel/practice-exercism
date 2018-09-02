def to_rna(dna_strand):
    map = {'G':'C', 'C':'G', 'T':'A', 'A':'U'}
    rna_strand = ""
    for x in dna_strand:
        rna_strand += map[x]
    return rna_strand
