import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'cs-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimerComponent implements OnInit {
  time: Date = null;

  constructor(private changeDetectorRef : ChangeDetectorRef){}

  ngOnInit() {
    setInterval(() => {
      this.time = new Date();
      this.changeDetectorRef.detectChanges();
    }, 1000)
  }

}
