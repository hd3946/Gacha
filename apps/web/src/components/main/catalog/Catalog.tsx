'use client'
import { useState } from 'react'
import CatalogDescription from './CatalogDescription'

export default function Catalog() {
  const catalogList = [
    {
      id: 0,
      title: 'Multi-Characters Support (main + advanced mode)',
      subTitle: 'Create multiple characters within the same collection.',
      description:
        'Having multiple characters in one collection can make the generated art more versatile and appealing, as buyers can have a variety of options to choose from.'
    },
    {
      id: 1,
      title: 'Automatice Saving',
      subTitle: 'With our Cloud Saving feature, never lose your work and progress.',
      description:
        'Automatically save your project in the browser so when you resusme your build, your layers, configurations and files are still in the same place you left them.'
    },
    {
      id: 2,
      title: 'Customer Support',
      subTitle: 'Use our chat support when your have a question or seek for advice.',
      description:
        "This isn't actually a feature, it's just an added value we provide to make our launchpad stand out not just for its robustness but the team you will have acccess to."
    }
  ]
  const [carouselId, setCarouselId] = useState(0)

  const onClickCatalog = (id: number) => {
    setCarouselId(id)
  }

  console.log('carouselId', carouselId)

  return (
    <div>
      <div className="-mx-4 mt-20 flex gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6">
        {catalogList.map((catalog) => (
          <CatalogDescription
            id={catalog.id}
            title={catalog.title}
            subTitle={catalog.subTitle}
            description={catalog.description}
            clickHandler={onClickCatalog}
          />
        ))}
      </div>

      <div className="relative mt-10 flex overflow-hidden pb-10">
        <div className="relative mt-10 flex pb-10" style={{ transform: `translate3d(-${700 * carouselId}px, 0, 0)` }}>
          <div className="absolute -inset-x-4 bottom-0 top-8 bg-slate-200 sm:-inset-x-6"></div>
          <div className="relative mx-auto w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
            <img className="w-full" src="https://ik.imagekit.io/llh50zxqb/images/assets/app1.jpeg" alt="" />
          </div>
        </div>
        <div className="relative mt-10 pb-10" style={{ transform: `translate3d(-${700 * carouselId}px, 0, 0)` }}>
          <div className="absolute -inset-x-4 bottom-0 top-8 bg-slate-200 sm:-inset-x-6"></div>
          <div className="relative mx-auto w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
            <img className="w-full" src="https://ik.imagekit.io/llh50zxqb/images/assets/app1.jpeg" alt="" />
          </div>
        </div>
        <div className="relative mt-10 pb-10" style={{ transform: `translate3d(-${700 * carouselId}px, 0, 0)` }}>
          <div className="absolute -inset-x-4 bottom-0 top-8 bg-slate-200 sm:-inset-x-6"></div>
          <div className="relative mx-auto w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
            <img className="w-full" src="https://ik.imagekit.io/llh50zxqb/images/assets/app1.jpeg" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
