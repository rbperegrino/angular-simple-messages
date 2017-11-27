import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MessagesAreaComponent } from './messages-area/messages-area.component';
import { DistanceToNowPipe } from './distance-to-now.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [MessagesAreaComponent, DistanceToNowPipe],
  exports: [MessagesAreaComponent, DistanceToNowPipe]
})
export class SharedModule { }
