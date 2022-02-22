import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Variant, Frequency } from "../variant.model"
import { VariantService } from '../variant.service';
import { VariantNavigator } from '../variant-navigator';


@Component({
  selector: 'app-variant-list',
  templateUrl: './variant-list.component.html',
  styleUrls: ['./variant-list.component.css']
})
export class VariantListComponent implements OnInit {


  variants: Variant[] = [];
  dataloaded: boolean = false;
  chrom: string = "";
  start: number | undefined;
  end: number | undefined;
  name: string = "";
  header: string = "";

  displayedColumns: string[] = ['variant',  'allele_count', 'allele_count_hom', 'frequency'];

  constructor(private variantService: VariantService,
              private route: ActivatedRoute,
              public variantNavigator: VariantNavigator,
              ) { }


  ngOnInit(): void {
    this.getVariants()
  }

  getVariants(): void {
    this.chrom = this.route.snapshot.paramMap.get('chrom') || "";
    this.start = parseInt(this.route.snapshot.paramMap.get('start')!,0);
    this.end   = parseInt(this.route.snapshot.paramMap.get('end')!,0);

    this.name  = this.route.snapshot.paramMap.get('name') || "";

    if (this.name != '') {
      this.header = this.name;
      this.variantService.getVariantsByGene( this.name )
      .subscribe(variants => {this.variants = variants; this.dataloaded=true;});
    }
    else {
      this.header = `${this.chrom}:${this.start}-${this.end}`
      this.variantService.getVariants( this.chrom, this.start, this.end )
        .subscribe(variants => {this.variants = variants; this.dataloaded=true;});

    }
  }


}
