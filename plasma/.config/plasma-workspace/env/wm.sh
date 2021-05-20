# Disable KWin and use i3gaps as WM
export KDEWM=/usr/bin/i3

# Start picom as compositor
picom --experimental-backends --config ~/.config/picom.conf
