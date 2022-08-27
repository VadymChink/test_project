const router = require('express').Router();

const {positionsController} = require("../controllers");
const {commonMdlwr} = require("../middlewares");
const {queryValidator, positionValidator} = require("../validators");

router.get('/',
    commonMdlwr.isDataValid(queryValidator.findAll,'query'),
    positionsController.allPosition
);

router.post('/',
    commonMdlwr.isDataValid(positionValidator.PositionToAdd),
    positionsController.createPosition
);

router.get('/:position_id',
    commonMdlwr.isIdValid('position_id'),
    commonMdlwr.isPresent('position_id'),
    positionsController.positionById
);

router.patch('/:position_id',
    commonMdlwr.isIdValid('position_id'),
    commonMdlwr.isDataValid(positionValidator.PositionToPatch),
    commonMdlwr.isPresent('position_id'),
    positionsController.updatePosition
);

router.delete('/:position_id',
    commonMdlwr.isIdValid('position_id'),
    commonMdlwr.isPresent('position_id'),
    positionsController.deletePosition
);

module.exports = router;
