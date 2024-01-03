const express = require('express')
const router = express.Router()

const Expense = require('../model/Expense')
const { model } = require('mongoose')

router.get('/expenses', function (req, res) {
    const d1 = req.query.d1
    const d2 = req.query.d2
    console.log("d1")

    console.log(d1)
    console.log(d2)

    if (d1 && d2) {
        Expense.find({
            date: {
                $gte: d1,
                $lte: d2
            }
        }).sort({ date: -1 })
            .then(function (expense) {
                res.send(expense)
            })
    }
    else if (d1) {
        Expense.find({
            date: {
                $gte: d1
            }
        })
            .sort({ date: -1 }).then(function (expense) {
                res.send(expense)
            })
    }
    else {
        Expense
            .find({})
            .sort({ date: -1 })
            .then(function (expense) {
                res.send(expense)
            })
    }
})

router.post('/expense', function (req, res) {

    const item = req.body.item
    const amount = req.body.amount
    const group = req.body.group
    const date = req.body.date ? new Date(req.body.date) : new Date()

    Expense.create({
        item,
        amount,
        group,
        date
    }).then(function (expense) {
        res.send("the amount of the expense: " + expense.amount + " you have spent on " + expense.item)
    })
})

router.put('/update/:group1/:group2', function (req, res) {
    const group1 = req.params.group1
    const group2 = req.params.group2
    Expense
        .findOneAndUpdate({ group: group1 }, { $set: { group: group2 } }, { new: true })
        .then(function (expense) {
            res.send(expense)
        }).catch(function (err) {
            console.log(err)
        })
})


router.get('/expenses/:group', function (req, res) {
    const group = req.params.group
    let total = req.query.total === "true"

    if (total) {
        Expense
            .aggregate([
                { $match: { group: group } },
                {
                    $group:
                    {
                        _id: null,
                        totalAmount: { $sum: "$amount" }
                    }
                },
            ])
            .then(function (expenses) {
                res.send({ totalAmount: expenses[0].totalAmount })
            })
    }
    else {
        Expense
            .find({ group: group })
            .then(function (expenses) {
                res.send(expenses)
            })
    }
})




module.exports = router