namespace SpriteKind {
    export const Prop_Walled = SpriteKind.create()
}
function horizontalList (a: tiles.TileMapData[], b: any[], c: any[], d: any[], e: any[]) {
    return [
    a,
    b,
    c,
    d,
    e
    ]
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLarge, function (sprite, location) {
    if (controller.A.isPressed()) {
        pauseUntil(() => !(controller.A.isPressed()))
        goTo(decode(tileUtil.getTileImage(map[worldY][worldX][0], location)))
    }
})
function decode (tile: Image) {
    tileData = []
    for (let y = 0; y <= 15; y++) {
        for (let x = 0; x <= 15; x++) {
            if (tile.getPixel(x, y) == 0) {
                return tileData
            } else {
                tileData.push(0)
                readLength = tile.getPixel(x, y) - 1
                for (let i = 0; i <= readLength; i++) {
                    x += 1
                    if (x >= 16) {
                        x = 0
                        y += 1
                    }
                    tileData.push(tile.getPixel(x, y) * 16 ** i + tileData.pop())
                }
            }
        }
    }
    return tileData
}
function instantiateSpawnables () {
    tileUtil.createSpritesOnTiles(sprites.castle.rock0, img`
        . . . . . c c b b b . . . . . . 
        . . . . c b d d d d b . . . . . 
        . . . . c d d d d d d b b . . . 
        . . . . c d d d d d d d d b . . 
        . . . c b b d d d d d d d b . . 
        . . . c b b d d d d d d d b . . 
        . c c c c b b b b d d d b b b . 
        . c d d b c b b b b b b b b d b 
        c b b d d d b b b b b d d b d b 
        c c b b d d d d d d d b b b d c 
        c b c c c b b b b b b b d d c c 
        c c b b c c c c b d d d b c c b 
        . c c c c c c c c c c c b b b b 
        . . c c c c c b b b b b b b c . 
        . . . . . . c c b b b b c c . . 
        . . . . . . . . c c c c . . . . 
        `, SpriteKind.Prop_Walled)
}
function removeSpawnables () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Prop_Walled)
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
}
tileUtil.onMapLoaded(function (tilemap2) {
    for (let sprite of sprites.allOfKind(SpriteKind.Prop_Walled)) {
        tiles.setWallAt(sprite.tilemapLocation(), true)
    }
})
function goTo (worldPos: number[]) {
    if (worldX != worldPos[0] || worldY != worldPos[1]) {
        worldX = worldPos[0]
        worldY = worldPos[1]
        removeSpawnables()
        for (let layer of map[worldY][worldX]) {
            tiles.setCurrentTilemap(layer)
            instantiateSpawnables()
        }
    }
    tiles.placeOnTile(mySprite, tiles.getTileLocation(worldPos[2], worldPos[3]))
}
let readLength = 0
let tileData: number[] = []
let worldX = 0
let worldY = 0
let mySprite: Sprite = null
let list: number[] = []
let map: tiles.TileMapData[][][] = []
map = [
horizontalList([tilemap`spawns 0-0`, tilemap`ground 0-1`], list, list, list, list),
horizontalList([tilemap`spawns 0-1`, tilemap`ground 0-0`], list, list, list, list),
horizontalList([tilemap`ground 0-8`, tilemap`ground 0-2`], list, list, list, list)
]
mySprite = sprites.create(img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
goTo([
0,
1,
2,
2
])
