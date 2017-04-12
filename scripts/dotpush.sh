cp ~/.vimrc ..
rsync --exclude-from 'exclude.txt' ~/.config/sublime-text-3/Packages/User ../sublime-text-3/Packages -avr

cp ~/.tmux.conf ..
cp ~/.bashrc ..
cp ~/template.tex ../scripts/
cp ~/update.sh ../scripts/
cp ~/avd.sh ../scripts/
cp ~/powersettings.sh ../scripts/
cp ~/bat.sh ../scripts/
cp ~/.config/plasma-workspace/env/wm.sh ../.config/plasma-workspace/env/
cp ~/.config/i3/config ../.config/i3/
cp ~/.config/compton.conf ../.config/compton.conf
cp ~/.Xresources ..
cp ~/.xinitrc ..

## apt sources
cp /etc/apt/sources.list ../apt/
cp /etc/apt/preferences ../apt/
# cp /etc/apt/preferences.d/01_release ../apt

cd ..
# push changes
git add .
#git commit -m 'auto-commit-'$(date +%H%M%S%d%m%Y)
# TODO: a better looking /more descriptive commit name
# git push
read -p "Commit message? " answer
git commit -m "$answer"
git push
