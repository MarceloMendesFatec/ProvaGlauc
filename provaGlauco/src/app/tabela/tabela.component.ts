import { ToDOService } from './../to-do.service';

import { Component, OnInit } from '@angular/core';
import { Interface } from 'readline';
import { ToDo } from 'src/interface';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {

  constructor(private todoservice: ToDOService) { }

  ngOnInit(): void {
    this.showData();
  }

  user?: ToDo[] |any;

  showData(){
    this.todoservice.getData().subscribe(user => this.user = user)
  }
}
