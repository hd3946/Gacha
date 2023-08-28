type Props = { image: string; title: string }

export default function CardItem({ image, title }: Props) {
  console.log(image, title)
  return (
    <div>
      <div className="ml-4 inline-block rounded-md bg-white pb-1 pl-2 pr-2 pt-2 font-normal">
        <div style={{ height: '150px', width: '150px' }} className="bg-white">
          <img className=" mx-auto h-full w-full rounded-md bg-gray-200" loading="lazy" src={image} alt={title} />
        </div>
        <span className="ml-1 mt-2 inline-block text-black">{title}</span>
      </div>
    </div>
  )
}
