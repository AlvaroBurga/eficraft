import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Reference } from 'src/app/Model/Reference';

@Injectable({
  providedIn: 'root'
})
export class ReferenceService {

  private references: Reference[] = [
    new Reference(1, 'The use of isotretinoin in acne.', 'Layton A.', 'Dermatoendocrinol.', 2009),
    new Reference(2, 'Guidelines of care for the management of health', 'Zaenglein AL, Pathy AL', 'J Am Acad Dermatol.', 2016),
    new Reference(3, 'Isotretinoin updates', 'On SC, Zeichner J.', 'Dermatol Ther.', 2013),
    new Reference(4, 'Isotretinoin treatment for acne and risk of death', 'Huang YC, Cheng YC.', 'J Am Acad Dermatol.', 2017),
    new Reference(5, 'Acnotin Product Information', 'Bago', 'N/A', 2022)
  ];

  constructor() { }

  getReferences(): Observable<Reference[]> {
    return of(this.references); 
  }

  uploadReference(reference : Reference) {
    this.references.push(reference);
  }

  deleteReference(element: Reference) {
    // Logic for deleting the selected entry
    console.log('Delete button clicked for', element);
    this.references = this.references.filter(item => item !== element);
  }


}
