const { DataTypes, Model } = require("sequelize");

let dbConnect = require("../dbConnect");

const sequelizeInstance = dbConnect.Sequelize;

class Like extends Model { }

Like.init({
    id: {
    type: DataTypes.INTEGER, allowNull: false, autoIncrement:
    true, primaryKey: true
    },
    userID: {
    type: DataTypes.STRING, allowNull: false, required: true
    },
    postID: {
    type: DataTypes.STRING, allowNull: false, required: true
    },
    },
    
    {
    sequelize: sequelizeInstance, modelName: 'Like', // uselowercase plural format
    timestamps: true, freezeTableName: true
    }
    )
    module.exports = Like;