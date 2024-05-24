import React, {useState} from "react";


//create your first component
const Home = () => {
	const [color,setColor] = useState("");
	return (
		<>
		<div className="traffic-light">
			<div
			onClick={()=>setColor("red")} 
			className={"light red " + (color==="red" ? "glow": "")} >
			</div>
			<div 
			onClick={()=>setColor("yellow")} 
			className={"light yellow " + (color==="yellow" ? "glow": "")}>
			</div>
			<div 
			onClick={()=>setColor("green")} 
			className={"light green " + (color==="green" ? "glow": "")}>
			</div>
		</div>
		<div>
			<button type="button" class="btn btn-dark">Dark</button>
		</div>
		</>
	);
};

export default Home;
