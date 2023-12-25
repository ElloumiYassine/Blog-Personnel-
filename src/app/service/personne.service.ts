import { Injectable } from '@angular/core';
import { personne } from '../model/peronne';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {
  private persSubject = new BehaviorSubject<personne>(
    new personne("Elloumi", "Yassine", "15/01/2001", "3 GT", "TST", 53992378)
  );

  pers$ = this.persSubject.asObservable();

  getPres(): personne {
    return this.persSubject.value;
  }

  updatePerson(newPerson: personne): void {
    this.persSubject.next(newPerson);
  }
}
