import React from 'react';
import ReactDom from 'react-dom';
import './index.css';




var currDate = new Date();
currDate = currDate.getHours();
var greeting = "";

const cssStyle = {

};



if (currDate >= 1 && currDate < 12) {
    greeting = "Good Morning";
    cssStyle.color = 'green';


} else if (currDate >= 12 && currDate < 19) {
    greeting = "Good Noon";
    cssStyle.color = 'orange';
} else {
    greeting = "Good Night";
    cssStyle.color = 'black';

}

ReactDom.render(
    <>
        <div>
            <h1>Hello Sir, <span style={cssStyle}>{greeting}</span></h1>
        </div>
    </>,
    document.getElementById('root')
);
