import axios from 'axios';
import React from 'react';

class Episode extends React.Component {
    state = {
        episode: {},
        characters: [],
        isGood: 'false',
        isLoading: true
    }

    getEpisode = () => {
        if(this.props.goodEpisode === undefined) {
            axios.get('https://simpsons-api-berbakay.herokuapp.com/api/episode')
            .then((res) => {
                this.setState(() => {
                    return {episode: res.data.episodeData, characters: res.data.episodeData.characters, isGood: res.data.episodeData.good.toString(), isLoading: false}
                })
            })
        } else {
            axios.get(`https://simpsons-api-berbakay.herokuapp.com/api/episode?isGood=${this.props.goodEpisode}`)
            .then((res) => {
                this.setState(() => {
                    return {episode: res.data.episodeData, characters: res.data.episodeData.characters, isGood: res.data.episodeData.good.toString(), isLoading: false}
                })
            })
        }
    }

    componentDidMount() {
        this.getEpisode();
    }

    componentDidUpdate() {
        if(this.props.getNewEp === true) { 
            this.setState({isLoading: true})
            this.props.setNewEpFalse()
            this.getEpisode();
        }
    }

    render () {
        if(this.state.isLoading) {
            return (<div><img src="tenor.gif" alt="homer thinking"/><p>loading episode</p></div>)
        } else {
        return (
            <table>
                <tbody>
                    <tr>
                        <td>Episode Title</td>
                        <td>{this.state.episode.title}</td>
                    </tr>
                    <tr>
                        <td>Season & Episode #</td>
                        <td>S{this.state.episode.season} E{this.state.episode.episode}</td>
                    </tr>
                    <tr>
                        <td>Description</td>
                        <td>{this.state.episode.description}</td>
                    </tr>
                    <tr>
                        <td>Disney+ Link</td>
                        <td>
                        <a href={`https://www.disneyplus.com/en-gb/video/${this.state.episode.disneyplus_id}`}>
                        Click Here
                        </a>
                        </td>
                    </tr>
                    <tr>
                        <td>Is the Episode Good?</td>
                        <td>{this.state.isGood === 'true' ? 'yes' : 'no'}</td>
                    </tr>
                    {this.state.characters.length ?
                    <tr>
                        <td>Main Characters</td>
                        <td>{this.state.characters.map((character) => {
                return <p key={character}>{character}</p>
            })}</td>
                    </tr> : null}
                </tbody>
            </table>
            )
        }
    }
}

export default Episode;