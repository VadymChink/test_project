const {positionsController} = require("../controllers");
const router = require('express').Router();

router.get('/', positionsController.allPosition);
router.post('/', positionsController.createPosition);
router.get('/:position_id', positionsController.positionById);
router.patch('/:position_id', positionsController.updatePosition);
router.delete('/:position_id', positionsController.deletePosition);

module.exports = router;
