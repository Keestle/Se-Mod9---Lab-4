const { DataTypes, Model } = require("sequelize");

let dbConnect = require("../dbConnect");

const sequelizeInstance = dbConnect.Sequelize;

class Comment extends Model { }

Comment.init({
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
    text: {
    type: DataTypes.STRING, allowNull: false, required: true
    },
    },
    
    {
    sequelize: sequelizeInstance, modelName: 'Comment', // uselowercase plural format
    timestamps: true, freezeTableName: true
    }
    )
    module.exports = Comment;