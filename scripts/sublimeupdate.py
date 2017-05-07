# Sublime Text 3 updater for debian-based systems
# https://github.com/avivace/dotfiles/
# Checks updates and manually downloads and installs the package if a new version is detected

import requests
import subprocess
import re

# Preferences
arch = 'amd64'		# Valid values are i386 and amd64
site_attempts = 10	# Number of attempts to access sublimetext.com
wget_attempts = 20	# Number of attempts to download the package
channel = 'dev'		# Valid values are stable and dev. Please note that dev builds require purchasing the software

print("# Sublime Text 3 updater")

if (channel == 'stable'):
	DownloadPageURL = 'https://www.sublimetext.com/3'
	version_string = 'The latest build is'
elif (channel == 'dev'):
	DownloadPageURL = 'https://www.sublimetext.com/3dev'
	version_string = 'The current Sublime Text 3 dev build is'

installed_version_shell = subprocess.check_output("dpkg -s sublime-text | grep Version", shell=True)
m = re.search('[A-Za-z]*\:\s*([0-9]*)', installed_version_shell.decode('utf-8'))
installed_version = m.group(1)

print("Installed version is " + str(installed_version))
print("Checking last version..")

r = requests.get(DownloadPageURL)

i = 1
while (r.status_code != 200 and i < site_attempts):
	print("Got response "+ str(r.status_code) + ". Retrying.. (attempt " + str(i) + ")")
	r = requests.get(DownloadPageURL)
	i=i+1

if (r.status_code == 200):
	m2 = re.search(version_string + '\s([0-9]*)', r.text)
	remote_version = m2.group(1)
	print("Remote version is " + str(remote_version))
	if (remote_version > installed_version):
		packageName = 'sublime-text_build-'+str(remote_version)+'_' + arch + '.deb'
		packageURL = 'https://download.sublimetext.com/' + packageName
		print("Update available, fetching the last version..")
		subprocess.call("wget --retry-connrefused --waitretry=1 --read-timeout=20 --timeout=15 -t "+ wget_attempts + ' ' + packageURL, shell=True)
		print("Installing..")
		subprocess.call("dpkg -i "+packageName, shell=True)
		print("Cleaning up..")
		subprocess.call("rm "+packageName, shell=True)
		print("Done. " + str(installed_version) + " -> " + str(remote_version))
	else:
		print("You have the latest version")
else:
	print("Giving up after "+ str(i)+" attempts. RIP sublimetext.com")