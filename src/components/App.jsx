import {useState, useEffect} from 'react';
import ImageForm from "./ImageForm";
import ImageList from "./ImageList";

function App() {
  const [photos, setPhotos] = useState([]);
  // const [counter, setCounter] = useState(4);

  useEffect( () => {
      setPhotos ([
        {
          id: 1,
          loc: 'https://miro.medium.com/max/1000/0*Ua695vjzFHV6VNOX.png',
          caption: `It sure ain't.`,
        },{
          id: 2,
          loc: 'https://miro.medium.com/max/1400/1*Hgs78-x-BwXk1inYQKjyOg.jpeg',
          caption: 'Seems about right...',
        },{
          id: 3,
          loc: 'https://www.memesmonkey.com/images/memesmonkey/1f/1f3e7d06fab98d8d499bf0bfc630e203.jpeg',
          caption: 'God help you if you miss a parenthesis',
        }
      ])}, []);

  return (
    <div className="App">
      <ImageForm />
      <ImageList photos={photos} />
    </div>
  );
}

export default App;
