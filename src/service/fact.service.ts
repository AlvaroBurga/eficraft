import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Fact } from 'src/app/Model/Fact';
import { Reference } from 'src/app/Model/Reference';

@Injectable({
  providedIn: 'root'
})
export class FactService {


  private facts: Fact[] = [
    new Fact (
      1, 
      "Acnotin is available in 10 mg and 20 mg dosages, with the active ingredient being isotretinoin.",
      "Dosage",
      new Reference(5, 'Acnotin Product Information', 'Bago', 'N/A', 2022)
    ),
    new Fact (
      2, 
      "Acnotin is indicated for the treatment of severe acne, particularly in cases where patients do not respond to conventional treatments.",
      "Patient Profile",
      new Reference(5, 'Acnotin Product Information', 'Bago', 'N/A', 2022)
    ),
    new Fact (
      3, 
      "For severe cases, isotretinoin is typically started at 0.5 mg/kg/day for the first month, then increased to 1.0 mg/kg/day if tolerated.",
      "Dosage",
      new Reference(2, 'Guidelines of care for the management of health', 'Zaenglein AL, Pathy AL', 'J Am Acad Dermatol.', 2016),
    ),
    new Fact (
      4, 
      "Common side effects of isotretinoin include dry skin, cheilitis (inflammation of the lips), dry nose, and increased blood lipids.",
      "Safety",
      new Reference(2, 'Guidelines of care for the management of health', 'Zaenglein AL, Pathy AL', 'J Am Acad Dermatol.', 2016),
    ),
    new Fact (
      5, 
      "Isotretinoin is highly effective in treating severe" +
      "nodulocystic acne, with about 60-85% of patients" +
      "achieving a clinical cure after 20 weeks of" +
      "treatment. In one study, 76.8% of patients" +
      "remained acne-free two years after treatment.",
      "Dosage",
      new Reference(3, 'Isotretinoin updates', 'On SC, Zeichner J.', 'Dermatol Ther.', 2013),
    ),
  ];

  constructor() { }

  getFacts(): Observable<Fact[]> {
    return of(this.facts).pipe(delay(1000)); 
  }

  updateFact(element: Fact) {
    console.log('Edit button clicked for ', element);
  }

  deleteFact(element: Fact) {
    console.log('Delete button clicked for', element);
    this.facts = this.facts.filter(item => item !== element);
  }
}
