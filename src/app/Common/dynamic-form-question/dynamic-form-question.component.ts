import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from '../question-control/question-base';

@Component({
  selector: 'app-question',
  templateUrl: './dynamic-form-question.component.html',
  styleUrls: ['./dynamic-form-question.component.scss']
})
export class DynamicFormQuestionComponent implements OnInit {
  @Input() question: QuestionBase<string>;
  @Input() form: FormGroup;
  errorMessage: String;

  get isValid() {
    const isValid = this.form.controls[this.question.key].valid; 
    if(!isValid){
      if(this.form.controls[this.question.key].errors.pattern) {
        this.errorMessage = 'must be a number'
      }
      else{
        this.errorMessage = 'is required'
      }
    }

    return isValid
  }

  constructor() { }

  ngOnInit() {
  }

}
