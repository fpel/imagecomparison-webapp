import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'app-upload-file',
    templateUrl: './upload-file.component.html',
    styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {
    //Variaveis
    username: string;

    //Metodos
    constructor(private router: Router) { }

    ngOnInit() {
    }




}
