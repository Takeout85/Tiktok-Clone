import AlbumDisk from './AlbumDisk'
import SongTicker from '../SongTicker'
import styles from './styles.module.css'

export default function VideoDescription ({ albumCover, username, description, songTitle }) {
  return (
    <footer className={styles.description}>
      <div className={styles.textWrapper}>
        <section>
          <strong>
            <a className={styles.author} href={`/user/${username}`}>
              @{username}
            </a>
          </strong>
        </section>
        <p className={styles.text}>
          {description}
        </p>
        <SongTicker songTitle={songTitle} />
      </div>

      <div>
        <AlbumDisk albumCover={albumCover} />
      </div>

    </footer>
  )
}
