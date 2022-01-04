const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

router.post('/register', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = {
            _id: req.body._id,
            type: req.body.type,
        }
    } catch (err) {
        
    }
});

module.exports = router;