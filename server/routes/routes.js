const router = require('express').Router();
const controller = require('../controllers/controller.js');

router.get('/:col?/:sort?', controller.getExpenses);
router.post('/', controller.addExpense);

module.exports = router;
