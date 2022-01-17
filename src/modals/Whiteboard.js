import React, {useEffect, useRef, useState} from 'react';
import CanvasDraw from "react-canvas-draw";
import './Style.css';
import {ReactComponent as Yes} from '../etc/icon_yes.svg';

function Whiteboard (props) {

    const handleDraw = () =>{
        const imgValue = canvasRef.current.canvasContainer.childNodes[1].toDataURL();
        localStorage.setItem('imgValue', imgValue);        
    };
    const canvasRef = useRef(null);

    const color = ["#FF4F4F","#FF8B44","#FFE57B","#5FCF8F","#25D1DA","#258DDA","#7C4CF5","#2E2E2E"];
    const [pick, setPick] = useState("#2E2E2E");

    return(
        <div className="canvasWrapper">
            <div>
                <CanvasDraw
                    style={{borderRadius : 30}}
                    ref={canvasRef}
                    canvasWidth={480}
                    canvasHeight={600}
                    brushColor={pick}
                    brushRadius={20}
                    catenaryColor={null}
                    lazyRadius={0}
                />
            </div>
            <div className="canvasBrush">
                {color.map((item, idx)=>{
                    return(
                        <div style={{backgroundColor : item}} className="colorItem" onClick={()=>setPick(item)} ></div>
                    );
                })}
                <div style={{backgroundColor : '#cccccc', opacity : 0.1}} className="colorItem" onClick={()=>handleDraw()}>
                    <Yes style={{margin : '1vh'}} fill="#ffffff"/>
                </div>
            </div>
        </div>
    );
};

export default Whiteboard;