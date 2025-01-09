import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Reference } from 'src/app/Model/Reference';
import { ReferenceService } from 'src/service/reference.service';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss']
})
export class ReferencesComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['name', 'authors', 'journal', 'year', 'actions'];
  dataSource = new MatTableDataSource<Reference>([]);
  pageEvent: any;

  @ViewChild(MatSort) sort!: MatSort;

  constructor(private referenceService: ReferenceService) {}

  ngOnInit(): void {
    this.getReferences()
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value; // Cast to HTMLInputElement
    this.dataSource.filter = filterValue.trim().toLowerCase();
}

  onUpload(): void {
     this.referenceService.uploadReference();
  }

  onDownload(element: Reference): void {
     console.log("Downloading")
      
  }

  getReferences(){
    this.referenceService.getReferences().subscribe(references => {
      this.dataSource.data = references;
    });
  }

  onDelete(element: Reference): void {
    this.referenceService.deleteReference(element);
    this.getReferences();
  }

}
