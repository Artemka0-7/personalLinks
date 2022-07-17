import Home from '../components/screens/Home/Home'
import Head from 'next/head';
import MetaTitle from '../components/ui/MetaTitle'
import axios from 'axios'
import { APP_URL } from '../constants';

const Index = () => {
  return (
    <>
      <MetaTitle title="Links | Все полезные ссылки" />
      <Home />
    </>
  )
}

export default Index;
