import requests
import subprocess
import re

DevChannelURL = 'https://www.sublimetext.com/3dev'
arch = 'amd64' # or i386
i = 1
limit = 10


current_version_shell = subprocess.check_output("dpkg -s sublime-text | grep Version", shell=True)
m = re.search('[A-Za-z]*\:\s*([0-9]*)', current_version_shell.decode('utf-8'))
current_version = m.group(1)

print("Installed version is " + str(current_version))
print("Checking last version")

r = requests.get(DevChannelURL)

while (r.status_code != 200 and i < limit):
	print("Got response "+ str(r.status_code) + ". Attempt " + str(i) + "...")
	r = requests.get(DevChannelURL)
	i=i+1

if (r.status_code == 200):
	m2 = re.search('The current Sublime Text 3 dev build is\s([0-9]*)', r.text)
	remote_version = m2.group(1)
	print("Remote version is " + str(remote_version))
	if (remote_version > current_version):
		packageName = 'sublime-text_build-'+str(remote_version)+'_' + arch + '.deb'
		packageURL = 'https://download.sublimetext.com/' + packageName
		print("Update available, fetching the last version..")
		subprocess.call("wget --retry-connrefused --waitretry=1 --read-timeout=20 --timeout=15 -t 20 "+packageURL, shell=True)
		print("Installing..")
		subprocess.call("dpkg -i "+packageName, shell=True)
		print("Cleaning up..")
		subprocess.call("rm "+packageName, shell=True)
		print("Done. " + str(current_version) + " -> " + str(remote_version))
	else:
		print("You have the latest version")
else:
	print("Giving up after "+ str(i)+" attempts. RIP sublimetext.com")