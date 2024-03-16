import { useEffect, useState } from "react"
import tmdb from "./tmdb"
import { MovieList } from './components/MovieList'
import { FeatureMovie } from './components/FeatureMovie'

export function App() {
  const [movieList, setMovieList] = useState([])
  const [featureData, setFeaturData] = useState(null)
  
  useEffect(() => {
    async function loadAll() {
      const list = await tmdb.getHomeList()
      setMovieList(list)

      
    }

    loadAll()
  }, [])
  
  return (
   <div className="page">
    {featureData && 
      <FeatureMovie
        item={featureData}
      />
    }

    <section className="lists">
      {movieList.map((item, key) => (
        <MovieList
          key={key} 
          title={item.title}
          items={item.items}
        />
      ))}
    </section>
   </div>
  )
}
