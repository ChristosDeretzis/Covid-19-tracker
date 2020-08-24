import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import CardItem from './Card/Card';
import classes from './Cards.module.css';

class Cards extends Component {
    render() {

        return (
            <Grid 
                className={classes.container}
                container 
                spacing={3}
                direction="row"
                justify="center">
                    <CardItem
                        className={classes.infected}
                        title="confirmed"
                        value={this.props.data.confirmed}
                        secondaryParagraph="Total confirmed cases from covid-19"
                        lastUpdate={this.props.data.lastUpdate}
                    />
                    <CardItem
                        className={classes.deaths}
                        title="deaths"
                        value={this.props.data.deaths}
                        secondaryParagraph="Total number of deaths from covid-19"
                        lastUpdate={this.props.data.lastUpdate}
                    />
                    <CardItem
                        className={classes.recovered}
                        title="recovered"
                        value={this.props.data.recovered}
                        secondaryParagraph="Total number of recovered from covid-19"
                        lastUpdate={this.props.data.lastUpdate}
                    />
            </Grid>
        );
    }
}

export default Cards;