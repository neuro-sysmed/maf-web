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

  displayedColumns: string[] = ['variant',  'allele_count', 'allele_count_hom', 'frequency'];

  constructor(private variantService: VariantService,
              private route: ActivatedRoute,
              public variantNavigator: VariantNavigator,
              ) { }


  ngOnInit(): void {
    this.getVariants()
  }

  getVariants(): void {
    const chrom = this.route.snapshot.paramMap.get('chrom');
    const start = parseInt(this.route.snapshot.paramMap.get('start')!,0);
    const end   = parseInt(this.route.snapshot.paramMap.get('end')!,0);

    if (chrom == null || start == 0 || end == null ) {
      return
    }



    this.variantService.getVariants( chrom, start, end )
        .subscribe(variants => {this.variants = variants; this.dataloaded=true;});

  }


}
