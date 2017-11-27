import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewMessagesComponent } from './new-messages/new-messages.component';
import { OldMessagesComponent } from './old-messages/old-messages.component';
import { EditMessageComponent } from './edit-message/edit-message.component'

const routes: Routes = [
  { path: '', redirectTo: '/new-messages', pathMatch: 'full' },
  { path: 'new-messages', component: NewMessagesComponent },
  { path: 'old-messages', component: OldMessagesComponent },
  { path: 'edit/:index', component: EditMessageComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/new-messages' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
