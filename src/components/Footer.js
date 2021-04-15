import { Link } from 'react-router-dom';

import './Footer.css';

function List(props) {
  return (
    <div className="col-sm-3 mb-3">
      <h4>{props.name}</h4>
      <ul className="reset-ul">
        {
          props.elements.map(element => (
            <li>
              {element[0].startsWith("http") ?  <a href={element[0]}>{element[1]}</a> : <Link to={element[0]}>{element[1]}</Link>}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

function Footer(props) {
  return (
    <div className="Footer w-100 mt-5">
      <div className="container-fluid footer-upper">
        <div className="row pt-5 mx-4">
          <div className="col-sm-4 mb-3">
            <h3>Enka360</h3>
            <p>Enka360, ana odak noktası canlı yayınlar olup Instagram ve YouTube başta olmak üzere çeşitli platformlarda faaliyet gösterecek bir oluşumdur.</p>
          </div>
          <List name="Navigasyon" elements={props.routes} />
          <List name="Sosyal Medya" elements={[
            ["https://facebook.com/enka360", "Facebook"], 
            ["https://facebook.com/enka360", "Instagram"],
            ["https://twitter.com/enka360", "Twitter"]]
          } />
        </div>
      </div>
      <div className="footer-lower">
        <span>© 2021 Enka360 — Tüm Hakları Saklıdır.</span>
      </div>
    </div>
  );
}

export default Footer;