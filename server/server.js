import express from 'express';  
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import postsRouter from './routers/posts.js';
import cors from 'cors';
import path from 'path'


dotenv.config()
const app = express();
const __dirname = path.resolve();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: 'http://localhost:4000', 
    credentials: true,
}));
app.use('/posts', postsRouter);


app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const PORT = process.env.PORT ||3000

// Database Connection
mongoose.connect(process.env.MONGODB_URL, {
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1);
});

app.listen(PORT,()=>{
    console.log('Server is running on port '+ PORT);
})
