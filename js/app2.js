document.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('.grid div')
  const startBtn = document.querySelector('.button')
  const scoreDisplay = document.querySelector('.score-display')
  let currentScore = +scoreDisplay.textContent
  let currentIndex = 0
  const width = 10
  const height = 20

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
  const lTetromino = [1,width+1,width*2+1,width*2+2]
  const zTetromino = [width+1, width+2,width*2,width*2+1]
  const tTetromino = [1,width,width+1,width+2]
  const oTetromino = [0,1,width,width+1]
  const iTetromino = [1,width+1,width*2+1,width*3+1]

  let theTetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino]

  //Randomly Select Tetromino
  let random = Math.ceil(Math.random()*theTetrominoes.length)-1
  let current = theTetrominoes[random]

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
  moveDown()
  setInterval(moveDown, 1000)

  //move left
  function moveright() {
    draw()
    undraw()
    console.log(current)
    const isAtRightEdge = current.some(index => (currentPosition + index) % width === width - 1)
    if(!isAtRightEdge) currentPosition += 1
    draw()
  }

  //move right
  function moveleft() {
    draw()
    undraw()
    const isAtLeftEdge = current.some(index => (currentPosition + index) % width === 0)
    if(!isAtLeftEdge) currentPosition -= 1
    draw()
  }

  //freeze the shape
  function freeze() {
    // if block has settled
    if(current.some(index => squares[currentPosition + index + width].classList.contains('block2'))) {
      // make it block2
      current.forEach(index => squares[index + currentPosition].classList.add('block2'))
      // start a new tetromino falling
      random = Math.ceil(Math.random()*theTetrominoes.length)-1
      current = theTetrominoes[random]
      currentPosition = 4
    }
  }
  freeze()

  //Rotate the Tetromino
  const lTetromino2 = [width,width+1,width+2,width*2+2]
  const zTetromino2 = [0,width,width+1,width*2+1]
  const tTetromino2 = [1,width+1,width+2,width*2+1]
  const oTetromino2 = [0,1,width,width+1]
  const iTetromino2 = [width,width+1,width+2,width+3]

  const lTetromino3 = [width+1, width+2,width*2,width*2+1]
  const zTetromino3 = [width+1,width+2,width*2,width*2+1]
  const tTetromino3 = [width,width+1,width+2,width*2+1]
  const oTetromino3 = [0,1,width,width+1]
  const iTetromino3 = [1,width+1,width*2+1,width*3+1]

  const lTetromino4 = [width,width*2,width*2+1,width*2+2]
  const zTetromino4 = [0,width,width+1,width*2+1]
  const tTetromino4 = [1,width,width+1,width*2+1]
  const oTetromino4 = [0,1,width,width+1]
  const iTetromino4 = [1,width+1,width*2+1,width*3+1]


  //how to I add a number to the const chosen to return the alternative Tetromino shapes above
  function rotate() {
    draw()
    undraw()
    console.log(current)
    if (current === lTetromino) {
      current = lTetromino2
      console.log(current)
      current.forEach( index => {
        squares[currentPosition + index].classList.add('block')
      })
    } if (current === zTetromino) {
      current = zTetromino2
      console.log(current)
      current.forEach( index => {
        squares[currentPosition + index].classList.add('block')
      })
    }if (current === tTetromino) {
      current = tTetromino2
      console.log(current)
      current.forEach( index => {
        squares[currentPosition + index].classList.add('block')
      })
    }if (current === oTetromino) {
      current = oTetromino2
      console.log(current)
      current.forEach( index => {
        squares[currentPosition + index].classList.add('block')
      })
    }if (current === iTetromino) {
      current = iTetromino2
      console.log(current)
      current.forEach( index => {
        squares[currentPosition + index].classList.add('block')
      })
    }
    draw()
  }


  //score
  // let currentScore = 0
  // function addScore() {
  //   if(squares[currentIndex,currentIndex+1,currentIndex+2,currentIndex+3,currentIndex+4,currentIndex+5,currentIndex+6,currentIndex+7,currentIndex+8,currentIndex+9].classList.contains('block2')) {
  //     score+= 10
  //     removeLine()
  //   } else if (
  //     squares[currentIndex,currentIndex+1,currentIndex+2,currentIndex+3,currentIndex+4,currentIndex+5,currentIndex+6,currentIndex+7,currentIndex+8,currentIndex+9,currentIndex+10,currentIndex+11,currentIndex+12,currentIndex+13,currentIndex+14,currentIndex+15,currentIndex+16,currentIndex+17,currentIndex+18,currentIndex+19,currentIndex+20,currentIndex+21,currentIndex+22,currentIndex+23,currentIndex+24,currentIndex+25,currentIndex+26,currentIndex+27,currentIndex+28,currentIndex+29,currentIndex+30,currentIndex+31,currentIndex+32,currentIndex+33,currentIndex+34,currentIndex+35,currentIndex+36,currentIndex+37,currentIndex+38,currentIndex+39].classList.contains('block2')
  //   ) {
  //     score+= 40
  //     removeFourLines()
  //   }
  // }
  // addScore()
  // console.log(score)
  //
  //
  // //Lines to remove
  // function removeLine () {
  //   squares[currentIndex,currentIndex+1,currentIndex+2,currentIndex+3,currentIndex+4,currentIndex+5,currentIndex+6,currentIndex+7,currentIndex+8,currentIndex+9].classList.remove('block2')
  // }
  //
  // function removeFourLines() {
  //
  // }

//present Score


})
