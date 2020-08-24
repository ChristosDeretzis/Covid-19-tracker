import React, { Component } from 'react';
import Cards from './components/Cards/Cards';
import CountryPicker from './components/Country Picker/CountryPicker';
import Chart from './components/Chart/Chart';
import { fetchCovidData, fetchDailyCovidData } from './api/index';
import classes from './App.module.css';

class App extends Component {

  state = {
    data: {},
    country: ''
  }

  async componentDidMount() {
    const data = await fetchCovidData();
    const newData = await fetchDailyCovidData();
    console.log(newData);
    this.setState({data: data});
  }

  handleCountryChange = async (country) => {
    const data = await fetchCovidData(country);

    this.setState({data: data, country: country})
  }
  render () {
    return (
      <div className={classes.App}>
        <Cards data={this.state.data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={this.state.data} country={this.state.country}/>
      </div>
    );
  }
}

export default App;
