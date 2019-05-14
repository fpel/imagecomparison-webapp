import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CustomMaterialModule } from './core/material.module';
import { AppRoutingModule } from './core/app-routing.module';
import { AppComponent } from './app.component';
import { UploadFileComponent } from './pages/upload-file/upload-file.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
    declarations: [
        AppComponent,
        UploadFileComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        AppRoutingModule,
        CustomMaterialModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
