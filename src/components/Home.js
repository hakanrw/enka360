import { Link } from 'react-router-dom';
import React from 'react';

import Arrow from '../images/arrow.svg';
import './Home.css';

class Home extends React.Component {
  render() {
    let cards = [
      {
        title: "Yayın Programı",
        text: "En son yayın programımıza göz atın.",
        link: "/streams"
      },
      {
        title: "Hakkımızda",
        text: "Enka360 oluşumumuzun vizyonu ve kuruluş ilkelerine göz atın.",
        link: "/about"
      },
      {
        title: "Sponsorluk",
        text: "Bize destek olmak için sponsorluk tercihlerine göz atın.",
        link: "Sponsor"
      },
      
    ];

    return (
      <div className="Home container">
        <div className="container-fluid greeting-card mx-auto justify-content-center">
          <div className="row h-100">
            <div className="greeting-text"><span>ENKA</span><span>360</span></div>
          </div>
        </div>
        
        <div className="motto my-5 mx-auto">
          <h1 className="text-fancy">Lorem Ipsum</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo diam in risus dictum iaculis. Duis at tincidunt sapien, a pulvinar turpis. Aliquam molestie leo in lectus semper, quis pharetra enim volutpat. Nam ut eleifend ligula. Sed iaculis quis tellus non condimentum. Sed risus ipsum, mattis vitae est nec, sagittis mattis lacus. Etiam sit amet accumsan est. Nulla pellentesque ullamcorper ultricies. Etiam metus sem, scelerisque at malesuada ac, interdum id urna.</p>
        </div>

        <div className="container-fluid pt-5">
          <div className="row h-100 justify-content-center">
            {
              cards.map(element => (
                <div className="col-lg-4 mb-5">
                  <div className="card mx-auto h-100">
                    <div className="card-body">
                      <h5 className="card-title">{element.title}</h5>
                      <p className="card-text">{element.text}</p>
                      {element.link && <Link to={element.link}>Göz At<img src={Arrow} alt=""/></Link>}
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Home;