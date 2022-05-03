import { useRef } from 'react'
import VideoDescription from '../VideoDescription'
import clsx from 'clsx'
import styles from './styles.module.css'
import VideoPlayerActions from './VideoPlayerActions'
import useIntersectionVideoPlayer from '../../hooks/useIntersectionVideoPlayer'

export default function VideoPlayer ({ src, albumCover, username, description, songTitle, avatar }) {
  const video = useRef()

  const { playing, handlePlay } = useIntersectionVideoPlayer({ video })

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
      <VideoPlayerActions
        username={username}
        avatar={avatar}
      />
      <VideoDescription
        albumCover={albumCover}
        username={username}
        description={description}
        songTitle={songTitle}
      />
    </div>

  )
}
