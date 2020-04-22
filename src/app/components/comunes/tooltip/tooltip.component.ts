import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs/internal/observable/timer';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';
import { Subject } from 'rxjs/internal/Subject';


@Component({
  selector: 'app-tooltip',
  template: ``,
  styles: [
  ],
})
export class TooltipComponent implements OnInit {
  protected ngUnsubscribe: Subject<void> = new Subject<void>();
  protected mouseOutUnsub: Subject<void> = new Subject<void>();
  constructor() { }

  ngOnInit(): void {
  }

  showTool(ele) {
    this.ngUnsubscribe.next();
    timer(200).pipe(takeUntil(this.mouseOutUnsub)).subscribe(() => {
      $(ele).tooltip({
        delay: {hide: 200, show: 0}
      });
      $(ele).tooltip('show');
    });
  }

  removeTool() {
    this.mouseOutUnsub.next();
    timer(1000).pipe(takeUntil(this.ngUnsubscribe)).subscribe(() => $('.tooltip').remove());
  }

}
