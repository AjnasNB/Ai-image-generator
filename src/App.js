import logo from './logo.svg';
import './App.css';
import {Button,TextField} from "@mui/material"
import {Configuration,OpenAIApi} from "openai"
const configuration = new Configuration( param, {
    apiKey:your open ai api key

});
function generatePicture(){

}

function App() {
    return ( 
        <div className = "App" >
        <header className = "App-header" >
        <img src = { logo }
        className = "App-logo"
        alt = "logo" / >
        <TextField id="outlined-basic" inputProps={{style:{color:"white"}}} label="Enter your prompt" variant="outlined" />
        <Button variant="contained">Send</Button>

        </header>

         
         

        </div>
    );
}

export default App;
