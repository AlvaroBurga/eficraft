import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Reference } from 'src/app/Model/Reference';

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

  constructor() {}

  ngOnInit(): void {
      // Replace with your data fetching logic
      this.dataSource.data = [
        new Reference(1, 'Article 1', 'Author A', 'Journal A', 2021),
        new Reference(2, 'Article 2', 'Author B', 'Journal B', 2020),
        new Reference(3, 'Article 3', 'Author C', 'Journal C', 2022),
        new Reference(4, 'Article 4', 'Author D', 'Journal D', 2019)
    ];
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value; // Cast to HTMLInputElement
    this.dataSource.filter = filterValue.trim().toLowerCase();
}

  onUpload(): void {
      // Logic for upload
      console.log('Upload button clicked');
  }

  onDownload(element: Reference): void {
      // Logic for downloading the selected entry
      console.log('Download button clicked for', element);
  }

  onDelete(element: Reference): void {
      // Logic for deleting the selected entry
      console.log('Delete button clicked for', element);
      this.dataSource.data = this.dataSource.data.filter(item => item !== element);
  }

}
