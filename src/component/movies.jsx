import "./Movies.css";

function MovieSeries() {
    let name = "Stranger Things";
    let img_url = "http://localhost:5173/images/st.jpg";
    let rating = 8.7;
    let description = "A group of young friends witness supernatural forces and secret government exploits."; 
    let cast = ["Winona Ryder", "David Harbour", "Millie Bobby Brown"];
    let genre = ["Drama", "Fantasy", "Horror"];
    let watch_url = "https://www.netflix.com/title/80057281";

    return (
        <div className="movie-container">
            <img src={img_url} alt={name} />
            <h1>{name}</h1>
            <h3>Rating: {rating}</h3>
            <p>{description}</p>
            <p>Casts:</p>
            <ul>
                {cast.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
            <p>Genres:</p>
            <ul>
                {genre.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
            <a href={watch_url} target="_blank">
                <button>Watch Now</button>
            </a>
        </div>
    );
}

export default MovieSeries;
