import { Component, OnChanges, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges{

  @Input() nome:string = '';

  constructor(){console.log("Construtor")}

  ngOnChanges(): void {
    console.log("OnChanges"); // OnChanges tá atrelado a qualquer mudança e atribuição de valor que acontece via o Input. Executa quando o valor da propriedade é alterada.
  }

  ngOnInit(): void {
      console.log("Testando o OnInit, que executa uma ação sempre que o componente nasce (é iniciado)");
  }

}
