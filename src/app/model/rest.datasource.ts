import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Tournament } from "./tournament.model";
import { Player } from "./player.model";
import { User } from "./user.model";
import { map } from "rxjs/operators";
import { HttpHeaders } from '@angular/common/http';

import { ResponseModel } from "./response.model";

const PROTOCOL = "http";
const PORT = 3000;

@Injectable()
export class RestDataSource {

    baseUrl: string;
    auth_token: string;

    constructor(private http: HttpClient) {
        this.baseUrl = "https://techera-backend.herokuapp.com";
    }

    getTournamentList(): Observable<Tournament[]> {
        return this.http.get<Tournament[]>(this.baseUrl + "tournament/list");
    }

    
    //  Get list of players
    getPlayerList(): Observable<Player[]> {
        return this.http.get<Player[]>(this.baseUrl + "player/playerlist");
    }

    // Insert player
    insertPlayer(item: Player): Observable<Player> {
        return this.http.post<Player>(this.baseUrl + "player/playeradd",
            item, this.getOptions());
    }




    insertTournament(item: Tournament): Observable<Tournament> {
        return this.http.post<Tournament>(this.baseUrl + "tournament/add",
            item, this.getOptions());
    }

    updateTournament(item: Tournament): Observable<Tournament> {
        return this.http.put<Tournament>(`${this.baseUrl}Tournament/edit/${item._id}`,
            item, this.getOptions());
    }

    deleteTournament(id: string): Observable<ResponseModel> {
        return this.http.delete<any>(`${this.baseUrl}Tournament/delete/${id}`,
            this.getOptions()).pipe(map(response => {
                return response;
            }));
    }

    authenticate(username: string, pass: string): Observable<boolean> {
        return this.http.post<any>(this.baseUrl + "users/signin", {
            username: username, password: pass
        }).pipe(map(response => {
            this.auth_token = response.success ? response.token : null;
            return response.success;
        }));
    }

    signupUser(user: User): Observable<ResponseModel> {
        return this.http.post<ResponseModel>(this.baseUrl + "users/signup", user)
            .pipe(map(response => {
                return response;
            }));
    }

    updateUserPwd(username: string, pass: string): Observable<User> {
        return this.http.put<User>(`${this.baseUrl}users/forgetpwd/${username}`,
        username, this.getOptions());
    }

    private getOptions() {
        return {
            headers: new HttpHeaders({
                "Authorization": `Bearer ${this.auth_token}`
            })
        }
    }
}
