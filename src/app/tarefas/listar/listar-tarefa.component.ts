import { Component, OnInit } from '@angular/core';
import { Tarefa, TarefaService } from '../shared';
import { EditarTarefaComponent } from '../editar';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {

  tarefas: Tarefa[];
  editarNomeComp: EditarTarefaComponent;

  constructor(private tarefaService: TarefaService) {}

  ngOnInit(){
    this.tarefaService.listarTodos().subscribe(res => this.tarefas = res);
    // setInterval(()=>{
      //   this.tarefaService.listarTodos().subscribe(res => this.tarefas = res);
      // }, 1000);
  }

  listarTodos(){
    return this.tarefaService.listarTodos();
  }

  remover($event: any, tarefa: Tarefa): void{
    $event.preventDefault();
    if (confirm(`Deseja remover a tarefa: ${tarefa.nome} ?`)) {
      this.tarefaService.remover(tarefa.id).subscribe(() => {
        this.tarefaService.listarTodos().subscribe(res => this.tarefas = res);
        console.log(`${tarefa.nome} foi removida!`);
      });
    }
  }

  alterarStatus($event: any,tarefa: Tarefa): void{
    $event.preventDefault();
    this.tarefaService.alterarStatus(tarefa.id).subscribe(() => {
      this.tarefaService.listarTodos().subscribe(res => this.tarefas = res);
      if(!tarefa.concluida === true){
        console.log(`'${tarefa.nome}' foi marcada como 'Concluída'`)
      }else{
        console.log(`'${tarefa.nome}' foi marcada como 'Não Concluída'`)
      }
    });
  }

  atualizarNome(): void{
    this.editarNomeComp.atualizarNome();
  }

}
