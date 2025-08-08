import express from 'express';

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

app.get('/', (req, res) => {
    const today = new Date(2025, 5, 14); // Example date: June 3, 2025
    const day = today.getDay();

    let type = 'a weekday';
    let advice = "it's time to work hard!!";
    
    if(day === 0 || day === 6){
            type = 'weekend';
            advice = "it's time to relax!";
    }
    res.render('index.ejs',
    {
        dayType: type,
        advice : advice
    });
});

