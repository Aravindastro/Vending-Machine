// Import necessary modules at the top of your chaincode file
const { Contract } = require('fabric-contract-api');

class PrescriptionContract extends Contract {
    
    // Add the createPrescription function to the contract class
    async createPrescription(ctx, prescriptionData) {
        // Retrieve the user's role attribute
        const role = ctx.clientIdentity.getAttributeValue('role');
        
        // Check if the user has the role of doctor
        if (role !== 'doctor') {
            throw new Error('Unauthorized: Only doctors can create prescriptions.');
        }
        
        // Proceed with creating the prescription if authorized
        const prescriptionId = prescriptionData.id;
        
        // Store the prescription data in the ledger
        await ctx.stub.putState(prescriptionId, Buffer.from(JSON.stringify(prescriptionData)));
        
        return `Prescription ${prescriptionId} created successfully.`;
    }
    
    // Add more functions here as needed for other prescription operations
}

module.exports = PrescriptionContract;
