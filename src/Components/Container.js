import React from 'react'
import './Styles/Container.css'

function Container(props){
    return (
        <div>
            <div className = "container">
                <div className = "top-right-id">
                    <p>{props.person.id}/25</p>
                </div>
                <div className = "name">
                    <p>{props.person.name.first} {props.person.name.last}</p>
                </div>
                <div className = "location">
                     <p><span className ="bold">From:</span> {props.person.city}, {props.person.country}</p>
                    <p><span className="bold">Job Title: </span>{props.person.title}</p>
                    <p><span className="bold">Employer: </span>{props.person.employer}</p>
                </div> 
                <div className = "favorite-movies">
                    <div>Favorite Movies:</div>
                    <div className = "movies">
                        <p>1: {props.person.favoriteMovies[0]}</p>
                        <p>2: {props.person.favoriteMovies[1]}</p>
                        <p>3: {props.person.favoriteMovies[2]}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Container
