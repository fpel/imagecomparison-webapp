import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import {
    MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
    MatToolbarModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule, MatSidenavModule,
    MatExpansionModule, MatTreeModule, MatDividerModule, MatListModule, MatGridListModule,
} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatDialogModule,
        MatTableModule,
        MatMenuModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatSidenavModule,
        MatExpansionModule,
        MatTreeModule,
        MatDividerModule,
        MatListModule,
        MatGridListModule,
    ],
    exports: [
        CommonModule,
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatDialogModule,
        MatTableModule,
        MatMenuModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatSidenavModule,
        MatExpansionModule,
        MatTreeModule,
        MatDividerModule,
        MatListModule,
        MatGridListModule,
    ],
})
export class CustomMaterialModule { }
