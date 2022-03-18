import React, {useState} from 'react';
import Image from 'next/image';



const Project = () => { 

    const [button, setButton] = useState(false)
    const [buttonTwo, setButtonTwo] = useState(false)
    function revealButton() { 
        setButton(true)
        console.log(button, "is true")
    }
   const hideButton = () => { 
       setButton(false);

   }

   function setbutton2()  { 
       setButtonTwo(true)
   }
   function removeButton2() { 
       setButtonTwo(false);
   }


    return ( 

        <section className = "projects">
        <div className = "whatIDo">
             <h2> Some Things I Built </h2>
             <a href =  "https://github.com/slimmsyd">Click Here To Github</a>
             </div>

         <div className = "main_Card">
                 <div className = "project_Card">
                         <div className = "project_subCard"
                             onMouseEnter={revealButton}
                             onMouseLeave = {hideButton}
                         >
                                 <button className ={`clickToSite ${button ? "clickToSiteReveal" : " "}`}>
                                        <a href = "https://music-player-app-pi.vercel.app/">Go To</a>
                                     </button>
                                 

                             <Image src = '/MusicPlayerApp.PNG' height={128} width = {133} />
                             </div>
                         <div className = "project_subCard empty">
                             </div>
                        
                     </div>
                 <div className = "project_Card">
                         <div className = "project_subCard"
                         onMouseEnter={setbutton2}
                         onMouseLeave = {removeButton2}
                         >
                         <button className ={`clickToSite backdropWhite ${buttonTwo ? "clickToSiteReveal" : " "}`}>
                                         <a href = "https://nft-gallery-mint.vercel.app/">Go To</a>
                                     </button>
                                     <Image src = '/MintChildishNFT.png'   height={250} width = {190}/>


                             </div>
                         <div className = "project_subCard empty">
                             </div>
                     </div>
             </div>

      
   
   
     </section>


    )


};

export default Project;