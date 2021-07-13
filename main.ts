let ship =  sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . 2 2 1 . . . .
    . . . . . . . . . 2 2 1 . . . .
    . . . . . . . . . . 1 1 1 1 . .
    . . . . . . . . . . 1 6 6 1 1 .
    . . . . . . . . . . 1 1 1 1 . .
    . . . . . . . . . 2 2 1 . . . .
    . . . . . . . . . 2 2 1 . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
controller.moveSprite(ship , 200, 200)
controller.A.onEvent(ControllerButtonEvent.Pressed,function() {
    sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . 2 2 2 . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `,  ship, 200, 0)
})
game.onUpdateInterval(500, function() {
    let alien = sprites.create (img`
        . . . . . . . . . . . . . . . .
        . . . . . . f . . f . . . . . .
        . . . . . . 4 . . 4 . . . . . .
        . . . . . . 4 . . 4 . . . . . .
        . . . . . . 4 4 4 4 . . . . . .
        . . . . . 4 4 4 4 4 . . . . . .
        . . . . . 4 2 2 2 4 . . . . . .
        . . . . . 4 2 2 2 4 . . . . . .
        . . . . . 4 4 4 4 4 4 . . . . .
        . . . . . 4 4 4 4 4 4 . . . . .
        . . . . . 4 4 4 4 4 4 . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `, SpriteKind.Enemy)
    alien.setPosition(160, randint(0, 120))
    alien.setVelocity(-20,0)

})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function(sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy(effects.fire, 200)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function(sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.fire, 200)
    
})
controller.B.onEvent(ControllerButtonEvent.Pressed,function() {
    sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . 8 8 8 . . . . . .
        . . . . . . 8 8 8 8 8 . . . . .
        . . . . . . 8 8 8 8 8 . . . . .
        . . . . . . 8 8 8 8 8 . . . . .
        . . . . . . . 8 8 8 . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `,  ship, 200, 0)
})