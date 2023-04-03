import { react } from "react";
import style from '../css/style.css';

function Services () {
    return (
        <>
        <div className="container">
        <div className="row">
      <div className="col-md-12 text-center"><h1>What we offer</h1></div>
        </div>
        <div className="row">
       <div className="col-md-3">
        <div className="card-deck">
            <div className="card">
              <img className="card-img-top" src="https://media.istockphoto.com/id/1430631522/photo/gym-without-people-with-large-group-of-exercise-machines.jpg?b=1&s=170667a&w=0&k=20&c=h9NuU5o6ROWjHqqoatmVwcGKg8fpJblM98qAa9BX-aY=" alt="Card image cap" className="card-img-top img-style"/>
              <div className="card-body">
                <h5 className="card-title">Ultra Modern Gym</h5>
                <p className="card-text">We have a gym facility,an indoor location for athletics.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
       </div>
       <div className="col-md-3">
        <div className="card-deck">
            <div className="card">
              <img className="card-img-top" src="https://images.unsplash.com/photo-1591257904364-5137d7203d96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmFyJTIwY291bnRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="Card image cap" className="card-img-top img-style"/>
              <div className="card-body">
                <h5 className="card-title">Bar</h5>
                <p className="card-text">We also have a bar to serve food and drinks.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
       </div>
       <div className="col-md-3">
        <div className="card-deck">
            <div className="card">
              <img className="card-img-top" src="https://images.unsplash.com/photo-1551491603-7d38b9e605f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHN3aW1taW5nJTIwcG9vbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="Card image cap" className="card-img-top img-style"/>
              <div className="card-body">
                <h5 className="card-title">Swimming Pool</h5>
                <p className="card-text">We also have a swimming pool for relaxation.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
       </div>
       <div className="col-md-3">
        <div className="card-deck">
            <div className="card">
              <img className="card-img-top" src="https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bHV4dXJ5JTIwYmVkcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="Card image cap" className="card-img-top img-style"/>
              <div className="card-body">
                <h5 className="card-title">Luxury Bedrooms</h5>
                <p className="card-text">We have spacious bedrooms.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
       </div>
        </div>
      </div>

        </>
    )
}

export default Services;