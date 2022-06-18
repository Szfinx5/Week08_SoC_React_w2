import { React, useState, useEffect } from "react";

function GetCatPhoto() {
  const [catPic, setCatPic] = useState(null);

  useEffect(
    function () {
      async function getPhoto() {
        let response = await fetch(
          "https://api.thecatapi.com/v1/images/search"
        );
        let data = await response.json();

        setCatPic(data[0].url);
        console.log(`This is the fetched pic: ${data[0].url}`);
        return catPic;
      }
      getPhoto();
    },

    []
  );

  return (
    <div className="photo-box">
      <img
        className="cat-photo"
        src="https://cdn2.thecatapi.com/images/zPtIYiDM-.jpg"
        alt="Cat"
        style={{ border: "1px solid black", width: "200px" }}
      />
      <button>Click me</button>
    </div>
  );
}

export default GetCatPhoto;
