
import { Component, OnInit } from '@angular/core';
import { ToDOService } from '../to-do.service';
import { Interface } from 'readline';
import { ToDo } from 'src/interface';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  user?: ToDo[] |any;
  
}
