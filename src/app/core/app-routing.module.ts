import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadFileComponent } from '../pages/upload-file/upload-file.component';

const routes: Routes = [
    { path: '', redirectTo: '/uploadfile', pathMatch: 'full' },
    { path: 'uploadfile', component: UploadFileComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
