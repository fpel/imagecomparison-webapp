import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadFileComponent } from '../pages/upload-file/upload-file.component';

const routes: Routes = [
    { path: '', redirectTo: '/login1', pathMatch: 'full' },
    { path: 'login1', component: UploadFileComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
