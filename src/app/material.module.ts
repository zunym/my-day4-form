import { NgModule } from '@angular/core'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

const MODULES = [
    MatFormFieldModule,MatInputModule,
    MatButtonModule,MatToolbarModule,
    MatIconModule
]
@NgModule({
imports: MODULES,
exports: MODULES
})

export class MaterialModule{}
