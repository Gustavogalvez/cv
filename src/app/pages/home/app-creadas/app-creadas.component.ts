import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';

@Component({
  selector: 'app-app-creadas',
  templateUrl: './app-creadas.component.html',
  styleUrls: ['./app-creadas.component.scss']
})
export class AppCreadasComponent implements OnInit {

  constructor(public route: Router) { }

  ngOnInit(): void {
    $('#home_micaraxd').tooltip('enable');
    $('#home_micaraxd').tooltip({trigger: 'hover'});
    $('#home_micaraxd').tooltip('show');
    timer(3000).subscribe(() => $('#home_micaraxd').tooltip('hide'));
  }

}
