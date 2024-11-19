import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {
  const cardArray_2 = [
    {
        "icon": "⚡",
        "title": "Real-Time Data",
        "description": "Access live updates and critical information at your fingertips."
    },
    {
        "icon": "✨",
        "title": "User-Friendly Interface",
        "description": "Navigate effortlessly through a clean and modern design."
    },
    {
        "icon": "🔒",
        "title": "Interactive Mapping",
        "description": "Explore disaster zones with detailed, interactive maps."
    },
    {
        "icon": "❤️",
        "title": "Comprehensive Reporting",
        "description": "Generate insightful reports to analyze mission outcomes."
    }
  ];
  return (
  <>
  
  
  
  {cardArray_2.map((data)=>{
return (

  <Card sx={{ minWidth: 175  ,border:"10px solid  rgba(34, 32, 32, 0.727)",marginBottom:"25px"}}>
  <CardContent>
    <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 40,display:"flex",justifyContent:"center",alignitem:"center" }}>
  {data.icon}
    </Typography>
    <Typography variant="h5" component="div">
  {data.title}
    </Typography>
    <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>adjective</Typography>
    <Typography variant="body2">
  {data.description}
      <br />
      {'"a benevolent smile"'}
    </Typography>
  </CardContent>
  <CardActions>
    <Button size="small">Learn More</Button>
  </CardActions>
</Card>
)


  })}

  



    </>
  );
}