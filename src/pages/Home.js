import React, {useState} from 'react';
import Footer from '../Components/MainLayout/Footer';
import Header from '../Components/MainLayout/Header';
import Background from '../Components/Background';
import NoiseBackground from '../Components/NoiseBackground';
import CloseToYouSection from '../Components/CloseToYouSection';
import BrowseSection from '../Components/BrowseSection';

const Home = () => {
  const [isCloseToYouSectionEmpty, setCloseToYouSectionEmpty] = useState(false);
  return (
  <NoiseBackground>
  <Background className={"dark:bg-transparent min-h-screen"}>
      <Header />
      <CloseToYouSection setEmpty={setCloseToYouSectionEmpty}/>
      {isCloseToYouSectionEmpty&&<BrowseSection/>}
      <Footer/>
  </Background>
  </NoiseBackground>
)}

export default Home;
