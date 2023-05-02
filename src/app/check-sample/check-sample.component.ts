import { AfterContentChecked,
         AfterContentInit,
         AfterViewChecked,
         AfterViewInit,
         Component,
         DoCheck,
         OnDestroy,
         OnInit } from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent
implements OnInit,
           DoCheck,
           AfterContentChecked,
           AfterContentInit,
           AfterViewChecked,
           AfterViewInit,
           OnDestroy {

  quantidade: number = 0

  constructor(){}

  adicionar(){
    this.quantidade +=1;
  }
  decrementar(){
    this.quantidade-=1;
  }

  //Checked --> Content --> view

  //Quando o primeiro conteúdo é iniciado
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }

  //Depois da inicialização da View
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }

  //Após alguma alteração, verifica o conteúdo
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }

  //Após alguma alteração, verifica a View
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }

  ngDoCheck(): void {
    console.log("ngDoCheck");
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    console.log("Goodbye my friend");
  }

  // ngDoCheck() - Executa quando propriedades do componente são verificadas
  // ngAfterContentInit() - Executa quando Alngular realiza qualquer projeção de conteúdo em seus componentes.
  // ngAfterContentCheked() - Executa sempre que conteúdo do componente é verificado pelo mecanismo de alteração do Angular.
  // ngAfterViewInit() - Executa depois que um componente é totalmente inicializado (carregou tudo)
  // ngAfterViewCheked() - Executa quando a visualização de um componente é verificada pelo algoritimo de detecção de alterações do Angular.

}
