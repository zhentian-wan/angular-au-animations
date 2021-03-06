import {Component, HostBinding} from '@angular/core';
import {fadeInOut, heightState, heightZeroFull, jumpIntoPage} from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    fadeInOut,
    jumpIntoPage,
    heightZeroFull({duration: '500ms'}),
    heightState({height: '200px', duration: '500ms'})
  ]
})
export class AppComponent {
  title = 'app';
  state = 'active';

  toggleState() {
    if (this.state === 'inactive') {
      this.state = 'active';
    } else {
      this.state = 'inactive';
    }
  }
}
