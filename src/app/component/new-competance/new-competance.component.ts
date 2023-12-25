import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Skills } from 'src/app/model/Skills';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-new-competance',
  templateUrl: './new-competance.component.html',
  styleUrls: ['./new-competance.component.css']
})
export class NewCompetanceComponent {
  typesOfShoes: string[] = ['Youtube', 'Courserra', 'Sololearn', 'session de formation'];


  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  isEditable = false;

  constructor(private _formBuilder: FormBuilder, private skillsService:SkillsService) {}
  createSkills(shoe:string):void{
   const skills=new Skills(this.firstFormGroup.value.firstCtrl!,this.secondFormGroup.value.secondCtrl!,shoe)
    console.log(skills);
    this.skillsService.createSkills(skills)
    
  }
  

}
