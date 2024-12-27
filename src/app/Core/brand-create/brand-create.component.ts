import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Brand } from 'src/app/Model/Brand';
import { BrandService } from 'src/service/brand.service';

@Component({
  selector: 'app-brand-create',
  templateUrl: './brand-create.component.html',
  styleUrls: ['./brand-create.component.scss']
})
export class BrandCreateComponent implements OnInit {

  brandForm: FormGroup;
  drugTypes: string[] = ['otc', 'prescription', 'generic'];
  launchStatuses: string[] = ['preclinical','clinical trials','approved', 'launched'];

  constructor(
    private brandService : BrandService,
    private fb: FormBuilder,
    private router: Router
  ) {
      this.brandForm = this.fb.group({
        name: ['', Validators.required],
        nonPropietaryName: ['', Validators.required],
        drugType: ['', Validators.required],
        indication: ['', Validators.required],
        launchStatus: ['', Validators.required],
        logo: [null, Validators.required]
      });
   }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.brandForm.valid) {
        console.log('Form submitted successfully:', this.brandForm.value);
        const brand = new Brand();

        brand.name = this.brandForm.get('name')?.value;
        brand.nonPropietaryName = this.brandForm.get('nonPropietaryName')?.value;
        brand.drugType = this.brandForm.get('drugType')?.value;
        brand.indication = this.brandForm.get('indication')?.value;
        brand.launchStatus = this.brandForm.get('launchStatus')?.value;
        brand.logo = this.brandForm.get('logo')?.value;

        this.brandService.addNewBrand(brand);

        this.router.navigate(['/core/brands']);
    } else {
        console.log('Please fill all required fields.');
        this.brandForm.markAllAsTouched(); // Mark all fields as touched to show validation errors
    }
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

}
