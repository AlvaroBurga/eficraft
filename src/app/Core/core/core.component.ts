import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/Model/Brand';
import { BrandService } from 'src/service/brand.service';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit {

  brand : Brand = new Brand();

  constructor(private brandService: BrandService) { }

  ngOnInit(): void {

    this.brandService.activeBrand$.subscribe(brand => {
      this.brand = brand;
    });

  }

}
