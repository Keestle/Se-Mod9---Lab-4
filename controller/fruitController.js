"use strict";
const { response } = require("express");
const Models = require("../models");
const Axios = require("axios");

// below is to get fruit
const getFruit = async (req, res) => {
    try {
        

        await Axios.get("https://fruityvice.com/api/fruit/all")
        .then(response => {
            const data = response.data;
            res.status(200).json({ result: 200, data: data });
        })

    } catch (err) {
        console.error(err);
        res.status(500).json({ result: 500, error: err.message });
    }
};


// additional functionality added below to update 

module.exports = {
getFruit,
}