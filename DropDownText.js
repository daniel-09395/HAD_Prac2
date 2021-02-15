import React, { Component } from 'react';
import {useState} from 'react';

class DropDownTextJS extends Component {
    createText = () => {
        const select = document.getElementById("texts");
        document.getElementById("textbox").innerHTML = select.options[select.selectedIndex].text;
    }

    render() {
        return (
            <div align="center">
                <p className="ribbon">Using Vanilla JS:</p>
                <p id="textbox" style={{display: "inline-block"}}>Choose</p>&nbsp;&nbsp;&nbsp;
                <select name="texts" id="texts" onChange={this.createText}>
                    <option value="Hi">Hi</option>
                    <option value="Hello">Hello</option>
                    <option value="Hey">Hey</option>
                </select>
            </div>
        );
    }
}

const DropDownTextState = () => {
    const [greeting, setGreeting] = useState("Choose");

    const createText = (element) => {
        setGreeting(element.target.value)
    }

    return (
        <div align="center">
            <p className="ribbon">Using React State:</p>
            <p style={{display: "inline-block"}}>{greeting}</p>&nbsp;&nbsp;&nbsp;
            <select onChange={createText.bind(this)}>
                <option value="Hi">Hi</option>
                <option value="Hello">Hello</option>
                <option value="Hey">Hey</option>
            </select>
        </div>
    );
}

export { DropDownTextJS, DropDownTextState};