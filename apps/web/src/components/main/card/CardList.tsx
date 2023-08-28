import CardItem from './CardItem'

export default function CardList() {
  const cardList = [
    {
      image: 'https://ik.imagekit.io/llh50zxqb/images/projects/TheAfricans.jpeg?tr=w-150,h-150,c-maintain_ratio,f-auto',
      title: 'Haoku'
    },
    {
      image:
        'https://ik.imagekit.io/llh50zxqb/images/projects/birdstown.wtf.jpeg?tr=w-150,h-150,c-maintain_ratio,f-auto',
      title: 'Shinigami Sins'
    },
    {
      image: 'https://ik.imagekit.io/llh50zxqb/images/projects/elftown.jpeg?tr=w-150,h-150,c-maintain_ratio,f-auto',
      title: 'Fengya'
    },
    {
      image: 'https://ik.imagekit.io/llh50zxqb/images/projects/TheAfricans.jpeg?tr=w-150,h-150,c-maintain_ratio,f-auto',
      title: 'Crypt Social Club'
    },
    {
      image: 'https://ik.imagekit.io/llh50zxqb/images/projects/funga.jpeg?tr=w-150,h-150,c-maintain_ratio,f-auto',
      title: 'The Lost Ape'
    },
    {
      image: 'https://ik.imagekit.io/llh50zxqb/images/projects/boardgamers.png?tr=w-150,h-150,c-maintain_ratio,f-auto',
      title: 'Elftown'
    },
    {
      image:
        'https://ik.imagekit.io/llh50zxqb/images/projects/MightyPirates.jpeg?tr=w-150,h-150,c-maintain_ratio,f-auto',
      title: 'SecretLabz'
    },
    {
      image:
        'https://ik.imagekit.io/llh50zxqb/images/projects/KamaChameleons.jpeg?tr=w-150,h-150,c-maintain_ratio,f-auto',
      title: 'Birdstown.wtf'
    },
    {
      image: 'https://ik.imagekit.io/llh50zxqb/images/projects/ChillBoys.jpeg?tr=w-150,h-150,c-maintain_ratio,f-auto',
      title: 'Kama Chameleons'
    },
    {
      image:
        'https://ik.imagekit.io/llh50zxqb/images/projects/EternalKlayPets.jpeg?tr=w-150,h-150,c-maintain_ratio,f-auto',
      title: 'The Africans'
    },
    {
      image:
        'https://ik.imagekit.io/llh50zxqb/images/projects/CryptSocialClub.jpeg?tr=w-150,h-150,c-maintain_ratio,f-auto',
      title: 'Board Gamers'
    },
    {
      image: 'https://ik.imagekit.io/llh50zxqb/images/projects/thepopulars.jpeg?tr=w-150,h-150,c-maintain_ratio,f-auto',
      title: 'Cat Civilization'
    },
    {
      image:
        'https://ik.imagekit.io/llh50zxqb/images/projects/catcivilization.png?tr=w-150,h-150,c-maintain_ratio,f-auto',
      title: 'Ducky Squad'
    },
    {
      image: 'https://ik.imagekit.io/llh50zxqb/images/projects/fengya.jpeg?tr=w-150,h-150,c-maintain_ratio,f-auto',
      title: 'Chill Boys'
    },
    {
      image:
        'https://ik.imagekit.io/llh50zxqb/images/projects/ZConnectibles.jpeg?tr=w-150,h-150,c-maintain_ratio,f-auto',
      title: 'Mighty Pirates'
    },
    {
      image:
        'https://ik.imagekit.io/llh50zxqb/images/projects/SanguineDisciples.png?tr=w-150,h-150,c-maintain_ratio,f-auto',
      title: 'Scremlins'
    },
    {
      image:
        'https://ik.imagekit.io/llh50zxqb/images/projects/ElephrensNFT.jpeg?tr=w-150,h-150,c-maintain_ratio,f-auto',
      title: 'Fengya'
    },
    {
      image: 'https://ik.imagekit.io/llh50zxqb/images/projects/thelostape.jpeg?tr=w-150,h-150,c-maintain_ratio,f-auto',
      title: 'Dead Bears'
    },
    {
      image:
        'https://ik.imagekit.io/llh50zxqb/images/projects/DiamondHooves.jpeg?tr=w-150,h-150,c-maintain_ratio,f-auto',
      title: 'Froots'
    },
    {
      image:
        'https://ik.imagekit.io/llh50zxqb/images/projects/MonstersInsideNFT.png?tr=w-150,h-150,c-maintain_ratio,f-auto',
      title: 'Elephrens NFT'
    },
    {
      image: 'https://ik.imagekit.io/llh50zxqb/images/projects/Froots.png?tr=w-150,h-150,c-maintain_ratio,f-auto',
      title: 'Transylvania Castle'
    },
    {
      image: 'https://ik.imagekit.io/llh50zxqb/images/projects/podium.png?tr=w-150,h-150,c-maintain_ratio,f-auto',
      title: 'Podium'
    },
    {
      image: 'https://ik.imagekit.io/llh50zxqb/images/projects/ZeroHeros.png?tr=w-150,h-150,c-maintain_ratio,f-auto',
      title: 'Funga & Friends'
    },
    {
      image: 'https://ik.imagekit.io/llh50zxqb/images/projects/umiverse.png?tr=w-150,h-150,c-maintain_ratio,f-auto',
      title: 'Meta Mouse'
    },
    {
      image:
        'https://ik.imagekit.io/llh50zxqb/images/projects/ShinigamiSins.png?tr=w-150,h-150,c-maintain_ratio,f-auto',
      title: 'Ghost Skulls'
    },
    {
      image: 'https://ik.imagekit.io/llh50zxqb/images/projects/Employables.png?tr=w-150,h-150,c-maintain_ratio,f-auto',
      title: 'Sanguine Disciples'
    },
    {
      image: 'https://ik.imagekit.io/llh50zxqb/images/projects/metamouse.png?tr=w-150,h-150,c-maintain_ratio,f-auto',
      title: 'Umiverse'
    },
    {
      image: 'https://ik.imagekit.io/llh50zxqb/images/projects/ghostskulls.jpeg?tr=w-150,h-150,c-maintain_ratio,f-auto',
      title: 'Eternal Klay Pets'
    },
    {
      image: 'https://ik.imagekit.io/llh50zxqb/images/projects/SecretLabz.png?tr=w-150,h-150,c-maintain_ratio,f-auto',
      title: 'THE POPULARS'
    },
    {
      image: 'https://ik.imagekit.io/llh50zxqb/images/projects/Scremlins.png?tr=w-150,h-150,c-maintain_ratio,f-auto',
      title: 'Selphy'
    },
    {
      image:
        'https://ik.imagekit.io/llh50zxqb/images/projects/boreddoodleape.jpeg?tr=w-150,h-150,c-maintain_ratio,f-auto',
      title: 'Bored Doodlapes'
    },
    {
      image: 'https://ik.imagekit.io/llh50zxqb/images/projects/selphy.jpeg?tr=w-150,h-150,c-maintain_ratio,f-auto',
      title: 'Employables'
    },
    {
      image: 'https://ik.imagekit.io/llh50zxqb/images/projects/deadbears.png?tr=w-150,h-150,c-maintain_ratio,f-auto',
      title: 'Zero Heros'
    },
    {
      image: 'https://ik.imagekit.io/llh50zxqb/images/projects/haoku.jpeg?tr=w-150,h-150,c-maintain_ratio,f-auto',
      title: 'Z Connectibles'
    },
    {
      image:
        'https://ik.imagekit.io/llh50zxqb/images/projects/TransylvaniaCastle.jpeg?tr=w-150,h-150,c-maintain_ratio,f-auto',
      title: 'Monsters Inside NFT'
    },
    {
      image: 'https://ik.imagekit.io/llh50zxqb/images/projects/duckysquad.jpeg?tr=w-150,h-150,c-maintain_ratio,f-auto',
      title: 'Diamond Hooves'
    }
  ]

  return (
    <div className="mb-3 flex">
      {cardList.map((card) => (
        <CardItem image={card.image} title={card.title} />
      ))}
    </div>
  )
}
