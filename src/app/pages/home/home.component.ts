import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('#home_micaraxd').tooltip({trigger: 'manual'});
    $('#home_micaraxd').tooltip('hide');
    $('#home_micaraxd').tooltip('disable');
  }

}
