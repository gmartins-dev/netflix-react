import React, { useEffect } from 'react'
import Database from '../src/components/database/Database'
import '../GlobalStyle.css'

function App (){

    useEffect(() => {
        const loadAll = async () => {
        //importing full list from tmdb api database
        let list = await Database.getHomeList();
        console.log(list);
        }


        loadAll();
    }, [] );

   

    return (
        <div>
            hello world
        </div>
    )
}

export default App