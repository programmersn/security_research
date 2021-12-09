#! /bin/bash

# Doesn't work

SCRIPT_NAME="deauth1.py"
IFACE="wlp9s0"
IFACE_MON="$IFACE"mon

for ((channel=1; channel <= 11; channel++)); do
    echo "========================================================================================="
    echo "Running \"$SCRIPT_NAME\" on interface \"$IFACE\"/Channel $channel ... "
    echo "-----------------------------------------------------------------------"
    sudo airmon-ng stop "$IFACE_MON"
    sudo airmon-ng start "$IFACE" "$channel"
    sudo python3 "$SCRIPT_NAME"
    echo "========================================================================================="
done
