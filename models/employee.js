const mongoose = require('mongoose');

const opts = {
    toJSON: { virtuals: true },
    timestamps: true
};

const employeeSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    username: { type: String, trim: true, required: 'Username is required!', unique: true },
    dni: {
        type: String,
        required: 'DNI is required!',
        unique: 'DNI already in use.',
        validate: v => {
            return /(\d{8}[A-Z])|([XYZ]\d{7}[A-Z])/.test(v);
        }
    },
    name: { type: String, trim: true, required: 'Name is required!' },
    surname: { type: String, trim: true, required: 'Surname is required!' },
    password: { type: String, required: 'Password is required!' },
    isAdmin: { type: Boolean, required: 'IsAdmin is required!' }
}, opts);

// We use the virtual to get the _id as id
employeeSchema.virtual('id').get(() => this._id);

module.exports = mongoose.model('Employee', employeeSchema);