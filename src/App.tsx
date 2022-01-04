import * as React from "react";
import Clock from "./clock";
import Colors from "./colors";
import InputDate from "./inputData";
const App: React.FC = () => {
    const style: React.CSSProperties = {display: "flex", flexDirection: "column"};
    const [colors, setColors] = React.useState<string[]>(["red", "green", "blue", "yellow", "brown"]);
    const [timeZones, setTimeZone] = React.useState<string[]>(["Asia/Jerusalem"]);
    function injectColors(colorsAr: string[]){
        setColors(colorsAr);
    }
    function injectTimeZone(timeZoneStr: string[]){
        setTimeZone(timeZoneStr);
    }
    return <div style={style}>
        <InputDate colorsFn={injectColors } timeZoneFn={injectTimeZone}></InputDate>
        {/* <Colors colors={colors}></Colors> */}
        {timeZones.map(createClockEl)}
        
    </div>
}

function createClockEl(element:string, index:number){
    return <Clock key={index} timeZone={element}></Clock>
}

export default App;