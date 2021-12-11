import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import Carousel from './components/carousel';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';

const restEndpoint = "https://api.pexels.com/v1/search?query=nature&per_page=10&locale=pt-BR";
const callRestApi = async () => {
    const response = await fetch(restEndpoint, {
        method: 'get',
        headers: new Headers({ 
          'Authorization': 'Bearer 563492ad6f91700001000001dac507b22f25415c861a3bd1f27322ea' })
    });
        return await response.json();
};
const App = () => {
  
  function RenderResult() {
    const [apiResponse, setApiResponse] = useState("*** now loading ***");
    useEffect(() => {
        callRestApi().then(
            result => setApiResponse(result.photos.map(photo => <ul>
                    <li>ID: <b>{photo.id}</b></li>
                    <li>Fotografo: <b>{photo.photographer}</b></li>
                    <li>URL: {photo.url}</li>
                    <p><img src={photo.src.small} alt={photo.id}/></p>
                </ul>
            )));
    }, []);

    return (  {apiResponse} );
}
  return (
    
    <div>

      <Header/>
      <Carousel/>
      <Main/>
      <Main/>
      <Footer/>

    </div>

    
  )
}

export default App;
