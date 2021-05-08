import { Component, Input, OnInit, Output } from '@angular/core';
import {   } from '../resultados/resultados.component'



@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})


export class HomeComponent implements OnInit {

  title = 'A Ordem Jedi';

  
  constructor() { }

  votosJedi: number = 0;

  votosEmpire: number = 0;


  ngOnInit(): void {
    this.votosJedi;
    this.votosEmpire;
  }

  adicionaVotoJedi() {
    this.votosJedi++;
  }
  
  adicionaVotoEmpire() {
    this.votosEmpire++;
  }

  resetarVotos() {
  this.votosJedi = 0;
  this.votosEmpire = 0;
 }
}
