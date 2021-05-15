import React from "react";

const Movie = (props) => {
  const setRaitingClass = (vote) => {
    if (vote >= 8) {
      return "green";
    } else if (vote >= 5) {
      return "orange";
    } else {
      return "red";
    }
  };
  return (
    <div className="movie">
      <img src={props.posterUrl} alt={props.nameRu} />
      <div class="movie-info">
        <p>{props.nameRu}</p>
        <span class={`tag ${setRaitingClass(props.rating)}`}>{props.rating}</span>
      </div>
      <div class="movie-over">
        <h2>Описание</h2>
        <div className="movie-title">
          <p>Страна: {props.countries.map(country => `  ${country.country}`)}</p>
          <p>Жанр: {props.genres.map(genre => `  ${genre.genre}`)}</p>
          <p>Длительность: {props.filmLength}ч</p>
          <p>Дата выхода: {props.year} год</p>
          <p>Голосов: {props.ratingVoteCount}</p>
        </div>
      </div>
    </div>
  );
};

export default Movie;
