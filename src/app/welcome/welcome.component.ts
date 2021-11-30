import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  search_string: string | undefined;

  constructor() { }

  search(): void {
    if (this.search_string?.match(/\w+:\d+/)) {
      var fields = this.search_string.split(":")
      console.log( fields )
    }
    else if (this.search_string?.match(/\w+:\d+-\d+/)) {
      var fields = this.search_string.split(/:|-/)
      console.log( fields )

    }
    else if (this.search_string?.match(/\w+-\d+-\w+-\w/)) {
      var fields = this.search_string.split("-")
      console.log( fields )
    }
    else {
      console.log( "No matches", this.search_string )
     }

  }

  ngOnInit(): void {
  }

}
