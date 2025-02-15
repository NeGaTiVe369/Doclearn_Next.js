
import styles from './Header.module.css';
import { MdOutlineFeed } from "react-icons/md"
import { RiArticleLine } from "react-icons/ri"
import { HiOutlineNewspaper } from "react-icons/hi2"
import { Newspaper, MessageSquare, FileText, BookOpen } from "lucide-react"

import { GoBook } from "react-icons/go";

export default function Navigation() {
    return (
      <div className={styles.search}>
        <input 
          type="text" 
          className="form-control"
          placeholder="Поиск" 
          style={{borderColor:'#5388d8'}}
        />
        <div className={styles.iconsContainer}>
          <Newspaper className={styles.icon} />
          <MessageSquare className={styles.icon} />
          <FileText className={styles.icon} />
          {/* <BookOpen className={styles.icon}/> */}
        </div>
      </div>
    );
  }
  