import VideoPlayer from '../VideoPlayer'
import styles from './styles.module.css'

const VIDEOS = [
  {
    id: 1,
    author: 'elpugaa',
    description:
      '#police #bikelife #motorcycle #atlanta #athensgeorgia #georgia #arrested #arrest #georgiastatepatrol #copsoftiktok #cop #cops #kawasaki #policechase',
    likes: 324,
    shares: 32,
    comments: 333,
    songTitle: 'original sound - PMSQUARED',
    albumCover:
      'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/6a087341780da6591c4e8de39b725a0a~c5_720x720.jpeg?x-expires=1651680000&x-signature=jgnyvuP7eCvhiGFUO7XrexRyPvM%3D',
    src: 'https://v16-webapp.tiktok.com/000565086359451774261f87d22607b0/62706b69/video/tos/alisg/tos-alisg-pve-0037c001/3fd3149c0f0b4a7e9b27764445a449a7/?a=1988&br=2972&bt=1486&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6HpDMyq8Z.5Kjwe2Nb~Tyl7Gb&l=202205021737020101921680910442DD4C&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anhsdDo6Zjh3PDMzODczNEApMzk5NDZlOWRkN2g3aTw3ZGdvcWM2cjRfM2lgLS1kMS1zczZjMWAyX2E2NTU1MWFfLy86Yw%3D%3D&vl=&vr='
  },
  {
    id: 2,
    author: 'elpugaa',
    description:
      '#police #bikelife #motorcycle #atlanta #athensgeorgia #georgia #arrested #arrest #georgiastatepatrol #copsoftiktok #cop #cops #kawasaki #policechase',
    likes: 324,
    shares: 32,
    comments: 333,
    songTitle: 'original sound - PMSQUARED',
    albumCover: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/fe8a1493ef0650de79dd1890013467f2~c5_720x720.jpeg?x-expires=1651701600&x-signature=EfctImaYFLdgTFB67mX4OQO4gvw%3D',
    src: 'https://v16-webapp.tiktok.com/6a89b4131dc64815eb2ea724f538ba5f/62706b33/video/tos/useast2a/tos-useast2a-pve-0068/4908fb4dc684470b9e11882e3d50aa45/?a=1988&br=2800&bt=1400&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6HpDMyq8Z.5Kjwe2Nb~Tyl7Gb&l=202205021737020101921680910442DD4C&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=MzZvb2c6ZjptPDMzNzczM0ApOGdoNmRkZmVoN2YzZDZkM2dtYWRmcjQwXi1gLS1kMTZzc19hYGE2NC1gYmJeNDVgXjQ6Yw%3D%3D&vl=&vr='
  },
  {
    id: 3,
    author: 'elpugaa',
    description:
      '#police #bikelife #motorcycle #atlanta #athensgeorgia #georgia #arrested #arrest #georgiastatepatrol #copsoftiktok #cop #cops #kawasaki #policechase',
    likes: 324,
    shares: 32,
    comments: 333,
    songTitle: 'original sound - PMSQUARED',
    albumCover: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/e10a67c1c98a9bc8a9471404c5408b8b~c5_720x720.jpeg?x-expires=1651701600&x-signature=9z5vlqtggIHzcSRrKnon8gn3Ujs%3D',
    src: 'https://v16-webapp.tiktok.com/e7d8cf64b2c4bc87e2b4f4077cafd32b/6270a973/video/tos/useast2a/tos-useast2a-ve-0068c004/519c54847c2f44139adff016e2aa1593/?a=1988&br=3868&bt=1934&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6HpDMyq8Z-DCjwe2NEtwyl7Gb&l=202205022200440102230841542579C814&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajN3czQ6Zm92OzMzNzczM0ApZWlnaGg7OTw7Nzk5NGk6PGdfa3FpcjRvLW1gLS1kMTZzc14uNjIuNTBeXzMzNjFeL186Yw%3D%3D&vl=&vr='
  }
]
export default function FeedVideos () {
  return (
    VIDEOS.map(video => (
      <div key={video.id} className={styles.item}>
        <VideoPlayer {...video} />
      </div>
    ))
  )
}
