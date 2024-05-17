import mongoose from 'mongoose';





const Connection=()=>{

    
    const MONGODB_URI='mongodb+srv://sowresh:sowresh18@pizza.c0mpkgh.mongodb.net/todolist?retryWrites=true&w=majority&appName=pizza'
    mongoose.connect(MONGODB_URI,{useNewUrlParser:true,useUnifiedTopology:true});
    mongoose.connection.on('connected',()=>{
        console.log('Database connected successfully');
    })

    mongoose.connection.on('disconnected',()=>{
        console.log('Database disconnected');
    })

    mongoose.connection.on('error',()=>{
        console.log('Error while connecting with the database ',error.message);
    })
}

export default Connection;