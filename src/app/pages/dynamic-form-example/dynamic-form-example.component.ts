import { Component, OnInit } from '@angular/core';
import { DynamicFormExampleService } from './dynamic-form-example.service';

@Component({
  selector: 'app-dynamic-form-example',
  templateUrl: './dynamic-form-example.component.html',
  styleUrls: ['./dynamic-form-example.component.scss'],
  providers: [ DynamicFormExampleService ]
})
export class DynamicFormExampleComponent implements OnInit {
  questions: any[];

  constructor(private dfes: DynamicFormExampleService) { }

  ngOnInit() {
    this.questions = this.dfes.getQuestions();
  }
}
