import { useState } from 'react'


export default function Button(props) {

    return(
        <button className='button' onClick={props.method}>Move {props.direction}</button>
    );
}