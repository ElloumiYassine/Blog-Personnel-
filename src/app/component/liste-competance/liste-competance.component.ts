import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, ViewChild } from '@angular/core';
import { MatSort, Sort,MatSortModule } from '@angular/material/sort';
import {MatTableModule,MatTableDataSource} from '@angular/material/table';
import { Skills } from 'src/app/model/Skills';
import { SkillsService } from 'src/app/service/skills.service';


// export interface PeriodicElement {
//   Domaine: string;
//   id: number;
//   Competance: number;
//   symbol: string;
// }
let ELEMENT_DATA: Skills[] = [
  {id: 1, Domaine: 'WEB', Competance: "HTML-CSS-JS",source:"Crococoder",date:new Date()},
  {id: 2, Domaine: 'WEB', Competance: "Bootstrap",source:"Youtube",date:new Date() },
  {id: 3, Domaine: 'Desktop', Competance: "JAVA",source:"ENETCOM",date:new Date() },

];

@Component({
  selector: 'app-liste-competance',
  templateUrl: './liste-competance.component.html',
  styleUrls: ['./liste-competance.component.css']
})
export class ListeCompetanceComponent {
  displayedColumns: string[] = ['id', 'Domaine', 'Competance', 'source','date'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  
  skills:Skills[]=[]
  constructor(private _liveAnnouncer: LiveAnnouncer,private skillsService:SkillsService) {}

  @ViewChild(MatSort) sort!: MatSort;
    ngOnInit(): void {
    this.skills=this.skillsService.getAllSkills()
    for (let index = 0; index < this.skills.length; index++) {
      this.dataSource.data.push(this.skills[index])
      
    }
   
    
    console.log("data source : "+this.dataSource.data);
    
    
  }
  
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
