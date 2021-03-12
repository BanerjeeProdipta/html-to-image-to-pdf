import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as htmlToImage from 'html-to-image';
import FileSaver from 'file-saver';


function toPDF(_png: string) {

}

const handleDivToImage = () => {
    htmlToImage.toJpeg(document.getElementById('divToDownload') as HTMLElement, {quality: 0.95})
        .then(function (blob) {
            FileSaver.saveAs(blob, 'Image.png');
            toPDF(blob);
        });

}


function App() {
    return (
        <div className="App" id="divToDownload">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
            
            <body>

            </body>
            <footer>
                <div>
                    <button onClick={handleDivToImage}>Download Image</button>
                </div>
            </footer>
        </div>
    );
}

export default App;


