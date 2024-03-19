import { useState } from 'react'
import styles from './list.module.css'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'

export function MovieList({title, items}) {
    const [scrollX, setScrollX] = useState(0)
    const handleLeftArrow = () => {
        const screenWidth = window.innerWidth
        let x = scrollX + Math.round(screenWidth / 2)
        if (x > 0) {
            x = 0
        }
        setScrollX(x)
    }

    const handleRightArrow = () => {
        const screenWidth = window.innerWidth
        let x = scrollX - Math.round(screenWidth / 2)
        let listW = items.results.length * 150
        if ((screenWidth - listW) > x) {
            x = (screenWidth - listW) - 60
        }
        setScrollX(x)
    }

    return (
        <div className={styles.movieRow}>
            <h2>{title}</h2>
            <div className={styles.movieRowLeft} onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{fontSize: 50}}/>
            </div>

            <div className={styles.movieRowRigh} onClick={handleRightArrow}>
                <NavigateNextIcon style={{fontSize: 50}}/>
            </div>

            <div className={styles.movieRowListarea}>
                <div className={styles.movieRowList} style={{
                    marginLeft: scrollX,
                    width: items.results.length * 150
                }}>
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