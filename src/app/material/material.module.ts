import { NgModule } from '@angular/core';
import { MatButtonModule,MatButtonToggleModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatListModule, MatIconModule, MatDividerModule } from '@angular/material'

const MaterialComponents = [
  MatButtonModule,
  MatButtonToggleModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatListModule,
  MatIconModule,
  MatDividerModule
]

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
