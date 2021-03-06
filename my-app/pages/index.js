import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Main from '../components/Main'
import Project from '../components/Project'
import Mint from './Mint'
import Contact from './Contact.tsx'

import {useEffect, useRef, useState} from 'react';
import { NFT_ADDRESS, abi } from './constants';
import Web3 from 'web3';
import {ethers, Contract, utils, providers} from 'ethers';
import Web3Modal from 'web3modal';


export default function Home() {
//Contract Initiate States
const [tokenIdsMinted, setTokenIdsMinted] = useState(0);
const [isOwner, setIsOwner] = useState(false);
const [isConnected, setIsConnect] = useState(false);
const [accountAddress, setAccountAddres] = useState('');
const [loading, setLoading] = useState(false);
//catch provider as a ref
const web3modal = useRef();


//Function To Split Address
const splitString = (string) => {
  let result1 = string.substring(0,5);
  let result2 = string.substring(38,42);
  let finalResult = result1 + "..." + result2;
  return finalResult;
};

const getProviderOrSigner = async(needSigner = false) => { 
      //Get access To Provider
      const provider = await web3modal.current.connect();
      const web3provider = new providers.Web3Provider(provider);
      const signer = web3provider.getSigner();
      const address = await signer.getAddress();
      //split the address
      const subStringAddress = splitString(address);
      setAccountAddres(subStringAddress);
      console.log(accountAddress);

      const {chainId} = await web3provider.getNetwork();
    if(chainId !==4) { 
      window.alert("Change Network To Rinkeby")

    }
    if(needSigner) {
      const signer = web3provider.getSigner();
      return signer
    }
    return web3provider;
};

//Create The Connection Function
const Connect = async() => { 
  try {
    await getProviderOrSigner();
    setIsConnect(true);
  }catch(err) { 
    console.error(err)
  }

}





useEffect(() => { 
  if(!isConnected) { 
    web3modal.current = new Web3Modal({
      network: "rinkeby",
      providerOptions: {},
      disableInjectedProvider: false,

    })
  }
})

// NFT contract Mint Functions Below

//getOwner Function

const getOwner = async() => { 
  try { 
    //No need for a signer in this function
    const provider = await getProviderOrSigner();

    const nftContract = new Contract(NFT_ADDRESS, abi, provider);
    //call owner of the function 
    const _owner = await nftContract.owner();
    //get signer now! to exttract the address of the currenlty connected metamaks
    const signer = await getProviderOrSigner(true);
    const address = await signer.getAddress();
    if(address.toLowerCase() === _owner.toLowercase()) {
      setIsOwner(true);
      
    }



  }catch(err) { 
    console.log(err)
  }


};


//getTokenIdsMinted => fetches all the number of tokens arlready claimed

const getTokenIdMinted = async() => { 
  try { 

    const provider = await getProviderOrSigner();
    const nftContract = new Contract(NFT_ADDRESS, abi, provider);
    const _tokenIds = await nftContract.tokenIds();
    setTokenIdsMinted(_tokenIds.toString());
  }catch(err) { 
    console.log(err)
  }

};



//mint function claims the NFT


const mint = async() => { 
  try { 
    //Signer in this transaction 
    const signer = getProviderOrSigner(true);
    //new instance of nft contract
    const nftContract= new Contract(NFT_ADDRESS, abi, providers);

    //call the mint function from contract
    const tx = await nftContract.mint({
        //Value signifies the cost of the NFT
        //parse string to etther using the utilis library from ether.js 
      value: utils.parseEther("0.01")
    });
    setLoading(true);
    //wait for transaction to get mined 
    await tx.wait();
    setLoading(false);
    






  }catch(err) { 
    console.error(err)
  }
}









  



  return (
    <div className={styles.container}>
      <Head>
        <title>Sydney Sanders Portfolio</title>
        <meta name="description" />
      </Head>

      <div className = "body_Wrapper">
      <Navbar
        Connect = {Connect}
        accountAddress = {accountAddress}
        isConnected = {isConnected}
      />

      <section className = "home">
        <div className = "home_Header">
    
    <div className = "heading_Contents">
      <p>Hi! There !</p>
        <span id ="line"></span>
       <h1>I'm Sydney Sanders</h1>
        <h2> Front-End Developer </h2>
        <h3>I Like To Keep Things Very Minimal.</h3>
        <button className = "explore">
            Explore My Work
          </button>

      </div>
    <div className = "imageSphere">
        <Image src = "/Group.png" alt = "group" width={900} height = {900}></Image>
      </div>
    </div>

        </section>


        <section className = "divide">
                <div className = "divideLine"></div>
              </section>
    

     <Main />

     <section className = "divide clear">
                <div className = "divideLine"></div>
              </section>


              <section className ="skills">
              <div className = "whatIDo">
              <h2>Skills </h2>
            </div>
              <Image className = "skills_Image" alt ="Skills" src = "/Skills.png" width={290} height ={250} />
                <div className = "skill_Card">
                    <div className = "card">
                      <div className = "card1">
                        <div className = "subCard">
                            HTML 
                          </div>
                          
                        <div className = "subCard card_Top">
                            React 
                          </div>
                          
                        <div className = "subCard card_Top">
                            Git 
                          </div>
                   
                          
                            </div>
                      <div className = "card1">
                      <div className = "subCard">
                          
                          CSS 
                        
                        </div>
                               
                        <div className = "subCard card_Top">
                            NextJs 
                          </div>
                               
                       
                        <div className = "subCard card_Top">
                            EtherJs 
                          </div>
                        <div className = "poly">
                            <Image  className='polyGon' alt = "polyGon" src = '/PolyGon.png' width={14} height ={14}></Image>
                          </div>
                            </div>
                      <div className = "card1">
                      <div className = "subCard">
                          
                          Javascript 
                        
                        </div>
                        <div className = "subCard card_Top">
                            Solidity 
                          </div>
                        <div  className  = "subCard card_Top">
                            NodeJs 
                          </div>
                               
                            </div>
                    
                          </div>
              
              </div>
                </section>

                
        <section className = "divide">
                <div className = "divideLine"></div>
              </section>


              <Project />
              <Mint />
     
    </div>
    </div>

  )
}
