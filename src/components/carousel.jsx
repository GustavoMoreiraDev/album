const Carousel = () => {
    
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://images.pexels.com/photos/360912/pexels-photo-360912.jpeg" className="d-block w-100 img-carousel img-carousel" width="500" height="500" alt="Img-Carousel"></img>
            <div className="carousel-caption d-none d-md-block text">
              <h3>Album de Fotos</h3>
              <p><em> Pesquise por Cachorrinhos, Carros e Cidades e Encontre os Melhores flash's</em></p>
            </div>
          </div>
          <div className="carousel-item ">
            <img src="https://images.pexels.com/photos/160994/family-outdoor-happy-happiness-160994.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="d-block w-100 img-carousel" width="500" height="500" alt="Img-Carousel"></img>
            <div className="carousel-caption d-none d-md-block">
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://images.pexels.com/photos/161212/rio-de-janeiro-olympics-2016-niteroi-brazil-161212.jpeg" className="d-block w-100 img-carousel" width="500" height="500" alt="Img-Carousel"></img>
            <div className="carousel-caption d-none d-md-block">
            </div>
          </div>
        </div>
  
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
  
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
        
      </div>
    )
}

export default Carousel