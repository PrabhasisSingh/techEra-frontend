import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Player } from "../../model/player.model";
import { PlayerRepository } from "../../model/player.repository";

@Component({
    selector: "add-player",
    templateUrl: "addplayer.component.html"
})

export class AddPlayerComponent {
    item: Player = new Player();
    
    constructor(private repository: PlayerRepository,
        private router: Router) 
{ }

    save(form: NgForm) {
        this.repository.savePlayer(this.item);
        this.router.navigateByUrl("player/list");
    }
}