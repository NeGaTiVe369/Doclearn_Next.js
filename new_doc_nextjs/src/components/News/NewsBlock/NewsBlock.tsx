import { NewsCard } from "@/components/News/NewsCard/NewsCard"
import { NewsList } from "@/components/News/NewsList/NewsList"
import type { NewsItem } from "@/types/news"
import styles from "./NewsBlock.module.css"

interface NewsBlockProps {
  cityName: string
  featuredNews: NewsItem[]
  relatedNews: NewsItem[]
  showMoreButton?: boolean
}

export function NewsBlock({ cityName, featuredNews, relatedNews, showMoreButton = true }: NewsBlockProps) {
  return (
    <div className={styles.container}>
      <div className={styles.blockTitle}>
        <h2 className={styles.cityName}>{cityName}</h2>
        {showMoreButton && <button className={styles.moreButton}>Ещё</button>}
      </div>
      <div className={styles.grid}>
        <div className={styles.mainContent}>
          <NewsCard news={featuredNews[0]} />
          <NewsCard news={featuredNews[1]} />
        </div>
        <div className={styles.sidebar}>
          <NewsList title="Похожие новости" news={relatedNews} />
        </div>
      </div>
    </div>
  )
}

