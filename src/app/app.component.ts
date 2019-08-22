import { Component } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
import { APIService } from '../API';
import { Restaurant } from './types/restaurant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  template: `
    <div>
      <div *ngFor="let restaurant of restaurants">
        {{ restaurant.name }}
      </div>
    </div>`
})
export class AppComponent {
  restaurants: Array<Restaurant>;

  constructor(
    public api: APIService,
    public amplify: AmplifyService,
  ) {
    amplify.auth().currentAuthenticatedUser().then(console.log)
  }

  ngOnInit() {
    this.api.ListRestaurants().then(data => {
      this.restaurants = data.items;
    });
  }
}