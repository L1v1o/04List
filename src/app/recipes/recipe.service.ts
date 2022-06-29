import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import {Subject} from "rxjs";


@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  // private recipes: Recipe[] = [
    // new Recipe(
      //  'Apored',
      // 'JAAAA MOIN LEUDE Apos auf trockn am start meine Freunde',
      // 'https://www.bravo.de/assets/field/image/apored_1.jpg',
      // [
        //  new Ingredient('Freshe Yeezys', 2),
        //  new Ingredient('Apoburgies', 1),
        //  new Ingredient('Leon Machère', 1)
        //  ]),
    //  new Recipe('Wurscht',
      // 'Kackwurscht in meine Arsch, dicke fette Kackwurscht',
      // 'https://www.op-online.de/bilder/2020/10/20/90074726/1800945-2125754472-schimmliges-brot-2uQIjHSga3ec.jpg',
      //  [
        //   new Ingredient('Fleisch', 1),
        //   new Ingredient('Brüzelwuz', 5)
        //  ]),
    // new Recipe('Joloschnitzel',
      // 'Jetzt frisch im Kühlregal',
      // 'https://amp.infranken.de/storage/image/6/0/9/2/2422906_noscale_1qcD8e_DYBUa8.jpg',
      // [
        //   new Ingredient('Fleisch', 1),
        //   new Ingredient('Chipensnuggets', 20),
        //   new Ingredient('Saftbratusmaximus', 1)
        //  ])
    //];

  private recipes: Recipe[] = [];

  constructor(private slService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]){
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }


  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
  this.recipes.push(recipe);
  this.recipesChanged.next(this.recipes.slice());
  }
  updateRecipe(index: number, newRecipe: Recipe){
  this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
