import './Stream.css';

import FancyCard from "./FancyCard";
import { chunk } from './Crew';

function Stream(props) {
  let grads = [
    "linear-gradient(to right, #FED257 0%, #FE48D7 100%)",
    "linear-gradient(to right, #C0DD41 0%, #24A37A 100%)",
    "linear-gradient(to right, #5A87FF 0%, #A9D6FD 100%)",
    "linear-gradient(to right, #2af598 0%, #009efd 100%)",
    "linear-gradient(to right, #EC107C 0%, #342CB5 100%)",
    "linear-gradient(to right, #5A87FF 0%, #A9D6FD 100%)"
  ];

  let streams = [
    Date.parse("21 Mar 2021 19:00:00 GMT+3"),
    Date.parse("04 Apr 2021 19:00:00 GMT+3"),
    Date.parse("18 Apr 2021 19:00:00 GMT+3"),
    Date.parse("02 May 2021 19:00:00 GMT+3"),
    Date.parse("16 May 2021 19:00:00 GMT+3"),
    Date.parse("30 May 2021 19:00:00 GMT+3"),
    Date.parse("13 Jun 2021 19:00:00 GMT+3"),
    Date.parse("27 Jun 2021 19:00:00 GMT+3"),
  ].filter(date => date - new Date().getTime() > 2 * 60 * 60 * 1000); // 2 hours

  return (
    <div className="Stream container">
      <FancyCard
        className="mb-4"
        title="Sonraki Yayın"
        text= {
            <div>
              <h3>{streams[0] ? dateToStringTurkish(new Date(streams[0])) : "Görünüşe göre yakında bir yayın yok :("}</h3>
            </div>
          }
        background={grads[0]}
        />
      {
        chunk(streams.slice(1), 2).map((duo, iindex) => (
          <div className="row justify-content-center">
            {
              duo.map((stream, jindex) => (
                <div className="col-sm-6" key={iindex * 2 + jindex}>
                  <FancyCard
                    className="mb-4"
                    title="Yaklaşan Yayın"
                    text={
                      <div>
                        <h4>{dateToStringTurkish(new Date(stream))}</h4>
                      </div>
                      }
                    background={grads[(iindex * 2 + jindex + 1) % grads.length]}
                    />
                </div>
              ))
            }
          </div>
        ))
      }
    </div>
  );
}

function dateToStringTurkish(date) {
  let months = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];

  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getYear() + 1900;
  let hours = date.getHours();
  let minutes = date.getMinutes();

  return `${day} ${months[month]} ${year} ${(""+hours).padStart(2, "0")}:${(""+minutes).padStart(2, "0")}`;
}

export default Stream;