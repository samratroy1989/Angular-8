import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2>If-Else Directive Example </h2>
  <div *ngIf="displayName; then thenBlock; else elseBlock"></div>
  <ng-template #thenBlock>
    <h3>
      Welcome to my world!
    </h3>
  </ng-template>
  <ng-template #elseBlock>
    <h3>
      Name is hidden.
    </h3>
  </ng-template>

  <br/>
  <h2>Switch Directive Example </h2>
  <div [ngSwitch]="color">
    <div *ngSwitchCase="'red'"> You picked Red Color</div>
    <div *ngSwitchCase="'green'"> You picked Green Color</div>
    <div *ngSwitchCase="'blue'"> You picked Blue Color</div>
    <div *ngSwitchDefault> Pick again</div>
  </div>

  <br/>
  <h2>For Directive Example </h2>
  <div *ngFor="let color of colors; first as f; index as i; odd as o">
    <h3>First position? {{f}} - {{color}} -- Index {{i}} -- Odd? {{o}}</h3>
  </div>
  <br/>
  <h2>Pipes as filter Example </h2>
  <h3>
  <h4>Pipes on Text</h4>
   {{displayText | uppercase}}<br/>
   {{displayText | lowercase}} <br/>
   {{displayText | titlecase}}<br/>
   {{displayText | slice:6}}<br/>
   {{displayText | slice:3:6}}<br/>
   <h4>Pipes on Json</h4>
   {{person | json}}<br/>
   <h4>Pipes on Number</h4>
   {{5.678 | number: '1.2-3'}}<br/>
   {{5.678 | number: '3.4-5'}}<br/>
   {{5.678 | number: '3.1-2'}}<br/>
   {{0.25 | percent}}<br/>
   <h4>Pipes on Currency</h4>
   {{0.25 | currency:'USD':'code'}}<br/>
   {{5.75 | currency: 'INR'}}<br/>
  </h3>
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public displayName = true;  //true  false
  public color="blue"; //green  blue  red
  public colors=["red","green","blue","yellow"];  
  public displayText="Welcome to my world!";

  public person={
    "firstName":"Samrat",
    "lastName":"Roy"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
