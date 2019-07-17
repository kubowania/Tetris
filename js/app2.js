document.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('.grid div')
  const startBtn = document.querySelector('.button')
  const scoreDisplay = document.querySelector('.score-display')
  let currentIndex = 0
  let currentRotation = 0
  const width = 10
  // const height = 20
  let score = 0

  //assign functions to keycodes
  function control(e) {
    if(e.keyCode === 39) {
      moveright()
    } else if (e.keyCode ===38) {
      rotate()
    } else if (e.keyCode ===37) {
      moveleft()
    } else if (e.keyCode === 40) {
      moveDown()
    }
  }
  document.addEventListener('keyup', control)

  //The Tetrominoes
  const lTetromino = [
    [1,width+1,width*2+1,2],
    [width,width+1,width+2,width*2+2],
    [1,width+1,width*2+1,width*2],
    [width,width*2,width*2+1,width*2+2]
  ]

  const zTetromino = [
    [0,width,width+1,width*2+1],
    [width+1, width+2,width*2,width*2+1],
    [0,width,width+1,width*2+1],
    [width+1, width+2,width*2,width*2+1]
  ]

  const tTetromino = [
    [1,width,width+1,width+2],
    [1,width+1,width+2,width*2+1],
    [width,width+1,width+2,width*2+1],
    [1,width,width+1,width*2+1]
  ]

  const oTetromino = [
    [0,1,width,width+1],
    [0,1,width,width+1],
    [0,1,width,width+1],
    [0,1,width,width+1]
  ]

  const iTetromino = [
    [1,width+1,width*2+1,width*3+1],
    [width,width+1,width+2,width+3],
    [1,width+1,width*2+1,width*3+1],
    [width,width+1,width+2,width+3]
  ]

  let theTetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino]

  //Randomly Select Tetromino
  let random = Math.ceil(Math.random()*theTetrominoes.length)-1
  let current = theTetrominoes[random][currentRotation]

  //Color tetrominoes at random
  // var colors = ['url(/Users/limit/development/Tetris/images/blue_block.png)', 'url(/Users/limit/development/Tetris/images/purple_block.png)', 'url(/Users/limit/development/Tetris/images/green_block.png)','url(/Users/limit/development/Tetris/images/navy_block.png)','url(/Users/limit/development/Tetris/images/pink_block.png)']
  // var randomColor = colors[Math.floor(Math.random() * colors.length)]
  // document.querySelectorAll('.block').style.background-image = randomColor

  //move the Tetromino moveDown
  let currentPosition = 4

  //draw the shape
  function draw() {
    current.forEach( index => {
      squares[currentPosition + index].classList.add('block')
    })
  }

  //undraw the shape
  function undraw() {
    current.forEach( index => {
      squares[currentPosition + index].classList.remove('block')
    })
  }

  //move down on loop
  function moveDown() {
    draw()
    undraw()
    currentPosition = currentPosition += width
    draw()
    freeze()
  }

  startBtn.addEventListener('click', () => {
    setInterval(moveDown, 1000)
  })

  //move left and prevent collisions with shapes moving left
  function moveright() {
    draw()
    undraw()
    console.log(current)
    const isAtRightEdge = current.some(index => (currentPosition + index) % width === width - 1)
    if(!isAtRightEdge) currentPosition += 1
    if(current.some(index => squares[currentPosition + index + 1].classList.contains('block2'))) {
      currentPosition -= 1
    }
    draw()
  }

  //move right and prevent collisions with shapes moving right
  function moveleft() {
    draw()
    undraw()
    const isAtLeftEdge = current.some(index => (currentPosition + index) % width === 0)
    if(!isAtLeftEdge) currentPosition -= 1
    if(current.some(index => squares[currentPosition + index + -1].classList.contains('block2'))) {
      currentPosition += 1
    }
    draw()
  }

  //freeze the shape
  function freeze() {
    // if block has settled
    if(current.some(index => squares[currentPosition + index + width].classList.contains('block2', 'block3'))) {
      // make it block2
      current.forEach(index => squares[index + currentPosition].classList.add('block2'))
      // start a new tetromino falling
      random = Math.ceil(Math.random()*theTetrominoes.length)-1
      current = theTetrominoes[random][currentRotation]
      currentPosition = 4
      addScore()
    }
  }
  freeze()

  //Rotate the Tetromino
  function rotate() {
    undraw()
    current = theTetrominoes[random][currentRotation]
    draw()
    console.log(current)
    currentRotation ++
    if(currentRotation === current.length) {
      currentRotation=0
      console.log(current)
    }
    draw()
  }

  //Game Over
  function gameOver() {
    let gameOverHeight = [currentIndex,currentIndex+width,currentIndex+width*2,currentIndex+width*3,currentIndex+width*4,currentIndex+width*5,currentIndex+width*6,currentIndex+width*7,currentIndex+width*8,currentIndex+width*9,currentIndex+width*10,currentIndex+width*11,currentIndex+width*12,currentIndex+width*13,currentIndex+width*14,currentIndex+width*15,currentIndex+width*16,currentIndex+width*17,currentIndex+width*18,currentIndex+width*19]
    function containsBlocks(element, index){
      return squares[gameOverHeight[index]].classList.contains('block2', 'block')
    }
    for (currentIndex = 0; currentIndex < 199;currentIndex += width) {
      console.log(currentIndex)
      gameOverHeight = [currentIndex,currentIndex+width,currentIndex+width*2,currentIndex+width*3,currentIndex+width*4,currentIndex+width*5,currentIndex+width*6,currentIndex+width*7,currentIndex+width*8,currentIndex+width*9,currentIndex+width*10,currentIndex+width*11,currentIndex+width*12,currentIndex+width*13,currentIndex+width*14,currentIndex+width*15,currentIndex+width*16,currentIndex+width*17,currentIndex+width*18,currentIndex+width*19]
      if(gameOverHeight.every(containsBlocks)) {
        console.log('gameOver')
        scoreDisplay.innerHTML = 'End'
      }
    }
  }

  gameOver()



  //show previous tetromino in scoreDisplay
  theTetrominoes[random][currentRotation]
  const displayWidth = 4

  const displaySquares = document.querySelectorAll('.previous-grid div')
  let displayIndex = 0

  const smallTetrominoes = [
    [1,displayWidth+1,displayWidth*2+1,2], /* lTetromino */
    [0,displayWidth,displayWidth+1,displayWidth*2+1],  /* zTetromino */
    [1,displayWidth,displayWidth+1,displayWidth+2],    /* tTetromino */
    [0,1,displayWidth,displayWidth+1],     /* oTetromino */
    [1,displayWidth+1,displayWidth*2+1,displayWidth*3+1]  /* iTetromino */
  ]

  const nextCurrent = smallTetrominoes[random]
  console.log(nextCurrent)

  function displayShape() {
    nextCurrent.forEach( index => {
      displaySquares[displayIndex + index].classList.add('block')
    })
  }
  displayShape()



  //Add score
  function addScore() {
    let row = [currentIndex,currentIndex+1,currentIndex+2,currentIndex+3,currentIndex+4,currentIndex+5,currentIndex+6,currentIndex+7,currentIndex+8,currentIndex+9]
    function containsBlock2(element, index){
      return squares[row[index]].classList.contains('block2')
    }
    for (currentIndex = 0; currentIndex < 199;currentIndex += width) {
      console.log(currentIndex)
      row = [currentIndex,currentIndex+1,currentIndex+2,currentIndex+3,currentIndex+4,currentIndex+5,currentIndex+6,currentIndex+7,currentIndex+8,currentIndex+9]
      if(row.every(containsBlock2)) {
        score += 10
        console.log(score)
        scoreDisplay.innerHTML = score
      // removeLine()
      }
    }
  }
  console.log(score)



  // //Lines to remove
  // function removeLine(){
  //
  // }



  // function removeFourLines() {
  //
  // }

  //present Score



  //Styling eventListeners


})
