import React, { useState, useEffect } from 'react';
import {fetchCountries} from '../../api/index';
import { FormControl, NativeSelect } from '@material-ui/core';

const CountryPicker = (props) => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setCountries(await fetchCountries());
        };

        fetchAPI();
    }, []);


    return ( 
        <FormControl>
            <NativeSelect
                defaultValue=""
                onChange={(e) => props.handleCountryChange(e.target.value)}>
                    <option value="">Global</option>
                    {countries.map((country) => <option value={country} key={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    );
}

export default CountryPicker;