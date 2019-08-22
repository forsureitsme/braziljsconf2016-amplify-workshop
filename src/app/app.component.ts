import { APIService } from '../API';
import { Restaurant } from './types/restaurant';

@Component({
  template: `
    <div>
      <div *ngFor="let restaurant of restaurants">
        {{ restaurant.name }}
      </div>
    </div>`
})
export class AppComponent implements OnInit {
  restaurants: Array<Restaurant>;
  constructor(public api: APIService) { }
  ngOnInit() {
    this.api.ListRestaurants().then(data => {
      this.restaurants = data.items;
    });
  }
}
