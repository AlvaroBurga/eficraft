import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Content } from 'src/app/Model/Content';
import { ContentService } from 'src/service/content.service';

@Component({
  selector: 'app-content-create',
  templateUrl: './content-create.component.html',
  styleUrls: ['./content-create.component.scss']
})
export class ContentCreateComponent implements OnInit {

  contentType: string | undefined = undefined;
  contentForm: FormGroup;
  iconMappings = [
    { type: 'Detail Aid', icon: 'assignment' },
    { type: 'Leaflet', icon: 'description' },
    { type: 'Email', icon: 'email' },
    { type: 'Banner', icon: 'flag' },
    { type: 'Brochure', icon: 'chrome_reader_mode' },
    { type: 'Article', icon: 'article' },
    { type: 'Social Media', icon: 'share' }
  ];

  constructor(
    private route: ActivatedRoute,
    private contentService: ContentService,
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar  
  ) { 
    this.contentForm = this.fb.group({
      title: ['', Validators.required],
      audience: [''],
      topic: [''],
      words: [20],
      comments: ['']
    });
  }

  onSubmit() {
    if (this.contentForm.valid) {
        const content = new Content();

        content.title = this.contentForm.get('title')?.value;
        content.audience = this.contentForm.get('audience')?.value;
        content.topic = this.contentForm.get('topic')?.value;
        content.numberOfWords = this.contentForm.get('words')?.value;
        content.comments = this.contentForm.get('comments')?.value;
        content.date = new Date()
        content.contentType = this.contentType;

        content.icon = this.iconMappings.find(item => item.type === this.contentType)?.icon;

        this.contentService.saveContent(content);

        this.showSuccessToast(content.title)

        this.router.navigate(['/core/content']);
    } else {
        this.contentForm.markAllAsTouched();
    }
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.contentType = params['type'];
    });
  }

  showSuccessToast(name : string | undefined) {
    this.snackBar.open('content ' + name + ' was uploaded successfully!', 'X', {
      duration: 10000,
      verticalPosition: 'bottom', 
      horizontalPosition: 'center',
    });
  }

}
