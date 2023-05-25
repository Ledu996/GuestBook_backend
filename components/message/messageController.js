const db = require('../../config/database/connection'); 

// GetLastTenMessages
// Create a Message

module.exports.getLastTenMessages = async (req, res) => {
    
    try {
        const NUMBER_OF_ELEMENTS = 10;
        const messages = await db.query('SELECT * FROM message')
        const lastTenMessages = messages.slice(-NUMBER_OF_ELEMENTS);
        
        return res.send({ status: 200, message: "Message successfully retrieved", results: lastTenMessages });
    
    } catch (e) {
        return res.send({ status: 404, message: `${e.message}`, results: [] });
    }
};

module.exports.createMessage = async (req, res) => {
    try {
        const { username, message } = req.body;
        const createMessage = await db.query('INSERT INTO message (name, message) VALUES (?, ?)', [username, message]);

        return res.send({ status: 200, message: "Message successfully created", results: createMessage });
    
    } catch (e) {
         return{ status: 500, message: "Error creating message", results: {}};
    }
};