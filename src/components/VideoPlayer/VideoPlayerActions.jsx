import { Heart } from '../icons/Heart'
import { Comment } from '../icons/Comment'
import { Share } from '../icons/Share'
import styles from './styles.module.css'

export default function VideoPlayerActions ({ likes = 2312, comments = 334, shares = 536, hearted = false }) {
  return (
    <aside className={styles.actions}>
      <div className={styles.action}>
        <Heart />
        <strong title='like'>{likes}</strong>
      </div>
      <div className={styles.action}>
        <Comment />
        <strong title='comments'>{comments}</strong>

      </div>
      <div className={styles.action}>
        <Share />
        <strong title='shares'>{shares}</strong>
      </div>
    </aside>
  )
}
