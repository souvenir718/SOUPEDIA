import React, { Component } from 'react';
import './Similar.css';
class Similar extends Component {
    render() {
        const { movie } = this.props;
        return (
            <div key={movie.id} className="similar">
                <div className="similar__poster">
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} title={movie.title} />
                </div>
                <span className="similar__title">{movie.title}</span>
                <span className="similar__rating">⭐ {movie.vote_average} / 10</span>
            </div>
        );
    }
}

export default Similar;
