import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EditMessageComponent } from './edit-message.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [EditMessageComponent]
})
export class EditMessageModule { }
