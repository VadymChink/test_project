const {emailActions} = require("../constants");
module.exports={
    [emailActions.WELCOME]:{
        subject:'Welcome on board',
        template: 'welcome',
    },
    [emailActions.NEW_POSITIONS]:{
        subject:'New positions',
        template: 'new-positions',
    },
    [emailActions.REMOVED_POSITIONS]:{
        subject:'Positions removed ',
        template: 'removed-positions',
    }
}