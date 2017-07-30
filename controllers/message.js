module.exports = (schemas) => {

    const Message = schemas.message;

    return {
        get: (req, res) => {
            const user = req.body.user;
            if (!user) {
                return res.json({ success: false, message: 'Invalid user' });
            } else  {
                const query = { user: user };
                Message.findOne(query, (error, result) => {
                    if (error) return res.json({ success: false, message: error });
                    if (!result) {
                        return res.json({ success: false, message: 'User not found' });
                    } else {
                        return res.json({ success: true, message: 'Success', return: result });
                    }
                });
            }
        },
        getAll: (req, res) => {
            Message.find((error, result) => {
                if (error) return res.json({ success: false, message: error });
                if (!result) {
                    return res.json({ success: false, message: 'Message not found' });
                } else {
                    return res.json({ success: true, message: 'Success', message: result });
                }
            });
        },
        post: (req, res) => {
            const message = req.body.message;
            const user = req.body.user;
            if (!message) {
                return res.json({ success: false, message: 'Invalid message' });
            } else if (!user) {
                return res.json({ success: false, message: 'Invalid user' });
            } else {
                var mes = new Message();
                mes.message = message;
                mes.user = user;
                mes.save(error => {
                    if (error) return res.json({ success: false, message: 'Failed to register a new message' });
                    return res.json({ success: true, message: 'Success' });
                });
            }
        }
    }
}