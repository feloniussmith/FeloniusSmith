import React from 'react'
import styles from '../Styles/Pages.module.scss'
import ReactMarkdown from 'react-markdown';
// import MusicPlayer from '../components/main/MusicPlayer';

const MusicComponent = ({ fields }) => {
  const { music } = fields
  // const playList = [
  //   [{
  //     name: "Skinny Man Blues (Live)",
  //     img: "https://cdn.pixabay.com/photo/2021/11/04/05/33/dome-6767422_960_720.jpg",
  //     src: "https://cdn.pixabay.com/audio/2022/08/23/audio_d16737dc28.mp3",
  //     id: 1
  //   },
  //   {
  //     name: "music - 1",
  //     img: "https://cdn.pixabay.com/photo/2021/09/06/16/45/nature-6602056__340.jpg",
  //     src: "https://cdn.pixabay.com/audio/2022/08/04/audio_2dde668d05.mp3",
  //     id: 2}],
  //   [{
  //     name: "music - 2",
  //     img: "https://cdn.pixabay.com/photo/2021/09/06/16/45/nature-6602056__340.jpg",
  //     src: "https://cdn.pixabay.com/audio/2022/08/04/audio_2dde668d05.mp3",
  //     id: 1
  //   },
  //   {
  //     name: "music - 3",
  //     img: "https://cdn.pixabay.com/photo/2022/08/29/08/47/sky-7418364__340.jpg",
  //     src: "https://cdn.pixabay.com/audio/2022/08/03/audio_54ca0ffa52.mp3",
  //     id: 2
  //   }],
  //   [{
  //     name: "music - 4",
  //     img: "https://cdn.pixabay.com/photo/2015/09/22/01/30/lights-951000__340.jpg",
  //     src: "https://cdn.pixabay.com/audio/2022/07/25/audio_3266b47d61.mp3",
  //     id: 1
  //   },
  //   {
  //     name: "music - 5",
  //     img: "https://cdn.pixabay.com/photo/2022/08/28/18/03/dog-7417233__340.jpg",
  //     src: "https://cdn.pixabay.com/audio/2022/08/02/audio_884fe92c21.mp3",
  //     id: 2
  //   }]
  // ];
  const MusicList = (musicList) => {
    return (
      musicList.map((music, index) => {
        return (
          <div className={styles.music} key={index}>
            <h1 className={styles.title}>{music.title}</h1>
            {/* <div className={styles.media}>
              <MusicPlayer playList={playList[index]}/>
            </div> */}
            <iframe className={styles.media} allow="autoplay *; encrypted-media *;" frameborder="0" height="450" title="music" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src={music.embed}></iframe>
            <div className={styles.text}>
              <ReactMarkdown>
                {music.body}
              </ReactMarkdown>
            </div>
            <div className={styles.text}>
              <ReactMarkdown>
                {music.reviews}
              </ReactMarkdown>
            </div>
          </div>
        );
      })
    )
  }

  return (
    <>
      {MusicList(music)}
      {/* <MusicPlayer /> */}
    </>
  )
}

export default MusicComponent