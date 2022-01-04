const express = require('express');
const router = express.Router();
const Ingredient = require('../../models/ingredient');

// Get all
router.get('/', async (req, res) => {
    try {
        const ingredients = await Ingredient.find();
        res.json(ingredients);
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
});

// Get One
router.get('/:id', getIngredient, async (req, res) => {
    res.json(res.ingredient);
});

// Create One
router.post('/', async (req, res) => {
    const ingredient = new Ingredient({
        _id: req.body._id,
        posX: req.body.posX,
        posY: req.body.posY 
    });

    try {
        const newIngredient = await ingredient.save();
        res.status(201).json(newIngredient);
    } catch (err) {
        res.status(400).json({ message: err.message});
    }
});

// Updating One
router.patch('/:id', getIngredient, async (req, res) => {
    if (req.body._id) res.ingredient._id = req.body._id;
    if (req.body.price) res.ingredient.price = req.body.price;
    if (req.body.quantity) res.ingredient.quantity = req.body.quantity;

    try {
        const updatedIngredient = await res.ingredient.save();
        res.json(updatedIngredient);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Deleting One
router.delete('/:id', getIngredient, async (req, res) => {
    try {
        await res.ingredient.remove();
        res.json({ message: 'Deleted Ingredient'});
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
});

async function getIngredient(req, res, next) {
    let ingredient;
    try {
        ingredient = await Ingredient.findById(req.params.id);
        if (!ingredient) {
            return res.status(404).json({ message: 'Cannot find ingredient'});
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.ingredient = ingredient;
    next();
}


module.exports = router;
