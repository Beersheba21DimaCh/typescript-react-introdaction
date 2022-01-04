import * as React from "react";
type InputDataProps = {
    colorsFn: (colors: string[]) => void,
    timeZoneFn: (timeZone: string[]) => void

}
const InputDate: React.FC<InputDataProps> = (props:InputDataProps) => {

    // let inputColorsEl: any;
    // let inputTimeZoneEl: any;
    // let [inputColorsEl, setInputColorsEl] = React.useState<any>();
    // let [inputTimeZoneEl, setInputTimeZoneEl] = React.useState<any>();
    const inputColorsEl = React.useRef<any>();
    const inputTimeZoneEl = React.useRef<any>();

    React.useEffect(() => {
        console.log("input effect");
        
        
        
        inputColorsEl.current = document.getElementById("input-colors");
        inputTimeZoneEl.current = document.getElementById("input-zone");
        console.log(inputTimeZoneEl.current);

    },[])

    function returnColors() {
        const colorsStr: string = inputColorsEl.current.value;
        props.colorsFn(colorsStr.split(" "));
    }
    function returnTimeZone(){
        const timeZoneStr: string = inputTimeZoneEl.current.value;
        props.timeZoneFn(timeZoneStr.split(' '));
    }

    return <div>
        <input id="input-colors" placeholder="Enter colors separated by space"/> <button onClick={returnColors}>Go</button>
        <input id="input-zone" placeholder="Enter timeZone"/> <button onClick={returnTimeZone}>Go</button>
    </div>
}

export default InputDate;



