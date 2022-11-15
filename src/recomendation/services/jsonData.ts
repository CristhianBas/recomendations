import { Injectable } from '@nestjs/common';
import * as recipes from '../utils/recipes';
@Injectable()
export class JsonData {
  getData(entryData): any {
    const result = this.filterRecipes(entryData.taste);
    return result;
  }

  filterRecipes(entryData): any {
    const filterdata = [];
    const recipesData = recipes.info;
    entryData.forEach(function (taste) {
      recipesData.forEach(function (value) {
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
