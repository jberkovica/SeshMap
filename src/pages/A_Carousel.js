import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./A_Carousel.css";
import {ReactComponent as Person} from './person.svg';


function A_Carousel() 
{
    return (
        <>
        <Carousel className = "Acks">
            <Carousel.Item>
            <div>
                <table class = "Names">
                    <tr>
                        <td> <Person /> Sergei </td>
                        <td> <Person /> Gerry L </td>
                        <td> <Person /> Petra </td>
                        <td> <Person /> Marina </td>
                        <td> <Person /> Ying </td>
                    </tr>
                    <tr>
                        <td> <Person /> Ankush </td>
                        <td> <Person /> Irfan </td>
                        <td> <Person /> Olga </td>
                        <td> <Person /> Stacy </td>
                        <td> <Person /> Florent </td>
                    </tr>
                    <tr>
                        <td> <Person /> Rizwana </td>
                        <td> <Person /> Kate </td>
                        <td> <Person /> Vincent </td>
                        <td> <Person /> Franz </td>
                        <td> <Person /> Shikhar </td>
                    </tr>
                </table>
            </div>
            </Carousel.Item>
        </Carousel>
        </>
    );
};

export default A_Carousel;