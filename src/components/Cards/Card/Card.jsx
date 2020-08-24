import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import classes from './Card.module.css';

const displayDateFormat = (dateInString) => {
    const date = new Date(dateInString);

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October",        "November", "December"];
    
    const FullDate = date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes();

    return FullDate;
};

const CardItem = ({ className, title, value, secondaryParagraph, lastUpdate }) => {
    return (
        <Grid item xs={12} md={3} component={Card} className={[classes.CardItem, className]}>
                <CardContent >
                    <Typography color="textSecondary" gutterBottom>
                        {title} 
                    </Typography>
                    <Typography variant="h5" component="h2">
                        {value}
                    </Typography>
                    <Typography color="textSecondary" >
                        {secondaryParagraph}
                    </Typography>
                    <Typography variant="body2" component="p">
                        Last Update: {displayDateFormat(lastUpdate)} 
                    </Typography>
                </CardContent>
        </Grid>
    );
}

export default CardItem;