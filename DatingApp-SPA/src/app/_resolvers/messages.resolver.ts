import { Message } from "@angular/compiler/src/i18n/i18n_ast";
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { AlertifyService } from "../_services/alertify.service";
import { AuthService } from "../_services/auth.service";
import { UserService } from "../_services/user.service";

@Injectable()
export class MessagesResolver implements Resolve<Message[]>{

    pageNumber = 1;
    pageSize = 5;
    messageContainer = 'Unread';

    constructor(private userService: UserService, 
        private router: Router, 
        private alertify: AlertifyService,
        private authService: AuthService){}
    
    resolve(route: ActivatedRouteSnapshot): Observable<Message[]> {
        return this.userService.getMessages(this.authService.decodedToken.nameid, this.pageNumber, 
            this.pageSize, this.messageContainer).pipe(
            catchError(() => {
                this.alertify.error("Problem retrieving data");
                this.router.navigate(['/home']);
                return of(null);
            })
        );
    }
    
}