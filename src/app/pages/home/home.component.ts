import { MessagesService } from './../../shared/services/messages.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tweets: string[] = [];

  constructor(
    private messagesService: MessagesService
  ){}


  ngOnInit(): void {
    this.tweets = this.messagesService.getMessages()
  }

}
