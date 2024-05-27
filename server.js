const express = require("express");
const app = express();
//require("dotenv").config()
const PORT = 8000;

app.get('/api/get',(req,res) => {
    res.send({message:"hello Hardik Welcome to nodejs project "})
})

app.get('/api/get_user_details',(req,res) => {
    res.send({
        user:{
            name:"hardik",
            lastname: "Pansani",
            contact:12254
        },env :process.env.NAME
    })
});

// Route to get a single user by ID
app.get('/api/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(user => user.id === id);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
});


// app.listen(process.env.PORT,() => {
//     console.log("listening to 8000");
// })


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
