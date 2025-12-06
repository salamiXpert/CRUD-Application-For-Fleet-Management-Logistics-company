const mongoose = require(`mongoose`);


const FleetSchema = new mongoose.Schema({
    Fleet_no : Number,
    Fleet_name : String,
    Fleet_type : String,
    Fleet_analysis : String,
    Fleet_insuranceStatus : String,
    Fleet_location : String,
    Fleet_supervisor : String
},{
    timestamps : true,
    versionKey : false,
})

const Fleet_details = mongoose.model(`Fleet_details`,FleetSchema);

module.exports = Fleet_details;