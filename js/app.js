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
    setInterval(autoDrop, 100)
  })


})
