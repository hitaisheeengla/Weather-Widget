import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './InfoBox.css'

const InfoBox = ({info}) => {
  const INIT_URL = "https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww"
  const HOT_URL="https://plus.unsplash.com/premium_photo-1667076649924-d784d205cbba?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3VubnklMjB3ZWF0aGVyfGVufDB8fDB8fHww"
  const COLD_URL="https://plus.unsplash.com/premium_photo-1671490808715-1135473e2ccb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29sZHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
  const RAIN_URL="https://plus.unsplash.com/premium_photo-1671406233410-9727cf249910?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJhaW55JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
  return (
    <div className='InfoBox'>
      <div className='cardContainer'>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 200 }}
          image={info.humidity>80?RAIN_URL:info.temo>15?HOT_URL:COLD_URL}
          title="dusty weather"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
            <p>Temperature = {info.temp}&deg;C</p>
            <p>Humidty = {info.humidity}&deg;C</p>
            <p>Min Temp = {info.tempMin}&deg;C</p>
            <p>Max Temp = {info.tempMax}&deg;C</p>
            <p>Temperature = {info.temp}&deg;C</p>
          </Typography>
        </CardContent>
      </Card>
      </div>
    </div>
  )
}

export default InfoBox