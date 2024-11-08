import {useState} from 'react'
import './App.css'
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";

export function App(){
    const [uName,setUName] = useState('pabloromeroo9')

    const format = (userName) => `@${userName}`

    console.log('render name with: ', uName);
    
    return(
        <section className = 'App'>
            <TwitterFollowCard 
                formatUserName={format} 
                userName='midudev' 
                name='Miguel Ángel Durán' 
            />
            
            <TwitterFollowCard 
                formatUserName={format}   
                userName= {uName} 
                name='Pablo Romero' 
            />
            
            <TwitterFollowCard 
                formatUserName={format}  
                userName='pedri' 
                name='Pedri González' 
            />
            
            <TwitterFollowCard 
                formatUserName={format}  
                userName='andresiniesta8' 
                name='Andrés Iniesta' 
            />
            
            <TwitterFollowCard 
                formatUserName={format}  
                userName='joaofelix70' 
                name='Joao Félix' 
            />

            <button onClick={() => setUName('pedri')}>
                Cambiar el nombre
            </button>
        </section>
    )
}