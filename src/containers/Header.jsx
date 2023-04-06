import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import './header.css'


const Header = () => {

  const [search, setSearch] = useState("")
  const [data, setData] = useState({})

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((response) => {
        console.log(response);
        setData(response.data)
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])



  return (
    <div className="ui fixed menu">

<h2><b>Shop your Style</b></h2>
      <div className="ui container center">
       


        <div className="search-box">
          <input type="text" value={search} onChange={(e) => { setSearch(e.target.value) }} placeholder="search product" />
        </div>
        {/* {


          data  .filter((row) => {
              if (search == "") {
                return row;
              }
              else if (row.title.toLowerCase().includes(search.toLowerCase())) {
                return row;
              }
            })

           

        } */}


      </div>
    </div>
  )
}

export default Header;
