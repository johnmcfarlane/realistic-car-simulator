controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    direction += -1
    updateEverything()
})
function updateVelocity () {
    xv = [
    0,
    0.3826834324,
    0.7071067812,
    0.9238795325,
    1,
    0.9238795325,
    0.7071067812,
    0.3826834324,
    0,
    -0.3826834324,
    -0.7071067812,
    -0.9238795325,
    -1,
    -0.9238795325,
    -0.7071067812,
    -0.3826834324
    ]
    yv = [
    -1,
    -0.9238795325,
    -0.7071067812,
    -0.3826834324,
    0,
    0.3826834324,
    0.7071067812,
    0.9238795325,
    1,
    0.9238795325,
    0.7071067812,
    0.3826834324,
    0,
    -0.3826834324,
    -0.7071067812,
    -0.9238795325
    ]
    mySprite.vx = xv[direction] * speed
    mySprite.vy = yv[direction] * speed
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    direction += 1
    updateEverything()
})
function updateSprite () {
    horizontalSpeed = Math.abs(mySprite.vx)
    verticalSpeed = Math.abs(mySprite.vy)
    if (horizontalSpeed > verticalSpeed) {
        if (mySprite.vx > 0) {
            mySprite.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . 2 2 2 2 2 2 2 2 . . . . 
                . . . 2 4 2 2 2 2 2 2 c 2 . . . 
                . . 2 c 4 2 2 2 2 2 2 c c 2 . . 
                . 2 c c 4 4 4 4 4 4 2 c c 4 2 d 
                . 2 c 2 e e e e e e e b c 4 2 2 
                . 2 2 e b b e b b b e e b 4 2 2 
                . 2 e b b b e b b b b e 2 2 2 2 
                . e e 2 2 2 e 2 2 2 2 2 e 2 2 2 
                . e e e e e e f e e e f e 2 d d 
                . e e e e e e f e e f e e e 2 d 
                . e e e e e e f f f e e e e e e 
                . e f f f f e e e e f f f e e e 
                . . f f f f f e e f f f f f e . 
                . . . f f f . . . . f f f f . . 
                . . . . . . . . . . . . . . . . 
                `)
        } else if (mySprite.vx < 0) {
            mySprite.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . 2 2 2 2 2 2 2 2 . . 
                . . . . . 2 c 2 2 2 2 2 2 4 2 . 
                . . . . 2 c c 2 2 2 2 2 2 4 c 2 
                . . d 2 4 c c 2 4 4 4 4 4 4 c c 
                . d 2 2 4 c b e e e e e e e 2 c 
                . 2 2 2 4 b e e b b b e b b e 2 
                . 2 2 2 2 2 e b b b b e b b b e 
                . 2 2 2 2 e 2 2 2 2 2 e 2 2 2 e 
                . 2 d d 2 e f e e e f e e e e e 
                . d d 2 e e e f e e f e e e e e 
                . e e e e e e e f f f e e e e e 
                . e e e e f f f e e e e f f f f 
                . . . e f f f f f e e f f f f f 
                . . . . f f f f . . . . f f f . 
                . . . . . . . . . . . . . . . . 
                `)
        }
    } else if (verticalSpeed > horizontalSpeed) {
        if (mySprite.vy < 0) {
            mySprite.setImage(img`
                . . . . . . e e c c e e . . . . 
                . . . . . e 2 2 2 2 2 2 e . . . 
                . . . . 2 c 2 2 2 2 2 2 c 2 . . 
                . . . e 2 c 4 2 2 2 2 2 c 2 e . 
                . . . f 2 2 4 2 2 2 2 2 c 2 f . 
                . . . f 2 2 4 2 2 2 2 2 2 2 f . 
                . . . f 2 2 4 2 2 2 2 2 2 2 f . 
                . . . f 2 c 2 4 4 2 2 2 c 2 f . 
                . . . e 2 c e c c c c e c 2 e . 
                . . . e 2 e c b b b b c e 2 e . 
                . . . e 2 e b b b b b b e 2 e . 
                . . . e e e e e e e e e e e e . 
                . . . f e d e e e e e e d e f . 
                . . . f e 2 d e e e e d 2 e f . 
                . . . f f e e e e e e e e f f . 
                . . . . f f . . . . . . f f . . 
                `)
        } else {
            mySprite.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . 2 2 2 2 2 2 . . . . 
                . . . . . 2 2 4 4 2 2 2 2 . . . 
                . . . . . c 4 2 2 2 2 2 c . . . 
                . . . . 2 c 4 2 2 2 2 2 c 2 . . 
                . . . e 2 c 4 2 2 2 2 2 c 2 e . 
                . . . f 2 c 4 2 2 2 2 2 c 2 f . 
                . . . f e c 2 2 2 2 2 2 c e f . 
                . . . f 2 c 2 b b b b 2 c 2 f . 
                . . . e 2 2 b c c c c b 2 2 e . 
                . . . e e b c c c c c c b e e . 
                . . . f e 4 4 4 4 4 4 4 4 e f . 
                . . . f e d 2 2 2 2 2 2 d e f . 
                . . . . 2 d d 2 2 2 2 d d 2 f . 
                . . . . f 2 d 2 2 2 2 d 2 f . . 
                . . . . . e 2 2 2 2 2 2 e . . . 
                `)
        }
    }
}
function updateEverything () {
    direction = (direction + 16) % 16
    updateSprite()
    updateVelocity()
}
let verticalSpeed = 0
let horizontalSpeed = 0
let yv: number[] = []
let xv: number[] = []
let direction = 0
let speed = 0
let mySprite: Sprite = null
tiles.setTilemap(tilemap`level`)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 2 2 2 2 2 2 2 2 . . . . 
    . . . 2 4 2 2 2 2 2 2 c 2 . . . 
    . . 2 c 4 2 2 2 2 2 2 c c 2 . . 
    . 2 c c 4 4 4 4 4 4 2 c c 4 2 d 
    . 2 c 2 e e e e e e e b c 4 2 2 
    . 2 2 e b b e b b b e e b 4 2 2 
    . 2 e b b b e b b b b e 2 2 2 2 
    . e e 2 2 2 e 2 2 2 2 2 e 2 2 2 
    . e e e e e e f e e e f e 2 d d 
    . e e e e e e f e e f e e e 2 d 
    . e e e e e e f f f e e e e e e 
    . e f f f f e e e e f f f e e e 
    . . f f f f f e e f f f f f e . 
    . . . f f f . . . . f f f f . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
speed = 100
direction = 4
updateVelocity()
