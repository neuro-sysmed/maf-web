import { Component, OnInit } from '@angular/core';

import { VariantNavigator } from '../variant/variant-navigator';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  search_string: string | undefined;

  constructor(public variantNavigator: VariantNavigator,
             ) { }

  search(): void {
    if (this.search_string?.match(/^\w+:\d+$/)) {
      var fields = this.search_string.split(":")
      console.log( fields )
      this.variantNavigator.listView(fields[0], +fields[1], +fields[1])
      
    }
    else if (this.search_string?.match(/^\w+:\d+-\d+$/) || this.search_string?.match(/^\w+-\d+-\d+$/) ) {
      var fields = this.search_string.split(/[-.:]/)
      console.log( ":+-", fields )
      this.variantNavigator.listView(fields[0], +fields[1], +fields[2])
    }
    else if (this.search_string?.match(/^\w+-\d+-\w+-\w$/)) {
      var fields = this.search_string.split("-")
      console.log( fields )
      this.variantNavigator.detailedView(fields[0], +fields[1], fields[2], fields[3])
    }
    else if (this.search_string?.match(/^\w+$/)) {
      this.variantNavigator.geneView(this.search_string)
    }
    else {
      console.log( "No matches", this.search_string )
     }

  }

  ngOnInit(): void {
  }

}
