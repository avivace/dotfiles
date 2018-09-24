# Disable KWin and use i3gaps as WM
export KDEWM=/usr/local/bin/i3

# Compositor (Animations, Shadows, Transparency)
# xcompmgr -C
compton -b --config ~/.config/compton/compton.conf
