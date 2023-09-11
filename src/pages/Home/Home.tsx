import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import RandomPapers from '../../components/RandomPapers/RandomPapers'
import './Home.scss'

const Home = () => {
  return (
    <div className='Home'>
      <Header />
      <Hero />
      <RandomPapers />
      <Footer />
    </div>
  )
}

export default Home
