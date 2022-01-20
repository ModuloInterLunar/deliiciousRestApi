const mongoose = require('mongoose');

const opts = { 
    toJSON: { virtuals: true },
    timestamps: true
};

const employeeSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    username: { type: String, required: true, unique: [true, "username already in use"] },
    dni: {
        type: String,
        required: true,
        unique: true,
        validate: v => {
            return /(\d{8}[A-Z])|([XYZ]\d{7}[A-Z])/.test(v);
        }
    },
    name: { type: String, required: true },
    surname: { type: String, required: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true }
}, opts);

// We use the virtual to get the _id as id
employeeSchema.virtual('id').get(() => this._id);

module.exports = mongoose.model('Employee', employeeSchema);