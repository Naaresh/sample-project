import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-test', 
  template: `<div>Inline Template</div>
              <h2> {{greetUser()}}</h2>
              <input class="space" [id] ="myId" type="text" value="N"> <br>
              <input class="space" [disabled]="false" [id] ="myId" type="text" value="Not Disabled"> <br>
              <input class="space" disabled="Isdisabled" [id] ="myId" type="text" value="Disabled input"> <br>
              <button class="space" (click)="onClick()">Greet</button> {{greeting}} <br>
              <input class="space" #myInput type="text"/><br>
              <button class="space" (click)="logMessage(myInput.value)">Log</button>`,
  styles: [`
  .space{
      margin-bottom: 15px;
  } 
  `]  
})
export class TestComponent implements OnInit {
   public name = 'Kumar';
   public myId = "testId";
   public Isdisabled= "true";
   public greeting= "";
  constructor() { }

  ngOnInit() {
  }

  onClick(event){
     this.greeting = " Welcome to my App";
     // this.greeting = event.type;
  }

  logMessage(value){
    console.log(value);
  }

 
}
