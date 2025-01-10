import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Fact } from 'src/app/Model/Fact';
import { FactService } from 'src/service/fact.service';

@Component({
  selector: 'app-facts',
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.scss']
})
export class FactsComponent implements OnInit, AfterViewInit {


  displayedColumns: string[] = ['fact', 'topic', 'reference', 'actions'];
  dataSource = new MatTableDataSource<Fact>([]);
  pageEvent: any;


  @ViewChild(MatSort) sort!: MatSort;

  constructor(private factService : FactService) { }

  ngOnInit(): void {
    this.getFacts()
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
}

  onUpdate(element: Fact): void {
     this.factService.updateFact(element);
  }

  getFacts(){
    this.factService.getFacts().subscribe(facts => {
      this.dataSource.data = facts;
    });
  }

  onDelete(element: Fact): void {
    this.factService.deleteFact(element);
    this.getFacts();
  }

}
