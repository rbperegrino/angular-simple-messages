import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Route, Params } from '@angular/router';
import { MessagesService, Message, ImageMessage } from 'app/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-edit-message',
  templateUrl: './edit-message.component.html',
  styleUrls: ['./edit-message.component.scss']
})
export class EditMessageComponent implements OnInit, OnDestroy {
  public message: Message;
  public index: number;
  public sub$: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private messagesService: MessagesService,
  ) {

    }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.index = params['index'];
      this.message = this.messagesService.listMessages()[this.index];
    })
  }

  ngOnDestroy() {
    this.sub$.unsubscribe();
  }


  isImageMessage() {
    return this.message instanceof ImageMessage;
  }

  edit() {
    this.messagesService.editMessage(this.index, this.message);
    this.router.navigateByUrl('old-messages');
  }
}
