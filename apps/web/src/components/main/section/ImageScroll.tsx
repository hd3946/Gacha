import style from './ImageScroll.module.css'

const ImageScroll = () => {
  return (
    <div
      className="mt-12 pb-4 pt-2 text-black"
      style={{
        background: '#191a26'
      }}>
      <div className="py-4">
        <div className="border-top border-bottom border-dark overflow-hidden pb-1 pt-2">
          <div className={`inline-block overflow-hidden whitespace-nowrap ${style.animationRight}`}>
            {data.map((item, index) => (
              <ImageCard key={index} src={item.src} name={item.name} />
            ))}
          </div>
        </div>
        <div className="border-top border-bottom border-dark overflow-hidden pb-1 pt-2">
          <div className={`inline-block overflow-hidden whitespace-nowrap ${style.animationLeft}`}>
            {data.map((item, index) => (
              <ImageCard key={index} src={item.src} name={item.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const ImageCard = ({ src, name }: { src: string; name: string }) => {
  return (
    <div className="ml-4 inline-block rounded-md bg-white pb-1 pl-2 pr-2 pt-2 font-normal">
      <div style={{ height: '150px', width: '150px' }} className="bg-white">
        <img className="mx-auto h-full w-full rounded-md bg-gray-200" loading="lazy" src={src} alt="The Africans" />
      </div>
      <span className="ml-1 mt-2 inline-block text-black">{name}</span>
    </div>
  )
}

const data = [
  {
    src: 'https://ik.imagekit.io/llh50zxqb/images/projects/TheAfricans.jpeg?tr=w-150,h-150,c-maintain_ratio,f-auto',
    name: 'Meta Mouse'
  },
  {
    src: 'https://ik.imagekit.io/llh50zxqb/images/projects/birdstown.wtf.jpeg?tr=w-150,h-150,c-maintain_ratio,f-auto',
    name: 'Birds Town'
  },
  {
    src: 'https://ik.imagekit.io/llh50zxqb/images/projects/elftown.jpeg?tr=w-150,h-150,c-maintain_ratio,f-auto',
    name: 'Elf Town'
  },
  {
    src: 'https://ik.imagekit.io/llh50zxqb/images/projects/funga.jpeg?tr=w-150,h-150,c-maintain_ratio,f-auto',
    name: 'Funga'
  },
  {
    src: 'https://ik.imagekit.io/llh50zxqb/images/projects/boardgamers.png?tr=w-150,h-150,c-maintain_ratio,f-auto',
    name: 'Board Gamers'
  },
  {
    src: 'https://ik.imagekit.io/llh50zxqb/images/projects/MightyPirates.jpeg?tr=w-150,h-150,c-maintain_ratio,f-auto',
    name: 'Mighty Pirates'
  },
  {
    src: 'https://ik.imagekit.io/llh50zxqb/images/projects/KamaChameleons.jpeg?tr=w-150,h-150,c-maintain_ratio,f-auto',
    name: 'Kama Chameleons'
  },
  {
    src: 'https://ik.imagekit.io/llh50zxqb/images/projects/ChillBoys.jpeg?tr=w-150,h-150,c-maintain_ratio,f-auto',
    name: 'chiLLBoys'
  },
  {
    src: 'https://ik.imagekit.io/llh50zxqb/images/projects/EternalKlayPets.jpeg?tr=w-150,h-150,c-maintain_ratio,f-auto',
    name: 'Eternal Klay Pets'
  },
  {
    src: 'https://ik.imagekit.io/llh50zxqb/images/projects/CryptSocialClub.jpeg?tr=w-150,h-150,c-maintain_ratio,f-auto',
    name: 'Crypt Social Club'
  },
  {
    src: 'https://ik.imagekit.io/llh50zxqb/images/projects/thepopulars.jpeg?tr=w-150,h-150,c-maintain_ratio,f-auto',
    name: 'The Populars'
  },
  {
    src: 'https://ik.imagekit.io/llh50zxqb/images/projects/catcivilization.png?tr=w-150,h-150,c-maintain_ratio,f-auto',
    name: 'Cat Civilization'
  },
  {
    src: 'https://ik.imagekit.io/llh50zxqb/images/projects/fengya.jpeg?tr=w-150,h-150,c-maintain_ratio,f-auto',
    name: 'Feng Ya'
  },
  {
    src: 'https://ik.imagekit.io/llh50zxqb/images/projects/ZConnectibles.jpeg?tr=w-150,h-150,c-maintain_ratio,f-auto',
    name: 'ZConnectibles'
  },
  {
    src: 'https://ik.imagekit.io/llh50zxqb/images/projects/SanguineDisciples.png?tr=w-150,h-150,c-maintain_ratio,f-auto',
    name: 'Sanguine Disciples'
  },
  {
    src: 'https://ik.imagekit.io/llh50zxqb/images/projects/ElephrensNFT.jpeg?tr=w-150,h-150,c-maintain_ratio,f-auto',
    name: 'Elephrens'
  },
  {
    src: 'https://ik.imagekit.io/llh50zxqb/images/projects/thelostape.jpeg?tr=w-150,h-150,c-maintain_ratio,f-auto ',
    name: 'The Lost Ape'
  },
  {
    src: 'https://ik.imagekit.io/llh50zxqb/images/projects/DiamondHooves.jpeg?tr=w-150,h-150,c-maintain_ratio,f-auto',
    name: 'Diamond Hooves'
  },
  {
    src: 'https://ik.imagekit.io/llh50zxqb/images/projects/MonstersInsideNFT.png?tr=w-150,h-150,c-maintain_ratio,f-auto',
    name: 'Monsters Inside'
  },
  {
    src: 'https://ik.imagekit.io/llh50zxqb/images/projects/Froots.png?tr=w-150,h-150,c-maintain_ratio,f-auto',
    name: 'Froots'
  },
  {
    src: 'https://ik.imagekit.io/llh50zxqb/images/projects/podium.png?tr=w-150,h-150,c-maintain_ratio,f-auto',
    name: 'Podium'
  },
  {
    src: 'https://ik.imagekit.io/llh50zxqb/images/projects/ZeroHeros.png?tr=w-150,h-150,c-maintain_ratio,f-auto',
    name: 'Zero Heros'
  },
  {
    src: 'https://ik.imagekit.io/llh50zxqb/images/projects/umiverse.png?tr=w-150,h-150,c-maintain_ratio,f-auto',
    name: 'Umiverse'
  },
  {
    src: 'https://ik.imagekit.io/llh50zxqb/images/projects/ShinigamiSins.png?tr=w-150,h-150,c-maintain_ratio,f-auto',
    name: 'Shinigami Sins'
  },
  {
    src: 'https://ik.imagekit.io/llh50zxqb/images/projects/Employables.png?tr=w-150,h-150,c-maintain_ratio,f-auto',
    name: 'Employables'
  },
  {
    src: 'https://ik.imagekit.io/llh50zxqb/images/projects/metamouse.png?tr=w-150,h-150,c-maintain_ratio,f-auto',
    name: 'Meta Mouse'
  },
  {
    src: 'https://ik.imagekit.io/llh50zxqb/images/projects/ghostskulls.jpeg?tr=w-150,h-150,c-maintain_ratio,f-auto',
    name: 'Ghost Skulls'
  },
  {
    src: 'https://ik.imagekit.io/llh50zxqb/images/projects/SecretLabz.png?tr=w-150,h-150,c-maintain_ratio,f-auto',
    name: 'Secret Labz'
  },
  {
    src: 'https://ik.imagekit.io/llh50zxqb/images/projects/Scremlins.png?tr=w-150,h-150,c-maintain_ratio,f-auto',
    name: 'Scremlins'
  },
  {
    src: 'https://ik.imagekit.io/llh50zxqb/images/projects/boreddoodleape.jpeg?tr=w-150,h-150,c-maintain_ratio,f-auto',
    name: 'Bored Doodle Ape'
  },
  {
    src: 'https://ik.imagekit.io/llh50zxqb/images/projects/selphy.jpeg?tr=w-150,h-150,c-maintain_ratio,f-auto',
    name: 'Selphy'
  },
  {
    src: 'https://ik.imagekit.io/llh50zxqb/images/projects/deadbears.png?tr=w-150,h-150,c-maintain_ratio,f-auto',
    name: 'Dead Bears'
  },
  {
    src: 'https://ik.imagekit.io/llh50zxqb/images/projects/haoku.jpeg?tr=w-150,h-150,c-maintain_ratio,f-auto',
    name: 'Haoku'
  },
  {
    src: 'https://ik.imagekit.io/llh50zxqb/images/projects/TransylvaniaCastle.jpeg?tr=w-150,h-150,c-maintain_ratio,f-auto',
    name: 'Transylvania Castle'
  },
  {
    src: 'https://ik.imagekit.io/llh50zxqb/images/projects/duckysquad.jpeg?tr=w-150,h-150,c-maintain_ratio,f-auto',
    name: 'Ducky Squad'
  }
]
export default ImageScroll
