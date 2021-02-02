import React, { Component } from 'react';
import './Detail.css';
import axios from 'axios';
class Detail extends Component {
    state = {
        isLoading: true,
        movie: {},
    };
    getMovie = async (id) => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/movie/${id}?api_key=ffe228ac6463158a2c4230ff91248853&language=en-US`
        );
        this.setState({ movie: data, isLoading: false });
    };
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push('/');
        }
        this.getMovie(location.state.id);
    }
    render() {
        const { isLoading, movie } = this.state;
        console.log(movie);
        return (
            <div>
                {isLoading ? (
                    <div className="loader">
                        <span className="loader__text">Loading...</span>
                    </div>
                ) : (
                    <div className="detail__container">
                        <div
                            className="detail__backdrop"
                            style={{
                                background: `url(https://image.tmdb.org/t/p/w500${movie.backdrop_path}) no-repeat center center/contain`,
                            }}
                        >
                            {/* <img src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} alt={title} title={title} /> */}
                        </div>

                        <div className="detail__poster">
                            <div className="poster__header">
                                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} title={movie.title} />
                                <div className="potser__data">
                                    <h1 className="data__title">{movie.title}</h1>
                                    <h3 className="data__year">
                                        {movie.release_date.slice(0, 4)} •{' '}
                                        {movie.production_countries ? movie.production_countries.map((country) => country.name) : null}
                                    </h3>
                                    <h3 className="data__rating">🏆 {movie.vote_average} / 10</h3>
                                    <a href={movie.homepage} className="data_homepage">
                                        🎬 Homepage
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="detail__contents">
                            <h2 className="basic_info">🎥 Info</h2>
                            <h3 className="info__title">{movie.title}</h3>
                            <p className="info__date_country">
                                {movie.release_date.slice(0, 4)} •{' '}
                                {movie.production_countries ? movie.production_countries.map((country) => country.name) : null}
                            </p>
                            {movie.genres
                                ? movie.genres.map((genre) => (
                                      <span className="info__genre" key={genre.id}>
                                          {' '}
                                          #{genre.name}{' '}
                                      </span>
                                  ))
                                : null}
                            <p>
                                {Math.floor(movie.runtime / 60)}시간 {movie.runtime % 60}분
                            </p>
                            <p className="info__overview">{movie.overview}</p>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default Detail;
