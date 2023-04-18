radio.onReceivedNumber(function (receivedNumber) {
    Alarma = receivedNumber
    if (true) {
        basic.showIcon(IconNames.Heart)
    } else if (false) {
        basic.showIcon(IconNames.Angry)
    }
})
let Alarma = 0
radio.setGroup(1)
basic.forever(function () {
    if (input.magneticForce(Dimension.Strength) < 600) {
        radio.sendNumber(1)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.hello), SoundExpressionPlayMode.InBackground)
        basic.pause(200)
        basic.clearScreen()
    } else {
        radio.sendNumber(0)
        music.stopAllSounds()
        basic.clearScreen()
    }
})
