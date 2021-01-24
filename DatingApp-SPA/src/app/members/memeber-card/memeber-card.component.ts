import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { AuthService } from 'src/app/_services/auth.service';
import { UserService } from 'src/app/_services/user.service';

/**
 * A child component of memeber-list component. 
 */
@Component({
  selector: 'app-memeber-card',
  templateUrl: './memeber-card.component.html',
  styleUrls: ['./memeber-card.component.scss']
})
export class MemeberCardComponent implements OnInit {

  @Input() user: User;
  
  constructor(private authService: AuthService, private userService: UserService,
    private alertify: AlertifyService) { }

  ngOnInit() {
  }

  sendLike(id: Number){
    this.userService.sendLike(this.authService.decodedToken.nameid, id).subscribe(data => {
      this.alertify.success('You have like: ' + this.user.knownAs);
    }, error => {
      this.alertify.error(error);
    })
  }

}
