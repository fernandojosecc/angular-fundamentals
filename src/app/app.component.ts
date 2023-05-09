import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Nicolas';
  age = 20;
  img = 'https://depor.com/resizer/zYAewNYe84T1H3sm_y61ClAywWI=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/K74I6DN7S5HDZKGZMZ7SJX5ARE.jpg';
  btnDisabled = true;
  person={
    name :'Nicolas',
    age : 20,
    avatar:'https://depor.com/resizer/zYAewNYe84T1H3sm_y61ClAywWI=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/K74I6DN7S5HDZKGZMZ7SJX5ARE.jpg',
  }
}
