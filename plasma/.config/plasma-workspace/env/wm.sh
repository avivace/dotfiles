# Disable KWin and use i3gaps as WM
export KDEWM=/usr/bin/i3

# Compositor (Animations, Shadows, Transparency)
# xcompmgr -C

# Start compton as daemon (-b)
compton -b --config ~/.config/compton/compton.conf
