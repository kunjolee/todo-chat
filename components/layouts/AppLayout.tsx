import Head from "next/head";
import { Navbar, Sidebar } from '../ui/';

import styles from './AppLayout.module.css'

interface Props {
  children: JSX.Element | JSX.Element[];
  title: string;
  pageDescription: string;
}

const AppLayout = ({ children, title, pageDescription }: Props) => {

  return (
    <>
      <Head>
        <title>{ title }</title>
        <meta name="description" content={ pageDescription }/>
        <meta name="og:title" content={ title }/>
        <meta name="og:description" content={ pageDescription }/>
      </Head>


      <Sidebar />
      <Navbar />
      <main style={{ padding: '5rem 1rem 1rem' }}>
        { children }
      </main>
    </>
  )
}
export default AppLayout