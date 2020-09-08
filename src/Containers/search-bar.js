import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import {fetchWeather} from '../actions'

class SearchBar extends Component {
    constructor (props){
        super(props)
        this.state={ term :'' }

    }
    onInputChange = event => this.setState({ term: event.target.value})

    onFormSubmit=event=>{
        event.preventDefault()
        this.props.fetchWeather(this.state.term)
        this.setState({term:''})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input 
                        placeholder="cities"
                        value={this.state.term}
                        onChange={this.onInputChange}
                    />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

function mapDispatchToProps (dispath){
    return bindActionCreators({fetchWeather}, dispath)
}
export default connect(null, mapDispatchToProps)(SearchBar)