import { Component } from '@angular/core';
import { personne } from 'src/app/model/peronne';
import { PersonneService } from 'src/app/service/personne.service';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(private personneService:PersonneService){}
  pers!:personne
  showEditForm = false;

  ngOnInit(): void {
    this.personneService.pers$.subscribe((person) => {
      this.pers = { ...person };
    })}

    toggleEditForm(): void {
      this.showEditForm = !this.showEditForm;
    }
}
