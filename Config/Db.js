const mongoose = require(`mongoose`);


const FleetDatabase = async () => {
     await mongoose.connect(process.env.MONGO_URI);
    console.log(`Connected to FleetDatabase Successfully`);
}

module.exports = FleetDatabase;