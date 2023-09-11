import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Contributors from "../contributors.js";
import { ReactComponent as Person } from "../assets/person.svg";
import "./Acknowledgements.css";

const nameRows = [];
const nameTables = [];

const buildNameRow = index => {
    var rowData = [];
    for (var i = index; i < index + 5; ++i) {
        rowData.push(
            <td>
                <Person /> <a href={Contributors[i].link}>{Contributors[i].name}</a>
            </td>
        );
    }
    nameRows.push(<tr>{rowData}</tr>);
};

const buildTable = index => {
    var rows = [];
    for (var i = index; i < index + 3; ++i) {
        rows.push(nameRows[i]);
    }
    nameTables.push(<table className="Names">{rows}</table>);
};

function AcknowledgementsCarousel() {
    // IMPO! Reset nameTablesWrapper to ensure it starts empty each time this component renders
    let nameTablesWrapper = [];

    for (let i = 0; i < Contributors.length; ++i) {
        if (i % 5 === 0) {
            buildNameRow(i);
        }
    }

    for (let i = 0; i < nameRows.length; ++i) {
        if (i % 3 === 0) {
            buildTable(i);
        }
    }

    // Wrap nameTables with a div with the class "table-container"
    // Key part so we can target tables within 'table-container' only
    for (let i = 0; i < nameTables.length; ++i) {
        nameTablesWrapper[i] = [
            <div className="table-container">{nameTables[i]}</div>,
        ];
    }

    return (
        <div className="bg-secondary bg-opacity-25 mt-3">
            <h3 className="text-center pt-5">Acknowledgements</h3>
            <Carousel className="Acks">
                <Carousel.Item interval={null}>
                    <div>{nameTablesWrapper[0]}</div>
                </Carousel.Item>
                <Carousel.Item interval={null}>
                    <div>{nameTablesWrapper[1]}</div>
                </Carousel.Item>
                <Carousel.Item interval={null}>
                    <div>{nameTablesWrapper[2]}</div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default AcknowledgementsCarousel;
