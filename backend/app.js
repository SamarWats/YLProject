const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

const PORT = 5000;

app.get('/api/greet', function(req, res){
    const name =  req.query.name;

    if(!name){
        return res.status(400).json({error: "Name is required!"});
    }

    res.json({message:  `Hello ${name}, Welcome to Younglabs`});
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});