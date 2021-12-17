import mongoose from "mongoose";

const patientSchema = mongoose.Schema({
    name: String,
    contactNo: Number,
    emergencyContact: Number,
    email: String,
    appointments: [String],
    selectedFile: String,
    age: String,
    bloodGroup: String,
    medicalHistory: String,
    // createdAt: {
    //     type: Date,
    //     default: new Date()
    // },
});

const patientData = mongoose.model('patientData', patientSchema);

export default patientData;