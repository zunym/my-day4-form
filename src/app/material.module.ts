import { NgModule } from '@angular/core'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule} from '@angular/flex-layout';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatMomentDateModule} from '@angular/material-moment-adapter';

const MODULES = [
    MatFormFieldModule,MatInputModule,
    MatButtonModule,MatToolbarModule,
    MatIconModule,FlexLayoutModule,
    MatDatepickerModule,MatMomentDateModule
]
@NgModule({
imports: MODULES,
exports: MODULES
})

export class MaterialModule{}
