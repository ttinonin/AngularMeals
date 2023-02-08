import { Component } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://www.seriouseats.com/thmb/HCnqq0O2npAXUoH7_1FdgtZQl0M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/pan-roasted-chicken-vegetables-dijon-jus-recipe-hero-02_1-c3e427250efe40259dc8fab9ff66ea74.JPG')
  ];
}
