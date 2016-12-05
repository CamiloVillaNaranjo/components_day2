import { Component, OnInit } from '@angular/core';
import { BaseBtnClass } from './button.component';

@Component(Object.assign({
    selector:'warning-btn',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css']
},  BaseBtnClass.PropertiesData))

export class WarningBtn extends BaseBtnClass{
    
    constructor(){
        super("btn-warning");
    }
    
    ngOnInit(){
        super.ngOnInit();
    }
}