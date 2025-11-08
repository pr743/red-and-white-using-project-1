import React from "react";
import "./Array.css";

function Array() {
  const booksSet1 = [
    {
      name: "The Silent Patient",
      author: "Alex Michaelides",
      price: "₹350",
      year: 2019,
      img: "https://www.myreadingcorner.co.uk/wp-content/uploads/2019/12/The-Silent-Patient-PB-cover-1355x2048.jpg",
    },

    {
      name: "It Ends with Us",
      author: "Colleen Hoover",
      price: "322",
      year: 2016,
      img: "https://m.media-amazon.com/images/I/81s0B6NYXML._AC_UF1000,1000_QL80_.jpg",
    },

    {
      name: "The Fault in Our Stars",
      author: "John Green",
      price: "299",
      year: 2012,
      img: "https://2.bp.blogspot.com/-H5S8muSrPNc/U59zRS6D-dI/AAAAAAAAQyM/NOCmrAEuBW0/s1600/IMG_3702.JPG",
    },

    {
  name: "Atomic Habits",
  author: "James Clear",
  price: "₹420",
  year: 2018,
  img: "https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UF1000,1000_QL80_.jpg",
},

{
  name: "The Let Them Theory:",
  author: "Mel Robbins",
  price: "₹480",
  year: 2024,
  img: "https://m.media-amazon.com/images/I/91ZVf3kNrcL._SL1500_.jpg",
},

  ];

  const booksSet2 = [
    {
      name: "Verity",
      author: "Colleen Hoover",
      price: 340,
      year: 2018,
      img: "https://wroteabook.org/wp-content/uploads/2023/01/verity_book_summary_detailed.webp",
    },

    {
      name: "The Silent Patient",
      author: "Alex Michaelides",
      price: 310,
      year: 2019,
      img: "https://m.media-amazon.com/images/I/81nzxODnaJL._AC_UF1000,1000_QL80_.jpg",
    },

    {
      name: "Before We Were Strangers",
      author: "Renée Carlino",
      price: 285,
      year: 2015,
      img: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781501105777/before-we-were-strangers-9781501105777_hr.jpg",
    },
  ];

  const allBooks = [...booksSet1, ...booksSet2];
  return (
    <>
      <div className="app">
        <h1>My Book Collection</h1>
        <div className="book-container">
          {allBooks.map(({ name, author, price, year, img }, i) => (
            <div className="book-card" key={i}>
              <img src={img} alt={name} />
              <div className="book-info">
                <h2>Name : {name}</h2>
                <p>
                  <b>Author:</b> {author}
                </p>
                <p>
                  <b>Price:</b> ₹{price}
                </p>
                <p>
                  <b>Year:</b> {year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Array;
