import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Observable } from 'rxjs';

export interface Item { name: string; }

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})

export class AppComponent {

  title = 'angular firebase';

}
