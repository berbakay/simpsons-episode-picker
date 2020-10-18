import React from 'react';
import { Router, Link} from '@reach/router'
import Episode from './Episode';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

class Home extends React.Component {
    state = {
        getNewEp: false,
        buttonClicked: false,
        goodEpisode: undefined,
        toggleToggled: false,
        value: [1, 30],
    }

    setNewEpFalse = () => {
        this.setState({getNewEp : false})
    }

    handleClick = () => {
        if(this.state.toggleToggled) {
            this.setState({goodEpisode: 'true'})
        } else {
            this.setState({goodEpisode: undefined})
        }

        if(this.state.buttonClicked) {
            this.setState({getNewEp: true})
        } else {
            this.setState({buttonClicked: true})
        }
    }

    handleBadClick = () => {
        if(this.state.buttonClicked) {
            this.setState({getNewEp: true, goodEpisode: 'false'})
        } else {
            this.setState({buttonClicked: true, goodEpisode: 'false'})
        }
    }

    handleGood = (event) => {
        if(this.state.toggleToggled) {
            this.setState({toggleToggled: false, goodEpisode: undefined})
        } else {
            this.setState({toggleToggled: true, goodEpisode: 'true'})
        }
    }

    handleSlider = (event, newValue) => {
        this.setState({value: newValue})
    }

    valueText = (value) => {
        return `Season ${this.state.value}`
    }

    render() {
        return (
        <div>
            <label>Do You Want a good episode?</label>
            <input type="checkbox" value="true" onClick={this.handleGood}/>
            <Link to="/episode">
            <button className="goodButton" onClick={this.handleClick}>Get a Random Episode</button>
            <button className="badButton" onClick={this.handleBadClick}>Do Not Touch, Willie</button>
            </Link>
            <div className="sliderDiv">
                <Typography id="range-slider" gutterBottom>
                    Season Range
                </Typography>
                <Slider
                    value={this.state.value}
                    onChange={this.handleSlider}
                    valueLabelDisplay="on"
                    aria-labelledby="range-slider"
                    getAriaValueText={this.valueText}
                    max={30}
                    min ={1}/>
            </div>
            {this.state.buttonClicked ? <Router>
                <Episode id="episodeBox"path='/episode' getNewEp={this.state.getNewEp} setNewEpFalse={this.setNewEpFalse} goodEpisode={this.state.goodEpisode} seasonRange = {this.state.value}/>
            </Router> : null }
            
        </div>
        )
        
    }
}

export default Home