# A (barely) decent bash script for backupping.
# avivace - 0.02
## A backup script that copies a list of folders/file (different configs 
##  via paramater) , compress everything in a tar.gz, encrypt it with GPG
##  (RSA public key), uploads it to dropbox (dropbox_uploader.sh) and
##  to a backup VPS (scp, SFTP).

temp=/root/Backup/temp/
bname=folderToBackup_$(date +%d%m%Y)
ext=.tar.gz
suffix=.encrypted
script=/root/Backup/dropbox_uploader.sh
bfolder=/backups/
dp=1

echo -e "\e[32mBackupperino Starting [v0.02] \e[0m"

echo -e "\e[33m Cleaning up old files \e[0m"
rm -rf $temp
rm $bname$ext
rm $bname$ext$suffix

mkdir $temp
mkdir $temp/www 
echo -e "\e[32mCopying \e[0m"

if [ -z ${1+x} ]; then
	echo -e " \e[32m param 1 unset, proceeding to standard (exluding 'static') \e[0m"
	rsync -av --info=name0 /var/www $temp/folderToBackup -r --exclude "static"
else
	if [ $1 = "t" ]; then
		echo -e " \e[33m param 1 set to t. GOING FOR TOTAL \e[0m"
		bname+="_FULL"
		rsync -av --info=name0 /root/folderToBackup $temp/folderToBackup -r
		dp=0
	else
		echo -e " \e[33m param 1 set but invalid. Falling back to default. \e[0m"
		rsync -av --info=name0 /root/folderToBackup $temp/folderToBackup -r --exclude "static"	
	fi
fi

echo -e "\e[32mCompressing \e[0m"
tar -czf $bname$ext $temp --totals

echo -e "\e[32mEncrypting \e[0m"
gpg -e -o $bname$ext$suffix -r aaaaa@gmail.com $bname$ext

if [ "$dp" -eq '1' ]; then
	echo -e "\e[32mUploading to Dropbox\e[0m"
	$script upload $bname$ext$suffix $bfolder
else
	echo -e "\e[33m NOT UPLOADING TO DROPBOX\e[0m"
fi

echo -e "\e[32mUploading to AmazonVPS\e[0m"
scp $bname$ext$suffix amazon:Backup

echo -e "\e[33mCleaning up\e[0m"
rm -rf $temp
echo -e "temp folder "
rm $bname$ext
echo -e "plain archive "
rm $bname$ext$suffix
echo -e "encrypted archive "

echo -e "\e[32mDONE\e[0m"
