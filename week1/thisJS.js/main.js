const coffeeShop = {
    beans: 40,
    beansCost:10,
    totalMony:200,

    drinkRequirements: {
      latte: {beanRequirement: 10, price: 5},
      americano: {beanRequirement: 10, price: 5},
      doubleShot: {beanRequirement: 10, price: 15},
      frenchPress: {beanRequirement: 10, price: 12}
    },
    buyBeans : function (numBeans) {
        const totalCost = numBeans * beansCost;
        if(this.totalMony > totalCost){
            this.totalMony -= totalCost
            this.beans += numBeans
            console.log('BEANS')
        }
    },
    buyDrink : function (drinkType) {
        this.totalMony += this.drinkRequirements[drinkType].price;
        this.makeDrink(drinkType);
    },
    makeDrink: function (drinkType) {
        if(drinkType === 'frenchPress')
            console.log("Sorry, we don't make filtered")
        if(drinkType === 'filtered')
            console.log("Sorry, we're all out of beans")
    }
}

coffeeShop.makeDrink("latte"); 
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"

coffeeShop.buyDrink("latte")
