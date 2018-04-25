import { Component, OnInit } from '@angular/core';
import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  animateChild,
  stagger,
  keyframes
} from '@angular/animations';
@Component({
  selector: 'app-mywork',
  templateUrl: './mywork.component.html',
  styleUrls: ['./mywork.component.scss'],
  animations: [
    trigger('childAnimation', [
      transition('* <=> *', [
        group([
          query(
            ':enter',
            [
              style({
                
                opacity: 0,
                transform: 'rotateY(-90deg)'
              }),
              animate(
                '0.5s ease-in-out',
                style({ opacity: 1, transform: 'rotate(0)' })
              ),
              animateChild()
            ],
            { optional: true }
          ),
          query(
            ':leave',
            [animate('0.5s', style({ opacity: 0 })), animateChild()],
            { optional: true }
          )
        ])
      ])
    ]),trigger('animateGallery', [
      transition('* <=> *', [
        group([
          query(
            ':enter',
            [
              style({
                opacity: 0,
                transform: 'translateX(1000px) rotate(0)'
              }),  
              animate(
                '0.5s ease-in-out',
                style({ opacity: 1, transform: 'translateX(0px) rotate(0)' })
              ),
              animateChild()
            ],
            { optional: true }
          ),
          query(
            ':leave',
            [animate('.3s', style({ opacity: 0, })), animateChild()],
            { optional: true }
          )
        ])
      ])
    ])
  ]
})

export class MyworkComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  exp: boolean = false;
  child: boolean = false;
}
