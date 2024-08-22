const express = require('express');
const app = express();
const cors = require('cors'); 
const port = 5000;
app.use(cors()); 
app.use(express.json());


const bookings = [];


// Sample mentor data
const mentors = [
  {
    id: 1,
    img: "https://profile-picture-and-logo.s3.amazonaws.com/CareerCarve%20App/1802/pro_pic.jpg",
    name: "John Doe",
    sessionsTaken: 120,
    university: "IIM Bangalore",
    currentJob: "FMCG Sales Specialist",
    areas: ["FMCG Sales", "E-Commerce"],
    ratings: 4.8,
  },
  {
    id: 2,
    img: "https://profile-picture-and-logo.s3.amazonaws.com/CareerCarve%20App/1802/pro_pic.jpg",
    name: "Jane Smith",
    sessionsTaken: 95,
    university: "Stanford Graduate School of Business",
    currentJob: "Equity Research Analyst",
    areas: ["Equity Research", "Investment Banking"],
    ratings: 4.7,
  },
  {
    id: 3,
    img: "mentor3.jpg",
    name: "Michael Johnson",
    sessionsTaken: 150,
    university: "Wharton School of the University of Pennsylvania",
    currentJob: "Digital Marketing Director",
    areas: ["Digital Marketing", "E-Commerce"],
    ratings: 4.9,
  },
  {
    id: 4,
    img: "mentor4.jpg",
    name: "Emily Davis",
    sessionsTaken: 110,
    university: "Columbia Business School",
    currentJob: "Product Management Specialist",
    areas: ["Product Management", "Tech Strategy"],
    ratings: 4.6,
  },
  {
    id: 5,
    img: "mentor5.jpg",
    name: "David Brown",
    sessionsTaken: 85,
    university: "INSEAD",
    currentJob: "Management Consultant",
    areas: ["Management Consulting", "Strategy"],
    ratings: 4.7,
  },
  {
    id: 6,
    img: "mentor6.jpg",
    name: "Laura Wilson",
    sessionsTaken: 100,
    university: "London Business School",
    currentJob: "Brand Manager",
    areas: ["Brand Management", "FMCG Sales"],
    ratings: 4.8,
  },
  {
    id: 7,
    img: "mentor7.jpg",
    name: "Chris Martinez",
    sessionsTaken: 130,
    university: "IE Business School",
    currentJob: "Operations Manager",
    areas: ["Operations Management", "Supply Chain"],
    ratings: 4.9,
  },
  {
    id: 8,
    img: "mentor8.jpg",
    name: "Sophia Anderson",
    sessionsTaken: 140,
    university: "Kellogg School of Management",
    currentJob: "Financial Analyst",
    areas: ["Finance", "Equity Research"],
    ratings: 4.8,
  },
  {
    id: 9,
    img: "mentor9.jpg",
    name: "James Lee",
    sessionsTaken: 90,
    university: "HEC Paris",
    currentJob: "Business Development Manager",
    areas: ["Business Development", "Tech Strategy"],
    ratings: 4.7,
  },
  {
    id: 10,
    img: "mentor10.jpg",
    name: "Olivia Harris",
    sessionsTaken: 75,
    university: "MIT Sloan School of Management",
    currentJob: "Strategy Consultant",
    areas: ["Strategy Consulting", "Management Consulting"],
    ratings: 4.6,
  },
  {
    id: 11,
    img: "mentor11.jpg",
    name: "Matthew Clark",
    sessionsTaken: 160,
    university: "University of Chicago Booth School of Business",
    currentJob: "Marketing Strategist",
    areas: ["Marketing Strategy", "Brand Management"],
    ratings: 4.9,
  },
  {
    id: 12,
    img: "mentor12.jpg",
    name: "Emma Lewis",
    sessionsTaken: 105,
    university: "Yale School of Management",
    currentJob: "Investment Banker",
    areas: ["Investment Banking", "Corporate Finance"],
    ratings: 4.7,
  },
  {
    id: 13,
    img: "mentor13.jpg",
    name: "Daniel Walker",
    sessionsTaken: 115,
    university: "IESE Business School",
    currentJob: "Human Resources Manager",
    areas: ["Human Resources", "Leadership"],
    ratings: 4.8,
  },
  {
    id: 14,
    img: "mentor14.jpg",
    name: "Ava Hall",
    sessionsTaken: 135,
    university: "Duke University's Fuqua School of Business",
    currentJob: "Strategy Consultant",
    areas: ["Management Consulting", "Business Strategy"],
    ratings: 4.9,
  },
  {
    id: 15,
    img: "mentor15.jpg",
    name: "William Scott",
    sessionsTaken: 125,
    university: "Rotman School of Management",
    currentJob: "Chief Financial Officer",
    areas: ["Corporate Finance", "Strategy"],
    ratings: 4.8,
  },
  {
    id: 16,
    img: "mentor16.jpg",
    name: "Grace White",
    sessionsTaken: 100,
    university: "Harvard Business School",
    currentJob: "Sustainability Manager",
    areas: ["Sustainability", "Corporate Strategy"],
    ratings: 4.7,
  },
  {
    id: 17,
    img: "mentor17.jpg",
    name: "Henry Robinson",
    sessionsTaken: 80,
    university: "IE Business School",
    currentJob: "Technology Consultant",
    areas: ["Technology Consulting", "Digital Transformation"],
    ratings: 4.6,
  },
  {
    id: 18,
    img: "mentor18.jpg",
    name: "Isabella King",
    sessionsTaken: 115,
    university: "INSEAD",
    currentJob: "Corporate Communications Manager",
    areas: ["Corporate Communications", "Public Relations"],
    ratings: 4.8,
  },
  {
    id: 19,
    img: "mentor19.jpg",
    name: "Jackson Moore",
    sessionsTaken: 145,
    university: "Wharton School of the University of Pennsylvania",
    currentJob: "Retail Manager",
    areas: ["Retail Management", "E-Commerce"],
    ratings: 4.9,
  },
  {
    id: 20,
    img: "mentor20.jpg",
    name: "Lily Scott",
    sessionsTaken: 90,
    university: "Oxford Said Business School",
    currentJob: "Innovation Manager",
    areas: ["Innovation Management", "Product Development"],
    ratings: 4.7,
  }
];

// Endpoint to fetch mentor data
app.get('/api/mentors', (req, res) => {
    res.json(mentors);
});

app.post('/api/bookings', (req, res) => {
  const { studentName, mentorId, duration, amount } = req.body;
  const booking = {  mentorId, duration, amount, timestamp: new Date() };
  bookings.push(booking);
  console.log(booking)
  res.status(201).json(booking);
});

app.get('/api/bookings', (req, res) => {
  res.json(bookings);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
