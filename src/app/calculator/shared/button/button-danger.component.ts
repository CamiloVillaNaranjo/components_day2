import { Component, OnInit } from '@angular/core';
import { BaseBtnClass } from './button.component';

@Component(Object.assign({
    selector: 'danger-btn',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css']
}, BaseBtnClass.PropertiesData))

export class DangerBtn extends BaseBtnClass {
    
    constructor() {
        super("btn-danger");
    }

    ngOnInit() {
        super.ngOnInit();
    }
}