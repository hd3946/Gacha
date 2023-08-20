const Arrow = ({ onclick }: { onclick: boolean | undefined }) => {
  const rotate = onclick ? 'rotate-90' : 'rotate-0'
  return (
    <>
      <svg
        width="3"
        height="6"
        className={`mr-3 overflow-visible transition-transform duration-200 ease-in-out ${rotate}`}
        aria-hidden="true"
        viewBox="0 0 3 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 0L3 3L0 6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  )
}

export default Arrow
