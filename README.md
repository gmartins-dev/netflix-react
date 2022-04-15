## NETFLIX CLONE USING REACT


Steps:

1) import movies database from TMDB.org database

https://developers.themoviedb.org/3/getting-started/introduction

key: fbebdab96fb21b739942d1a592853f3e
url base: https://api.themoviedb.org/3


useful tolls:
Test API  --> https://resttesttest.com/
Format json --> http://jsonviewer.stack.hu/


import infos from external service(API TMDB):

-Netflix originals
-Trending 
-Top Rated
-Action
-Comedy
-Horror
-Romance
-Documentary

create a Fetch function for import movie infos from API Database

2) creation of react components
    -database
    -header
    -featured
    -lists
    -movieRow
    -footer






            <div className="movieRow--listarea">
                {items.results.length > 0 && items.results.map((item, key) => (
                    
                    <img src= {`https://image.tmdb.org/t/p/w300${item.poster_path}`} />
                    
                )
                
                )}
            </div>
