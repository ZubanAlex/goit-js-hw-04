'use strict';
const inventory = {
  items: ['Монорельса', 'Фильтр'],
  add(itemName) {
    inventory.items.push(itemName);
  },
  remove(itemName) {
    inventory.items = inventory.items.filter(item => item !== itemName);
  },
};

const invokeInventoryOperation = function(itemName, inventoryAction) {
  console.log(`Invoking ${inventoryAction.name} opeartion on ${itemName}`);
  inventoryAction(itemName);
};

invokeInventoryOperation('Аптечка', inventory.add);

console.log(inventory.items);

invokeInventoryOperation('Фильтр', inventory.remove);

console.log(inventory.items);
