document.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('.grid div')
  const startBtn = document.querySelector('.button')
  let currentIndex = 0
  const width = 10
  const height = 20

  //Make the The Tetrominoes move left, right and down on the board
  function moveSquare(e) {
    squares[currentIndex].classList.remove('block')

    switch(e.keyCode) {
      case 37: //left
        if(currentIndex % width !== 0) currentIndex -= 1
        break
      case 39: //right
        if(currentIndex % width < width - 1) currentIndex += 1
        break
      case 40: //down with a time loop of 1000
        if(currentIndex + width < width * height)currentIndex += width
        break
    }

    squares[currentIndex].classList.add('block')
  }

  document.addEventListener('keyup', moveSquare)

  //loop the shape to continue going down
  function autoDrop() {
    squares[currentIndex].classList.remove('block')
    if(currentIndex + width < width * height) {
      currentIndex += width
      squares[currentIndex].classList.add('block')
    } else if (squares[currentIndex + width].classList.contains('block2')) {
      currentIndex+=0
      squares[currentIndex].classList.add('block2')
      // freeze()
    }
  }

  // function freeze() {
  //   if (squares[currentIndex + width].classList.contains('block2')) {
  //     return autoDrop()
  //   }
  // }
  setInterval(autoDrop, 1000)

  function gameLoop() {
    const currentIndex = 0
    squares[currentIndex].classList.add('block')
    autoDrop()
  }
  setInterval(gameLoop,4000)

  // startBtn.addEventListener('click', () => {
  //   setInterval(autoDrop, 200)
  // })


  //The Tetrominoes
  const lTetromino = [0,1,2,width+2]
  const zTetromino = [0,1,width+1,width+2]
  const tTetromino = [0,1,2,width+1]
  const oTetromino = [0,1,width,width+1]
  const iTetromino = [0,width,width*2,width*3]

  const theTetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino]


  //Randomly select Tetromino
  const random = Math.ceil(Math.random()*theTetrominoes.length)-1

  console.log(random)




  // move the Tetrominoes
//   let currentPosition = 0
//
//   function moveDown() {
//
//     const current = theTetrominoes[random]
//
//
//     current.forEach( index => {
//       squares[currentPosition + index].classList.add('block')
//     })
//     console.log(currentPosition)
//
//     current.forEach( index => {
//       squares[currentPosition + index].classList.remove('block')
//     })
//     console.log(currentPosition)
//
//     currentPosition = currentPosition += width
//
//     current.forEach( index => {
//       squares[currentPosition + index + width].classList.add('block')
//       console.log(currentPosition)
//     })
//   }
//
//
//   console.log(currentPosition)
//
//
//   startBtn.addEventListener('click', () => {
//     setInterval(moveDown, 200)
//   })
//
//   //stop the blocks
//   if (squares[currentPosition + width].classList.contains('block')) {
//     currentPosition+=0
//     squares[currentPosition].classList.add('block')
//   }
//
})
