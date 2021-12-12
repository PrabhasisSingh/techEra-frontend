import { Component } from "@angular/core";
import { Player } from "../../model/player.model";
import { PlayerRepository } from "../../model/player.repository";

@Component({
    selector: "list-player",
    templateUrl: "playerlist.component.html"
})

export class PlayerComponent{
    
    constructor(private repository: PlayerRepository ) 
    { }

    get playerList(): Player[] {
        return this.repository.getPlayers();        
    }

    test(){
        console.log("I'm In...");
    }
}