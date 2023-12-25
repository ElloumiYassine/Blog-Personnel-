import { Injectable } from '@angular/core';
import { Skills } from '../model/Skills';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  allSkills:Skills[]=[]
  nextId=4
  private skillsSubject = new BehaviorSubject<Skills[]>(this.allSkills);
  

  createSkills(skills:Skills):void{
    skills.id=this.nextId
    this.allSkills.push(skills)
    this.nextId++
    console.log("skills was created succeffuly");
    console.log(this.allSkills);
  }
  getAllSkills():Skills[]{
    return this.allSkills
  }

  constructor() { }
}
