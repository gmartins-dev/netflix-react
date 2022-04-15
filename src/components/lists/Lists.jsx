import NetflixHome from "../netflixHome/NetflixHome";
import React, { useEffect, useState } from 'react'
import Database from '../database/Database'


export default function Lists (){

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
        <>
        {movieList.map((item, key) => (

            <div>
                {item.title}
            </div>
        
        ))}
        
        
        </>




    );

}