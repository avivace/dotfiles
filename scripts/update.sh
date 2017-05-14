#!/bin/bash
apt clean
apt update
apt upgrade -y
python3 sublimeupdate.py
