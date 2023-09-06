import { useState } from 'react'

type Props = { id: number; title: string; subTitle: string; description: string; clickHandler: (id: number) => void }

export default function CatalogDescription({ id, title, subTitle, description, clickHandler }: Props) {
  const [selectedId, setSelectedId] = useState(99)

  return (
    <div>
      <div className="mx-3 max-w-2xl" onClick={() => clickHandler(id)}>
        <div className="w-9 rounded-lg bg-blue-600">
          <svg aria-hidden="true" className="h-9 w-9" fill-none>
            <path
              opacity=".5"
              d="M8 17a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
              fill="#fff"></path>
            <path
              opacity=".3"
              d="M8 24a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
              fill="#fff"></path>
            <path d="M8 10a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z" fill="#fff"></path>
          </svg>
        </div>
        <h3 className="mt-6 text-sm font-medium text-blue-600">{title}</h3>
        <p className="font-display mt-2 text-xl text-slate-900">{subTitle}</p>
        <p className="mt-4 text-sm text-slate-600">{description}</p>
      </div>
      {/* <div className="relative mt-10 pb-10">
        <div className="absolute -inset-x-4 bottom-0 top-8 bg-slate-200 sm:-inset-x-6"></div>
        <div className="relative mx-auto w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
          <img className="w-full" src="https://ik.imagekit.io/llh50zxqb/images/assets/app1.jpeg" alt="" />
        </div>
      </div> */}
    </div>
  )
}
