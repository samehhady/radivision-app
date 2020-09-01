import React from 'react';
import './App.css';

export default class App extends React.Component
{
    state = {
        movies: []
    };

    componentDidMount()
    {
        fetch( "http://localhost:3001/movies" )
            .then( res => res.json() )
            .then(
                ( result ) =>
                {
                    this.setState( {
                        movies: result
                    } )
                },
                ( error ) =>
                {
                    this.setState( {
                        error: error
                    } )
                }
            )
    }

    render()
    {
        const { movies } = this.state;
        return (
            <ul>
                {
                    movies.map( ( movie ) =>
                    {
                        return <li key={movie.id}>{movie.title}</li>
                    } )}
            </ul>
        );
    }
}
