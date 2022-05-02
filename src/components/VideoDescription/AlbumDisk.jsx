import styles from './styles.module.css'
export default function AlbumDisc ({ albumCover }) {
  return (
    <div className={styles.album}>
      <img src={albumCover} className={styles.albumImage} alt='Album Disc' />
    </div>
  )
}
