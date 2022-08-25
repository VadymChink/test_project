const {Position} = require("../DB");

module.exports = {
    allPosition: (params={}) => {
            return Position.find(params);
    },
    positionById: (params)=>{
        return Position.findOne(params);
    },
    createPosition: (position)=>{
        return Position.create(position);
    },
    updatePosition :(params, dataByUpdate, option={new:true})=>{
        return Position.findByIdAndUpdate(params, dataByUpdate, option);
    },
    deletePosition: (params)=>{
        return Position.deleteOne(params);
    },
}