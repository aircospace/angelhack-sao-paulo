module.exports = (mongoose) => {

    var schema = mongoose.Schema;
    
    var messageSchema = new schema({
        message: String
    });

    return mongoose.model('Message', messageSchema);
}