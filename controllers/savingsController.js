const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.Savings
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Savings
            .findOne({ userName: req.params.id })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {

        db.Savings
        .findOneAndUpdate({ userName: req.params.id }, { $set: { savingsGoal: req.body.savingsGoal, downPaymentSavings: req.body.downPaymentSavings, reserveSavings: req.body.reserveSavings, movingExpenseSavings: req.body.movingExpenseSavings, closingCostSavings: req.body.closingCostSavings } })

        .then(dbModel => {
            if (dbModel === null) {
                db.Savings
                .create(req.body)
                .then(dbModel => res.json(dbModel))
                .catch(err => res.status(422).json(err));
            }
            else {
                res.json(dbModel)
            }
        }
        )
        .catch(err => res.status(422).json(err));
  
    },
    update: function (req, res) {
        db.Savings
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Savings
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};
