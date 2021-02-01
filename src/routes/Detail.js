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
                <div
                    className="detail__backdrop"
                    style={{ background: `url(https://image.tmdb.org/t/p/w500${backdrop_path}) no-repeat center center/contain` }}
                >
                    {/* <img src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} alt={title} title={title} /> */}
                </div>

                <div className="detail__poster">
                    <div className="poster__header">
                        <img src={`https://image.tmdb.org/t/p/w500${poster}`} alt={title} title={title} />
                        <div className="potser__data">
                            <h1 className="data__title">{title}</h1>
                            <h3 className="data__year">Release Date : {onlyYear}</h3>
                            <h3 className="data__rating">🏆 {rating} / 10</h3>
                            <p>{summary}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Detail;
