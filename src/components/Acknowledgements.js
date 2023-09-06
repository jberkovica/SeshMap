import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Contributors from "../contributors.js";
import { ReactComponent as Person } from "../assets/person.svg";
import "./Acknowledgements.css";

const nameRows = [];
const nameTables = [];

const buildNameRow = index => {
    // 5 names show up in each acknowledgement row.
    // This function takes the index of
    // a name, then builds a row
    var rowData = [];
    for (var i = index; i < index + 5; ++i) {
        rowData.push(
            <td>
                <Person /> <a href={Contributors[i].link}>{Contributors[i].name}</a>
            </td>
        );
    }
    nameRows.push(<tr> {rowData}</tr>);
};

// Builds table from the list of rows generated using buildNameRow.
// Basically, 3 items in nameRows constitute a table, so we need
// only call this function with the right values.
const buildTable = index => {
    var rows = [];
    for (var i = index; i < index + 3; ++i) {

        
        rows.push(nameRows[i]);
    }
    nameTables.push(<table class="Names">{rows}</table>);
};

function A_Carousel() {
    for (let i = 0; i < Contributors.length; ++i) {
        // Build a name row with next 5 names, current name included.
        if (i % 5 === 0) {
            buildNameRow(i);
        }
    }

    // Build tables and add to the nameTable array.
    for (let i = 0; i < nameRows.length; ++i) {
        if (i % 3 === 0) {
            buildTable(i);
        }
    }

    return (
        <>
            <Carousel className="Acks">
                <Carousel.Item interval={null}>
                    <div>{nameTables[0]}</div>
                </Carousel.Item>
                <Carousel.Item interval={null}>
                    <div>{nameTables[1]}</div>
                </Carousel.Item>
                <Carousel.Item interval={null}>
                    <div>{nameTables[2]}</div>
                </Carousel.Item>
            </Carousel>
        </>
    );
}

export default A_Carousel;



// const nameRows = [];
// let nameTables = [];  // Make it let so we can re-assign it later

// const buildNameRow = index => {
//     var rowData = [];
//     for (var i = index; i < index + 5; ++i) {
//         rowData.push(
//             <td>
//                 <Person /> <a href={Contributors[i].link}>{Contributors[i].name}</a>
//             </td>
//         );
//     }
//     nameRows.push(<tr>{rowData}</tr>);
// };

// const buildTable = index => {
//     var rows = [];
//     for (var i = index; i < index + 3; ++i) {
//         rows.push(nameRows[i]);
//     }
//     nameTables.push(<table className="Names">{rows}</table>);
// };

// function A_Carousel() {
//     // Reset nameTables to ensure it starts empty each time this component renders
//     nameTables = [];

//     for (let i = 0; i < Contributors.length; ++i) {
//         if (i % 5 === 0) {
//             buildNameRow(i);
//         }
//     }

//     for (let i = 0; i < nameRows.length; ++i) {
//         if (i % 3 === 0) {
//             buildTable(i);
//         }
//     }

//     // Wrap nameTables with a div with the class "table-container"
//     nameTables = [
//         <div className="table-container">
//             {nameTables}
//         </div>
//     ];

//     return (
//         <>
//             <Carousel className="Acks">
//                 <Carousel.Item interval={null}>
//                     <div>{nameTables[0]}</div>
//                 </Carousel.Item>
//                 <Carousel.Item interval={null}>
//                     <div>{nameTables[1]}</div>
//                 </Carousel.Item>
//                 <Carousel.Item interval={null}>
//                     <div>{nameTables[2]}</div>
//                 </Carousel.Item>
//             </Carousel>
//         </>
//     );
// }

// export default A_Carousel;