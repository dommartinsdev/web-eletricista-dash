import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cards = [
    {
      title:'Reparação de Quadros',
      description:'Clique aqui e comece a digitar. Illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo enim ipsam.',
      images:'../../../assets/icons/icon-01.svg'
    },
    {
      title:'Inspecção de Fiação',
      description:'Clique aqui e comece a digitar. Illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo enim ipsam.',
      images:'../../../assets/icons/icon-02.svg'
    },
    {
      title:'Serviços de Emergência',
      description:'Clique aqui e comece a digitar. Illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo enim ipsam.',
      images:'../../../assets/icons/icon-03.svg'
    },
    {
      title:'Instalações Eléctricas',
      description:'Clique aqui e comece a digitar. Illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo enim ipsam.',
      images:'../../../assets/icons/icon-04.svg'
    },
    {
      title:'Reparação de Tomadas',
      description:'Clique aqui e comece a digitar. Illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo enim ipsam.',
      images:'../../../assets/icons/icon-05.svg'
    },
    {
      title:'Manutenção Geral',
      description:'Clique aqui e comece a digitar. Illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo enim ipsam.',
      images:'../../../assets/icons/icon-06.svg'
    },
    
  ]
  witnesses = [
    {
      image:'../../../assets/icons/icon-07.svg',
      description:'"IberElectrica tem cuidado da minha empresa há anos. Eles certificam-se que tudo no edifício funciona sem falhas. Confio plenamente neles."',
      fullname:'Diogo Costa',
      office:'Gerente'
    },
    {
      image:'../../../assets/icons/icon-07.svg',
      description:'"Estou a construir uma nova casa e a IberElectrica reparou o nosso sistema de fiação, luzes e até instalou o sistema de segurança. Verdadeiros profissionais."',
      fullname:'Francisco Silva',
      office:'Canalizador'
    },
    {
      image:'../../../assets/icons/icon-07.svg',
      description:'"Ficámos sem electricidade após um grande temporal. Liguei para a IberElectrica no meio da noite e eles resolveram imediatamente o problema!"',
      fullname:'Sara Mendes',
      office:'Assistente Social'
    }
  ]
  constructor() {}
  ngOnInit(): void {}
}
