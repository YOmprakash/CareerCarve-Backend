const express = require('express');
const app = express();
const cors = require('cors'); 
const port = 5000;
app.use(cors()); 

// Sample mentor data
const mentors = [
    {
        "id": 1,
        "img": "https://profile-picture-and-logo.s3.amazonaws.com/CareerCarve%20App/1802/pro_pic.jpg",
        "name": "John Doe",
        "sessionsTaken": 120,
        "university": "IIm Banglore",
        "currentJob": "Senior Sales Manager at Unilever",
        "areas": ["FMCG Sales", "E-Commerce"],
        "ratings": 4.8
      },
      {
        "id": 2,
        "img": "https://profile-picture-and-logo.s3.amazonaws.com/CareerCarve%20App/1802/pro_pic.jpg",
        "name": "Jane Smith",
        "sessionsTaken": 95,
        "university": "Stanford Graduate School of Business",
        "currentJob": "Equity Research Analyst at Goldman Sachs",
        "areas": ["Equity Research", "Investment Banking"],
        "ratings": 4.7
      },
      {
        "id": 3,
        "img": "mentor3.jpg",
        "name": "Michael Johnson",
        "sessionsTaken": 150,
        "university": "Wharton School of the University of Pennsylvania",
        "currentJob": "Digital Marketing Director at Google",
        "areas": ["Digital Marketing", "E-Commerce"],
        "ratings": 4.9
      },
      {
        "id": 4,
        "img": "mentor4.jpg",
        "name": "Emily Davis",
        "sessionsTaken": 110,
        "university": "Columbia Business School",
        "currentJob": "Product Manager at Facebook",
        "areas": ["Product Management", "Tech Strategy"],
        "ratings": 4.6
      },
      {
        "id": 5,
        "img": "mentor5.jpg",
        "name": "David Brown",
        "sessionsTaken": 85,
        "university": "INSEAD",
        "currentJob": "Consulting Partner at McKinsey & Company",
        "areas": ["Management Consulting", "Strategy"],
        "ratings": 4.7
      },
      {
        "id": 6,
        "img": "mentor6.jpg",
        "name": "Laura Wilson",
        "sessionsTaken": 100,
        "university": "London Business School",
        "currentJob": "Brand Manager at Procter & Gamble",
        "areas": ["Brand Management", "FMCG Sales"],
        "ratings": 4.8
      },
      {
        "id": 7,
        "img": "mentor7.jpg",
        "name": "Chris Martinez",
        "sessionsTaken": 130,
        "university": "IE Business School",
        "currentJob": "Operations Manager at Amazon",
        "areas": ["Operations Management", "Supply Chain"],
        "ratings": 4.9
      },
      {
        "id": 8,
        "img": "mentor8.jpg",
        "name": "Sophia Anderson",
        "sessionsTaken": 140,
        "university": "Kellogg School of Management",
        "currentJob": "Financial Analyst at Morgan Stanley",
        "areas": ["Finance", "Equity Research"],
        "ratings": 4.8
      },
      {
        "id": 9,
        "img": "mentor9.jpg",
        "name": "James Lee",
        "sessionsTaken": 90,
        "university": "HEC Paris",
        "currentJob": "Business Development Manager at Tesla",
        "areas": ["Business Development", "Tech Strategy"],
        "ratings": 4.7
      },
      {
        "id": 10,
        "img": "mentor10.jpg",
        "name": "Olivia Harris",
        "sessionsTaken": 75,
        "university": "MIT Sloan School of Management",
        "currentJob": "Consultant at Boston Consulting Group",
        "areas": ["Strategy Consulting", "Management Consulting"],
        "ratings": 4.6
      },
      {
        "id": 11,
        "img": "mentor11.jpg",
        "name": "Matthew Clark",
        "sessionsTaken": 160,
        "university": "University of Chicago Booth School of Business",
        "currentJob": "Chief Marketing Officer at Nike",
        "areas": ["Marketing Strategy", "Brand Management"],
        "ratings": 4.9
      },
      {
        "id": 12,
        "img": "mentor12.jpg",
        "name": "Emma Lewis",
        "sessionsTaken": 105,
        "university": "Yale School of Management",
        "currentJob": "Investment Banker at JP Morgan",
        "areas": ["Investment Banking", "Corporate Finance"],
        "ratings": 4.7
      },
      {
        "id": 13,
        "img": "mentor13.jpg",
        "name": "Daniel Walker",
        "sessionsTaken": 115,
        "university": "IESE Business School",
        "currentJob": "Human Resources Manager at Microsoft",
        "areas": ["Human Resources", "Leadership"],
        "ratings": 4.8
      },
      {
        "id": 14,
        "img": "mentor14.jpg",
        "name": "Ava Hall",
        "sessionsTaken": 135,
        "university": "Duke University's Fuqua School of Business",
        "currentJob": "Strategy Consultant at Deloitte",
        "areas": ["Management Consulting", "Business Strategy"],
        "ratings": 4.9
      },
      {
        "id": 15,
        "img": "mentor15.jpg",
        "name": "William Scott",
        "sessionsTaken": 125,
        "university": "Rotman School of Management",
        "currentJob": "Chief Financial Officer at Adobe",
        "areas": ["Corporate Finance", "Strategy"],
        "ratings": 4.8
      }
];

// Endpoint to fetch mentor data
app.get('/api/mentors', (req, res) => {
    res.json(mentors);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
