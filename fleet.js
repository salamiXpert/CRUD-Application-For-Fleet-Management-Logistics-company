const express = require(`express`);
const morgan = require(`morgan`);
const FleetDatabase = require("./Config/Db");
const usersRoute = require(`./Routes/User.router`);
const dotenv = require(`dotenv`);
const Fleet_app = express();

dotenv.config();
const port = process.env.PORT ||3400;

Fleet_app.use(express.json());
Fleet_app.use(morgan(`dev`));


Fleet_app.use(`/api/user`,usersRoute);










Fleet_app.get(`/`,(req,res) =>{
    res.send(`Welcome to the world Fleet Management. All fleet management analysis are carried ou here.
        You can trust us`);
});


Fleet_app.listen(port,() => {
    FleetDatabase();
    console.log(`Fleet Server is running on http://localhost:${port}`);
});