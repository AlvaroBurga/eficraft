import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Brand } from 'src/app/Model/Brand';
import { BrandService } from 'src/service/brand.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {

  brands: Brand[] = [];
  currentPage: number = 0;
  pageSize: number = 6;
  displayedImages: Brand[] = [];  
  searchTerm: string = '';
  filteredBrands: Brand[] = [];

  constructor(
    private brandService : BrandService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.brandService.getBrands().subscribe(
      (brands) => {
        this.brands = brands
        this.filterBrands();
        this.updateDisplayedImages();
      },
      (error) => console.error('Error fetching images:', error)
    );
  }

  get paginatedImages(): Brand[] {
    const startIndex = this.currentPage * this.pageSize;
    return this.filteredBrands.slice(startIndex, startIndex + this.pageSize);
  }

  onPageChange(event: any): void {
    this.currentPage = event.pageIndex;
    this.updateDisplayedImages();
  }

  updateDisplayedImages(): void {
    const startIndex = this.currentPage * this.pageSize;
    this.displayedImages = this.filteredBrands.slice(startIndex, startIndex + this.pageSize);
  }

  filterBrands() {
    this.filteredBrands = this.brands.filter(brand =>
        brand.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    this.updateDisplayedImages();
  }

  createBrand() {
    console.log("llega aqui")
    this.router.navigate(['/core/brands/create']); // Navigate to the create brand page
  }

}
