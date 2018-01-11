import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from '../question/question-base';
import { QuestionControlService } from '../question/question-control.service';

@Component({
  selector: 'app-mat-dynamic-form',
  templateUrl: './mat-dynamic-form.component.html',
  styleUrls: ['./mat-dynamic-form.component.scss'],
  providers: [ QuestionControlService ]
})
export class MatDynamicFormComponent implements OnInit {

  @Input() questions: QuestionBase<any>[] = [];
  form: FormGroup;
  payLoad = '';
 
  constructor(private qcs: QuestionControlService) {  }
 
  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }
 
  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }
}
