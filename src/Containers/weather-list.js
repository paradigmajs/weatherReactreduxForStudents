import React, { Component } from 'react'
import {connect} from 'react-redux'
import Chart from "../components/chart"
import GoogleMap from '../components/google-map'

class WeatherList extends Component {

    renderWeather(cityData){
        const name = cityData.city.name
        const temp = cityData.list.map(weather => weather.main.temp)
        const pres = cityData.list.map(weather => weather.main.pressure)
        const humi = cityData.list.map(weather => weather.main.humidity)
        const {lat, lon} = cityData.city.coord
        return(
            <tr key={name}>
        <td>
            <GoogleMap lon={lon} lat={lat}/>
        </td>
                <td>
                    <Chart data={temp} color="red" width={180} height={120} units=" C"></Chart>
                </td>
                <td>
                    <Chart data={pres} color="green" width={180} height={120} units=" H"></Chart>
                </td>
                <td>
                    <Chart data={humi} color="blue" width={180} height={120} units=" %"></Chart>
                </td>
                
            </tr>
        )
    }
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>
                                City
                            </th>
                            <th>
                                Temp
                            </th>
                            <th>
                                Pressure
                            </th>
                            <th>
                                Humidity
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.weather.map(this.renderWeather)}
                    </tbody>
                </table>
            </div>
        )
    }
}

function mapStateToProps({weather}){
    return {weather}
}
export default connect(mapStateToProps)(WeatherList)
