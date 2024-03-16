import styles from './list.module.css'

export function MovieList({title, items}) {
    return (
        <div className={styles.movieRow}>
            <h2>{title}</h2>
            <div className={styles.movieRowListarea}>
                <div className={styles.movieRowList}>
                    {items.results.length > 0 && items.results.map((item, key) => (
                       <div key={key} className={styles.movieRowItem}>
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} />
                       </div>
                    ))}
                </div>
            </div>
        </div>
    )
}