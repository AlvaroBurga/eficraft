import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/service/brand.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {

  imageUrls: string[] = [];
  currentPage: number = 0;
  pageSize: number = 6;
  displayedImages: string[] = [];  

  constructor(private brandService : BrandService) { }

  ngOnInit(): void {
    this.brandService.getImageUrls().subscribe(
      (urls) => {
        this.imageUrls = urls
        this.updateDisplayedImages();
      },
      (error) => console.error('Error fetching images:', error)
    );
  }

  get paginatedImages(): string[] {
    const startIndex = this.currentPage * this.pageSize;
    return this.imageUrls.slice(startIndex, startIndex + this.pageSize);
  }

  onPageChange(event: any): void {
    this.currentPage = event.pageIndex;
    this.updateDisplayedImages();
  }

  updateDisplayedImages(): void {
    const startIndex = this.currentPage * this.pageSize;
    this.displayedImages = this.imageUrls.slice(startIndex, startIndex + this.pageSize);
  }
  

}
