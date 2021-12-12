import { Component, QueryList } from "@angular/core";
import { Player } from "../../model/player.model";
import { Match } from "../../model/match.model";
import { PlayerRepository } from "../../model/player.repository";
import { DepFlags } from "@angular/compiler/src/core";

@Component({
    selector: "list-player",
    templateUrl: "match.component.html"
})

export class MatchComponent{
    
    matchedPlayers: Array<Player> = [];
    players: Player[];
    matches: Match[] =[];
    qualifiers:Array<String> = [];
    semiFinalist: Array<String> =[];
    champ: String;
    showHistory:Boolean;
    showQualified: boolean;
    showPlayerList: boolean = true;


    constructor(private repository: PlayerRepository ) 
    { 
    }   
    
     get playerList() : Player[]
      {
        this.players = this.repository.getPlayers();  
        return   this.players;
    }


GetWinner()
{
    let match: Match = {
        Player1: String(this.semiFinalist[0]),
        Player2: String(this.semiFinalist[1]),
        Winner: String(this.semiFinalist[this.getRandomPlayer(0,1)]),
      }
      this.matches.push(match); 
     this.champ = match.Winner;
     this.showHistory = true;
     this.showQualified = false;
}



GetQualifiers(playerMatches: Player[], flag:boolean)
{
    this.showQualified = true;
    let match: Match = {
    Player1: String(playerMatches[0]),
    Player2: String(playerMatches[1]),
    Winner: String(playerMatches[this.getRandomPlayer(0,1)])
  }
   
      if(flag){
        
        this.qualifiers.push(match.Winner);
        this.matchedPlayers = [];
    }
    else if(!flag)
    {  
       
       
       this.semiFinalist.push(match.Winner);
        this.matchedPlayers = [];
    }

     this.matches.push(match); 
}


    SelectPlayer(name:any, playerList:boolean){

        if(playerList){

            if(this.playerList.length<=1)
               this.showPlayerList = false;

        this.playerList.forEach((value,index)=>{
            if(value.Name==name)    
            {
                this.matchedPlayers.push(name);
                if(this.matchedPlayers.length ==2)
                    this.GetQualifiers(this.matchedPlayers,true);
                this.playerList.splice(index,1); 
            }
                       
        });
    }
    else if(!playerList){

        this.qualifiers.forEach((value,index)=>{
            if(value==name)    
            {
                this.matchedPlayers.push(name);
                if(this.matchedPlayers.length ==2)
                    this.GetQualifiers(this.matchedPlayers,false);
                this.qualifiers.splice(index,1);
            }            
        });
    }
        
    }

    getRandomPlayer(firstPlayer:number, secondPlayer:number) : number{
        firstPlayer = Math.ceil(firstPlayer);
        secondPlayer = Math.floor(secondPlayer);
        return Math.floor(Math.random() * (secondPlayer - firstPlayer + 1)) + firstPlayer; 
    }


}