document.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('.grid div')
  const startBtn = document.getElementById('start')
  let currentIndex = 0
  const width = 10
  const height = 20

  //Make the square move left, right and down on the board
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
    } else if (squares[currentIndex + width].classList.contains('end')) {
      currentIndex+=0
      squares[currentIndex].classList.add('takenBlock')
    }

  }

  startBtn.addEventListener('click', () => {
    setInterval(autoDrop, 1000)
  })


  //The Tetrominoes
  function oTetromino() {
    squares[currentIndex].classList.add('oTetromino')
    squares[currentIndex + width].classList.add('oTetromino')
    squares[currentIndex +1].classList.add('oTetromino')
    squares[currentIndex + width +1].classList.add('oTetromino')
  }

  function lTetromino() {
    squares[currentIndex].classList.add('lTetromino')
    squares[currentIndex + width].classList.add('lTetromino')
    squares[currentIndex +width +1].classList.add('lTetromino')
    squares[currentIndex + width +2].classList.add('lTetromino')
  }

  function zTetromino() {
    squares[currentIndex].classList.add('zTetromino')
    squares[currentIndex + 1].classList.add('zTetromino')
    squares[currentIndex +width +1].classList.add('zTetromino')
    squares[currentIndex + width +2].classList.add('zTetromino')
  }

  function tTetromino() {
    squares[currentIndex].classList.add('tTetromino')
    squares[currentIndex + 1].classList.add('tTetromino')
    squares[currentIndex + 2].classList.add('tTetromino')
    squares[currentIndex + width +1].classList.add('tTetromino')
  }

  function iTetromino() {
    squares[currentIndex].classList.add('iTetromino')
    squares[currentIndex + width].classList.add('iTetromino')
    squares[currentIndex + width*2].classList.add('iTetromino')
    squares[currentIndex + width*3].classList.add('iTetromino')
  }

  const TheTetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino]

  const random = Math.ceil(Math.random()*TheTetrominoes.length-1)

  console.log(random)

  TheTetrominoes[random]()


})
