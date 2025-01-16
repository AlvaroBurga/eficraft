import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Reference } from 'src/app/Model/Reference';
import { ReferenceService } from 'src/service/reference.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-reference-upload',
  templateUrl: './reference-upload.component.html',
  styleUrls: ['./reference-upload.component.scss']
})
export class ReferenceUploadComponent implements OnInit {

  referenceForm: FormGroup;
  uploadedFileName: string | null = null;
  fileDataUrl: SafeUrl | null = null;

  constructor(
    private referenceService : ReferenceService,
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private sanitizer: DomSanitizer
  ) {
      this.referenceForm = this.fb.group({
        name: ['', Validators.required],
        authors: ['', Validators.required],
        journal: ['', Validators.required],
        year: ['', Validators.required],
        file: [null, Validators.required]
      });
   }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.referenceForm.valid) {
        const reference = new Reference();

        reference.name = this.referenceForm.get('name')?.value;
        reference.authors = this.referenceForm.get('authors')?.value;
        reference.journal = this.referenceForm.get('journal')?.value;
        reference.year = this.referenceForm.get('year')?.value;
        reference.file = this.referenceForm.get('file')?.value;

        console.log( typeof reference.file)

        this.referenceService.uploadReference(reference);

        this.showSuccessToast(reference.name)

        this.router.navigate(['/core/reference']);
    } else {
        this.referenceForm.markAllAsTouched(); // Mark all fields as touched to show validation errors
    }
  }

  onFileUpload(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      const file = target.files[0];

      const objectUrl = URL.createObjectURL(file);
      this.fileDataUrl = this.sanitizer.bypassSecurityTrustUrl(objectUrl); // Mark the URL as safe
      this.uploadedFileName = file.name; 

      this.referenceForm.patchValue({ file: file });
    }
  }

  showSuccessToast(name : string) {
    this.snackBar.open('Reference ' + name + ' was uploaded successfully!', 'X', {
      duration: 10000,
      verticalPosition: 'bottom', 
      horizontalPosition: 'center',
    });
  }




}
