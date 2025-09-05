const mongoose = require('mongoose');

async function connectDB() {
  mongoose.set('strictQuery', true);
  try {
    await mongoose.connect(process.env.MONGO_URI, { appName: 'futquiz' });
    console.log('✅ MongoDB conectado');
  } catch (err) {
    console.error('❌ Erro ao conectar no MongoDB:', err.message);
    process.exit(1);
  }

  mongoose.connection.on('error', (e) => {
    console.error('MongoDB connection error:', e);
  });
}

module.exports = { connectDB };
