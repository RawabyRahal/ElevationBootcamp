const Bank = function(){

    let money = 500

    const depositCash = cash =>{
        money += cash
        console.log("The new Amount is: " + money)
    }

    const checkBalance =  () => console.log("the balance is: " + money)

    return{
        deposit : depositCash,
        showBalance : checkBalance
    }
}

const bank = Bank()
bank.deposit(200)
bank.deposit(250)
bank.showBalance() //should print 950