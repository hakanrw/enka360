import FancyCard from './FancyCard';
import './Sponsor.css';

function Sponsor(props) {

  return (
    <div className="Sponsor container">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <FancyCard 
              title="Bronz"
              text={
                  <div> 
                    <h3>500₺ - 3.000₺</h3>
                    <ul>
                      <li>Web sitesinde tanıtım</li>
                      <li>Sosyal medya hesaplarında tanıtım</li>
                    </ul>
                  </div>
                }
              background="linear-gradient(to bottom, #edc0a8 0%, #e6af92 100%)"
              />
          </div>
          <div className="col-md-4">
            <FancyCard 
              title="Gümüş"
              text={
                  <div> 
                    <h3>3.000₺ - 10.000₺</h3>
                    <ul>
                      <li>Web sitesinde tanıtım</li>
                      <li>Sosyal medya hesaplarında tanıtım</li>
                      <li>Yayın esnasında firma logosunun gösterimi</li>
                      <li>Tüm yayınlar esnasında tek seferlik firma bant reklamı</li>
                    </ul>
                  </div>
                }
                background="linear-gradient(to bottom, #c3c3c3 0%, #9e9e9e 100%)"
              />
          </div>
          <div className="col-md-4">
            <FancyCard 
              title="Altın"
              text={
                  <div> 
                    <h3>10.000+ ₺</h3>
                    <ul>
                      <li>Web sitesinde tanıtım</li>
                      <li>Sosyal medya hesaplarında tanıtım</li>
                      <li>Yayın esnasında firma logosunun gösterimi</li>
                      <li>4 yayınlık isim sponsorluğu</li>
                      <li>Instagram üzerinden tercihe bağlı firma tanıtım canlı yayınları</li>
                    </ul>
                  </div>
                }
                background="linear-gradient(to bottom, #fed74c 0%, #ffae45 100%)"
              />
          </div>
        </div>
    </div>
  );
}

export default Sponsor;