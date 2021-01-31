import { Injectable } from '@angular/core';
import { DropdownQuestion } from '../Common/question-control/question-dropdown';
import { QuestionBase } from '../Common/question-control/question-base';
import { TextboxQuestion } from '../Common/question-control/question-textbox';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor() { }
  // TODO: get from a remote source of question metadata
  getQuestions() {

    const questions: QuestionBase<string>[] = [

      new TextboxQuestion({
        key: 'Name',
        label: 'Name',
        //value: 'Bombasto',
        required: true,
        order: 1
      }),
      new TextboxQuestion({
        key: 'Age',
        label: 'Age',
        mustNumber: true,
        order: 2
      }),
      new DropdownQuestion({
        key: 'Sex',
        label: 'Sex',
        options: [
          {key: 'male',  value: 'male'},
          {key: 'female',  value: 'female'}
        ],
        order: 3
      }),
      new DropdownQuestion({
        key: 'Level',
        label: 'Level',
        options: [
          {key: '6',  value: '6'},
          {key: '7',  value: '7'},
          {key: '8',  value: '8'},
          {key: '9',  value: '6'},
          {key: '10',  value: '10'},
        ],
        order: 4
      }),
      new DropdownQuestion({
        key: 'IsAdmin',
        label: 'IsAdmin',
        options: [
          {key: 'true',  value: 'true'},
          {key: 'false',  value: 'false'}
        ],
        order: 5
      })
    ];

    return of(questions.sort((a, b) => a.order - b.order));
  }
}
