import { useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";
import image from "../refImg.png";
function Detail(){
    
    const [loading,setLoading] = useState(true);

    const {id} = useParams();
    const[movie, setMovie]= useState([]);
    const getMovies = async ()=>{
    const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json(); 
         
        setMovie(json.data.movie);
        setLoading(false);
    };
    
    useEffect(() => {
        getMovies();
      },[]);

    return( <div>{loading?(
        <h1>Loading... </h1>
     ): (
     <div>
      <header>
      <a className={styles.logo} href="../">
        <img src={image} alt="logoimg"/>
      </a>
      <nav>
        <ul className={styles.nav_items}>
          <li><a href="../">Home</a></li>
          <li><a href="../">News</a></li>
           
        </ul>
      </nav>
    </header>
     <body className={styles.container}>
    <h1>{movie.title} 상세정보</h1>  
    <img src={movie.background_image} alt={movie.title}/>
    <h1>{movie.year} / 평점: {movie.rating}</h1>
    
    <h1>장르 </h1>
    <ul> 
      { movie.genres&&movie.genres.map((g) => (<li key={g}>{g}</li>))}
     </ul>
    <p>{movie.description_full}</p>
    </body>
     </div>
     
    )}
        </div>)
}
export default Detail;