#!/bin/bash
VPN="vpn.unimib.it"
USER=""
REALM="Utenti_Unimib"
PASSWD=
nl=$'\n'
INPUT="$REALM""$nl""$PASSWD"
echo "$INPUT"|openconnect --juniper --no-cert-check --user=$USER -b --pid-file=$1 $VPN