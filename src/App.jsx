import { useEffect, useState } from "react"
import tmdb from "./tmdb"
import { MovieList } from './components/MovieList'
import { FeatureMovie } from './components/FeatureMovie'
import { Header } from "./components/Header"
import styles from './app.module.css'

export function App() {
  const [movieList, setMovieList] = useState([])
  const [featureData, setFeaturData] = useState(null)
  const [blackHeader, setBlackHeader] = useState(false)
  
  useEffect(() => {
    async function loadAll() {
      const list = await tmdb.getHomeList()
      setMovieList(list)

      const originals = list.filter(item => item.slug === 'originals')
      const ramdomMovie = Math.floor(Math.random() * (originals[0].items.results.length - 1))
      const movie = originals[0].items.results[ramdomMovie]
      const movieInfo = await tmdb.getMovieInfo(movie.id, 'tv')
      setFeaturData(movieInfo)
    }

    loadAll()
  }, [])

  useEffect(() => {
    function scrollListener() {
      if (window.scrollY > 300) {
        setBlackHeader(true)
      } else {
        setBlackHeader(false)
      }
    }

    window.addEventListener('scroll', scrollListener)
    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])
  
  return (
   <div className={styles.page}>
    <Header
      black={blackHeader}
    />

    {featureData && 
      <FeatureMovie
        item={featureData}
      />
    }

    <section className={styles.lists}>
      {movieList.map((item, key) => (
        <MovieList
          key={key} 
          title={item.title}
          items={item.items}
        />
      ))}
    </section>

    <footer>
      Feito com ReactJS <br/>
      Direitos de imagem para Neflix <br/>
      Dados pegos da API Themoviedb.org <br/>
      Dev Front-End - Augusto Barbosa de Carlos. <span> 😀 </span>
    </footer>

    {movieList.length <= 0 &&
      <div className={styles.loading}>
        <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="Carregabdo" />
      </div>
    }
   </div>
  )
}
