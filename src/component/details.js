import React, {useEffect, useState} from "react";
import CVViewer from "./CVViewer";
import {toast, ToastContainer} from "react-toastify";


function Details(props) {
    if (props.cv.length !== 0) {
        return (
            <CVViewer cv={props.cv}/>
        )
    } else if (props.cv.length === 0) {
        return (
            <div></div>
        )
    }
}

export default Details;



