import styles from './feature.module.css'

export function FeatureMovie({item}) {
    let firstDate = new Date(item.first_air_date)
    let description = item.overview
    const limitCaracters = 190
    const genres = []
    for(let i in item.genres) {
        genres.push(item.genres[i].name)
    }
    
    return (
        <section className={styles.featured} style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className={styles.featuredVertical}>
               <div className={styles.featuredHorizontal}>
                    <div className={styles.featuredName}>
                        {item.original_name}
                    </div>
                    <div className={styles.featuredInfo}>
                        <div className={styles.featuredPoints}>
                            {item.vote_average} pontos
                        </div>
                        <div className={styles.featuredYear}>
                            {firstDate.getFullYear()}
                        </div>
                        <div className={styles.featuredSeasons}>
                            {item.number_of_seasons} temporada{
                                item.number_of_seasons != 1 ? 's' : ''
                            }
                        </div>
                    </div>
                    <div className={styles.featuredDescription}>
                        {description.length <= limitCaracters ? description : description.substring(0, limitCaracters) + '...' }
                    </div>
                    <div className={styles.featuredButtons}>
                        <button className={styles.watchButton}> 
                            ▶ Assistir 
                        </button>
                        <button className={styles.myListButton}> 
                            + Minha Lista 
                        </button>
                    </div>
                    <div className={styles.featuredGenres}>
                        <strong> Gêneros: </strong> {genres.join(', ')}
                    </div>
               </div>
            </div>
        </section>
    )
}