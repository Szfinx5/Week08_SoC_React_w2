import './App.css';
import GetCatPhoto from "../Fetch/fetch.js"

function App() {
  // let catImage = await getPhoto()
  // console.log("this is the cat image" + catImage)

  return (
    <div className="main-photo">
      <p>This is where the image should go</p>
        <GetCatPhoto/>
        <p>'This is the fact API content'</p>
    </div>
  );
}

export default App;

// <img src={catImage} className="cat-logo" alt="" />
