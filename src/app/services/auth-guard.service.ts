import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { take, map, tap } from 'rxjs/operators';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private auth: AuthenticationService) { }

  canActivate(): Observable<boolean> {

    return this.auth.authInfo
    .pipe(
        take(1),
        map(user => !!user),
        tap(signedIn => {
                if (!signedIn) {
                    console.log('access denied');
                    this.router.navigate(['/']);
                }
            })
    );
  }

}
