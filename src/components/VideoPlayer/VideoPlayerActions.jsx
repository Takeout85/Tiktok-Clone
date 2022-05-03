import { Heart } from '../Icons/Heart'
import { Comment } from '../Icons/Comment'
import { Share } from '../Icons/Share'
import styles from './styles.module.css'
import Plus from '../../assets/plus.svg'

export default function VideoPlayerActions ({ username, avatar, likes = 2312, comments = 334, shares = 536, sharted = false }) {
  const handleLike = () => {
    console.log('Liked')
  }

  const handleComment = () => {
    console.log('Comment')
  }

  const handleShare = () => {
    console.log('Share')
  }

  return (
    <aside className={styles.actions}>
      <div className={styles.user}>
        <img src={avatar} alt={username} />
        <img src={Plus} />
      </div>
      <button onClick={handleLike} className={styles.action}>
        <Heart width='45' />
        <span title='like'>{likes}</span>
      </button>
      <button onClick={handleComment} className={styles.action}>
        <Comment width='45' />
        <span title='comments'>{comments}</span>
      </button>
      <button onClick={handleShare} className={styles.action}>
        <Share width='45' />
        <span title='shares'>{shares}</span>
      </button>
    </aside>
  )
}
