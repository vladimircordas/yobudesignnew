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
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    trigger('animateAbCon', [
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
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  abcont: boolean = false;
}
