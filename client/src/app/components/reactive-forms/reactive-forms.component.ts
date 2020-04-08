import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})

export class ReactiveFormsComponent implements OnInit {

  private survey: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.survey = new FormGroup({
      sections: new FormArray([
        this.initSection(),
      ]),
    });
  }

  /**
   * @description to initialize new section as a new FormGroup
   */

  initSection(): FormGroup {
    return new FormGroup({
      sectionTitle: new FormControl('Main'),
      sectionDescription: new FormControl('default'),
      questions: new FormArray([])
    });
  }

  /**
   * @description to initialize new question as child to section
   */

  initDefaultQuestions(): FormGroup {
    return new FormGroup({
      questionTitle: new FormControl(''),
      questionType: new FormControl('', Validators.required),
      childQuestions: new FormArray([])
    });
  }

  /**
   * @description to initialize new question as child to section
   */

  public initQuestion(): FormGroup {
    return new FormGroup({
      questionTitle: new FormControl(''),
      questionType: new FormControl('', Validators.required),
      childQuestions: new FormArray([])
    });
  }

  /**
   * @description to initialize new ChildQuestion as child to questions
   */

  initChildQuestion(): FormGroup {
    return new FormGroup({
      childQuestionTitle: new FormControl(''),
      childQuestionType: new FormControl('', Validators.required),
      grandChildQuestions: new FormArray([])
    });
  }

  /**
   * @description to initialize new GrandChildQuestion as child to ChildQuestion
   */

  initGrandChildQuestion(): FormGroup {
    return new FormGroup({
      grandChildQuestionTitle: new FormControl(''),
      grandChildQuestionType: new FormControl('', Validators.required)
    });
  }

  /**
   *
   * @param fieldPath exact path of the element on which we have to add child
   * @param callback method name tio intialize the formgroup of given data
   */

  addChildGeneric(fieldPath: any, callback: () => FormGroup) {
    const control = this.survey.get(fieldPath) as FormArray;
    control.push(callback());
  }
  /**
   *
   * @param form FormGroup on which we have to find childs
   * @param child Name of child
   */
  getFieldGeneric(form: any, child: string) {
    return form.controls[child].controls;
  }

  /**
   *
   * @param fieldPath exact path of the element on which we have to remove child
   * @param index index at which we have to remove
   */

  removeChildGeneric(fieldPath: any, index: number) {
    const control = this.survey.get(fieldPath) as FormArray;
    control.removeAt(index);
  }

  onSubmit(form: any) {

  }


}
