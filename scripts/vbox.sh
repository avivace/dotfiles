cp /media/cdrom0/* vbox/ -r
apt install build-essential
apt install dkms
apt install linux-headers-$(uname -r)
./vbox/VBoxLinuxAdditions.run
rm -rf vbox