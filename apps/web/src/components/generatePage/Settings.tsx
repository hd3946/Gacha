import { GetServerSideProps } from 'next'

const Settings = () => {
  return (
    <div className="bg-green-800">
      <h1>This is Settings</h1>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {}
  }
}

export default Settings
