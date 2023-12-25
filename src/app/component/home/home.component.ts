import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent {

  likes=0;

likeAdd(id:number) {
  for (let index = 0; index < this.news.length; index++) {
    if (this.news[index].id==id) {
      this.news[index].nblike++
    }
    
  }
   
  
}
  news=[
    {id:1,name:"President MTC",nature:"Vie associative",img:"../../../assets/mtc.png",txt:"dans l'année universitaire 2022-2023 j'ai occupé la poste d'un president de club MTC",nblike:2},
    {id:2,name:"organisation de FEEE",nature:"vie associative",img:"../../../assets/315117211_636522831504713_3567212653414142226_n.jpg",txt:"j'ai occupé la pose d'un responsable evenement dans le FEEE",nblike:5},
    {id:3,name:"organisateur WE-SPICE",nature:"projet",img:"../../../assets/we-spice.jpg",txt:"j'ai particpier a la realisation du projet we-spice",nblike:10},]
  
}
