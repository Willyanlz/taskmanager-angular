export class Tarefa {

    constructor(
        public id?: number,
        public nome?: string,
        public concluida?: boolean) {}
}

export class ResponseTarefas {
    constructor(
        public data?: Tarefa[]) {}
}