import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() formType;

  constructor() { }

  ngOnInit() {

    // if (this.formType == 'edit'){

    // }
  }

}
