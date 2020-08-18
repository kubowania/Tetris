# Tetris
A vanilla javascript game

Watch my tutorial [here](https://www.youtube.com/watch?v=GWPGz9hrVMk)

I have kept the styling at a bare miniumum for you to go wild and make it your own. Please tag me as I would LOVE to see your game!!!

Tetris is a tile-matching puzzle game from the 80’s. Try to get your personal high score by moving each of the 5 randomly selected Tetromino shapes sideways and/or rotating by quarter-turns, so that they form a solid horizontal line without gaps. When such a line is formed, it disappears and any blocks above it fall down to fill the space. For each line you will receive 10 points.
 
This was my first project from General Assembly's Software Engineering Immersive Course. It was also my first time building a project with JavaScript.

![Tetris](https://github.com/kubowania/Tetris/blob/master/images/Tetris%20Game.gif)




<h2>Brief</h2>
 
* The game should stop if a Tetrimino fills the highest row of the game board
* The player should be able to rotate each Tetrimino about its own axis
* If a line is completed it should be removed and the pieces above should take its place
* Render a grid-based game in the browser
* Include separate HTML / CSS / JavaScript files
* Use Javascript for DOM manipulation
* Deploy your game online, using Github Pages, where the rest of the world can access it
* Use semantic markup for HTML and CSS (adhere to best practices)

<h2>Technologies Used</h2>

* HTML5
* CSS3
* JavaScript
* Git
* GitHub
* Google Fonts

<h2>Features piece of code no.1</h2>


```
//freeze the shape
  function freeze() {
    // if block has settled
    if(current.some(index => squares[currentPosition + index + width].classList.contains('block3') || squares[currentPosition + index + width].classList.contains('block2'))) {
      // make it block2
      current.forEach(index => squares[index + currentPosition].classList.add('block2'))
      // start a new tetromino falling
      random = nextRandom
      nextRandom = Math.floor(Math.random() * theTetrominoes.length)
      current = theTetrominoes[random][currentRotation]
      currentPosition = 4
      draw()
      displayShape()
      addScore()
      gameOver()
    }
  }
  freeze()

```

<h2>Features piece of code no.2</h2>


```
  //Add score
  function addScore() {
    for (currentIndex = 0; currentIndex < 199;currentIndex += width) {
      const row = [currentIndex,currentIndex+1,currentIndex+2,currentIndex+3,currentIndex+4,currentIndex+5,currentIndex+6,currentIndex+7,currentIndex+8,currentIndex+9]
      if(row.every(index => squares[index].classList.contains('block2'))) {
        score += 10
        lines +=1
        scoreDisplay.innerHTML = score
        linesDisplay.innerHTML = lines
        row.forEach(index => {
          squares[index].style.backgroundImage = 'none'
          squares[index].classList.remove('block2') || squares[index].classList.remove('block')

        })

```

### MIT Licence

Copyright (c) 2020 Ania Kubow

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*Translation: Ofcourse you can use this for you project! Just make sure to say where you got this from :)

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
