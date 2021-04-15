import { Link } from 'react-router-dom';

import UserSVG from '../images/user.svg';

import './Crew.css';

function Crew(props) {
  let people = [
    {
      name: "Asya Değirmenci",
      title: "Yönetim",
      subtitle: "Lorem ipsum"
    },
    {
      name: "Hakan Candar",
      title: "Tasarım",
      subtitle: "Websitesi Tasarımcısı, Teknik Personel"
    },
    {
      name: "Mert Taylan",
      title: "Tasarım",
      subtitle: "Websitesi Tasarımcısı, Teknik Personel"
    }
  ];

  return (
    <div className="Crew">
      <h1 className="text-fancy fancy-title">Ekibimiz</h1>
      <div className="container">
        {groupBy(people, "title").map(group => (
          [
            <div className="row"><h2 className="crew-title"><span>{group[0].title}</span></h2></div>,
            chunk(group, 3).map(trio => (
              <div className="row justify-content-center">
                {
                  trio.map(person => (
                    <div className="col-md-4">
                      <div className="card mx-auto pt-3">
                        <img className="card-img-top mx-auto my-2" src={UserSVG} alt="personel"/>
                        <div className="card-body">
                          <h5 className="card-title">{person.name}</h5>
                          <p className="card-text">{person.subtitle}</p>
                          <Link className="btn btn-primary" to="/">Detaylar</Link>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            ))
          ]
        ))}
      </div>
    </div>
  );
}

function groupBy(collection, property) {
  let i = 0, val, index,
    values = [], result = [];
  for (; i < collection.length; i++) {
    val = collection[i][property];
    index = values.indexOf(val);
    if (index > -1)
      result[index].push(collection[i]);
    else {
      values.push(val);
      result.push([collection[i]]);
    }
  }
  return result;
}

function chunk(arr, len) {
  var chunks = [],
    i = 0,
    n = arr.length;

  while (i < n) {
    chunks.push(arr.slice(i, i += len));
  }

  return chunks;
}

export default Crew;
export { chunk }