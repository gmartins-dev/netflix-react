
import React, { useEffect, useState } from 'react'
import Database from '../database/Database'

import Lists from "../lists/Lists"


function NetflixHome (){


    const [movieList, setMovieList] = useState([]);


    useEffect(() => {
        const loadAll = async () => {
        //importing full list from tmdb api database
        let list = await Database.getHomeList();
        setMovieList(list);
        }


        loadAll();
        }, [] );

    return(

        
           
       <div className="page">
           <Lists />
       </div>



        
    )

}

export default NetflixHome