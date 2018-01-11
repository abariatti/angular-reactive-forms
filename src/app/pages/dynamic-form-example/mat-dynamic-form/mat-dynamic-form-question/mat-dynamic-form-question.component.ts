import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from '../../question/question-base';

@Component({
  selector: 'app-mat-dynamic-form-question',
  templateUrl: './mat-dynamic-form-question.component.html',
  styleUrls: ['./mat-dynamic-form-question.component.scss']
})
export class MatDynamicFormQuestionComponent {
  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }
}
