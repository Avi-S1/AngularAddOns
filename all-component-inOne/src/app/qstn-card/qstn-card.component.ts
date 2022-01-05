import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qstn-card',
  templateUrl: './qstn-card.component.html',
  styleUrls: ['./qstn-card.component.scss']
})
export class QstnCardComponent implements OnInit {
  answerOptions:any=[
    {option: 'A', hints: 'A is correct.'},
    {option: 'B', hints: 'B is correct.'},
    {option: 'C', hints: 'C is correct.'},
    {option: 'D', hints: 'D is correct.'}
  ]
  physicsDots:any=['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15','16','17','18','19','20']
  chemistryDots:any=['1', '2', '3', '4', '5','6', '7', '8', '9', '10', '11', '12', '13', '14', '15']

  constructor() { }

  ngOnInit(): void {
  }

}
