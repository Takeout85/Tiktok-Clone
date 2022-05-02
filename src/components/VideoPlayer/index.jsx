import { useRef, useState } from 'react'
import styles from './index.module.css'

const SRC = 'https://v16-webapp.tiktok.com/8941c94db98a9d8fa6e57b791c54313b/62704f0a/video/tos/useast2a/tos-useast2a-ve-0068c003/17c958def705491f87bf74d87501f989/?a=1988&br=2224&bt=1112&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6HpDMyq8ZKA~Rwe2NOnJyl7Gb&l=202205021534090102230731611A2787C9&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=MzZraTw6Zmd3PDMzNzczM0ApaDw2PGc4OzxmN2Q2NGhnZmdyX15qcjRfcWpgLS1kMTZzczAvYGJiLi8wNF9hYTVeXzY6Yw%3D%3D&vl=&vr='

export default function VideoPlayer () {
  const [playing, setPlaying] = useState(false)
  const video = useRef()
  const handlePlaye = () => {
    if (playing) {
      video.current.pause()
    } else {
      video.current.play()
    }
    setPlaying(!playing)
  }

  return (
    <div>
      <video
        className={styles.video}
        src={SRC}
        controls={false}
        ref={video}
      />
      <button className={styles.player} onClick={handlePlaye} />
    </div>

  )
}

// <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@elpugaa/video/7092570231201139974" data-video-id="7092570231201139974" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@elpugaa" href="https://www.tiktok.com/@elpugaa">@elpugaa</a> <p></p> <a target="_blank" title="♬ sonido original - Puga" href="https://www.tiktok.com/music/sonido-original-7092570277858642693">♬ sonido original - Puga</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>
