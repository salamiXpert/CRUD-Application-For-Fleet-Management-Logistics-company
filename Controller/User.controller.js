const Fleet_details = require("../Models/User.model");

const RegisterFleet= async (req,res) => {
    try{
        const{Fleet_no,Fleet_name,Fleet_type,Fleet_analysis,Fleet_insuranceStatus,Fleet_location,Fleet_supervisor} = req.body;
        if(!Fleet_no || 
            !Fleet_name||
            !Fleet_type||
            !Fleet_analysis||
            !Fleet_insuranceStatus||
            !Fleet_location||
            !Fleet_supervisor) {
                return res.status(400).json({message:`All fields are required`});
            }
        const Register_Fleet = new Fleet_details({
            Fleet_no,
            Fleet_name,
            Fleet_type,
            Fleet_analysis,
            Fleet_insuranceStatus,
            Fleet_location,
            Fleet_supervisor
        });
        await Register_Fleet.save();
        return res.status(201).json({message:`Fleet registered successfully`});
    } catch (error) {
        console.log(error);
        return res.status(500).json({message : `Internal server error`})
        
    }
};


const All_Fleets = async (req,res) => {
   try {
    const Set_of_Fleets = await Fleet_details.find();
    return res.status(201).json({All_Fleet:Set_of_Fleets,count:Set_of_Fleets.length});
   } catch(error) {
    console.log(error);
    return res.status(500).json({message:`Fleets not Found`})
   }

};



const FleetbyId = async (req,res) => {
    try {
        const {id} = req.params;
        const fleet = await Fleet_details.findById(id);
        if(!fleet) {
            return res.status(404).json({message:`Fleet not found`});
        }
        return res.status(201).json(fleet);

    } catch(error) {
        console.log(error);
        return res.status(500).json({message:`Server error`})
    }
};



const SearchFleetname = async (req,res) => {
   try {
    const {Fleet_name} = req.query;
    const fleetName = await Fleet_details.findOne({Fleet_name});
    if(!fleetName){
        return res.status(400).json({messasge:`Fleet name not found`});
    }
    return res.status(201).json(fleetName);
   }catch(error) {
    console.log(error);
    return res.status(500).json({message:`Internal server error`})
   }
};


const Searchbyfleetno = async (req,res) => {
    try{
        const {Fleet_no} = req.query;
        const fleet_no = await Fleet_details.findOne({Fleet_no});
        if(!fleet_no){
            return res.status(400).json({message:`Fleet number not found`});
        }
        return res.status(201).json(fleet_no);

    }catch(error) {
        console.log(error);
        return res.status(500).json({message:`Internal server error`});
    }
};



const Updatebyid = async (req,res) => {
    try {
        const {id} = req.params;
        const {Fleet_no,
            Fleet_name,
            Fleet_type,
            Fleet_analysis,
            Fleet_insuranceStatus,
            Fleet_location,
            Fleet_supervisor} =req.body;
        const FleetUpdated = await Fleet_details.findByIdAndUpdate(id,{Fleet_no,
            Fleet_name,
            Fleet_type,
            Fleet_analysis,
            Fleet_insuranceStatus,
            Fleet_location,
            Fleet_supervisor},
        {new :true});
        if(!FleetUpdated) {
            return res.status(400).json({message:`Unable to Update`});
        }
        return res.status(201).json(FleetUpdated);
    }catch(error) {
        console.log(error);
        return res.status(500).json({message: `Server error`})
    }
};


const deletefleetById = async (req,res) => {
    try {
        const {id} = req.params;
        const DeleteFleet = await Fleet_details.findByIdAndDelete(id);
        if(!DeleteFleet){
            return res.status(400).json({messsage :`Unable to delete Fleet`});
        }
        return res.status(201).json(`Fleet deleted Successfully`,{DeleteFleet});
        
    }catch(error) {
        console.log(error);
        return res.status(500).json({message : `Internal server error`});
    }
};


const deletebyName = async (req,res) => {
   try {
    const {Fleet_name} = req.query;
    const FleetDelName = await Fleet_details({Fleet_name});
    if(!FleetDelName) {
        return res.status(400).json({message:`Unable to Delete FleetbyName`});
    }
    return res.status(201).json(`Fleetname deleted successfully`,{FleetDelName});

   }catch {
    console.log(error);
    return res.status(500).json({message:`Server error`});
   }
};

module.exports ={
    RegisterFleet,
    All_Fleets,
    FleetbyId,
    SearchFleetname,
    Searchbyfleetno,
    Updatebyid,
    deletefleetById,
    deletebyName
};