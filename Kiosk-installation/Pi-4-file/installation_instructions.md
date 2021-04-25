## step 1

add this to a bashrc or equivalent

```
DISPLAY=:0 xrandr --output HDMI-1 --rotate right
```

## step 2

```
pi@raspberrypi:~ $ sudo vim /etc/X11/xorg.conf.d/99-calibration.conf
```

```
Section "InputClass"
        Identifier "calibration"
        MatchProduct "Elo TouchSystems, Inc. Elo TouchSystems 2700 IntelliTouch(r) USB"
        Option "TransformationMatrix" "0 1 0 -1 0 1 0 0 1"
EndSection

```

## step 3

```
pi@raspberrypi:~ $ sudo vim /etc/xdg/lxsession/LXDE-pi/autostart
```

```
#@lxpanel --profile LXDE-pi
#@pcmanfm --desktop --profile LXDE-pi
#@xscreensaver -no-splash
@xset s off
@xset -dpms
@xset s noblank
@unclutter -idle 0
#@chromium-browser –incognito –kiosk https://status.status.io
@chromium-browser --noerrdialogs --disable-infobars --kiosk https://192.168.1.204:3001 &
```
