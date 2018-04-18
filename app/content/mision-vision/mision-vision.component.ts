import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mision-vision',
  templateUrl: './mision-vision.component.html',
  styleUrls: ['./mision-vision.component.css']
})
export class MisionVisionComponent implements OnInit {
  
  vision = [
    {
      title: 'Visión',
      subtitle: 'Hacia donde vamos como empresa.',
      desc: 'Convertirnos en una industria con mayor capacidad productiva y mayor participación en el mercado para finales del 2017.',
      project: 'Le invitamos a ver nuestro proyecto de industrialización, donde explicamos con mas detalles nuestro objetivo principal de esta inversión.',
      img: 'assets/images/industria_1.png'
    }
  ];

  mision = [
    {
      title: 'Misión',
      desc: 'Aportar valor al desarrollo social y económico, generando bienestar y crecimiento a nuestro país.'
    }
  ];

  valores = [
    {
      name: 'Trabajo en equipo', 
      desc: 'Nos permite llevar a cabo los objetivos trazados por la organización con la mejor energía posible, donde el capital humano se integra para consolidar el compañerismo, solidaridad y comunicación asertiva, el cual nos permite actuar como uno solo.'
    },
    {
      name: 'Respeto', 
      desc: 'Al obedecer las reglas y normas de la organización, nos permite convivir de manera armoniosa para llegar al éxito de manera eficiente. El respeto nos une, fortalece y nos vuelven mas tolerantes con nuestros compañeros.'
    },
    {
      name: 'Responsabilidad', 
      desc: 'Como empresa sentimos que es nuestra labor aportar valor a nuestro entorno social, promoviendo la educación, alimentación sana, hábitos saludables, cuidado del medio ambiente y seguridad.'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
