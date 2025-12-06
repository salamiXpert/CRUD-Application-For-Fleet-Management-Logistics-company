const express = require(`express`);

const  router = express.Router();



const {
    RegisterFleet,
    All_Fleets,
    FleetbyId,
    SearchFleetname,
    Searchbyfleetno,
    Updatebyid,
    deletefleetById,
    deletebyName
} = require(`../Controller/User.controller`);



router.post (`/RegisterFleet`, RegisterFleet);
router.get (`/All_Fleets`,All_Fleets);
router.get (`/SearchFleetby/:id`,FleetbyId );
router.get (`/SearchFleetby/Name`,SearchFleetname);
router.get (`/Search/Fleetbyno`,Searchbyfleetno);
router.put (`/UpdateFleetby/:id`,Updatebyid);
router.delete (`/DeleteFleetby/:id`,deletefleetById);
router.delete (`/DeleteFleetby/Name`,deletebyName);







module.exports = router;