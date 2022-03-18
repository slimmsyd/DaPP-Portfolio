import Image from 'next/image'


const Main = () => { 
    return(

        <main className = "main_Contents">
        <Image  src = "/EllipseShape.png" width={96} height = {96}></Image>
          <div className ="development">
          <Image  src = "/Web.png" width={75} height = {75}></Image>

              <h4>Development</h4>
              <p>Specialzing predomitlay in Front-End Developing. I use various web techonolgies depending on the problem I'm solving. Tech stack includes. Javascript-Css, Html,NodeJs, NextJs, and ReactJs.
              </p>
            
            
            </div>
          <div className ="development">
          <Image  src = "/Design.png" width={75} height = {75}></Image>

              <h4 id = "design">Design</h4>
              <p> As with developer insights to creating websites. Designer insigits in brining them to life.
              </p>
            
            
            </div>
          <div className ="development">
          <Image src = "/Nodes.png" width={75} height = {75}></Image>

              <h4>Web3</h4>
              <p> Large enthusist on upcoming distruptive industry of web3 and blockchain techonolgy.
              </p>
            
            
            </div>



        </main>



    )


};

export default Main;

