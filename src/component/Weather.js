import React from "react";
import CloudIcon from '@material-ui/icons/Cloud';
import { Grid } from "@material-ui/core";
import axios from "axios";

class Weather extends React.Component{
    constructor(props){
        super(props);
        var date = new Date();
        this.state = {
            date:date.toLocaleDateString(),
            weather:"",
            icon:"",
            humidity:"",
            temp:"",
            windMph:"",
        };
        this.getWeather();
    }

    getWeather = () => {
        const url ='https://api.weatherapi.com/v1/current.json?key=29162e75d54b4ec3962142605211708&q=Tokyo&aqi=no';
        axios.get(url)
             .then(res => 
                //console.log(res.data.current.condition.text)
                this.setState({weather:res.data.current.condition.text + '（tokyo）',
                               icon:res.data.current.condition.icon,
                               humidity:'湿度：' + res.data.current.humidity + '%',
                               temp:res.data.current.temp_c + '℃',
                               windMph:'風速：'+(res.data.current.wind_mph*0.45).toFixed(0) + 'm'})
            )

    }

    render(){
        return(
            <div>
                <p>{this.state.date} &nbsp;  {this.state.weather}</p>
                <img src={this.state.icon} alt="天気"/>
                <Grid container spacing={3}>
                    <WeatherNum xs={5} numClass={"text-align-right"} num={this.state.humidity}/>
                    <WeatherNum xs={2} numClass={"high-temp"} num={this.state.temp}/> 
                    <WeatherNum xs={5} numClass={"low-temp"} num={this.state.windMph}/>
                </Grid>
            </div>
        );
    }
}



function WeatherNum(props){
    return(
        <Grid item xs={props.xs} className={props.numClass}>
            <p>{props.num}</p>
        </Grid>
    );
}

export default Weather;