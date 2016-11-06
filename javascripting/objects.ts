'use strict';

interface Pizza {
  toppings: string[],
  crust: string,
  serves: number
}

var pizza: any = {
  toppings: ['cheese', 'sauce', 'pepperoni'],
  crust: 'deep dish',
  serves: 2
};

console.log(pizza);
