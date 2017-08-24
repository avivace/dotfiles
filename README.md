# dotfiles
Every section explains which packages, configuration files and (if any) workarounds/fixes are used to obtain the described result.

### Contents
- [Further reference](#further-reference)
- [Desktop](#desktop)
  - [i3 + Plasma](#i3--plasma-integration)
  - [Status Bar](#status-bar)
  - [Theming](#theming)
  - [Compositor](#compositor)
  - [Notifications](#notifications)
- [Applications](#applications)
- [System](#system)
- [Scripts](#scripts)
- [Credits](#credits)

___

## Further Reference
Read carefully every section in this file, and copy only the configuration files relative to the parts you are trying to setup.

If something still doesn't work as expected, check:
- [This](https://avivace.com/blog/debian-and-kde-plasma.html) blog post, where I describe more fixes and workarounds to problems appeared while using this setup.
- The [issues](https://github.com/avivace/dotfiles/issues?utf8=%E2%9C%93&q=is%3Aissue%20is%3Aclosed%20is%3Aopen) in this repo where someone else may had the same problem:
  + [Notification handling, Plasma wallpaper not disappearing](https://github.com/avivace/dotfiles/issues/2)

If none of these helped, feel free to open an issue here. Include your distro informations and the configuration values you are trying.

## Desktop
- `.config/i3/`
- `.config/plasma-workspace/`
- `.config/compton-config`
- `.xinitrc`
- `.Xresources`

![Screenshot](http://i.imgur.com/6IqZfah.png "General Screenshot")

[Full screenshots gallery](http://imgur.com/a/KzJZn)

### i3 + Plasma integration

I'm using **KDE Plasma** as Desktop Environment + **i3-gaps** as (tiling) Windows Manager. Without having to use patches to either i3 or KDE - just with some tuning - everything works out of the box, including:

- the **Pager** widget (which correctly reads and lets you switch i3 workspaces)
- the **Icons-only Task Manager** (~dock) widget (opens for you the corresponding workspace when clicking an icon)
- other plasmashell widgets and popups
- multiple displays
- everything offered by i3 (including window focusing, shortcuts and mouse-related things)

You will still use the Plasma session with `startx`, so set your login manager accordingly.

~350 MB base RAM consumption, compositor included.

Please note that i3 will replace KWin completely, so you won't have titlebars and every other compositing/animation feature offered by a standard Plasma installation.

#### Wallpaper
As soon as i3 is ready you can actually use the system - but - while Plasma finishes the boot (takes ~5 seconds more for me on i5 Skylake and SSD) you'll notice the Plasma boot animation as it was the wallpaper: to avoid this use "None" as Splash Screen Theme. The wallpaper is then set with `feh` (delay this if you still notice problems).

#### Glitched tooltips
If you notice something like [this](http://i.imgur.com/ef4gjZX.png), compton maybe the problem, try disabling the `fade` effect:

```
wintypes :
{
  tooltip : 
  {
#    fade = true;
    shadow = false;
    opacity = 0.75;
    focus = true;
  };
};
```

### Status Bar
It's a fully transparent Plasma panel, themed with the [Arc T](https://github.com/avivace/Arc-T) desktop theme.
The [awesome-widgets](https://github.com/arcan1s/awesome-widgets) plasmoid shows the following content:

```html
<div align="right" style="color:#ffffff; font-family:'Helvetica Neue'; font-size:12pt;">$hddfreegb0G&nbsp;&nbsp;&nbsp;&nbsp;$cpu%&nbsp;&nbsp;&nbsp;&nbsp;$memgbG&nbsp;&nbsp;&nbsp;&nbsp;$temp0 &nbsp;&nbsp;&nbsp; $custom1</div>
```

Where `$custom1` runs `bat.sh`. Depends on `FontAwesome`.

### Theming
- Workspace theme: Breeze
- Desktop theme: [Arc T](https://github.com/avivace/Arc-T)
- Icon Theme: Papirus-Dark
- Widget Style: Breeze
- GTK theme: Breeze, [monokai-gtk](https://github.com/avivace/monokai-gtk)
- Typography: Helvetica Neue for UI, Hack as monospaced font
- Rofi theme: `.Xresources`
- Compositor: compton

### Compositor
Everything is working **without** a compositor. However, `xcompmgr` and `compton` have been tested to work flawlessly on this setup.

## Applications

- bash, `.bashrc`
- fish, `.config/fish`
- vim, `.vimrc`
- tmux, `.tmux.conf`
- Sublime Text 3, `sublime-text-3/`

![Screenshot 2](http://i.imgur.com/eMF7U7o.png "vim, tmux")

![Screenshot 3](http://i.imgur.com/JcBHfGd.png "Sublime Text 3")

## Notifications

Notifications are handled by Plasma. If you don't see them correctly, check if you have another notification daemon installed (e.g. `dunst` which comes as recommended package for `i3` in some distros).


## System
`apt/`

Debian **sid/unstable**, while having testing, stable and jessie-backports as fallback sources.

This is *not* a good solution if you don't know what the previous statement means or if you want a stable system and aren't prepared to fix things.


## Scripts
`scripts/`

Bash things (some of them are aliased):
- `vpn.sh` - Connect to Juniper based VPN service
- `template.tex` - Template for my [LaTex + Pandoc workflow](http://avivace.ovh/blog/markdown.html)
- `teamviewer.sh` - Using teamviewer without wasting resources
- `backupperino.sh` - Backup, encrypt and upload to Dropbox/VPS
- `dotpush.sh` - Pushes updated dotfiles to this repo
- `avd.sh` - Starting android emulators with (working) HW acceleration
- `mount.sh` - sshfs preset (mounts remote folder as local filesystem, over ssh)
- `powersettings.sh` - Disable things on battery, and the other way round on AC
- `bat.sh` - Renders battery icon, percentage, charging and AC indicators in status bar. Executed by awesome-widgets.
- `vbox.sh` - Prepares the system and updates the VirtualBox Guest Additions
- `sublimeupdate.py` - (Python3) Checks if a new Sublime Text 3 version is available and installs it
- `update.sh`

### Credits
- *#i3*, *#kde* freenode IRC channels. */r/unixporn*, */r/i3wm* contributors, @[ruphy](https://github.com/ruphy), @[ktonga](https://github.com/ktonga).
- [sddm configuration](https://github.com/MalditoBarbudo/solarized_sddm_theme)
- [jaagr dots](https://github.com/jaagr/dots)
- [A tmux](https://github.com/tony/tmux-config) configuration, and [another](https://github.com/gpakosz/.tmux)
- [pandoc-templates](https://raw.githubusercontent.com/jgm/pandoc-templates/master/default.latex)
- i3/KDE related things: [1](http://infra.in.zekjur.net/archives/i3-discuss/2013-March/001222.html), [2](https://gist.github.com/AlexanderPavlenko/04078f90c6b127926218), [3](https://github.com/sLite/i3), [4](https://github.com/sLite/i3-config), [5](http://stackoverflow.com/questions/21616473/can-i-get-a-proper-tiling-window-manager-in-kde)
