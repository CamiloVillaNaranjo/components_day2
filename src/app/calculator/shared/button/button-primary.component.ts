import { Component, OnInit } from '@angular/core';
import {BaseBtnClass} from './button.component';

@Component(Object.assign({
    selector:'primary-btn',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css']
},  BaseBtnClass.PropertiesData))

export class PrimaryBtn extends BaseBtnClass{

    constructor(){
        super("btn-primary");
    }

    ngOnInit(){
        super.ngOnInit();
    }
}