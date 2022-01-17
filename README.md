# Note-Taker

![License: MIT](https://img.shields.io/badge/License-MIT-success.svg)

## Description
This project is a note taker app that uses Node and Express to create and save notes. What I did for this project is make routes for the index and note files to be able to link together so that when the user presses the 'Get Started' button it fetches /notes.html page and responds with file with all the notes that either have already been written or are yet to be created. I also added a unique id to each note that is created by using the uuid package that is in the node module. In this project i used a feature that i have not used before which is the async/await. I used it in a couple different areas, for example I used it before the fs.readFile so that the file could be read before anything is done with the data in that file. I had a few challenges along the way like with using promises and .then which I later changed to the async/await and I also had issues getting the delete feature to work which is currently a work in progress.

## Installation

To install the project the user must have Node.js and the Develop folder with this code base downloaded on their computer and then go to the correct file where the project is located. After you will start your server and go to the deployed page on your browser.

## Usage

To get started press the 'Get Started' button that will take you to the notes page. then press the the '+' button on the top right corner of your screen to make a new note and and type away. After you're done writing your note a save button will pop up and you will have the option to save your note. Once you click save you you will see your new note pop up on the left side of your screen.


| Technologies Used |
| ----------------- |
| Express.js     |
|JavaScript |
| HTML              |
| CSS               |
## License

MIT License

Copyright (c) [2021] [Kelly R. Cano]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
