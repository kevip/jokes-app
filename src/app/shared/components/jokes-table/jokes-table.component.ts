import { AfterViewInit, Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { JokeModel } from '../../../core/http/jokes.model';

@Component({
  selector: 'rj-jokes-table',
  standalone: true,
  imports: [MatTableModule, MatSortModule, MatPaginatorModule],
  templateUrl: './jokes-table.component.html',
  styleUrl: './jokes-table.component.scss'
})
export class JokesTableComponent implements OnChanges, AfterViewInit {
  displayedColumns: string[] = ['id', 'type', 'setup', 'punchline'];

  dataSource = new MatTableDataSource<JokeModel>();

  constructor(private _liveAnnouncer: LiveAnnouncer) { }

  @Input() jokes: JokeModel[] = [];

  @ViewChild(MatSort) sort!: MatSort;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['jokes'] && this.jokes) {
      this.dataSource.data = this.jokes;
    }
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    // used for accesibility purposes:
    this._liveAnnouncer.announce(
      sortState.direction ? `Sorted ${sortState.direction} ending` : 'Sorting cleared'
    );
  }
}
