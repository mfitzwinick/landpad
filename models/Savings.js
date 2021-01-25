const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const savingsSchema = new Schema({
    userName: {
        type: String,
        trim: true,
    },
    savingsGoal: {
        type: Number,
        trim: true
    },
    downPaymentSavings: {
        type: Number,
        trim: true,
    },
    reserveSavings: {
        type: Number,
        trim: true,
    },
    movingExpenseSavings: {
        type: Number,
        trim: true,
    },

    closingCostSavings: {
        type: Number,
        trim: true,
    },

    veteran: {
        type: Boolean
    }

});



const Savings = mongoose.model("Savings", savingsSchema);

module.exports = Savings