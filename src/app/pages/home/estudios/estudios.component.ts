import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs/internal/observable/timer';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.scss']
})
export class EstudiosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('#home_micaraxd').tooltip('enable');
    $('#home_micaraxd').tooltip({trigger: 'hover'});
    $('#home_micaraxd').tooltip('show');
    timer(3000).subscribe(() => $('#home_micaraxd').tooltip('hide'));
  }

}
