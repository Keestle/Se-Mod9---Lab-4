const { DataTypes, Model } = require("sequelize");

let dbConnect = require("../dbConnect");

const sequelizeInstance = dbConnect.Sequelize;

class Post extends Model { }

Post.init({
    id: {
    type: DataTypes.INTEGER, allowNull: false, autoIncrement:
    true, primaryKey: true
    },
    userID: {
    type: DataTypes.STRING, allowNull: false, required: true
    },
    title: {
    type: DataTypes.STRING, allowNull: false, required: true
    },
    description: {
    type: DataTypes.STRING, allowNull: false, required: true,
    unique: true
    },
    imageURL: {
    type: DataTypes.STRING, allowNull: false, required: true
    }},
    {
    sequelize: sequelizeInstance, modelName: 'Post', // uselowercase plural format
    timestamps: true, freezeTableName: true
    }
    )
    module.exports = Post;