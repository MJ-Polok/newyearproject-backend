import Data from "../models/dataModel.js";

export const getData = async (req, res) => {
    try {
        const { name, message } = req.body;

        const data = new Data({ name, message });

        await data.save();
        res.status(201).json(data);
    } catch (error) {
        console.log("Error: ",error);
        
        res.status(500).json({ message: error.message });
    }
};