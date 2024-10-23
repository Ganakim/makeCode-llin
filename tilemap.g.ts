// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "ground 0-0":
            case "level2":return tiles.createTilemap(hex`0500050002010101010101010101010101010101010101010101010102`, img`
. . . . . 
. . . . . 
. . . . . 
. . . . . 
. . . . . 
`, [myTiles.transparency16,sprites.castle.tilePath5,sprites.dungeon.stairLarge], TileScale.Sixteen);
            case "ground 0-1":
            case "level9":return tiles.createTilemap(hex`0500050001020202020202020202020202020202020202020202020202`, img`
. . . . . 
. . . . . 
. . . . . 
. . . . . 
. . . . . 
`, [myTiles.transparency16,sprites.dungeon.stairLarge,sprites.castle.tilePath5], TileScale.Sixteen);
            case "ground 0-2":
            case "ground 0-2":return tiles.createTilemap(hex`0500050001010101010101010101010101010101010101010101010102`, img`
. . . . . 
. . . . . 
. . . . . 
. . . . . 
. . . . . 
`, [myTiles.transparency16,sprites.castle.tilePath5,sprites.dungeon.stairLarge], TileScale.Sixteen);
            case "spawns 0-1":
            case "ground 0-3":return tiles.createTilemap(hex`0500050002010101010101010101010101010101010101010101010103`, img`
. . . . . 
. . . . . 
. . . . . 
. . . . . 
. . . . . 
`, [myTiles.transparency16,sprites.castle.tilePath5,myTiles.tile1,myTiles.tile2], TileScale.Sixteen);
            case "ground 0-8":
            case "ground 0-7":return tiles.createTilemap(hex`0500050001010101010101010101010101010101010101010101010102`, img`
. . . . . 
. . . . . 
. . . . . 
. . . . . 
. . . . . 
`, [myTiles.transparency16,sprites.castle.tilePath5,myTiles.tile4], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level3":
            case "level3":return tiles.createTilemap(hex`0500050000000000000000000000000100000000000000000000000000`, img`
. . . . . 
. . . . . 
. . . . . 
. . . . . 
. . . . . 
`, [myTiles.transparency16,sprites.castle.rock0], TileScale.Sixteen);
            case "spawns 0-0":
            case "ground 0-5":return tiles.createTilemap(hex`0500050002010101010101010101010301010101010101010101010101`, img`
. . . . . 
. . . . . 
. . . . . 
. . . . . 
. . . . . 
`, [myTiles.transparency16,sprites.castle.tilePath5,myTiles.tile3,sprites.castle.rock0], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile2":
            case "tile4":return tile4;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
