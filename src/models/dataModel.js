import mongoose from 'mongoose';

const dataSchema = new mongoose.Schema({
    name: { type: String, required: true },
    message: { type: String, required: true },
}, { timestamps: true });

const Data = mongoose.model('Data', dataSchema);

export default Data;