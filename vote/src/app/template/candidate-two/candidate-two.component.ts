import { Component, OnInit, } from '@angular/core';



@Component({
  selector: 'spa-candidate-two',
  templateUrl: './candidate-two.component.html',
  styleUrls: ['./candidate-two.component.css'],

})


export class CandidateTwoComponent implements OnInit {

  title = 'O Império Galáctico'

  constructor() { }

  votosEmpire: number = 1;

  ngOnInit(): void {

    this.votosEmpire = 0;
  }

  adicionaVotoEmpire() {
    this.votosEmpire++;
  }
}
