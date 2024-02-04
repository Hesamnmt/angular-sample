import { UnknownService } from './../unknown.service';
import { Component, OnInit } from '@angular/core';
// import { Component, Input, trigger, state, style, transition, animate } from '@angular/core';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  animations: [
    // trigger('collapseAnimation', [
    //   state(
    //     'collapsed',
    //     style({
    //       height: '0',
    //       overflow: 'hidden',
    //       opacity: '0',
    //     })
    //   ),
    //   state(
    //     'expanded',
    //     style({
    //       height: '*',
    //       overflow: 'visible',
    //       opacity: '1',
    //     })
    //   ),
    //   transition('collapsed <=> expanded', animate('300ms ease-out')),
    // ]),
  ],
})
export class TestComponent implements OnInit {

  constructor(private UnknownService : UnknownService) { }

  unknownId !: number;


  ngOnInit(): void {

  }

}


