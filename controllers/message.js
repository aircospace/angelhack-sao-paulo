module.exports = (schemas) => {

    const Message = schemas.message;

    return {
        get: (req, res) => {
            const message = req.body.message;
            if (!message) {
                return res.json({ success: false, message: 'Invalid message' });
            } else  {
                const query = { message: message };
                Message.findOne(query, (error, result) => {
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
                var mes = new Message();
                mes.message = message;
                mes.save(error => {
                    if (error) return res.json({ success: false, message: 'Failed to register a new message' });
                    return res.json({ success: true, message: 'Success' });
                });
            }
        }
    }
}