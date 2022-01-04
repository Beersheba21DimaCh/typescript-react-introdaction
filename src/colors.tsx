import * as React from "react";
type ColorsProps = {
    colors: string[]
}
const Colors: React.FC<ColorsProps> = (props: ColorsProps) => {
    // const colors: string[] = [];
    // const colors: Array<string> = ["red", "green", "blue", "yellow", "brown"];
    const {colors} = props;
    return <div>
        <ul>
            {colors.map((r, index) => <li key={index} style={{color: "white", backgroundColor: r}}>{r}</li>)}
        </ul>
    </div>;
}
export default Colors;