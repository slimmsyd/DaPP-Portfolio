import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Nav.module.css';
import Blog from '../pages/Blog';



import { useState } from 'react';
const Navbar = ({Connect, accountAddress, isConnected}) => {
    const [polyConnect, setPolyConnect] = useState(false);
    const [line, setLine] = useState(false); 
    const [navigation, setNavigation] = useState(false);
    
    function setTrue() {
     setPolyConnect(true)
     console.log(polyConnect)
    };
    function setFalse() { 
        setPolyConnect(false);
        console.log(polyConnect)
    }  function moveLine() { 
        setLine(true);
        console.log(line)
    }   
    function setLineFalse() {
        setLine(false);
    }

    function showNav() {
        setNavigation(true);
        if(navigation) { 
            console.log("Its true")
            setNavigation(false)
            
        }else { 
            console.log("its false now")
        }
        
    }
    return ( 


        <nav className = "nav">
        <div className = "connectWalletDiv">

        <ul className = "ulNav ulFlexRow">
            <li className = "liNav" id = "lightModeClick">
                      <Image src = "/LightModePoly.png" width={32} height = {32}/>
            </li>
            <li className = "liNav">
                       <Image src = "/DarkmodePoly.png" width={32} height = {32}/>
            </li>
        </ul> 
        </div>
        <div className = "connectWalletDiv">

        <ul className = "ulNav ulFlex2 ">
            <li  >
                   <Link className = {`liNav _navigation afterLine ${line ? 'afterLineTrans' : "liNav _navigation "}` } href = "/">Home</Link>
            </li>
            <li >
                   <Link onClick={setLineFalse} onMouseEnter={moveLine} onMouseLeave= {setLineFalse} className = "liNav _navigation " href ="Blog">Blog</Link>
            </li>
           
        </ul>
        </div>

        <div className = "connectWalletDiv">
        <ul className = "ulNav ">
            <li className = "liNav " >
                    <img className =  {`polyConnect ${polyConnect ? 'selected' : " "} `} src = "/Polygonwallet.png" />
            </li>
            <li className = "liNav connectWallet ">
                
                {/* Display WHen ViewPort Gets Smaller */}
                <div onClick={showNav}   className = "menu-Burger">
                    <Image src = '/BurgerMenu.png' width={32} height = {32}></Image>
                </div>

                <div  className = {`hamburger_Div ${navigation ? 'hamburger_Div_Shown' : "" }`}>
                        <ul className = "navLinks">
                            <li><Link href ="/" className='liNav'>Home</Link></li>
                        </ul>
                        <ul className = "navLinks">
                            <li><Link href ="Blog" className='liNav'>Blogs</Link></li>
                        </ul>
                        <ul className='navLinks'>
                            <li><a href = "https://www.youtube.com/channel/UCC8yLhVL7lThf295DtD4rag"><Image src = "/FaceBook.png"  width={39} height = {36}></Image></a></li>
                        </ul>
                        <ul className = "navLinks" >
                            <li><a href = "https://twitter.com/slimmsyd"><Image src = "/Twitter.png"  width={39} height = {36}></Image></a></li>
                        </ul>
                        <ul className = "navLinks">
                            <li><Image src = "/Instagram.png"  width={39} height = {36}></Image></li>
                        </ul>

                </div>

                    <button onClick={Connect} 
                        onMouseEnter= {setTrue}
                        onMouseLeave = {setFalse}
                    >{isConnected ? accountAddress : "Connect Wallet"}</button>
            </li>
        </ul>
        </div>
       
        </nav>

    )


};


// return(
//     <nav className={styles.nav}>
//         <div className = {styles.connectWalletDiv}>          
//         <ul className = {`${styles.ulNav} ${styles.ulFlexRow}`}>
//                 <li className = {styles.liNav} id = {styles.lightModeClick}>
//                    <Image src = "/LightModePoly.png" width={32} height = {32}/>
//                 </li>

//                 <li className = {styles.liNav}>
//                 <Image src = "/DarkmodePoly.png" width={32} height = {32}/>
//                 </li>
//             </ul>

//                 </div>

//                 <div className = {styles.connectWalletDiv}>
//                     <ul className = {`${styles.ulNav} ${styles.ulFlex2}`}>
//                         <li className = {`${styles.liNav} ${styles._navigation} ${styles.afterLine} `}>
//                             <Link href = "/"><a>Home</a></Link> 
//                         </li>
//                         <li className = {`${styles.liNav} ${styles._navigation} $ `}>
//                         <Link href = "/Blog"><a>Blog</a></Link> 
//                         </li>


//                     </ul>

//                 </div>
//                 <div className = {styles.connectWalletDiv}> 
//                 <ul className = {`${styles.ulNav} `}>
//                         <li className = {styles.liNav}>
//                             <Image className = {styles.polyConnect} src = "/Polygonwallet.png" width={36} height= {36} ></Image> 
//                         </li>



//                         <li className = {styles.liNav}>
//                                     <button>Connect Wallet</button>
//                         </li>


//                     </ul>

//                 </div>




  


//     </nav>


// )

export default Navbar;