import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Brand } from 'src/app/Model/Brand';


@Injectable({
  providedIn: 'root'
})
export class BrandService {

  private apiUrl = 'https://endpoint.com/images'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getBrands(): Observable<Brand[]> {
    const logos = [
      'assets/images/brands/image1.png',
      'assets/images/brands/image2.png',
      'assets/images/brands/image3.png',
      'assets/images/brands/image4.png',
      'assets/images/brands/image5.png'
    ];
    const names = [
      'Acnotin',
      'Bagovit',
      'Colnatur',
      'Gastress',
      'Prestat'
    ]

    let brands : Brand[] = [];

    for (let i = 0; i < names.length; i++) {
      let brand: Brand = new Brand();
      brand.name = names[i];
      brand.logo = logos[i];
      
      brands.push(brand);
  }

    return of(brands); 
  }

}
