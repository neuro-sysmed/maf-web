
export interface Frequency {
    id: string;
    project_name: string;

    allele_number: bigint;
    allele_count: bigint;
    allele_count_hom: bigint;
    frequency: number;
  }

export interface Variant {
    id: string;

    chrom: string;
    pos: number;
    ref: string;
    alt: string;

    frequencies: Frequency[];
}  

export interface Annotation {
    id: string;
    gene_id: string;
    variant_id: string;

    gene:string;
    transcript: string;

    dbsnp: string;
    effect: string;
    npos: string;
    cpos: string;
    DNA_change: string;
    AA_change: string;
    polyphen: string;
    sift: string;
}