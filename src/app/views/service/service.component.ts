import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  services = [
    { 
      title: 'Reparação de Quadros',
      description:'Clique aqui e comece a digitar. Veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem.'
    },
    { 
      title: 'Inspecção de Fiação',
      description:'Clique aqui e comece a digitar. Veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem.'
    },
    { 
      title: 'Serviços de Emergência',
      description:'Clique aqui e comece a digitar. Veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem.'
    },
    { 
      title: 'Instalações Eléctricas',
      description:'Clique aqui e comece a digitar. Veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem.'
    },
    { 
      title: 'Reparação de Tomadas',
      description:'Clique aqui e comece a digitar. Veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem.'
    },
    { 
      title: 'Manutenção Geral',
      description:'Clique aqui e comece a digitar. Veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem.'
    }
  ]
  constructor() { }
  ngOnInit(): void {
  }

}
