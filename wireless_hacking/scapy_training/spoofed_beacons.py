#! /usr/bin/env python3

# Ref: http://www.cs.toronto.edu/~arnold/427/18s/427_18S/indepth/scapy_wifi/scapy_tut.html

from scapy.layers.dot11 import *
from scapy.volatile import *

IFACE = 'wlp9s0mon'
SSIDS = ['testing', 'the', 'beacons']

packets = []

for ssid in SSIDS:
    src = RandMAC()
    packets.append(RadioTap()                       # RadioTap header to send packets over the air
        / Dot11(type=0, subtype=8,                  # Management beacon frame, type 0x1000
                addr1 = 'ff:ff:ff:ff:ff:ff',        # Broadcast address
                addr2 = src,
                addr3 = src)
        / Dot11Beacon(cap='ESS+privacy')
        / Dot11Elt(ID='SSID', info=ssid, len=len(ssid))
        / Dot11Elt(ID='RSNinfo', info=('\x01\x00'
                                       '\x00\x0f\x02'
                                       '\x02\x00'
                                       '\x00\x0f\xac\x04'
                                       '\x00\x0f\xac\x02'
                                       '\x01\x00'
                                       '\x00\x0f\xac\x02'
                                       '\x00\00')
                    )
    )

while True:
    sendp(packets, iface=IFACE, inter=0.01)