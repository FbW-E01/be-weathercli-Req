import axios from "axios";
import process from 'process';

const location = process.argv[2];
const API_KEY = "????";
const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;

axios
    .get(url)
    .then(result => {
        // Convert kelvin results to celcius
        const data = result.data;
        const weather = data.weather[0].description;
        console.log(`It is now ${data.main.temp} in ${data.name}, ${data.sys.country}`);
        console.log(`The current weather conditions are: ${weather}`)
        // console.log(result.data);
    })
    .catch(error => console.error(error));
