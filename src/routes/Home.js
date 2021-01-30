import React, { Component } from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';

class Home extends Component {
    state = {
        isLoading: true,
        movies: [],
    };

    getMovies = async () => {
        const {
            data: { results },
        } = await axios.get(
            'https://api.themoviedb.org/3/movie/now_playing?api_key=ffe228ac6463158a2c4230ff91248853&language=en-US&page=1'
        );
        this.setState({ movies: results, isLoading: false });
    };

    componentDidMount() {
        this.getMovies();
    }
    render() {
        const { isLoading, movies } = this.state;
        return (
            <section className="container">
                {isLoading ? (
                    <div className="loader">
                        <span className="loader__text">Loading...</span>
                    </div>
                ) : (
                    <div className="movies">
                        {movies.map((movie) => (
                            <Movie
                                key={movie.id}
                                id={movie.id}
                                year={movie.release_date}
                                title={movie.title}
                                summary={movie.overview}
                                poster={movie.poster_path}
                                rating={movie.vote_average}
                                backdrop_path={movie.backdrop_path}
                            />
                        ))}
                    </div>
                )}
            </section>
        );
    }
}

export default Home;
