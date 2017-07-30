module.exports = (controller) => {

    return (router) => {
        router.post('/message', (req, res) => {
            controller.get(req, res);
        });

        router.get('/message', (req, res) => {
           controller.getAll(req, res); 
        });
        
        router.post('/register-message', (req, res) => {
            controller.post(req, res);
        });
    }
}