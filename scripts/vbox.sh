cp /media/cdrom0/* vbox/ -r
apt install build-essential dkms linux-headers-$(uname -r) -y
./vbox/VBoxLinuxAdditions.run
rm -rf vbox