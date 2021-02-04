import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import { Link } from 'react-router-dom';
function Movie({ id, year, title, summary, poster, backdrop_path, rating }) {
    const onlyYear = year.substr(0, 4);
    return (
        <div className="movie">
            <div className="movie__poster">
                <img src={`https://image.tmdb.org/t/p/w500${poster}`} alt={title} title={title} />
            </div>
            <div className="movie__data">
                <Link
                    // to={`/movie/${id}`}
                    to={{
                        pathname: `/movie/${id}`,
                        state: {
                            id,
                            // onlyYear,
                            // title,
                            // summary,
                            // poster,
                            // backdrop_path,
                            // rating,
                        },
                    }}
                >
                    <h3 className="movie__title">
                        {title} ({onlyYear})
                    </h3>
                </Link>
                <h4 className="movie__rating">
                    🏆 <span>{rating} / 10</span>
                </h4>
                <p className="movie__summary">{summary.length > 140 ? summary.slice(0, 140) + '...' : summary}</p>
            </div>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
};

export default Movie;
