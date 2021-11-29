import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Variant, Frequency } from "../variant.model"
import { VariantService } from '../variant.service';


@Component({
  selector: 'app-variant-view',
  templateUrl: './variant-view.component.html',
  styleUrls: ['./variant-view.component.css']
})
export class VariantViewComponent implements OnInit {

  variant: Variant | undefined;
//  variant: Variant = {id:"", "chrom":"", "pos":0, "ref":"", "alt":"", "frequencies":[]}
  dataloaded: boolean = false;

  constructor(private variantService: VariantService,
              private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getVariant()
  }

  getVariant(): void {
    const chrom = this.route.snapshot.paramMap.get('chrom');
    const pos   = parseInt(this.route.snapshot.paramMap.get('pos')!,0);
    const ref   = this.route.snapshot.paramMap.get('ref');
    const alt   = this.route.snapshot.paramMap.get('alt');

    if (chrom == null || pos == 0 || ref == null || alt == null) {
      return
    }


    this.variantService.getVariant( chrom, pos, ref, alt )
        .subscribe(variant => {this.variant = variant; this.dataloaded=true;});
    console.log(this.variant)
  }


}
