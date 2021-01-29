import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import { Link } from 'react-router-dom';

function Movie({ id, year, title, summary, poster, genres, rating }) {
    return (
        <div className="movie">
            <div className="movie__poster">
                <img src={poster} alt={title} title={title} />
            </div>
            <div className="movie__data">
                <Link
                    to={{
                        pathname: `/movie/${id}`,
                        state: {
                            year,
                            title,
                            summary,
                            poster,
                            genres,
                            rating,
                        },
                    }}
                >
                    <h3 className="movie__title">
                        {title} ({year})
                    </h3>
                </Link>
                <h4 className="movie__rating">{rating} / 10</h4>
                <p className="movie__summary">{summary.length > 140 ? summary.slice(0, 140) + '...' : summary}</p>
                <div className="geners">
                    <span> Genres : </span>
                    {genres.map((genere, idx) => (idx < 3 ? <span key={idx}>{genere}</span> : null))}
                </div>
            </div>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    rating: PropTypes.number.isRequired,
};

export default Movie;
