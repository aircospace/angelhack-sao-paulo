module.exports = (schemas) => {

    const Message = schemas.message;

    return {
        get: (req, res) => {
            const message = req.body.message;
            if (!message) {
                return res.json({ success: false, message: 'Invalid message' });
            } else  {
                const query = { message: message };
                User.findOne(query, (error, result) => {
                    if (error) return res.json({ success: false, message: error });
                    if (!result) {
                        return res.json({ success: false, message: 'Message not found' });
                    } else {
                        return res.json({ success: true, message: 'Success', return: result });
                    }
                });
            }
        },
        post: (req, res) => {
            const message = req.body.message;
            if (!message) {
                return res.json({ success: false, message: 'Invalid message' });
            } else {
                var message = new Message();
                message.message = message;
                message.save(error => {
                    if (error) return res.json({ success: false, message: 'Failed to register a new message' });
                    return res.json({ success: true, message: 'Success' });
                });
            }
        }
    }
}