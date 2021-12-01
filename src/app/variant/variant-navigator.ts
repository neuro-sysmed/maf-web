import {Injectable} from '@angular/core';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class VariantNavigator {

  constructor( private router:Router,
             )  { };

  listUrl(chrom:string, start:number, end?:number): string {
    if (end == null) {
      end = start;
    }
    return `/variants/${chrom}/${start}/${end}`;
  }

  listView(chrom:string, start:number, end?:number): boolean {
    this.router.navigateByUrl(this.listUrl(chrom, start, end));
    return true;
  }

  detailedUrl(chrom:string, pos:number, ref:string, alt:string): string{
    return `/variant/${chrom}/${pos}/${ref}/${alt}`
  }

  detailedView(chrom:string, pos:number, ref:string, alt:string): boolean{
    this.router.navigateByUrl( this.detailedUrl(chrom, pos, ref, alt) );
    return true;
  }


  detailedUrlId(id:number): string{
    return '/variant/'+id;
  }

  detailedViewId(id:number): boolean{
    this.router.navigateByUrl( this.detailedUrlId(id) );
    return true;
  }


}
