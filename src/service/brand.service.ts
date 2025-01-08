import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Brand } from 'src/app/Model/Brand';


@Injectable({
  providedIn: 'root'
})
export class BrandService {

  private brands : Brand[] = [];
  private id = 5;
  private activeBrandSubject = new BehaviorSubject<Brand>(this.getActiveBrand());
  activeBrand$ = this.activeBrandSubject.asObservable();


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
      brand.id = i+1;
      brand.drugType = 'otc';
      brand.launchStatus = 'preclinical'
      
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

  updateBranch(brand : Brand){
    this.brands[brand.id-1] = brand;
    this.setActiveBrand(brand);
  }

  getActiveBrand(): Brand {
    const brandData = sessionStorage.getItem('activeBrand');
    return brandData ? JSON.parse(brandData) : null;
  }

  setActiveBrand(brand: Brand) {
    sessionStorage.setItem('activeBrand', JSON.stringify(brand));
    this.activeBrandSubject.next(brand);
  }

}
