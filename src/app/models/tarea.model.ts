export class Tarea{

    titulo: string;
    descripcion: string;
    completa: boolean;

    constructor(ptitulo: string = '', pdescripcion: string = ''){

        this.titulo = ptitulo;
        this.descripcion = pdescripcion;
        this.completa = false;	
        			
    }

}