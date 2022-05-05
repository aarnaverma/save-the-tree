scene.onHitWall(SpriteKind.Food, function (sprite, location) {
    sprite.destroy(effects.fire, 500)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy(effects.disintegrate, 500)
})
let GoodTaco: Sprite = null
game.splash("Save the Tree....Else you'll Die! ", "(Press A) to Start")
tiles.setCurrentTilemap(tilemap`level1`)
let Amy = sprites.create(img`
    . . . . . f f 4 4 f f . . . . . 
    . . . . f 5 4 5 5 4 5 f . . . . 
    . . . f e 3 3 3 3 3 3 e f . . . 
    . . f b 3 3 3 3 3 3 3 3 b f . . 
    . . f 3 3 3 3 3 3 3 3 3 3 f . . 
    . f 3 3 3 3 3 3 3 3 3 3 3 3 f . 
    . f b 3 3 3 3 3 3 3 3 3 3 b f . 
    . f b b 3 3 3 3 3 3 3 3 b b f . 
    . f b b b b b b b b b b b b f . 
    f c b b b b b b b b b b b b c f 
    f b b b b b b b b b b b b b b f 
    . f c c b b b b b b b b c c f . 
    . . e 4 c f f f f f f c 4 e . . 
    . . e f b d b d b d b b f e . . 
    . . . f f 1 d 1 d 1 d f f . . . 
    . . . . . f f b b f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Amy, 150, 0)
Amy.setPosition(80, 104)
info.setLife(5)
game.onUpdateInterval(500, function () {
    GoodTaco = sprites.create(img`
        ..................
        ......68886.......
        .......67776......
        .....76777766.....
        ......6677768.....
        .....86666678.....
        .....76667667.....
        ....7676777668....
        ....67667667776...
        ...6867677777776..
        ..86667677777667..
        ..867667777667768.
        .866676666676766..
        .8866677776766766.
        ..668666776667666.
        ..686666666676668.
        ...6866666767666..
        ...888686666668...
        ....8668666868....
        .....888688e6.....
        ........ee........
        ........cfe.......
        ........fec.......
        `, SpriteKind.Food)
    GoodTaco.setPosition(randint(10, 145), 10)
    GoodTaco.setVelocity(0, 50)
})
