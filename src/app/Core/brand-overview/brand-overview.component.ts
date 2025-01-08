import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Brand } from 'src/app/Model/Brand';
import { BrandService } from 'src/service/brand.service';

@Component({
  selector: 'app-brand-overview',
  templateUrl: './brand-overview.component.html',
  styleUrls: ['./brand-overview.component.scss']
})
export class BrandOverviewComponent implements OnInit {

  brand : Brand = new Brand();
  brandForm: FormGroup;
  drugTypes: string[] = ['otc', 'prescription', 'generic'];
  launchStatuses: string[] = ['preclinical','clinical trials','approved', 'launched'];

  constructor(
    private brandService: BrandService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.brandForm = this.fb.group({
      name: ['', Validators.required],
      nonPropietaryName: [''],
      drugType: ['', Validators.required],
      indication: [''],
      launchStatus: ['', Validators.required],
      logo: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.brandService.activeBrand$.subscribe(brand => {
      this.brand = brand;
      this.initializeForm()
    });
  }

  initializeForm(): void {
    this.brandForm.patchValue({
      name: this.brand.name,
      nonPropietaryName: this.brand.nonPropietaryName,
      drugType: this.brand.drugType,
      indication: this.brand.indication,
      launchStatus: this.brand.launchStatus,
      logo: this.brand.logo
    });
  }

  onLogoUpload(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      const file = target.files[0];
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.brandForm.patchValue({ logo: e.target.result });
    };
      reader.readAsDataURL(file);
    }
  }

  addPersona() {
    // Logic to add a persona
    console.log('Add Persona button clicked');
  }


  onSubmit() {
      if (this.brandForm.valid) {
        const updatedBrand = new Brand();

        updatedBrand.id =  this.brand.id;
        updatedBrand.name = this.brandForm.get('name')?.value;
        updatedBrand.nonPropietaryName = this.brandForm.get('nonPropietaryName')?.value;
        updatedBrand.drugType = this.brandForm.get('drugType')?.value;
        updatedBrand.indication = this.brandForm.get('indication')?.value;
        updatedBrand.launchStatus = this.brandForm.get('launchStatus')?.value;
        updatedBrand.logo = this.brandForm.get('logo')?.value;

        this.brandService.updateBranch(updatedBrand);

        this.showSuccessToast(updatedBrand.name)

        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/core/overview']);
        });
    } else {
        this.brandForm.markAllAsTouched(); // Mark all fields as touched to show validation errors
    }
  }

  showSuccessToast(name : string) {
    this.snackBar.open('Brand updated successfully!', 'X', {
      duration: 10000,
      verticalPosition: 'bottom', 
      horizontalPosition: 'center',
    });
  }

}
