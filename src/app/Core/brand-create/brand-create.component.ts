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
  brand: Brand = new Brand();
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
        this.router.navigate(['/brands']);
        // Handle form submission logic here (e.g., send to backend)
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

}