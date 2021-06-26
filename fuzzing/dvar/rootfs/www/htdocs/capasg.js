var titlewireless = new Object();
titlewireless.basicset="Basic Wireless Settings";
titlewireless.security="Wireless Security";
titlewireless.macfilter="Wireless MAC Filter";
titlewireless.advwireless="Advanced Wireless Settings";
titlewireless.wacmaclist="Wireless Active Client MAC List";
titlewireless.wirelesshelp="Wireless Help";
titlewireless.securityhelp="Wireless Security Help";

var wlantopmenu = new Object();
wlantopmenu.basicset="Basic Wireless Settings";
wlantopmenu.security="Wireless Security";
wlantopmenu.macfilter="Wireless MAC Filter";
wlantopmenu.advwireless="Advanced Wireless<br>Settings";

var wlanleftmenu = new Object();
wlanleftmenu.wirelessnet="Wireless Network";
wlanleftmenu.wirelessmacfilter="Wireless MAC Filter";
wlanleftmenu.advwireless="Advanced Wireless";

var wlansetup = new Object();
wlansetup.networkmode="Wireless Network Mode";
wlansetup.ssid="Wireless Network Name (SSID)";
wlansetup.channel="Wireless Channel";
wlansetup.ssidbroadcast="Wireless SSID Broadcast";
wlansetup.aonly="A-Only";
wlansetup.mixed="Mixed";
wlansetup.bonly="B-Only";
wlansetup.gonly="G-Only";
wlansetup.superg="Super-G";
wlansetup.turbogdyn="TurboG Dynamic";
wlansetup.defaults="SES Inactive";
wlansetup.resetsec="Reset Security";
wlansetup.sescfged="SES Security Parameters Configured";
wlansetup.sesscur="Secured";
wlansetup.sesnegotiating="SES Negotiating";

var wlansec = new Object();
wlansec.wpapersharekey="WPA Personal";
wlansec.wparadius="WPA Enterprise";
wlansec.radius="RADIUS";
wlansec.wep="WEP";
wlansec.wpa2persharekey="WPA2 Personal";
wlansec.wpa2radius="WPA2 Enterprise";
wlansec.secmode="Security Mode";
wlansec.wpaalg="WPA Algorithms";
wlansec.tkip="TKIP";
wlansec.aes="AES";
wlansec.tkipaes="TKIP+AES";
wlansec.wpaskey="WPA Shared &nbsp;Key";
wlansec.groupkey="Group Key &nbsp;Renewal";
wlansec.seconds="seconds";
wlansec.radiussrv="RADIUS Server<br>&nbsp;Address";
wlansec.radiusport="RADIUS Port";
wlansec.sharekey="Shared Key";

wlansec.keyretimeout="Key Renewal Timeout";
wlansec.deftrankey="Default Transmit &nbsp;Key";
wlansec.wepencry="WEP Encryption";
wlansec.tenhex="64 bits 10 hex digits";
wlansec.twentysixhex="128 bits 26 hex digits";
wlansec.passphrase="Passphrase";
wlansec.key1="Key 1";
wlansec.key2="Key 2";
wlansec.key3="Key 3";
wlansec.key4="Key 4";
wlansec.rekey="rekey interval";
wlansec.ip="IP";
wlansec.port="Port";
//wpa2
wlansec.wpa2personal="WPA2 Personal";
wlansec.wpa2enterprise="WPA2 Enterprise";

var wlanfilter = new Object();
wlanfilter.prevent="Prevent";
wlanfilter.pclist="<b>Prevent </b>PCs listed from accessing the wireless";
wlanfilter.network="network";
wlanfilter.permitonly="Permit only";
wlanfilter.pclisttoacc="<b>Permit only </b>PCs listed to access the wireless network";

var wlanmaclist = new Object();
wlanmaclist.macaddrlist="MAC Address Filter List";
wlanmaclist.macformat="Enter MAC Address in this format";
wlanmaclist.mac01="MAC 01";
wlanmaclist.mac02="MAC 02";
wlanmaclist.mac03="MAC 03";
wlanmaclist.mac04="MAC 04";
wlanmaclist.mac05="MAC 05";
wlanmaclist.mac06="MAC 06";
wlanmaclist.mac07="MAC 07";
wlanmaclist.mac08="MAC 08";
wlanmaclist.mac09="MAC 09";
wlanmaclist.mac10="MAC 10";
wlanmaclist.mac11="MAC 11";
wlanmaclist.mac12="MAC 12";
wlanmaclist.mac13="MAC 13";
wlanmaclist.mac14="MAC 14";
wlanmaclist.mac15="MAC 15";
wlanmaclist.mac16="MAC 16";
wlanmaclist.mac17="MAC 17";
wlanmaclist.mac18="MAC 18";
wlanmaclist.mac19="MAC 19";
wlanmaclist.mac20="MAC 20";
wlanmaclist.mac21="MAC 21";
wlanmaclist.mac22="MAC 22";
wlanmaclist.mac23="MAC 23";
wlanmaclist.mac24="MAC 24";
wlanmaclist.mac25="MAC 25";
wlanmaclist.mac26="MAC 26";
wlanmaclist.mac27="MAC 27";
wlanmaclist.mac28="MAC 28";
wlanmaclist.mac29="MAC 29";
wlanmaclist.mac30="MAC 30";
wlanmaclist.mac31="MAC 31";
wlanmaclist.mac32="MAC 32";
wlanmaclist.mac33="MAC 33";
wlanmaclist.mac34="MAC 34";
wlanmaclist.mac35="MAC 35";
wlanmaclist.mac36="MAC 36";
wlanmaclist.mac37="MAC 37";
wlanmaclist.mac38="MAC 38";
wlanmaclist.mac39="MAC 39";
wlanmaclist.mac40="MAC 40";

wlanmaclist.actpc="Active PC";
wlanmaclist.clihostname="Client Host Name";
wlanmaclist.enablefilter="Enable MAC Filter";
wlanmaclist.inactpc="Inactive PC";

var wlanadv = new Object();
wlanadv.transrate="Transmission Rate";
wlanadv.transpower="Transmit Power";
wlanadv.full="Full";
wlanadv.halfmthree="Half (-3 dB)";
wlanadv.quartermsix="Quarter (-6 dB)";
wlanadv.eighth="Eighth (-9 dB)";
wlanadv.minimum="Minimum";
wlanadv.deffull="(Default: Full)";
wlanadv.antdiv="Antenna Diversity";
wlanadv.best="Best";
wlanadv.defbest="(Default: Best)";
wlanadv.frameburst="Frame Burst";
wlanadv.defburst="(Default: Enable)";
wlanadv.defdis="(Default: Disable)";
wlanadv.defdef="(Default: Default)";
wlanadv.beacon="Beacon Interval";
wlanadv.defbean="(Default: 100,Milliseconds, Range: 1 - 65535)";
wlanadv.dtim="DTIM Interval";
wlanadv.defdtim="(Default: 1, Range: 1 - 255)";
wlanadv.fraglength="Fragmentation Length";
wlanadv.deffrag="(Default:2346, Range: 256 - 2346)";
wlanadv.rtshelp="(Default:2347, Range: 0 - 2347)";
wlanadv.rts="RTS Threshold";
wlanadv.preamble="Preamble";
wlanadv.shortpreamble="Short Preamble";
wlanadv.longpreamble="Long Preamble";
wlanadv.deftransrate="(Default: Auto)";
wlanadv.protectmode="Protection Mode";
wlanadv.none="None";
wlanadv.always="Always";
wlanadv.protectrate="Protection Rate";
wlanadv.onembps="1 Mbps";
wlanadv.twombps="2 Mbps";
wlanadv.fpfmbps="5.5 Mbps";
wlanadv.elevmbps="11 Mbps";
wlanadv.protecttype="Protection Type";
wlanadv.ctsonly="CTS-only";
wlanadv.rtscts="RTS-CTS";
wlanadv.slottime="Short Slot Time";
wlanadv.apisolation="AP Isolation";
wlanadv.apisodef="(Default: Off)";
wlanadv.apisooff="Off";
wlanadv.apisoon="On";
wlanadv.def="Default";
wlanadv.all="All";
wlanadv.SES="Secure Easy Setup";

var wlanbutton = new Object();
wlanbutton.generate="Generate"
wlanbutton.editlist="Edit MAC Filter List";
wlanbutton.climacls="Wireless Client MAC List";
wlanbutton.updatels="Update Filter List";

//WIRELESS HELP
var hwireless = new Object();
hwireless.phase1="The <i>Wireless</i> screen allows you to customize data transmission settings. \
		 In most cases, the advanced settings on this screen should remain at their \
		 default values.";
hwireless.phase2="Authentication Type";
hwireless.phase3="The default is set to <b>Auto</b>, which allows either Open System or Shared Key \
    		 authentication to be used. For Open System authentication, the sender and \
    		 the recipient do NOT use a WEP key for authentication. For Shared Key \
    		 authentication, the sender and recipient use a WEP key for authentication. \
    		 If you want to use only Shared Key authentication, then select <b>Shared Key</b>.";
hwireless.phase4="The default setting is <b>Auto</b>. The range is from 1 to 54Mbps. ";
hwireless.phase5="The rate of data transmission should be set depending on the speed of your wireless \
    		 network. You can select from a range of transmission speeds, or keep the \
    		 default setting, <b>Auto</b>, to have the Router automatically use the \
    		 fastest possible data rate and enable the Auto-Fallback feature. \
    		 Auto-Fallback will negotiate the best possible connection speed between the \
    		 Router and a wireless client.";
hwireless.phase6="Basic Rate";
hwireless.phase7="The default value is set to <b>Default</b>.  Depending on the wireless mode you \
		 have selected, a default set of supported data rates will be selected. \
		 The default setting will ensure maximum compatibility with all devices. \
 		 You may also choose to enable all data rates by selecting <b>ALL</b>. \
		 For compatibility with older Wireless-B devices, select <b>1-2Mbps</b>.  ";
hwireless.phase8="The default value is set to <b>Disabled</b>. When set to <b>Auto</b>, \
		 a protection mechanism will ensure that your Wireless-B devices will connect to the Wireless-G Router \
		 when many Wireless-G devices are present.  However, performance of your Wireless-G devices may be decreased. ";
hwireless.phase9="The default value is <b>100</b>. Enter a value between 1 and 65,535 \
    		 milliseconds. The Beacon Interval value indicates the frequency interval of \
    		 the beacon. A beacon is a packet broadcast by the Router to synchronize the wireless network.";
hwireless.phase10="This value should remain at its default setting of <b>2347</b>. The range is 0-2347 bytes. ";
hwireless.phase11="Should you encounter inconsistent data flow, only minor modifications are recommended. \
    		 If a network packet is smaller than the preset RTS threshold size, the RTS/CTS \
    		 mechanism will not be enabled. The Router sends Request to Send (RTS) frames \
    		 to a particular receiving station and negotiates the sending of a data \
    		 frame. After receiving an RTS, the wireless station responds with a Clear to \
    		 Send (CTS) frame to acknowledge the right to begin transmission.";
hwireless.phase12="CTS Protection Mode";
hwireless.phase13="Fragmentation Threshold";
hwireless.phase14="This value should remain at its default setting of <b>2346</b>. The range is 256-2346 \
    		 bytes. It specifies the maximum size for a packet before data is fragmented \
    		 into multiple packets. If you experience a high packet error rate, you may \
    		 slightly increase the Fragmentation Threshold. Setting the Fragmentation \
    		 Threshold too low may result in poor network performance. Only minor  \
    		 modifications of this value are recommended.";
hwireless.phase15="The default value is <b>1</b>. This value, between 1 and 255 milliseconds, \
    		 indicates the interval of the Delivery Traffic Indication Message (DTIM). A \
    		 DTIM field is a countdown field informing clients of the next window for \
    		 listening to broadcast and multicast messages. When the Router has buffered \
    		 broadcast or multicast messages for associated clients, it sends the next \
    		 DTIM with a DTIM Interval value.&nbsp; Its clients hear the beacons and awaken to \
    		 receive the broadcast and multicast messages.";
hwireless.phase16="Wireless MAC Filters";
hwireless.phase17="The Wireless MAC Filters feature allows you to control which wireless-equipped \
    		 PCs may or may not communicate with the Router's depending on their MAC \
    		 addresses. To disable the Wireless MAC Filters feature, keep the default \
    		 setting, <b>Disable</b>. To set up a filter, click <b>Enable</b>, and follow \
    		 these instructions: ";
hwireless.phase18="If you want to block specific wireless-equipped PCs from communicating with the Router, \
    		 then keep the default setting, <b>Prevent PCs listed from accessing the \
    		 wireless network</b>. If you want to allow specific wireless-equipped PCs to  \
    		 communicate with the Router, then click the radio button next to <i>Permit \
    		 only PCs listed to access the wireless network</i>. ";
hwireless.phase19="Click the <b>Edit MAC Filter List</b> button. Enter the appropriate MAC addresses into the <i> \
    		 MAC</i> fields.";
hwireless.phase20="Note: For each MAC field, the MAC address should be entered in this format: \
    		 xxxxxxxxxxxx (the x's represent the actual characters of the MAC address).";
hwireless.phase21="Click the <b>Save Settings</b> button to save your changes. Click the <b>Cancel Changes</b> button to  \
    		 cancel your unsaved changes. Click the <b>Close</b> button to return to the  \
    		 <i>Advanced Wireless</i> screen without saving changes.";
hwireless.phase22="If you have Wireless-G and 802.11b devices in your network, then keep the default \
    		 setting, <b>Mixed</b>. If you have only Wireless-G devices, select <b>G-Only</b>. \
    		 If you want to disable wireless networking, select <b>Disable</b>. \
    		 If you would like to limit your network to only 802.11b devices, then select <b>B-Only</b>.";
hwireless.phase23="The SSID is the network name shared among all devices in a wireless network. The SSID \
    		 must be identical for all devices in the wireless network. It is \
    		 case-sensitive and must not exceed 32 alphanumeric characters, which may be \
    		 any keyboard character. Make sure this setting is the same for all devices \
    		 in your wireless network. For added security, Exploitlab recommends that you \
    		 change the default SSID (<b>exploitlab</b>) to a unique name of your choice.";
hwireless.phase24="SSID Broadcast";
hwireless.phase25="When wireless clients survey the local area for wireless networks to associate \
    		 with, they will detect the SSID broadcast by the Router. To broadcast the \
    		 Router SSID, keep the default setting, <b>Enable</b>. If you do not want \
    		 to broadcast the Router SSID, then select <b>Disable</b>.";
hwireless.phase26="Select the appropriate channel from the list provided to correspond with your network \
    		 settings, between 1 and 11 (in North America). All devices in your wireless \
    		 network must use the same channel in order to function correctly.";
hwireless.phase27="Check all the values and click <b>Save Settings</b> to save your settings. Click <b>Cancel \
		 Changes</b> to cancel your unsaved changes.";
hwireless.phase28="Check all the values and click <b>Save Settings</b> to save your settings. Click <b>Cancel \
		 Changes</b> to cancel your unsaved changes.";
hwireless.phase29="<b>Wireless Network Mode: </b> If you wish to exclude Wireless-G clients, choose <b>B-Only</b> \
		  Mode.  If you would like to disable wireless access, choose <b>Disable</b>.<br>";
hwireless.phase30="<b>Authentication Type: </b>You may choose from Auto or Shared Key.  Shared key authentication is \
		  more secure, but all devices on your network must also support Shared Key authentication.<br>";
hwireless.phase31="<b>Transmission Rate: </b>The default setting is Auto. The range is from 1 to 54Mbps. \
		  The rate of data transmission should be set depending on the speed of your wireless network. \
		  you can select from a range of transmission speeds, or keep the default setting, Auto, to have \
		  the Router automatically use the fastest possible data rate and enable the Auto-Fallback feature. \
		  Auto-Fallback will negotiate the best possible connection speed between the Router and a wireless client.";
hwireless.phase32="Your router is now accepting wireless clients. Please initiate the push button setup on your wireless client now. you will be returned to the previous screen when setup has been completed.";
hwireless.phase33="Your router is preparing the security parameters for the wireless security setup";
hwireless.phase34="Allows packet bursting which will increase overall network speed.";
hwireless.phase35="Creates a separate virtual network for your wireless network. When \
                   this feature is enabled, each of your wireless client will be in its own \
                   virtual network and will not be able to communicate with each other. \
                   You may want to utilize this feature if you have many guests that \
                   frequent your wireless network.";
hwireless.phase36="SES has been disabled! Please enable SES in the Advenced Setting.";
hwireless.phase37="SES can only be enabled when the Current Wireless Mode is set to Enabled.";
hwireless.phase38="Select the appropriate channel from the list provided to correspond with your network \
    		 settings, between 1 and ";
hwireless.phase39=". All devices in your wireless \
    		 network must use the same channel in order to function correctly.";

//Security Help
var helpwpa = new Object();
helpwpa.phase1="Wireless Security";
helpwpa.phase2="Security Settings";
helpwpa.phase3="The router supports four different types of security settings for your network. \
		<b>Wi-Fi Protected Access (WPA) Pre-Shared key, WPA Remote Access Dial In User Service (RADIUS), \
		RADIUS, and Wired Equivalent Privacy (WEP).";
helpwpa.phase4="To enable Security Settings, click the <b>Enable</b> radio button. Then click the <b>Edit \
    		Security Settings</b> button to configure the security settings. To disable security settings, \
    		keep the default setting, <b>Disable</b>.<br><br><b>WPA Pre-Shared Key: </b>There are two \
    		encryption options for WPA Pre-Shared Key, <b>TKIP</b> and <b>AES</b>.  TKIP stands for \
    		Temporal Key Integrity Protocol.  TKIP utilizes a stronger encrytption method and incorporates \
    		Message Integrity Code (MIC) to provide protection against hackers. AES stands for Advanced Encryption \
    		System, which utilizes a symmetric 128-Bit block data encryption.  <br><br>To use WPA Pre-Shared Key, \
    		enter a password in the <b>WPA Shared Key</b> field between 8 and 63 characters long.  You may also enter \
    		a <b>Group Key Renewal Interval</B> time between 600 and 7200 seconds.  <br><br><b>WPA RADIUS:</b> \
    		WPA RADIUS uses an external RADIUS server to perform user authentication.  To use WPA RADIUS, enter \
    		the IP address of the RADIUS server, the RADIUS Port (default is 1812) and the shared secret from \
    		the RADIUS server.<br><br><b>RADIUS:</b> RADIUS utilizes either a RADIUS server for authentication or \
    		WEP for data encryption.  To utilize RADIUS, enter the IP address of the RADIUS server and its shared \
    		secret.  Select the desired encryption bit (64 or 128) for WEP and enter either a passphrase or a manual \
    		WEP key.<br><br><b>WEP:</b> There are two levels of WEP encryption, 64-bit and 128-bit. \
    		The higher the encryption bit, the more secure your network, however, speed is sacrificed at \
    		higher bit levels.  To utilize WEP, select the desired encryption bit, and enter a passphrase or a \
    		WEP key in hexadecimal format.";
helpwpa.phase5="Check all the values and click <b>Save Settings</b> to save your settings. Click <b>Cancel \
		Changes</b> to cancel your unsaved changes. You can test the settings by connecting to the Internet. ";
helpwpa.phase6="<b>Security Mode: </b>You may choose from <b>Disable</b>, <b>WPA Personal</b>, <b>WPA Enterprise</b>, <b>WPA2 Personal</b>, <b>WPA2 Enterprise</b>, <b>RADIUS</b>, <b>WEP</b>.  \
		All devices on your network must use the same security mode in order to communicate.<br>";
helpwpa.phase7="<b>Security Mode:</b>  You may choose from <b>Disable</b>, <b>WEP</b>, \
                <b>WPA-Personal</b>, <b>WPA2-Personal</b>, <b>WPA-Enterprise</b>, \
                <b>WPA2-Enterprise</b>, or <b>RADIUS</b>.  All devices on your network must use \
                the same security mode in order to communicate.";
helpwpa.phase8="<b>WPA Algorithm:</b>  You may choose from TKIP or AES.";
helpwpa.phase9="<b>WPA Pre-Shared Key:</b>  Choose a unique key to authenticate with other devices on \
                your network.  The Pre-Shared Key must be between 8 and 63 characters in length.";
helpwpa.phase10="<b>Group Key Renewal:</b>  This settings determines how often your group key changes. ";
helpwpa.phase11="<b>WPA2 Algorithm:</b>  You may choose from AES or TKIP+AES.  Choose TKIP+AES if you \
                 have both WPA and WPA2 devices on your network.";
helpwpa.phase12="<b>WPA2 Pre-Shared Key:</b>  Choose a unique key to authenticate with other devices on \
                 your network.  The Pre-Shared Key must be between 8 and 63 characters in length.";
helpwpa.phase13="<b>Group Key Renewal:</b>  This settings determines how often your group key changes.";
helpwpa.phase14="<b>WPA Algorithm:</b>  You may choose from TKIP or AES.";
helpwpa.phase15="<b>RADIUS Server Address:</b>  The IP address of your RADIUS server.";
helpwpa.phase16="<b>RADIUS Server Port:</b>  The port your RADIUS server uses.";
helpwpa.phase17="<b>Shared Secret:</b>  The shared secret set on your RADIUS server.";
helpwpa.phase18="<b>Key Renewal Timeout:</b>  Determines how often your keys should be renewed.";
helpwpa.phase19="<b>WPA2 Algorithm:</b>  You may choose from AES or TKIP+AES.  Choose TKIP+AES if you \
                 have both WPA and WPA2 devices on your network.";
helpwpa.phase20="<b>RADIUS Server Address:</b>  The IP address of your RADIUS server.";
helpwpa.phase21="<b>RADIUS Server Port:</b>  The port your RADIUS server uses.";
helpwpa.phase22="<b>Shared Secret:</b>  The shared secret set on your RADIUS server.";
helpwpa.phase23="<b>Key Renewal Timeout:</b>  Determines how often your keys should be renewed.";
helpwpa.phase24="<b>Default Transmit Key:</b>  The key you would like to use for transmitting WEP keys.";
helpwpa.phase25="<b>WEP Key Bit:</b>  You may select from 64-Bit or 128-Bit encryption.";
helpwpa.phase26="<b>Passphrase:</b>  You may enter a passphrase consisting of any keyboard character to \
                 be used to generate a hex WEP key.  Passphrase option is only supported when \
                 you are only using Exploitlab devices on your network.";
helpwpa.phase27="<b>Key 1-4:</b>  You may enter a WEP key manually.  You must use only hex characters \
                 (0-9 and A-F).  64-Bit WEP requires 10 hex characters.  128-Bit WEP requires \
                 the use of 26 hex characters.";
helpwpa.phase28="<b>RADIUS Server Address:</b>  The IP address of your RADIUS server.";
helpwpa.phase29="<b>RADIUS Server Port:</b>  The port your RADIUS server uses.";
helpwpa.phase30="<b>Shared Secret:</b>  The shared secret set on your RADIUS server.";
helpwpa.phase31="<b>Default Transmit Key:</b>  The key you would like to use for transmitting WEP keys.";
helpwpa.phase32="<b>WEP Key Bit:</b>  You may select from 64-Bit or 128-Bit encryption.";
helpwpa.phase33="<b>Passphrase:</b>  You may enter a passphrase consisting of any keyboard character to \
                 be used to generate a hex WEP key.  Passphrase option is only supported when you \
                 are only using Exploitlab devices on your network.";
helpwpa.phase34="<b>Key 1-4:</b>  You may enter a WEP key manually.  You must use only hex characters \
                 (0-9 and A-F).  64-Bit WEP requires 10 hex characters.  128-Bit WEP requires the \
                 use of 26 hex characters.";

var hwlsta = new Object();
hwlsta.phase1="<b>MAC Address</b>. This is the Router's MAC Address, as seen on your local, wireless network.<br><br>\
	       <b>Mode</b>. As selected from the Wireless tab, this will display the wireless mode (Mixed, G-Only, or Disabled) used by the network.<br>";
