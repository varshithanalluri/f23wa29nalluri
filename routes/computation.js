const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const x = Math.random() * 10000 / 100;

    if (req.query.x !== undefined) {
        const queryX = parseFloat(req.query.x);
        if (!isNaN(queryX)) {
            x = Math.round(queryX * 100) / 100;
        }
    }

    const res1 = Math.abs(x);
    const res2 = Math.acos(x);
    const res3 = Math.sin(x);

    res.render('computation', { x, abs: res1, acos: res2, sin: res3 });
});

module.exports = router;