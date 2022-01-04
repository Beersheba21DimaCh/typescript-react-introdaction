import _ = require("lodash");
import * as React from "react";
import timeZones from "./time-zones";

const Clock: React.FC<{timeZone: string}> = (props) => {

    const [date, setDate] = React.useState<Date>(new Date());
    let timeZone =React.useRef<string>();
    function tic(){
        console.log("tic");
        setDate(new Date());
    }
    React.useEffect(() => {     //use при монтировании и изменении. 
        timeZone.current = getTimeZone(props.timeZone);
        console.log("useEffect");
        const interval = setInterval(tic, 1000);
        return () => clearInterval(interval); //при размонтировании вызывается return fun
    },[props.timeZone]); //[] ресурс обнавления, при котором снова вызвать useEffect

    return  timeZone.current ? <div> 
                <h2>Date {timeZone.current} time-zone</h2>
                <h3>{date.toLocaleString("ru", {timeZone : timeZone.current})}</h3>
            </div> : <div></div>;
}

function getTimeZone(input:string){
    const index = _.findIndex(timeZones.map(e => e.name), v => v.includes(input));
    console.log("index="+index);
    return index>=0 ? timeZones[index].name : "";
}

export default Clock;