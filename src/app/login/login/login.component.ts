import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../shared/services/user.service';
import {User} from '../../shared/model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  users: Array<User>;
  // tslint:disable-next-line:variable-name
  input_user: string;
  // tslint:disable-next-line:variable-name
  input_pass: string;

  constructor(
    private userService: UserService,
    public router: Router
  ) {
  }

  hide = true;

  ngOnInit(): void {
    this.userService.list().subscribe(
      users => this.users = users
    );
  }

  public login() {
    let auth = this.users.filter((us) => {
      return us.login === this.input_user.toLowerCase();
    });
    console.log(auth)
    if (auth) {
      if (auth[0].pass === this.input_pass.toLowerCase()) {
        this.router.navigate(['/listing-areas', auth[0]._adm ? 'admin' : 'user']);
      }
    } else {

    }
  }

}
