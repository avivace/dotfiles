cp ~/.vimrc .
rsync --exclude-from 'exclude.txt' ~/.config/sublime-text-3/Packages/User ../sublime-text-3/Packages -avr
cp ~/.tmux.conf ..
cp ~/.bashrc ..
cp ~/template.tex .

## apt sources
cp /etc/apt/sources.list ../apt/
# cp /etc/apt/preferences.d/01_release ../apt

# push changes
git add .
git commit -m 'auto-commit-'$(date +%H%M%S%d%m%Y)
# TODO: a better looking /more descriptive commit name
git push
