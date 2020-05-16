import React from 'react';
import { Collector } from "tripetto-collector-rolling";
import definition from "./definition"
import './App.css';

function App() {
  return (
		<div className="App">
			<header className="App-header">
				<div className="title">Tripetto Demo</div>
			</header>
			<div className="App-main">
				<Collector
					definition={definition}
					onFinish={instance => {
            /** Implement your response handler here. */
            console.log(instance)
					}}
				/>
			</div>
		</div>
  );
}

export default App;
