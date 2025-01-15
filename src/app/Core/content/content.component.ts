
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Content } from 'src/app/Model/Content';
import { ContentService } from 'src/service/content.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  displayedColumns: string[] = ['icon', 'title', 'contentType', 'audience', 'topic', 'date'];
  dataSource= new MatTableDataSource<Content>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private contentService: ContentService) {
    
  }

  ngOnInit() {
    this.contentService.getContents().subscribe(contents => {
      this.dataSource.data = contents;
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
