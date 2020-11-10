# Source:
# https://unix.stackexchange.com/questions/289685/how-to-install-virtualbox-extension-pack-to-virtualbox-latest-version-on-linux

LatestVirtualBoxVersion=$(wget -qO - https://download.virtualbox.org/virtualbox/LATEST-STABLE.TXT) && wget "https://download.virtualbox.org/virtualbox/${LatestVirtualBoxVersion}/Oracle_VM_VirtualBox_Extension_Pack-${LatestVirtualBoxVersion}.vbox-extpack"
sudo VBoxManage extpack install --replace Oracle_VM_VirtualBox_Extension_Pack-${LatestVirtualBoxVersion}.vbox-extpack
