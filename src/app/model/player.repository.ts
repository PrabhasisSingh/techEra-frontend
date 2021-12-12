import { Injectable } from "@angular/core";
import { Player } from "./player.model";
import { RestDataSource } from "./rest.datasource";

@Injectable()
export class PlayerRepository{
    private Player: Player[] = [];

    constructor(private dataSource: RestDataSource) {
        dataSource.getPlayerList().subscribe(data => {
            this.Player = data;
        });
    }

    
    getPlayers(): Player[] {
        return this.Player;
    }
    

    savePlayer(item: Player) {
        if (item._id == null || item._id == "") {
            this.dataSource.insertPlayer(item)
                .subscribe(p => this.Player.push(p));
        } else {
            this.dataSource.updateTournament(item)
                .subscribe(p => {
                    this.Player.splice(this.Player.
                        findIndex(i => i._id == item._id), 1, item);
                });
        }
    }

}