import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var introBlocks = document.getElementById('intro_container') as HTMLElement;

    setTimeout(function() {
      introBlocks.classList.add('finnish_enter');
    }, 2000);
  }


}
