import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Tarefa, TarefaService } from '../shared';
import { Router } from '@angular/router';
import { ListarTarefaComponent } from '../listar';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar-tarefa.component.html',
  styleUrls: ['./cadastrar-tarefa.component.css']
})
export class CadastrarTarefaComponent implements OnInit{

  @ViewChild("formTarefa", {static: true}) formTarefa: NgForm;
  tarefa: Tarefa;
  listarComponent: ListarTarefaComponent;

  constructor(
    private tarefaService: TarefaService,
    private router: Router){}

    ngOnInit(){
        this.tarefa = new Tarefa();
    }

    cadastrar(nome: string): void {
      if (this.formTarefa.form.valid) {
        const novaTarefa = new Tarefa();
        novaTarefa.nome = nome
        this.tarefaService.cadastrar(novaTarefa).subscribe(() =>{
          this.router.navigate(["/tarefas"]);
          console.log(`A tarefa: '${novaTarefa.nome}' foi cadastrada!`)
        });
      }
    }
}
