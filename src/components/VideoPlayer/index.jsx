import { useRef, useState } from 'react'
import VideoDescription from '../VideoDescription'
import clsx from 'clsx'
import styles from './styles.module.css'
import VideoPlayerActions from './VideoPlayerActions'

export default function VideoPlayer ({ src, albumCover, author, description, songTitle }) {
  const [playing, setPlaying] = useState(false)
  const video = useRef()

  const handlePlay = () => {
    const { current: videoEl } = video
    playing
      ? videoEl.pause()
      : videoEl.play()
    setPlaying(!playing)
  }
  const playerClassName = clsx(styles.player, { [styles.hidden]: playing })

  return (
    <div className={styles.wrapper}>
      <video
        className={styles.video}
        src={src}
        loop
        controls={false}
        ref={video}
        onClick={handlePlay}
      />
      <i className={playerClassName} onClick={handlePlay} />
      <VideoPlayerActions />
      <VideoDescription
        albumCover={albumCover}
        author={author}
        description={description}
        songTitle={songTitle}
      />
    </div>

  )
}
