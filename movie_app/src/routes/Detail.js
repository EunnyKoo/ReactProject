import React from "react";

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        // location이 정의되어 있지 않거나 state가 정의되어 있지 않다면 '/'로 이동
        if (!location || !location.state || !history) {
            // fallback: history가 정의되어 있지 않은 경우에는 window.location.href로 이동
            window.location.href = '/';
        }
    }

    render() {
        const { location } = this.props;
        if (location && location.state) {
            const { title, cafeLocation, summary, poster, ingredients } = location.state;

            return (
                <div>
                    <h2>{title}</h2>
                    <p>Cafe Location: {cafeLocation}</p>
                    <p>Summary: {summary}</p>
                    <p>Ingredients: {ingredients.join(', ')}</p>
                    <img src={poster} alt={title} title={title} />
                </div>
            );
        } else {
            return null;
        }
    }
}

export default Detail;
