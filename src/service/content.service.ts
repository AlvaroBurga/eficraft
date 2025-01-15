import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from 'src/app/Model/Content';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private contents: Content[] = [
    new Content('description', 'Leaflet 1', 'Leaflet', 'Doctors', 'Health', new Date()),
    new Content('email', 'Email Campaign', 'Email', 'Patients', 'Wellness', new Date()),
  ];

  constructor() { }

  getContents(): Observable<Content[]> {
    return of(this.contents);
  }

}
