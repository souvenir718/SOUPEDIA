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
                state: { year, title, summary, poster, rating },
            },
        } = this.props;
        return (
            <div className="detail__container">
                <div className="detail__poster">
                    <img src={poster} alt={title} title={title} />
                </div>
            </div>
        );
    }
}

export default Detail;
