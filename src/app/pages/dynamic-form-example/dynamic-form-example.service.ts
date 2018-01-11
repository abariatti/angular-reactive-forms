import { Injectable } from '@angular/core';
 
import { DropdownQuestion } from './question/question-dropdown';
import { QuestionBase } from './question/question-base';
import { TextboxQuestion } from './question/question-textbox';
 
@Injectable()
export class DynamicFormExampleService {
 
  // Todo: get from a remote source of question metadata
  // Todo: make asynchronous
  public getQuestions() {
 
    let questions: QuestionBase<any>[] = [
 
      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),
 
      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      }),

      new TextboxQuestion({
        key: 'emailAddressConfirm',
        label: 'Email Confirm',
        type: 'email',
        order: 3
      }),

      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 4
      }),

    ];
 
    return questions.sort((a, b) => a.order - b.order);
  }
}
