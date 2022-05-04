import { useRef } from 'react'
import VideoDescription from '../VideoDescription'
import clsx from 'clsx'
import styles from './styles.module.css'
import VideoPlayerActions from './VideoPlayerActions'
import useIntersectionVideoPlayer from '../../hooks/useIntersectionVideoPlayer'

export default function VideoPlayer (props) {
  const video = useRef()

  const { playing, handlePlay } = useIntersectionVideoPlayer({ video })

  const playerClassName = clsx(styles.player, { [styles.hidden]: playing })

  const { src } = props
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
        {...props}
      />
      <VideoDescription
        {...props}
      />
    </div>

  )
}
