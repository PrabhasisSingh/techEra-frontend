import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { TournamentRepository } from "./tournament.repository";
import { PlayerRepository } from "./player.repository";
import { RestDataSource } from "./rest.datasource";
import { AuthService } from "./auth.service";

@NgModule({
    imports: [HttpClientModule],
    providers: [
        TournamentRepository,
        PlayerRepository,
        RestDataSource,
        AuthService      
    ]
})

export class ModelModule { }