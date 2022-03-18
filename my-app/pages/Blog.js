import Image from 'next/image';
import Navbar from '../components/Navbar';
import styles from '../styles/Blog.module.css';
export default function Blog() { 

    return( 
        <>
            <Navbar />
                <div className = {styles.blog_Div}>
                        <input className = {styles.blog_Search} type = "text" textarea = "60"></input>
                        <Image id = {styles.circle_Push } src = "/Circle.png" width={32} height ={32}></Image>
                </div>

                
            

        
        </>

    )

}