import { Injectable } from '@nestjs/common';
import { info } from '../utils/recipes';
import { filter } from 'rxjs';
const recipes = require('../utils/recipes');
@Injectable()
export class JsonData {
  getData(entryData): any {
    const result = this.filterRecipes(entryData.taste);
    return result;
  }

  filterRecipes(entryData): any {
    var filterdata = [];
    var recipesData = recipes.info;
    entryData.forEach(function (taste) {
      recipesData.forEach(function (value, key) {
        if (value.taste.indexOf(taste) > -1) {
          if (!(filterdata.indexOf(value.name) > -1)) {
            //filterdata.push(value.name, value.taste);
            filterdata.push(value.name);
          }
        }
      });
    });
    return filterdata;
  }
}
