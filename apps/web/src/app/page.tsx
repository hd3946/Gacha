import Image from 'next/image'
import { sayHello } from '../lib'
import { Button } from '../ui'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
      </div>
    </main>
  )
}
