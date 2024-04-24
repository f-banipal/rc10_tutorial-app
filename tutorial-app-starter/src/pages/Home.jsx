import { useEffect, useState } from "react";
import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios";

const Home = () => {

  const [tutorials, setTutorials] = useState([])
  const getTutorials = async () => {
    //! await-fetch kullaniminda responsive'i JSON a kendimiz cevirmemiz gerekir
    // const res = await fetch("https://tutorial-api.fullstack.clarusway.com/tutorials/")
    // const data = await res.json()

    //! await-axios da responsive JSON a otomatik olarak cevrilir.
    const URL = "https://tutorial-api.fullstack.clarusway.com/tutorials/";
    const res = await axios(URL);
    console.log(res.data);
    setTutorials(res.data)
  };
//! NOT: setTutorials() varsa burada getTutorials'i cagirirsak sonsuz dongu olusur. Once getTutorials cagriliyor daha sonra istek gonderiliyor. Istek gonderildigi icin state guncelleniyor dolayisi ile tekrar render ediliyor, tekrar fonksiyon cagriliyor ...
  //getTutorials();

useEffect(()=>{
  //? componentDidMount (ilk render sonrasi bir defa istek gonder)
  getTutorials()

}, [])

  return (
    <>
      <AddTutorial />
      <TutorialList tutorials={tutorials} />
    </>
  );
};

export default Home;
