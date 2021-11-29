import { Component } from '@angular/core';

import { environment } from '../environments/environment';
import { KbrNavigator} from './kbr/navigator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project Allele Frequences ';

  constructor( public kbrNavigator: KbrNavigator ) {};

}
