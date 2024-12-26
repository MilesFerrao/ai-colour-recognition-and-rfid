PlanetX_AILens.initModule()
PlanetX_AILens.switchfunc(PlanetX_AILens.FuncList.Color)
basic.showIcon(IconNames.Asleep)
basic.forever(function () {
    if (PlanetX_Basic.checkCard()) {
        if (PlanetX_Basic.readDataBlock() == "1") {
            basic.showString(PlanetX_Basic.readDataBlock())
            music.play(music.stringPlayable("A - - - - - - - ", 120), music.PlaybackMode.UntilDone)
        } else {
            PlanetX_Basic.writeData("1")
        }
    }
})
basic.forever(function () {
    PlanetX_AILens.cameraImage()
    if (PlanetX_AILens.colorCheck(PlanetX_AILens.ColorLs.black)) {
        basic.showIcon(IconNames.Square)
    }
    if (PlanetX_AILens.colorCheck(PlanetX_AILens.ColorLs.red)) {
        basic.showIcon(IconNames.Heart)
    }
    if (PlanetX_AILens.colorCheck(PlanetX_AILens.ColorLs.green)) {
        basic.showIcon(IconNames.Cow)
    }
    if (PlanetX_AILens.colorCheck(PlanetX_AILens.ColorLs.blue)) {
        basic.showIcon(IconNames.Giraffe)
    }
    if (PlanetX_AILens.colorCheck(PlanetX_AILens.ColorLs.white)) {
        basic.showIcon(IconNames.Target)
    }
    if (PlanetX_AILens.colorCheck(PlanetX_AILens.ColorLs.yellow)) {
        basic.showIcon(IconNames.Skull)
    }
})
