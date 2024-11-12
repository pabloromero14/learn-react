import './App.css'
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";

const users = [
    {
        userName: 'midudev',
        name: 'Miguel Ángel Durán',
        isFollowing: true
    },
    {
        userName: 'pabloromeroo9',
        name: 'Pablo Romero',
        isFollowing: false
    },
    {
        userName: 'pedri',
        name: 'Pedri González',
        isFollowing: false
    },
    {
        userName: 'andresiniesta8',
        name: 'Andrés Iniesta',
        isFollowing: true
    },
    {
        userName: 'joaofelix70',
        name: 'Joao Félix',
        isFollowing: true
    }
]


export function App(){
    return(
        <section className = 'App'>
           {
                users.map(({ userName, name, isFollowing}) => (
                        <TwitterFollowCard  
                            key={userName}
                            userName = {userName} 
                            name = {name}
                            initialIsFollowing = {isFollowing}
                        />
                    )
                )
            }
        </section>
    )
}