import { Component } from '@angular/core';
import { Task } from './beer.model';

@
Component({
    selector: 'my-app',
    template: `
    <div class="container">
      <div class="container">
        <div class="row beer" *ngFor="let beer of beers">
          <div class="col-sm-8"><img src="./../resources/image/{{beer.image}}" alt="" /></div>
          <div class="col-sm-4 jumbotron brew-note">
            <ul class="list-group">
            <h4>{{beer.title}}</h4>
              <li class="list-group-item">{{beer.plato}}
                <sup>degree plato</sup></li>
              <li class="list-group-item">{{beer.ibu}}
                <sup>ibu</sup></li>
              <li class="list-group-item"><sup>ALC</sup>
              {{beer.abv}}%
              <sup>By Volume</sup></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `
})
export class AppComponent {
  beers: Beer[] = [
    new Beer("Gear Up IPA", 14, 65, 6.2, "gearUp.png"),
    new Beer("Organic hopworks", 14, 75, 6.6, "hub.png"),
    new Beer("organic hub lager", 11.5, 32, 5.1, "hubLager.png"),
    new Beer("NONSTOP HEF HOP", 10.5, 20, 3.9, "hefHop.png"),
    new Beer("organic survival", 15, 35, 5.8, "stout.png"),
    new Beer("Deluxe organic ale", 16, 55, 7.0, "DOA.png")
  ];

}
