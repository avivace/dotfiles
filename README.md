# dotfiles

Here you can find the configuration files and a detailed guide to use the **i3 window manager** on the top of **KDE Plasma** desktop environment without relying on any kind of "integration" packages.

*...as always: If this eats your cat or starts a global thermonuclear war, you are on your own.*

![Screenshot](https://i.imgur.com/Wipid81.png "General Screenshot")

[More screenshots](http://imgur.com/a/KzJZn)

The rest of my configuration and dotfiles are described and documented in [config.md](config.md).

## Requirements

You will need the following things:

- A working Plasma environement (just follow the instructions on how to install Plasma for your distro);
- `i3` or `i3-gaps`;
- `feh` or `nitrogen` for setting the desktop background.

And optionally:

- A compositor like `picom`, for V Sync and transparency effects. You may want a version built from their git repo for stuff like blurring.

## Create a new X Session file

As root (or with sudo) create a new file called `plasma-i3.desktop` in `/usr/share/xsessions/` with the following content:

```python
[Desktop Entry]
Type=XSession
Exec=env KDEWM=/usr/bin/i3 /usr/bin/startplasma-x11
DesktopNames=KDE
Name=Plasma i3 session
Comment=Plasma i3 session
```

This will add a new available session in your login manager.

## Add some stuff in the i3 configuration

Next, add the following lines in your i3 configuration (`~/.config/i3/config`):

```python
# Kill the wallpaper window set by Plasma*
for_window [title="Desktop — Plasma"] kill; floating enable; border none

# Set Plasma dialogs and pop ups as floating so they won't get tiled
for_window [window_role="pop-up"] floating enable
for_window [window_role="task_dialog"] floating enable
for_window [class="systemsettings"] floating enable
for_window [class="plasmashell"] floating enable;
for_window [class="Plasma"] floating enable; border none
for_window [title="plasma-desktop"] floating enable; border none
for_window [class="krunner"] floating enable; border none
for_window [class="Kmix"] floating enable; border none
for_window [class="Klipper"] floating enable; border none
for_window [class="Plasmoidviewer"] floating enable; border none
for_window [class="plasmashell" window_type="notification"] border none, move right 700px, move down 450px
no_focus [class="plasmashell" window_type="notification"

# Set other stuff as floating
for_window [class="(?i)*nextcloud*"] floating disable

# Set the desktop background
exec --no-startup-id feh --bg-scale <PATH_TO_YOUR_WALLPAPER>

# Start the compositor daemonizing it (-b) and enabling shadows (-c)
exec_always --no-startup-id picom -cb
```

\*The first line needs to be adapted if your Plasma language is not english. Use a tool like `wmctrl` to get the name of the window spawning when you login and replace the value in the i3 configuration file.

From this point on, you can logout and relog with the newly created session.

## Optional final tuning

### Remove i3bar

You may want to remove the lines related to the i3bar if you plan on keeping the Plasma status bar.

The Plasma "Pager" widget shows the i3 workspaces nicely, just be sure to have "Workspace name" instead of "Workspace number" in its configuration.

### Disable "Activities" shortcut

Disable the **Meta+Q** shortcut from Plasma Settings > Category Workspace > Shortcuts > Category System Services > Plasma > Activities

### Transparency and blurring

This can be configured per-window or per-application in the compositor settings. See [picom](https://wiki.archlinux.org/title/Picom). 

The git version of `picom` has also `dual_kawase` as blur method.
