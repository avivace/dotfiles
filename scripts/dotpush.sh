#!/bin/bash
rsync --exclude-from 'exclude.txt' ~/.config/sublime-text-3/Packages/User ../sublime-text-3/Packages -avr

cp ~/.vimrc ..
cp ~/.tmux.conf ..
cp ~/.bashrc ..
cp ~/vbox.sh ../scripts/
cp ~/template.tex ../scripts/
cp ~/update.sh ../scripts/
cp ~/avd.sh ../scripts/
cp ~/powersettings.sh ../scripts/
cp ~/bat.sh ../scripts/
cp ~/.config/plasma-workspace/env/wm.sh ../.config/plasma-workspace/env/
cp ~/.config/i3/config ../.config/i3/
cp ~/.config/compton.conf ../.config/compton.conf
cp ~/.config/fish ../.config/fish -r
cp ~/.Xresources ..
cp ~/.xinitrc ..
cp ~/.fonts.conf ..

## apt sources
cp /etc/apt/preferences ../apt/
cp /etc/apt/sources.list ../apt/

# push changes
cd ..
git add .
read -p "Commit message? " answer
git commit -m "$answer"
git push
