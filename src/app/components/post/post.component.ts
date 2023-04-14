import { Component } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  tweetMessage: string =''
  tweetMaxLength: number = 40
  tweetRemain: number = this.tweetMaxLength

  changeTweet() {
    this.tweetRemain = this.tweetMaxLength - this.tweetMessage.length
  }

  sendTweet() {
    alert(`foi criado um tweet com mensagem: ${this.tweetMessage}`)
  }
}
