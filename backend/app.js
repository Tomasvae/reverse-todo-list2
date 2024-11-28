const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require("./routes/tasks");
const cors = require('cors');

const app = express(); 

app.use(cors());
app.use(express.json());

const mongoURI = process.env.MONGO_URL || "mongodb+srv://user3:5f0eH4jUk1iTzZLC@cluster0.vryt6.mongodb.net/reverse-todo?retryWrites=true&w=majority";
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use('/tasks', taskRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); 
    console.log(`we added this l
        
        e`);
}); //commentaire 8

