import { Component, ViewChild } from '@angular/core';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  counter = 0;

  @ViewChild(HelloWorldComponent) child: HelloWorldComponent;

  private increaseCounter(this) {
    this.counter++;
  }
  private getHelloWorldCounterValue(){
    this.counter = this.child.getCounter();
  }
}

