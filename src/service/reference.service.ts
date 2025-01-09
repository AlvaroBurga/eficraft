import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Reference } from 'src/app/Model/Reference';

@Injectable({
  providedIn: 'root'
})
export class ReferenceService {

  private references: Reference[] = [
    new Reference(1, 'Article 1', 'Author A', 'Journal A', 2021),
    new Reference(2, 'Article 2', 'Author B', 'Journal B', 2020),
    new Reference(3, 'Article 3', 'Author C', 'Journal C', 2022),
    new Reference(4, 'Article 4', 'Author D', 'Journal D', 2019)
  ];

  constructor() { }

  getReferences(): Observable<Reference[]> {
    return of(this.references).pipe(delay(1000)); 
  }

  uploadReference() {
    console.log('Upload button clicked');
  }

  deleteReference(element: Reference) {
    // Logic for deleting the selected entry
    console.log('Delete button clicked for', element);
    this.references = this.references.filter(item => item !== element);
  }


}
