import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BrandService {

  private apiUrl = 'https://endpoint.com/images'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getImageUrls(): Observable<string[]> {
    const images = [
      'assets/images/brands/image1.png',
      'assets/images/brands/image2.png',
      'assets/images/brands/image3.png',
      'assets/images/brands/image4.png',
      'assets/images/brands/image5.png'
    ];
    return of(images); 
  }

}
