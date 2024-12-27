import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Brand } from 'src/app/Model/Brand';


@Injectable({
  providedIn: 'root'
})
export class BrandService {

  private brands : Brand[] = [];
  private id = 5;


  constructor(private http: HttpClient) {
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

    for (let i = 0; i < names.length; i++) {
      let brand: Brand = new Brand();
      brand.name = names[i];
      brand.logo = logos[i];
      
      this.brands.push(brand);
  }

   }

  getBrands(): Observable<Brand[]> {
    return of(this.brands); 
  }

  addNewBrand(brand : Brand){
    this.id++;
    brand.id = this.id;
    this.brands.push(brand);
  }

}
