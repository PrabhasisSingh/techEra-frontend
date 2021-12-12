import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ModelModule } from "../../model/model.module";
import { PartialsModule } from '../partials/partials.module';
import { PlayerComponent } from "./playerlist.component";
import { AddPlayerComponent } from "./addplayer.component";
import {MatchComponent} from "./match.component";

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule, RouterModule, PartialsModule],
    declarations: [PlayerComponent,AddPlayerComponent, MatchComponent],
    exports : [PlayerComponent,AddPlayerComponent, MatchComponent]
})

export class PlayerModule {}