import os
import shutil
from datetime import datetime

def copy_files_preserve_metadata(source_folder):
    # Check if the source folder exists
    if not os.path.exists(source_folder):
        print(f"The folder {source_folder} does not exist.")
        return
    
    # Loop through all files in the source folder
    for filename in os.listdir(source_folder):
        file_path = os.path.join(source_folder, filename)
        
        # Skip directories
        if os.path.isdir(file_path):
            continue
        
        # Get the creation and modification date of the file
        creation_time = os.path.getctime(file_path)
        modification_time = os.path.getmtime(file_path)
        date_folder_name = datetime.fromtimestamp(modification_time).strftime('%Y-%m-%d')
        
        # Create a new folder for this date if it doesn't already exist
        destination_folder = os.path.join(source_folder, date_folder_name)
        if not os.path.exists(destination_folder):
            os.makedirs(destination_folder)
        
        # Define the destination file path
        destination_file_path = os.path.join(destination_folder, filename)
        
        # Copy the file
        shutil.move(file_path, destination_file_path)
        
        # Apply the original creation and modification times to the copied file
        os.utime(destination_file_path, (creation_time, modification_time))
        
        print(f"Copied {filename} to {destination_folder} preserving metadata.")

# Example usage
source_folder = '100MSDCF'  # Replace with your folder path
copy_files_preserve_metadata(source_folder)





