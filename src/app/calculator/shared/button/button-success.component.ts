import { Component, OnInit } from '@angular/core';
import { BaseBtnClass } from './button.component';

@Component(Object.assign({
    selector:'success-btn',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css']
},  BaseBtnClass.PropertiesData))

export class SuccessBtn extends BaseBtnClass{
    
    constructor(){
        super("btn-success");
    }

    ngOnInit(){
        super.ngOnInit();
    }
}