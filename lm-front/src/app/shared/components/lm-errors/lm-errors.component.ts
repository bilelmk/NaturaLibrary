import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-lm-errors',
  templateUrl: './lm-errors.component.html',
  styleUrls: ['./lm-errors.component.scss']
})
export class LmErrorsComponent implements OnInit {


  @Input("array") array: any[]  ;
  @Input("error") error: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
