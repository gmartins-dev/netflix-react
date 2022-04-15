
import React, { useEffect } from 'react'
import Database from '../database/Database'




function NetflixPage (){


    useEffect(() => {
        const loadAll = async () => {
        //importing full list from tmdb api database
        let list = await Database.getHomeList();
        console.log(list);
        }


        loadAll();
        }, [] );

    return(

        
           
       <div>
           heeeeeeeeeeloooowwNetflixx
       </div>



        
    )

}

export default NetflixPage