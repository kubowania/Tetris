document.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('.grid div')
  const startBtn = document.querySelector('.button')
  let currentIndex = 0
  const width = 10
  const height = 20

  //The Tetrominoes
  const lTetromino = [1,1,width+1,width*2+1]
  const zTetromino = [width+1, width+2,width*2,width*2+1]
  const tTetromino = [1,width,width+1,width+2]
  const oTetromino = [0,1,width,width+1]
  const iTetromino = [1,width+1,width*2+1]

  const theTetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino]

  //Randomly Select Tetromino
  const random = Math.ceil(Math.random()*theTetrominoes.length)-1
  console.log(random)

  //move the Tetromino moveDown
  let currentPosition = 4

  //draw the shape
  function draw() {
    const current = theTetrominoes[random]
    current.forEach( index => {
      squares[currentPosition + index].classList.add('block')
    })
  }

  //undraw the shape
  function undraw() {
    const current = theTetrominoes[random]
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
  }
  moveDown()
  setInterval(moveDown, 200)

//move left
  function moveleft() {
    draw()
    undraw()
      currentPosition = currentPosition +1
  //how to I stop the whole shape if ANY of the shapes Classlist are too long for the width?
    draw()
  }
  moveleft()

  //move right
  function moveright() {
    draw()
    undraw()
    currentPosition = currentPosition -1
    //how to I stop the whole shape if ANY of the shapes Classlist are too long for the width?
    draw()
  }
  moveright()

  //freeze the shape

//if ANY of the tetrominos currentindexes meet a div with block in it plus width, i want to envoke freeze function and change them to classList block2. this function will change ALL tetrominos classLists into block2. it will also stop them from moving.

  function freeze() {
    if squares[currentPosition + width].classList.contains('block2')) {
      currentIndex+=0
      squares[currentPosition].classList.add('block2')
      current.forEach( index => {
      squares[currentPosition + index].classList.add('block2')
      })
    }
  }

  freeze()


  //Rotate the Tetromino
  const lTetromino2 = [width,width+1,width+2,width*2+2]
  const zTetromino2 = [0,width,width+1,width*2+1]
  const tTetromino2 = [1,width+1,width+2,width*2+1]
  const oTetromino2 = [0,1,width,width+1]
  const iTetromino2 = [1,width+1,width+2]

  const lTetromino3 = [width+1, width+2,width*2,width*2+1]
  const zTetromino3 = [width+1,width+2,width*2,width*2+1]
  const tTetromino3 = [width,width+1,width+2,width*2+1]
  const oTetromino3 = [0,1,width,width+1]
  const iTetromino3 = [1,width+1,width*2+1]

  const lTetromino4 = [width,width*2,width*2+1,width*2+2]
  const zTetromino4 = [0,width,width+1,width*2+1]
  const tTetromino4 = [1,width,width+1,width*2+1]
  const oTetromino4 = [0,1,width,width+1]
  const iTetromino4 = [1,width+1,width+2]


  //Stop the Tetromino at the sides


  //Stop the Tetromino at the end



})
