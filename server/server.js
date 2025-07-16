import express from 'express';  
import mongoose from 'mongoose';
import postsRouter from './routers/posts.js';
import cors from 'cors';

const app = express();

app.use(express.json());
// app.use(express.urlencoded({extended: false}));
app.use(cors({
    origin: 'http://localhost:4000', 
    credentials: true,
}));
app.use('/uploads', express.static('uploads'));

app.use('/posts', postsRouter);


const PORT = process.env.PORT || 3000;
const DB_URL = process.env.DB_URL || 'mongodb+srv://Mr-Som3a:8m8m8m8m@cluster0.eg8ggbn.mongodb.net/';

mongoose.connect(DB_URL, {
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1);
});

app.listen(PORT,()=>{
    console.log('Server is running on port'+ PORT);
})
