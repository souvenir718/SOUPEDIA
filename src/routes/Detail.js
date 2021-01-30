import React, { Component } from 'react';
import './Detail.css';
class Detail extends Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push('/');
        }
    }
    render() {
        const {
            location: {
                state: { onlyYear, title, summary, poster, rating, backdrop_path },
            },
        } = this.props;
        return (
            <div className="detail__container">
                <div className="detail__backdrop">
                    <img src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} alt={title} title={title} />
                </div>

                <div className="detail__poster">
                    <img src={`https://image.tmdb.org/t/p/w500${poster}`} alt={title} title={title} />
                    <div className="detail__header">
                        <h2>{title}</h2>
                    </div>
                </div>
            </div>
        );
    }
}

export default Detail;
