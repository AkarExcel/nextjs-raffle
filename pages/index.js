import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header/>
      <h1 className="text-3xl font-bold ">
        Hello Web3!
      </h1>
    </div>
  )
}
