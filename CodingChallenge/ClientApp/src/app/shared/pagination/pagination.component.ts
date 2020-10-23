import {
    Component,
    Input,
    Output,
    EventEmitter,
    OnInit,
    OnChanges,
    SimpleChanges,
  } from '@angular/core';
  
  import paginate from 'jw-paginate';

  @Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html'
  })
  export class PaginationComponent implements OnInit, OnChanges {
    @Input() items: Array<any>;
    @Output() changePage = new EventEmitter<any>(true);
    @Output() searchResult = new EventEmitter<any>(true);
    @Input() initialPage = 1;
    @Input() pageSize = 10;
    @Input() maxPages = 10;
    @Input() searchString = '';
  
    pager: any = {};
  
    ngOnInit() {
      // set page if items array isn't empty
      if (this.items && this.items.length) {
        this.setPage(this.initialPage);
      }
    }
  
    ngOnChanges(changes: SimpleChanges) {
      // reset page if items array has changed
      if (changes.items.currentValue !== changes.items.previousValue) {
        this.setPage(this.initialPage);
      }
      this.filterBySerachText();
    }
  
    filterBySerachText() {
      if (this.searchString === '') {
        //   this.searchResult.emit(this.items);
        this.setPage(1);
      } else {
        this.searchResult.emit(
          this.items.filter((e) =>
            e.name.toLowerCase().includes(this.searchString.toLowerCase())
          )
        );
      }
    }
  
    setPage(page: number) {
      // get new pager object for specified page
      this.pager = paginate(
        this.items.length,
        page,
        this.pageSize,
        this.maxPages
      );
  
      // get new page of items from items array
      const pageOfItems = this.items.slice(
        this.pager.startIndex,
        this.pager.endIndex + 1
      );
  
      // call change page function in parent component
      this.changePage.emit(pageOfItems);
    }
  }