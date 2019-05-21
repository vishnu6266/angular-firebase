// Import Observable
import { Observable } from 'rxjs';

// Import Firebase and AngularFire
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public authInfo: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth) {
    this.authInfo = this.afAuth.authState;
  }

  login() {
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
      .then((user) => { console.log(user); });
  }

  logout() {
    this.afAuth.auth.signOut().then(() => { console.log('logged out'); });
  }
}
