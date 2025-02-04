function Colorfulwaterlamp () {
    cbit_小车类.RGB_Car_Big2(cbit_小车类.enColor.OFF)
    cbit_小车类.RGB_Car_Program().setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    cbit_小车类.RGB_Car_Program().show()
    basic.pause(100)
    cbit_小车类.RGB_Car_Program().clear()
    cbit_小车类.RGB_Car_Program().setPixelColor(1, neopixel.colors(NeoPixelColors.Orange))
    cbit_小车类.RGB_Car_Program().show()
    basic.pause(100)
    cbit_小车类.RGB_Car_Program().clear()
    cbit_小车类.RGB_Car_Program().setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
    cbit_小车类.RGB_Car_Program().show()
    basic.pause(100)
    cbit_小车类.RGB_Car_Program().clear()
}
function ModeRun () {
    if (t_mode == 1) {
        TrackingMode()
    } else if (t_mode == 2) {
        AvoidMode()
    } else if (t_mode == 3) {
        ColorfulSearchlight()
    } else if (t_mode == 4) {
        Colorfulwaterlamp()
    } else if (t_mode == 5) {
        Music()
    }
}
input.onButtonPressed(Button.A, function () {
    cbit_小车类.CarCtrlSpeed(cbit_小车类.CarState.Car_Stop, 0)
    t_mode = t_mode + 1
    if (t_mode == 6) {
        t_mode = 1
    }
    basic.showNumber(t_mode)
})
function AvoidMode () {
    D = 0
    for (let index = 0; index < 5; index++) {
        D = D + cbit_小车类.Ultrasonic_Car()
    }
    D = Math.idiv(D, 5)
    if (D > 15) {
        cbit_小车类.CarCtrlSpeed(cbit_小车类.CarState.Car_Run, 200)
    } else {
        cbit_小车类.CarCtrlSpeed(cbit_小车类.CarState.Car_Back, 200)
        basic.pause(500)
        if (Math.randomBoolean()) {
            cbit_小车类.CarCtrlSpeed(cbit_小车类.CarState.Car_Right, 200)
            basic.pause(500)
        } else {
            cbit_小车类.CarCtrlSpeed(cbit_小车类.CarState.Car_Left, 200)
            basic.pause(500)
        }
    }
}
function ColorfulSearchlight () {
    cbit_小车类.RGB_Car_Big2(cbit_小车类.enColor.Red)
    basic.pause(100)
    cbit_小车类.RGB_Car_Big2(cbit_小车类.enColor.Green)
    basic.pause(100)
    cbit_小车类.RGB_Car_Big2(cbit_小车类.enColor.Blue)
    basic.pause(100)
    cbit_小车类.RGB_Car_Big2(cbit_小车类.enColor.White)
    basic.pause(100)
    cbit_小车类.RGB_Car_Big2(cbit_小车类.enColor.Cyan)
    basic.pause(100)
    cbit_小车类.RGB_Car_Big2(cbit_小车类.enColor.Pinkish)
    basic.pause(100)
    cbit_小车类.RGB_Car_Big2(cbit_小车类.enColor.Yellow)
    basic.pause(100)
}
function Music () {
    basic.showLeds(`
        . . # . .
        . . # # .
        . . # . #
        # # # . .
        # # # . .
        `)
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Double))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(262, music.beat(BeatFraction.Double))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(262, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Double))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(262, music.beat(BeatFraction.Whole))
}
function TrackingMode () {
    if (cbit_小车类.Line_Sensor(cbit_小车类.enPos.LeftState, cbit_小车类.enLineState.Black) && cbit_小车类.Line_Sensor(cbit_小车类.enPos.RightState, cbit_小车类.enLineState.Black)) {
        cbit_小车类.CarCtrlSpeed(cbit_小车类.CarState.Car_Run, 150)
    } else if (cbit_小车类.Line_Sensor(cbit_小车类.enPos.LeftState, cbit_小车类.enLineState.Black) && cbit_小车类.Line_Sensor(cbit_小车类.enPos.RightState, cbit_小车类.enLineState.White)) {
        cbit_小车类.AloneCtrlSpeed(cbit_小车类.AloneState.Left_Z_Motor, 0)
        cbit_小车类.AloneCtrlSpeed(cbit_小车类.AloneState.Right_Z_Motor, 200)
    } else if (cbit_小车类.Line_Sensor(cbit_小车类.enPos.LeftState, cbit_小车类.enLineState.White) && cbit_小车类.Line_Sensor(cbit_小车类.enPos.RightState, cbit_小车类.enLineState.Black)) {
        cbit_小车类.AloneCtrlSpeed(cbit_小车类.AloneState.Left_Z_Motor, 200)
        cbit_小车类.AloneCtrlSpeed(cbit_小车类.AloneState.Right_Z_Motor, 0)
    } else if (cbit_小车类.Line_Sensor(cbit_小车类.enPos.LeftState, cbit_小车类.enLineState.White) && cbit_小车类.Line_Sensor(cbit_小车类.enPos.RightState, cbit_小车类.enLineState.White)) {
        cbit_小车类.CarCtrlSpeed(cbit_小车类.CarState.Car_Back, 100)
    }
}
let D = 0
let t_mode = 0
basic.showIcon(IconNames.Heart)
t_mode = 0
cbit_小车类.CarCtrlSpeed(cbit_小车类.CarState.Car_Stop, 0)
basic.forever(function () {
    ModeRun()
    if (t_mode == 1) {
        cbit_小车类.RGB_Car_Program().showColor(neopixel.rgb(0, 0, 0))
    }
})
