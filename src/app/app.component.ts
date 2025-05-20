import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'chat';
   text: string = '';
  listMessage: string[] = [];
  addMessage() {
  if(this.text!= ''){
    this.listMessage.push(this.text)
    this.text = ''
    } 
  }
} 