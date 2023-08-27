import Eighth from './section/Eighth'
import Fifth from './section/Fifth'
import First from './section/First'
import Fourth from './section/Fourth'
import Partners from './section/Partners'
import Second from './section/Second'
import Seventh from './section/Seventh'
import Sixth from './section/Sixth'
import Third from './section/Third'

const Main = () => {
  return (
    <>
      <First />
      <Second />
      <Partners />
      <Third />
      <Fourth />
      <Fifth />
      <Sixth />
      <Seventh />
      <hr className="mt-28" />
      <Eighth />
    </>
  )
}

export default Main
