####
## DEPRECATED, USE https://www.sublimetext.com/docs/3/linux_repositories.html
####

# Sublime Text 3 updater for debian-based systems
# https://github.com/avivace/dotfiles/
# Checks updates and manually downloads and installs the package if a new version is detected
# run with sudo python3 sublimeupdate.py

import requests
import subprocess
import re

# Preferences
arch = 'amd64'		# Valid values are i386 and amd64
site_attempts = 10	# Number of attempts to access the JSON API
wget_attempts = 20	# Number of attempts to download the package
channel = 'dev'		# Valid values are stable and dev. Please note that dev builds require purchasing the software

APIendpoint = 'http://www.sublimetext.com/updates/3/'+ channel +'/updatecheck'

print("# Sublime Text 3 updater")
installed_version_shell = subprocess.check_output("dpkg -s sublime-text | grep Version", shell=True)
m = re.search('[A-Za-z]*\:\s*([0-9]*)', installed_version_shell.decode('utf-8'))
installed_version = int(m.group(1))

print("Installed version is " + str(installed_version))
print("Checking last version..")

r = requests.get(APIendpoint)

i = 1
while (r.status_code != 200 and i < site_attempts):
	print("Got response "+ str(r.status_code) + ". Retrying.. (attempt " + str(i) + ")")
	r = requests.get(APIendpoint)
	i=i+1

if (r.status_code == 200):
	remote_version = r.json()['latest_version']
	print("Remote version is " + str(remote_version))
	if (remote_version > installed_version):
		packageName = 'sublime-text_build-'+str(remote_version)+'_' + arch + '.deb'
		packageURL = 'https://download.sublimetext.com/' + packageName
		print("Update available, fetching the last version..")
		subprocess.call("wget --retry-connrefused --waitretry=1 --read-timeout=20 --timeout=15 -t "+ str(wget_attempts) + ' ' + packageURL, shell=True)
		print("Installing..")
		subprocess.call("dpkg -i "+packageName, shell=True)
		print("Cleaning up..")
		subprocess.call("rm "+packageName, shell=True)
		print("Done. " + str(installed_version) + " -> " + str(remote_version))
	else:
		print("You have the latest version")
else:
	print("Giving up after "+ str(i)+" attempts. RIP sublimetext.com")
