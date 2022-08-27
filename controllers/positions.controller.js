const {positionService, emailService} = require("../services");
const {emailActions} = require("../constants");

module.exports = {
    allPosition: async (req, res, next) => {
        try {
            const {tag} = req.query;

            const searchObject = {...req.query};

            if (tag) {
                Object.assign(searchObject, {description: {$regex: tag, $options: 'i'}})
            }

            const positions = await positionService.allPosition(searchObject);

            res.json(positions);
        } catch (e) {
            next(e);
        }
    },
    positionById: async (req, res, next) => {
        try {
            const {position_id} = req.params;

            const position = await positionService.positionById({_id: position_id});

            res.json(position);
        } catch (e) {
            next(e);
        }
    },
    createPosition: async (req, res, next) => {
        try {
            const newPosition = await positionService.createPosition(req.body);

            await emailService.sendMailWhenCreateAndRemovePosition(newPosition, emailActions.NEW_POSITIONS);

            res.status(201).json(newPosition);

        } catch (e) {
            next(e);
        }
    },
    updatePosition: async (req, res, next) => {
        try {
            const {position_id} = req.params;

            const updatedPosition = await positionService.updatePosition({_id: position_id}, req.body);

            res.json(updatedPosition);
        } catch (e) {
            next(e);
        }
    },
    deletePosition: async (req, res, next) => {
        try {
            const {position_id} = req.params;

            await positionService.deletePosition({_id: position_id})

            await emailService.sendMailWhenCreateAndRemovePosition(req.position, emailActions.REMOVED_POSITIONS);

            res.sendStatus(204);
        } catch (e) {
            next(e);
        }
    },
}