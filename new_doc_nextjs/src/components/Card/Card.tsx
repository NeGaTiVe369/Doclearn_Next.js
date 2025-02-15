import type { LucideIcon } from "lucide-react"
import styles from "./Card.module.css"

interface CardProps {
  icon: LucideIcon
  title: string
  description: string
}

export function Card({ icon: Icon, title, description }: CardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>
        <Icon className={styles.icon} aria-hidden="true" />
      </div>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  )
}

