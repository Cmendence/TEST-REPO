class Dessert {
  constructor (cake, topping) {
    this.cake= cake;
    this.topping = topping;
  }
  describe () {
    return `${this.cake} will have ${this.topping}.`;
  }
}
class Cake {
  constructor(cake) {
    this.cake= cake;
    this.dessert= [];
   }
  addDessert(dessert) {
    if (dessert instanceof Dessert) {
    this.dessert.push(dessert);
    } else {
    throw new Error (`You can only add an instance of Dessert. Argument is not a dessert: ${Dessert}`);
    }
  }
   describe() {
      return  `${this.cake} has ${this.dessert.length} desserts.`;
   }
}
class Menu {
    constructor() {
        this.cakes = [];
        this.selectedCake = null;
    }
start () {
    let selection = this.showMainMenuOptions();
    while(selection != 0) {
        switch (selection) {
            case `1`:
                this.createCake();
                break;
            case `2`:
                this.viewCake();
                break;
            case `3`:
                this.deleteCake();
                break;
            case `4`:
                this.displayCakes();
                break;
                default:
                selection = 0;
                
         }
        selection = this.showMainMenuOptions
    }
    alert('Goodbye!');
}
showMainMenuOptions(){
    return prompt (`
    0) exit
    1) add new cake
    2) view cake info
    3) delete cake
    4) display all cakes
 `);
}
showCakeMenuOptions(cakeInfo){
  return prompt(`
  0) back
  1) create dessert
  2) delete dessert
  --------------------
  ${dessertInfo}
  `);
}
displayCakes(){
    let cakeString = '';
    for (let i = 0; i < this.cakes.length; i++) {
        cakeString += i + ') ' + this.cakes[i].name + '\n';
    }
    alert(cakeString);
  }
createCake() {
    let name = prompt ('Enter name for new cake:');
    this.cakes.push(new Cake(name));
   }
viewCake(){
    let index = prompt ('Enter the index of the cake that you want to view:');
    if (index > -1 && index < this.cakes.length) {
        this.selectedCake = this.cakes[index];
    let description = 'Cake Name:' + this.selectedCake.name + '\n';
    for (let i = 0; i < this.selectedCake.length; i++) {
            description += i + ') ' + this.selectedCake[i].dessert + this.selectedCake.dessert[i].topping + '\n';
        }
        let selection = this.showCakeMenuOptions(description);
        switch (selection) {
            case'1' :
            this.createDessert();
            break;
            case'2' :
            this.deleteDessert();
        }
    }
}
    createDessert() {
      let cake= prompt (' Enter name for new dessert: ');
      let topping= prompt ('Enter topping for dessert; ');
      this.selecteddessert.cake.push(new Dessert(cake, topping));
    }
    deleteCake() {
      let index = prompt('Enter the dessert that you wish to delete:');
      if (index > -1 && index < this.dessert.cake.length) {
      this.dessert.cake.splice(index,1);
      }
    }
}
let menu = new Menu();
menu.start();