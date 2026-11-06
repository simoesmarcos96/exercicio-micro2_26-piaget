const mongoose = require('mongoose');

const connectDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 10000
        });

        console.log('MongoDB conectado com sucesso!');

    } catch (error) {
        console.error('Erro ao conectar MongoDB:', error.message);
    }
};

module.exports = connectDatabase;