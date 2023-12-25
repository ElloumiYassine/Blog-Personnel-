import { Component } from '@angular/core';
import { personne } from 'src/app/model/peronne';
import { PersonneService } from 'src/app/service/personne.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {
  editedPerson!: personne;

  constructor(private personneService: PersonneService) {}

  ngOnInit(): void {
    this.editedPerson = { ...this.personneService.getPres() };
  }

  saveChanges(): void {
    this.personneService.updatePerson(this.editedPerson);
  }
}
