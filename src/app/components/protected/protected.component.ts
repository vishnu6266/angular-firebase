import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Item { name: string; }

@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styleUrls: ['./protected.component.css']
})
export class ProtectedComponent implements OnInit {

  items: Observable<any[]>;

  ngOnInit() {
  }

  constructor(db: AngularFirestore) {
    this.items = db.collection('items').valueChanges();
  }

}
