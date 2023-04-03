import { react } from "react";
import style from '../css/style.css';

function Carousel () {
    return (
        <>
       <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner carousel-h">
          <div className="carousel-item active">
            <img className="d-block w-100" src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHJlc29ydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="First slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt="Second slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://media.istockphoto.com/id/1331465591/photo/3d-render-of-a-luxury-hotel-swimming-pool.jpg?b=1&s=170667a&w=0&k=20&c=IQl7jGnyHcdohrZMOhDVntebeYxaAVDveQO3jsxd7_I=" alt="Third slide"/>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      
        
        </>

    )
}

export default Carousel;