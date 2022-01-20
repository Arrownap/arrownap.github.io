import Head from "next/head";
import Nv from "/components/Nv";
import Footern from "/components/Footern";
import styles from "/styles/Favorites.module.css";

function index() {
  return (
    <>

<Head>
        <title>   
         Bookmarks
          </title>
        <meta
          name="description"
          content="Arrow Nap| Arrow Nap is the knowledge-sharing community Of Developers."
        />
        <link rel="icon" href="favicon.ico" />
     

      </Head>
    <div>
      <Nv p={"fixed"}  />
    </div>

 

    <div>
<Footern/>
    </div>
    
    
    
    </>
  )
}

export default index