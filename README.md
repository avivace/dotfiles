# dotfiles
Every part explains which packages, configurations and workarounds/fixes are used to obtain the described result.
- Desktop
  - i3 + Plasma
  - Status Bar
  - Theming
  - Compositor
- Applications
  - vim
  - tmux
  - sublime text 3
- System
- Scripts


## Desktop
- `.config/i3/`
- `.config/plasma-workspace/`
- `.xinitrc`
- `.Xresources`

### i3 + Plasma

I'm using **KDE Plasma** as Desktop Environment + **i3gaps** as (tiling) Windows Manager. After some tuning everything works out of the box, including:

- the **Pager** widget (which correctly reads and lets you switch i3 workspaces);
- the **Icons-only Task Manager** (~dock) widget. It even switches to the corresponding workspace when you click on the icon of an application opened in another workspace than the actual;
- other plasmashell widgets and popups.
- everything offered by i3 (such window focusing, shortcuts and mouse-related things);

You will still use the Plasma session with `startx`, so set your login manager accordingly.

As soon as i3 is ready you can actually use the system. However, while Plasma finishes the boot (takes ~5 seconds more for me on i5 Skylake and SSD). In this period of time you'll just notice the Plasma boot animation as the wallpaper, to avoid this you can use "None" as Splash Screen Theme. The wallpaper is then set with `feh`.

~300 MB base RAM consumption.

Please note that i3 will replace KWin completely, so you won't have titlebars and every other compositing/animation feature offered by Plasma. Notifications will be handled by your notification daemon (`dunst` is installed with many i3 packages).

### Status Bar

### Theming
- Workspace theme: Breeze
- Desktop theme: Arc Dark
- Icon Theme: ePapirus
- Widget Style: Breeze
- GTK theme: Breeze and [monokai-gtk](https://github.com/avivace/monokai-gtk)
- Typography: Helvetica Neue for UI, Hack as monospaced font.
- Rofi: `.Xresources`

### Compositor
Everything is working **without** a compositor, you'll probably just notice some tearing while scrolling in the browser. If you need animations, shadows, effects, transparency support, `xcompmgr` and `compton` both works flawlessly on this setup.

## System
**Debian sid/unstable**, while having testing, stable and backports as fallback sources. This is *not* a good solution if you don't know what the previous statement means or if you want a stable system and aren't prepared to fix things.
- `apt/`

## Scripts
- `scripts/`
