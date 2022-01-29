const Ticket = require('../../../models/ticket');
const Employee = require('../../../models/employee');
const Table = require('../../../models/table');
const Dish = require('../../../models/dish');

const checkRelations = async (req, res, next) => {
    const ticketId = req.body.ticket;
    const employeeId = req.body.employee;
    const tableId = req.body.table;
    const dishId = req.body.dish;

    if(ticketId && !await Ticket.findById(ticketId))
        return res.status(404).json({ message: `Ticket with id [${ticketId}] not found.`});
    
    if(employeeId && !await Employee.findById(employeeId))
        return res.status(404).json({ message: `Employee with id [${employeeId}] not found.`});

    if(tableId && !await Table.findById(tableId))
        return res.status(404).json({message: `Table with id [${tableId}] not found.`});

    if(dishId && !await Dish.findById(dishId))
        return res.status(404).json({message: `Dish with id [${dishId}] not found.`});

    // Cuando creemos el modelo de dishes tendremos que añadir aquí la comprobación.

    next();
}

module.exports = checkRelations;