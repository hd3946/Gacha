import { GetServerSideProps } from 'next'

const Export = () => {
  return (
    <div className="bg-blue-800">
      <h1>This is Export</h1>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {}
  }
}

export default Export
