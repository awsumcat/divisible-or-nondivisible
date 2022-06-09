input.onButtonPressed(Button.A, function () {
    if (b % a > 0) {
        basic.showString("not divisible")
    } else {
        basic.showString("divisible")
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(a)
    basic.clearScreen()
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.showNumber(b)
})
let b = 0
let a = 0
a = 6
b = 23
basic.forever(function () {
	
})
