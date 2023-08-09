import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from "./Movie.module.css";
function Movie({id,coverImg,title,summary, genres,year}){
    return (
    <div className={styles.movie}>
     <img src={ coverImg } alt={title} className={styles.movie__img}/>
     <h2 className={styles.movie__title}>
       <Link to={`/movie/${id}`}>{title}</Link> 
        </h2>
        
      <ul className={styles.movie__genres}>
         
      { genres&&genres.map((g) => (<li key={g}>{g}</li>))}
     </ul>
     <p>{year} <br/> {summary.length > 250 ? `${summary.slice(0, 235)}...` : summary}</p>   

    </div>
    );
}
Movie.propTypes={
     id: PropTypes.number.isRequired,
     year: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;