const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
    dishName: { type: String, required: true, immutable: true }, // cannot edit
    ingredients: { type: [String], required: true },
    cookingTime: { type: Number, required: true },
    difficulty: { 
        type: String, 
        enum: ["Easy", "Medium", "Hard"], 
        required: true 
    },
    instructions: { type: String, required: true },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
});

module.exports = mongoose.model("Recipe", recipeSchema);