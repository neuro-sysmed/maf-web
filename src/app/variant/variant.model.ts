
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