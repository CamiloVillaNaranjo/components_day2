import { Component, OnInit, Input, Optional, Output, EventEmitter } from '@angular/core';

export class BaseBtnClass implements OnInit {

static PropertiesData = {
  inputs: ['displayText'],
  outputs: ['fuckEvent']
};

  @Input() displayText : string;
  @Output() fuckEvent: EventEmitter<string> = new EventEmitter();
  typeClass : string;

  constructor(@Optional() childClass:string="btn-default") {
    this.typeClass = childClass;
   }

  ngOnInit() {
  }

  pushedButton(){
    console.log(this.displayText);
    this.fuckEvent.emit(this.displayText);
  }

}
