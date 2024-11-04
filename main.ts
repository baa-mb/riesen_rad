input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            . . . . .
            . . . . .
            `)
    pins.servoWritePin(AnalogPin.P0, 0)

})
input.onButtonPressed(Button.B, function () {

    basic.showLeds(`
            . . . . .
            . . . . .
            # . . . #
            . # . # .
            . . # . .
            `)
    pins.servoWritePin(AnalogPin.P0, 180)


})
input.onButtonPressed(Button.AB, function () {

    pins.servoWritePin(AnalogPin.P0, 90)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "A") {
        basic.showString(receivedString)
        automat = 1
        control.raiseEvent(
            EventBusSource.MICROBIT_ID_BUTTON_A,
            EventBusValue.MICROBIT_BUTTON_EVT_CLICK
        )
    } else if (receivedString == "B") {
        basic.showString(receivedString)
        automat = 2
        control.raiseEvent(
            EventBusSource.MICROBIT_ID_BUTTON_B,
            EventBusValue.MICROBIT_BUTTON_EVT_CLICK
        )
    } else if (receivedString == "AB") {
        basic.showString("-")
        automat = 0
        control.raiseEvent(
            EventBusSource.MICROBIT_ID_BUTTON_AB,
            EventBusValue.MICROBIT_BUTTON_EVT_CLICK
        )
    }
})
let automat = 0
basic.showLeds(`
    . . # . .
    . # . # .
    # . . . #
    . # . # .
    . . # . .
    `)
automat = 0
radio.setGroup(24)
