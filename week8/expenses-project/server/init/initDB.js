
const mongoose = require('mongoose')
const expenseData = require('./expenses.json')
const Expense = require("../model/Expense")

mongoose.connect("mongodb://127.0.0.1:27017/expenseDB", {
    useNewUrlParser: true,
})
    .then(function () {
        Expense.insertMany(expenseData)
    })
    .catch((err) => console.log(err))

