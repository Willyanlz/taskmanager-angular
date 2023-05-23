import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; 
import { NgForm } from '@angular/forms'; 

import { TarefaService, Tarefa } from '../shared';

@Component({
  selector: 'app-editar-tarefa',
  templateUrl: './editar-tarefa.component.html',
  styleUrls: ['./editar-tarefa.component.css']
})
export class EditarTarefaComponent implements OnInit {

  @ViewChild('formTarefa', { static: true }) formTarefa: NgForm;
  tarefa: Tarefa;
  id: number;
  nome: string;
  nomeAnt: string;

  constructor(
    private tarefaService: TarefaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.tarefaService.getById(this.id).subscribe((data) => {
      this.nome = data.nome;
      this.nomeAnt = data.nome;
    });
  }

  atualizarNome() {
    this.tarefaService.atualizarNome(this.id, this.nome).subscribe(() => {
      this.router.navigate(["/tarefas"]);
    });
    console.log(`'${this.nomeAnt}' foi alterada para '${this.nome}'`);
  }
  
}
