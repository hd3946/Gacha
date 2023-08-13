const TokenImage = () => {
  return (
    <div className="cursor-pointer">
      <div className="relative">
        <img
          decoding="async"
          src="https://pbs.twimg.com/media/F1yaZ7RagAIXru3?format=webp&name=medium"
          loading="lazy"
          alt="Preview"
          className="rounded-sm transition-all hover:scale-[1.02]"
        />
        <div className="mt-2 flex items-center justify-between gap-2 pr-1 text-sm text-slate-600 dark:text-slate-400">
          <p className="jsx-d7d6d2acf84bf056">#2</p>
        </div>
      </div>
    </div>
  )
}

export default TokenImage
