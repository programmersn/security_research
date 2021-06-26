//Basic Setup
var hsetup = new Object();
hsetup.phase1="The <i>Setup</i> \
		screen is the first screen you will see when accessing the Router. Most users  \
		will be able to configure the Router and get it working properly using only the \
		settings on this screen. Some Internet Service Providers (ISPs) will require  \
		that you enter specific information, such as User Name, Password, IP Address,  \
		Default Gateway Address, or DNS IP Address. This information can be obtained  \
		from your ISP, if required.";
hsetup.phase2="Note: After \
		you have configured these settings, you should set a new password for the Router  \
		using the <i>Security</i> screen. This will increase security, protecting the  \
		Router from unauthorized changes. All users who try to access the Router \
		web-based utility or Setup Wizard will be prompted for the Router's password.";
hsetup.phase3="Select the \
		time zone for your location. If your location experiences daylight savings, \
    		leave the checkmark in the box next to <i>Automatically adjust clock for \
    		daylight saving changes</i>.";
hsetup.phase4="MTU is the  \
    		Maximum Transmission Unit. It specifies the largest packet size permitted \
    		for Internet transmission. Keep the default setting, <b>Auto</b>, to have \
    		the Router select the best MTU for your Internet connection. To specify a \
    		MTU size, select <b>Manual</b>, and enter the value desired (default is <b> \
    		1400</b>).&nbsp; You should leave this value in the 1200 to 1500 range.";
hsetup.phase5="This entry is necessary for some ISPs and can be provided by them.";
hsetup.phase6="The Router supports four connection types:";
hsetup.phase7="Automatic Configuration DHCP";
hsetup.phase8="(Point-to-Point Protocol over Ethernet)";
hsetup.phase9="(Point-to-Point Tunneling Protocol)";
hsetup.phase10="These types can be selected from the drop-down menu next to Internet Connection. \
    		The information required and available features will differ depending on \
    		what kind of connection type you select. Some descriptions of this \
    		information are included here:";
hsetup.phase11="Internet IP Address and Subnet Mask";
hsetup.phase12="This is the Router's IP Address \
    		and Subnet Mask as seen by external users on the Internet (including your \
    		ISP). If your Internet connection requires a static IP address, then your \
    		ISP will provide you with a Static IP Address and Subnet Mask.";
hsetup.phase13="Your ISP will provide you with the Gateway IP Address."
hsetup.phase14="(Domain Name Server)";
hsetup.phase15="Your ISP will provide you with at least one DNS IP Address.";
hsetup.phase16="User name and Password";
hsetup.phase17="Enter the <b>User Name</b> and \
		<b>Password</b> you use when logging onto your ISP through a PPPoE or PPTP \
    		connection.";
hsetup.phase18="Connect on Demand";
hsetup.phase19="You can configure the Router to \
    		disconnect your Internet connection after a specified period of inactivity \
    		(Max Idle Time). If your Internet connection has been terminated due to \
    		inactivity, Connect on Demand enables the Router to automatically \
   		re-establish your connection as soon as you attempt to access the Internet \
   		again. If you wish to activate Connect on Demand, click the radio button. If \
    		you want your Internet connection to remain active at all times, enter <b>0</b> \
    		in the <i>Max Idle Time</i> field. Otherwise, enter the number of minutes \
    		you want to have elapsed before your Internet connection terminates.";
hsetup.phase20="Keep Alive Option ";
hsetup.phase21="This option keeps you connected \
    		to the Internet indefinitely, even when your connection sits idle. To use \
    		this option, click the radio button next to <i>Keep Alive</i>. The default \
    		Redial Period is 30 seconds (in other words, the Router will check the \
    		Internet connection every 30 seconds).";
hsetup.phase22="Note: Some \
    		cable providers require a specific MAC address for connection to the \
    		Internet. To learn more about this, click the <b>MAC Address Clone</b> tab. Then click \
    		the <b>More...</b> button, and read about the MAC Cloning feature.";

hsetup.phase25="This is\
    		the Router IP Address and Subnet Mask as seen on the internal LAN. The \
    		default value is 192.168.1.1 for IP Address and 255.255.255.0 for Subnet \
    		Mask.";
hsetup.phase26="DHCP";
hsetup.phase27="Keep the \
    		default, <b>Enable</b>, to enable the Router' DHCP server option. If you \
    		already have a DHCP server on your network or you do not want a DHCP server, \
    		then select <b>Disable</b>.";
hsetup.phase28="Enter a \
    		numerical value for the DHCP server to start with when issuing IP addresses. \
    		Do not start with 192.168.1.1 (the IP address of the Router).";
hsetup.phase29="Maximum Number of DHCP Users";
hsetup.phase30="Enter the \
    		maximum number of PCs that you want the DHCP server to assign IP addresses \
    		to. The absolute maximum is 253--possible if 192.168.1.2 is your starting IP \
    		address.";
hsetup.phase31="The Client \
    		Lease Time is the amount of time a network user will be allowed connection \
    		to the Router with their current dynamic IP address. Enter the amount of \
    		time, in minutes, that the user will be \"leased\" this dynamic IP address.";
hsetup.phase32="Static DNS 1-3 ";
hsetup.phase33="The Domain \
    		Name System (DNS) is how the Internet translates domain or website names \
    		into Internet addresses or URLs. Your ISP will provide you with at least one \
    		DNS Server IP Address. If you wish to utilize another, enter that IP Address \
    		in one of these fields. You can enter up to three DNS Server IP Addresses  \
    		here. The Router will utilize these for quicker access to functioning DNS  \
    		servers.";
hsetup.phase34="The Windows Internet Naming Service (WINS) manages each PC's interaction with \
    		the Internet. If you use a WINS server, enter that server's IP Address here. \
    		Otherwise, leave this blank.";
hsetup.phase35="Check all the \
		values and click <b>Save Settings</b> to save your settings. Click <b>Cancel \
		Changes</b> to \
		cancel your unsaved changes. You can test the settings by connecting to the  \
		Internet. ";
hsetup.phase36="(Layer 2 Tunneling Protocol)";
hsetup.phase37="<b>Host Name: </b>Enter the host name provided by your ISP.";
hsetup.phase38="<b>Domain Name: </b>Enter the domain name provided by your ISP.";
hsetup.phase39="<b>Local IP Address: </b>This is the address of the router.";
hsetup.phase40="<b>Subnet Mask: </b>This is the subnet mask of the router.";
hsetup.phase41="<b>DHCP Server: </b>Allows the router to manage your IP addresses.";
hsetup.phase42="<b>Starting IP Address: </b>The address you would like to start with.";
hsetup.phase43="<b>Time Setting: </b>Choose the time zone you are in. The router can also adjust automatically for daylight savings time.";
hsetup.phase44="<b>Automatic Configuration - DHCP: </b>This setting is most commonly used by Cable operators.<br><br>";
hsetup.phase45="<b>PPPoE: </b>This setting is most commonly used by DSL providers.<br><br>";
hsetup.phase46="<b>User Name: </b>Enter the user name provided by your ISP.<br><br>";
hsetup.phase47="<b>Password: </b>Enter the password provided by your ISP.<br>";
hsetup.phase48="<b>Static IP: </b>This setting is most commonly used by Business class ISP.<br><br>";
hsetup.phase49="<b>Internet IP Address: </b>Enter the IP address provided by your ISP.<br><br>";
hsetup.phase50="<b>Subnet Mask: </b>Enter your subnet mask<br>";
hsetup.phase51="<b>PPTP: </b>This setting is most commonly used by DSL providers.<br><br>";
hsetup.phase52="<b>Internet IP Address: </b>Enter the IP address provided by your ISP.<br>";
hsetup.phase53="<b>Subnet Mask: </b>Enter your subnet mask<br>";
hsetup.phase54="<b>Gateway: </b>Enter your ISP's gateway address<br>";
hsetup.phase55="<b>L2TP: </b>This setting is used by some ISP's in Europe.<br><br>";
hsetup.phase56="<b>Maximum number of DHCP Users: </b>You may limit the number of addresses your router hands out.<br>";
hsetup.phase57="<b>Telstra Cable: </b>This setting is most commonly used by DSL providers.<br><br>";

//DDNS
var helpddns = new Object();
helpddns.phase1="<b>DDNS Service: </b>DDNS allows you to access your network using domain names instead of IP addresses.  The service manages changing IP address and updates your domain information dynamically.  You must sign up for service through TZO.com or DynDNS.org.";
helpddns.phase2="DDNS Service";
helpddns.phase3="DDNS allows you to access your network using domain names instead of IP addresses. The service manages changing IP address and updates your domain information dynamically. You must sign up for service through TZO.com or DynDNS.org.";
helpddns.phase4="DynDNS.org";
helpddns.phase5="You must sign up for an account with DynDNS.org before you can use this service.";
helpddns.phase6="Enter the user name from DynDNS.org";
helpddns.phase7="Enter the password from DynDNS.org";
helpddns.phase8="Enter your host name. This should be in the format of name.dyndns.org.";
helpddns.phase9="Your current IP address.";
helpddns.phase10="Your DDNS status.";
helpddns.phase11="TZO.com";
helpddns.phase12="You must sign up with TZO.com before you can use this service.";
helpddns.phase13="Enter the email address you used to register with TZO.com";
helpddns.phase14="Enter your TZO.com password.";
helpddns.phase15="Enter your TZO.com domain name.";
helpddns.phase16="Your TZO.com status.";
helpddns.phase17="FREE TRAIL";
helpddns.phase18="Manage";
helpddns.phase19="Subscription";
helpddns.phase20="Support/ Tutorials";

var hddns2 = new Object();
hddns2.right1="Click <b><a target=_blank href=../exploitlab.tzo.com/default.htm>here</a></b> to SIGNUP with a <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TZO FREE TRIAL ACCOUNT";
hddns2.right2="Click <b><a target=_blank href=../https@controlpanel.tzo.com/default.htm>here</a></b> to Manage your <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TZO Account";
hddns2.right3="Click <b><a target=_blank href=../https@www.tzo.com/cgi-bin/Orders.cgi@ref=exploitlab>here</a></b> to Purchase a <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TZO DDNS Subscription";
hddns2.right4="TZO DDNS <b><a target=_blank href=../exploitlab.tzo.com/default.htm><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Support/Tutorials</a></b>";

//MAC Address Clone
var helpmac =  new Object();
helpmac.phase1="MAC Cloning";
helpmac.phase2="The Router's MAC address is a 12-digit code assigned to a unique piece of \
    		hardware for identification. Some ISPs require that you register the MAC \
    		address of your network card/adapter, which was connected to your cable or \
    		DSL modem during installation. If your ISP requires MAC address \
    		registration, find your adapter's MAC address by following the \
    		instructions for your PC's operating system.";
helpmac.phase3="For Windows 98 and Millennium:";
helpmac.phase4="1.  Click the <b>Start</b> button, and select <b>Run</b>.";
helpmac.phase5="2.  Type <b>winipcfg </b>in the field provided, and press the <b>OK </b>key.";
helpmac.phase6="3.  Select the Ethernet adapter you are using.";
helpmac.phase7="4.  Click <b>More Info</b>.";
helpmac.phase8="5.  Write down your adapter's MAC address.";
helpmac.phase9="1.  Click the <b>Start</b> button, and select <b>Run</b>.";
helpmac.phase10="2.  Type <b>cmd </b>in the field provided, and press the <b>OK </b>key.";
helpmac.phase11="3.  At the command prompt, run <b>ipconfig /all</b>, and look at your adapter's physical address.";
helpmac.phase12="4.  Write down your adapter's MAC address.";
helpmac.phase13="To clone your network adapter's MAC address onto the Router and avoid calling your \
    		ISP to change the registered MAC address, follow these instructions:";
helpmac.phase14="For Windows 2000 and XP:";
helpmac.phase15="1.  Select <b>Enable</b>.";
helpmac.phase16="2.  Enter your adapter's MAC address in the <i>MAC Address</i> field.";
helpmac.phase17="3.  Click the <b>Save Settings </b>button.";
helpmac.phase18="To disable MAC address cloning, keep the default setting, <b>Disable</b>.";
helpmac.phase19="<b>MAC Address Clone: </b>Some ISP will require you to register your MAC address.  If you do not wish to re-register your MAC address, you can have the router clone the MAC address that is registered with your ISP.";
//Advance Routing
var hrouting = new Object();
hrouting.phase1="Routing";
hrouting.phase2="On the <i>Routing</i> screen, you can set the routing mode and settings of the Router. \
		 Gateway mode is recommended for most users.";
hrouting.phase3="Choose the correct working mode. Keep the default setting, <b> \
    		 Gateway</b>, if the Router is hosting your network connection to the Internet (Gateway mode is recommended for most users). Select <b> \
    		 Router </b>if the Router exists on a network with other routers.";
hrouting.phase4="Dynamic Routing (RIP)";
hrouting.phase5="Note: This feature is not available in Gateway mode.";
hrouting.phase6="Dynamic Routing enables the Router to automatically adjust to physical changes in \
    		 the network layout and exchange routing tables with other routers. The \
    		 Router determines the network packets route based on the fewest number of \
    		 hops between the source and destination. ";
hrouting.phase7="To enable the Dynamic Routing feature for the WAN side, select <b>WAN</b>. \
    		 To enable this feature for the LAN and wireless side, select <b>LAN &amp; Wireless</b>. \
    		 To enable the feature for both the WAN and LAN, select <b> \
    		 Both</b>. To disable the Dynamic Routing feature for all data transmissions, keep the \
    		 default setting, <b>Disable</b>. ";
hrouting.phase8="Static Routing,&nbsp; Destination IP Address, Subnet Mask, Gateway, and Interface";
hrouting.phase9="To set up a static route between the Router and another network, \
    		 select a number from the <i>Static Routing</i> drop-down list. (A static \
    		 route is a pre-determined pathway that network information must travel to \
    		 reach a specific host or network.)";
hrouting.phase10="Enter the following data:";
hrouting.phase11="Destination IP Address </b>- \
		  The Destination IP Address is the address of the network or host to which you want to assign a static route.";
hrouting.phase12="Subnet Mask </b>- \
		  The Subnet Mask determines which portion of an IP address is the network portion, and which \
    		  portion is the host portion. ";
hrouting.phase13="Gateway </b>- \
		  This is the IP address of the gateway device that allows for contact between the Router and the network or host.";
hrouting.phase14="Depending on where the Destination IP Address is located, select \
    		  <b>LAN &amp; Wireless </b>or <b>WAN </b>from the <i>Interface</i> drop-down menu.";
hrouting.phase15="To save your changes, click the <b>Apply </b>button. To cancel your unsaved changes, click the <b> \
    		  Cancel </b>button.";
hrouting.phase16="For additional static routes, repeat steps 1-4.";
hrouting.phase17="Delete This Entry";
hrouting.phase18="To delete a static route entry:";
hrouting.phase19="From the <i>Static Routing</i> drop-down list, select the entry number of the static route.";
hrouting.phase20="Click the <b>Delete This Entry </b>button.";
hrouting.phase21="To save a deletion, click the <b>Apply </b>button. To cancel a deletion, click the <b> \
    		  Cancel </b>button. ";
hrouting.phase22="Show Routing Table";
hrouting.phase23="Click the \
    		  <b>Show Routing Table </b>button to view all of the valid route entries in use. The Destination IP address, Subnet Mask, \
    		  Gateway, and Interface will be displayed for each entry. Click the <b>Refresh </b>button to refresh the data displayed. Click the <b>Close </b> \
    		  button to return to the <i>Routing</i> screen.";
hrouting.phase24="Destination IP Address</b> - \
		  The Destination IP Address is the address of the network or host to which the static route is assigned. ";
hrouting.phase25="Subnet Mask</b> - \
		  The Subnet Mask determines which portion of an IP address is the network portion, and which portion is the host portion.";
hrouting.phase26="Gateway</b> - This is the IP address of the gateway device that allows for contact between the Router and the network or host.";
hrouting.phase27="Interface</b> - This interface tells you whether the Destination IP Address is on the \
    		  <b> LAN &amp; Wireless </b>(internal wired and wireless networks), the <b>WAN</b> (Internet), or <b> \
    		  Loopback</b> (a dummy network in which one PC acts like a network-necessary for certain software programs). ";
hrouting.phase28="<b>Operating Mode: </b>If the router is hosting your Internet connection, select <b>Gateway</b> mode.  If another router exists on your network, select <b>Router</b> mode.";
hrouting.phase29="<b>Select Set Number: </b>This is the unique route number, you may set up to 20 routes.";
hrouting.phase30="<b>Route Name: </b>Enter the name you would like to assign to this route.";
hrouting.phase31="<b>Destination LAN IP: </b>This is the remote host to which you would like to assign the static route."
hrouting.phase32="<b>Subnet Mask: </b>Determines the host and the network portion.";

//Firewall
var hfirewall = new Object();
hfirewall.phase1="Block WAN Request";
hfirewall.phase2="By enabling the Block WAN Request feature, you can prevent your network from \
    		 being \"pinged,\" or detected, by other Internet users. The Block WAN Request \
    		 feature also reinforces your network security by hiding your network ports. \
    		 Both functions of the Block WAN Request feature make it more difficult for \
    		 outside users to work their way into your network. This feature is enabled \
    		 by default. Uncheck to disable this feature.";
hfirewall.phase3="Enable this option if you do not wish to receive multicast traffic that is sometime sent by your ISP.";
hfirewall.phase4="This feature uses Port Forwarding to prevent access to local servers from your local networked computers.";
hfirewall.phase5="Prevents outside intruders from attacking the router through the internet using service port 113.&nbsp; Select Enable to prevent attack through this service port.&nbsp; However, some applications may require this service port to be available. If needed, uncheck to allow those applications to work";

//VPN
var helpvpn = new Object();
helpvpn.phase1="VPN Pass-Through";
helpvpn.phase2="Virtual Private Networking (VPN) is typically used for work-related networking. For \
    		VPN tunnels, the Router supports IPSec Pass-Through and PPTP Pass-Through.";
helpvpn.phase3="<b>IPSec</b> - Internet Protocol Security (IPSec) is a<b> </b>suite of protocols used to implement \
      		secure exchange of packets at the IP layer. To allow IPSec tunnels to pass \
      		through the Router, IPSec Pass-Through is enabled by default. To disable \
      		IPSec Pass-Through, uncheck the box next to <i>IPSec</i>.";
helpvpn.phase4="<b>PPTP </b>- Point-to-Point Tunneling Protocol is the method used to enable VPN \
      		sessions to a Windows NT 4.0 or 2000 server. To allow PPTP tunnels to pass \
      		through the Router, PPTP Pass-Through is enabled by default. To disable \
      		PPTP Pass-Through, uncheck the box next to <i>PPTP</i>.";
helpvpn.phase5="You may choose to enable PPTP, L2TP of IPSec passthrough to allow your network devices to communicate via VPN.";
//Internet Access
var hfilter = new Object();
hfilter.phase1="Filters";
hfilter.phase2="The <i>Filters</i> screen allows you to block or allow specific kinds of Internet \
		usage. You can set up Internet access policies for specific PCs and set up \
		filters by using network port numbers.";
hfilter.phase3="This feature allows you to customize up to ten different Internet Access Policies \
    		for particular PCs, which are identified by their IP or MAC addresses. For \
    		each policy designated PCs, during the days and time periods specified.";
hfilter.phase4="To create or edit a policy, follow these instructions:";
hfilter.phase5="Select the policy number \(1-10\) in the drop-down menu.";
hfilter.phase6="Enter a name in the <i>Enter Profile Name</i> field.";
hfilter.phase7="Click the <b>Edit List of PCs</b> button.";
hfilter.phase8="Click the <b>Apply</b> button to save your changes. Click the <b>Cancel</b> button to \
    		cancel your unsaved changes. Click the <b>Close</b> button to return to the \
    		<i>Filters</i> screen.";
hfilter.phase9="If you want to block the listed PCs from Internet access during the designated days and \
    		time, then keep the default setting, <b>Disable Internet Access for Listed \
    		PCs</b>. If you want the listed PCs to be able to access the Internet during \
    		the designated days and time, then click the radio button next to<i> Enable \
    		Internet Access for Listed PCs</i>.";
hfilter.phase10="On the <i>List of PCs</i> screen, specify PCs by IP address or MAC address. Enter the  \
    		appropriate IP addresses into the <i>IP</i> fields. If you have a range of \
    		IP addresses to filter, complete the appropriate <i>IP Range</i> fields. \
    		Enter the appropriate MAC addresses into the <i>MAC</i> fields.";
hfilter.phase11="Set the time when access will be filtered. Select <b>24 Hours</b>,<b> </b>or check the box next to <i>From</i> \
    		and use the drop-down boxes to designate a specific time period. ";
hfilter.phase12="Set the days when access will be filtered. Select <b>Everyday</b> or the appropriate days of the week. ";
hfilter.phase13="Click the <b>Add to Policy</b> button to save your changes and active it.";
hfilter.phase14="To create or edit additional policies, repeat steps 1-9.";
hfilter.phase15="To delete an Internet Access Policy, select the policy number, and click the <b>Delete</b> button.";
hfilter.phase16="To see a summary of all the policies, click the <b>Summary</b> button. The <i> \
    		Internet Policy Summary</i> screen will show each policy number, Policy \
    		Name, Days, and Time of Day. To delete a policy, click its box, and then \
    		click the <b>Delete</b> button. Click the <b>Close</b> button to return to \
    		the <i>Filters</i> screen.";
hfilter.phase17="<b>Blocked Services:</b> You may choose to block access to certain services. Click <b>Add/Edit </b> Services to modify these settings.";
hfilter.phase18="Website Blocking by URL";
hfilter.phase19="You can block access to certain websites by entering their URL.";
hfilter.phase20="<b>Website Blocking by Keyword:</b> You can block access to certain website by the keywords contained in their webpage.";
hfilter.phase21="<b>Internet Access Policy: </b>You may define up to 10 access policies.  Click <b>Delete</b> to delete a policy or <b>Summary</b> to see a summary of the policy.";
hfilter.phase22="<b>Status: </b>Enable or disable a policy.";
hfilter.phase23="<b>Policy Name: </b>You may assign a name to your policy.";
hfilter.phase24="Policy Type:";
hfilter.phase25="<b>Policy Type: </b>Choose from Internet Access or Inbound Traffic.";
hfilter.phase26="<b>Days: </b>Choose the day of the week you would like your policy to be applied.";
hfilter.phase27="<b>Times: </b>Enter the time of the day you would like your policy to apply.";
hfilter.phase28="You may choose to block access to certain services. Click Add/Edit Services to modify these settings.";
hfilter.phase29="You can block access to certain website by the keywords contained in their webpage.";

//Port Forward
var hforward =  new Object();
hforward.phase1="Port Forwarding";
hforward.phase2="The <i>Port Range Forwarding</i> screen sets up public services on your network, such as web \
		servers, ftp servers, e-mail servers, or other specialized Internet \
		applications. (Specialized Internet applications are any applications that use \
		Internet access to perform functions such as videoconferencing or online gaming. \
		Some Internet applications may not require any forwarding.) ";
hforward.phase3="When users send this type of request to your network via the Internet, the Router will \
		forward those requests to the appropriate PC. Any PC whose port is being \
		forwarded must have its DHCP client function disabled and must have a new static \
		IP address assigned to it because its IP address may change when using the DHCP function.";
hforward.phase4="Customized Applications";
hforward.phase5="Enter the name of the public service or other Internet application in the field provided.";
hforward.phase6="External Port";
hforward.phase7="Enter the numbers of the External Ports (the port numbers seen by users on the Internet).";
hforward.phase8="TCP Protocol";
hforward.phase9="Click this checkbox if the application requires TCP.";
hforward.phase10="UDP Protocol";
hforward.phase11="Click this checkbox if the application requires UDP.";
hforward.phase12="Enter the IP Address of the PC running the application.";
hforward.phase13="Click the <b>Enable </b>checkbox to enable port forwarding for the application.";
hforward.phase14="<b>Port Range Forwarding: </b>Certain applications may require to open specific ports \
		  in order for it to function correctly.  Examples of these applications include servers and certain \
		  online games.  When a request for a certain port comes in from the Internet, the router \
		  will route the data to the computer you specify.  Due to security concerns, you may want to limit port \
		  forwarding to only those ports you are using, and uncheck the <b>Enable</b> checkbox after you are finished.<br>";

var hptrigger = new Object();
hptrigger.phase1="<b>Port Triggering:</b><br><b>Application</b> Enter the application name of the trigger. <b>Triggered Range</b> \
		 For each application, list the triggered port number range.  Check with the Internet application \
		 documentation for the port number(s) needed.<b>Start Port</b> Enter the starting port number of the Triggered Range. \
		<b>End Port</b> Enter the ending port number of the Triggered Range.  <b>Forwarded Range</b> For each application, \
		list the forwarded port number range.  Check with the Internet application documentation for the port number(s) needed. \
		<b>Start Port</b> Enter the starting port number of the Forwarded Range.  <b>End Port</b> Enter the ending port number of the Forwarded Range.";

//DMZ
var helpdmz = new Object();
helpdmz.phase1="The DMZ hosting feature allows one local user to be exposed to the Internet for use \
		of a special-purpose service such as Internet gaming or videoconferencing. \
		DMZ hosting forwards all the ports at the same time to one PC. The Port \
    		Forwarding feature is more secure because it only opens the ports you want \
    		to have opened, while DMZ hosting opens all the ports of one computer, \
    		exposing the computer so the Internet can see it. ";    		
helpdmz.phase2="Any PC whose port is being forwarded must have its DHCP client function disabled \
    		and should have a new static IP address assigned to it because its IP  \
    		address may change when using the DHCP function.";
helpdmz.phase3="1.  To expose one PC, select <b>Enable</b>.";
helpdmz.phase4="2.  Enter the computer's IP address in the <i>DMZ Host IP Address</i> field.";
helpdmz.phase5="3.  Click the <b>Save Settings</b> button.";
helpdmz.phase6="<b>DMZ: </b>Enabling this option will expose your router to the Internet.  All ports will be accessible from the Internet<br>";

//Management Help
var helpmgt = new Object();
helpmgt.phase1="The <i>Management</i> screen allows you to change the Router's security settings. It is \
		strongly recommended that you change the factory default password of the Router, \
		which is <b>admin</b>. All users who try to access the Router's web-based \
		utility or Setup Wizard will be prompted for the Router's password.";
helpmgt.phase2="The new Password must not exceed 32 characters in length and must not include any \
    		spaces. Enter the new Password a second time to confirm it.";
helpmgt.phase3="This feature allows you to manage your Router from a remote location, via the \
   		Internet.&nbsp; To disable this feature, keep the default setting, <b>Disable</b>. \
    		To enable this feature, select<b> Enable</b>, and use the specified port \
    		(default is <b>8080</b>) on your PC to remotely manage the Router. You must \
    		also change the Router's default password to one of your own, if you haven \
    		already. A unique password will increase security.";
helpmgt.phase4="To remotely manage the Router, enter <b>http://xxx.xxx.xxx.xxx:8080</b> (the \
    		x's represent the Router's Internet IP address, and 8080 represents the \
    		specified port) in your web browser's <i>Address</i> field. You will be \
    		asked for the Router's password. After successfully entering the password, \
    		you will be able to access the Router's web-based utility.";
helpmgt.phase5="Note: If the Remote Management feature is enabled, anyone who knows the Router's \
    		Internet IP address and password will be able to alter the Router's settings.";
helpmgt.phase6="<b>Local Router Access: </b>You can change the Router's password from here. Enter \
		a new Router password and then type it again in the Re-enter to confirm field to confirm.<br><br>\
		<b>Web Access: </b>Allows you to configure access options to the router's web utility.<br>";
helpmgt.phase7="<b>Remote Router Access: </b>Allows you to access your router remotely.  Choose the port you \
		would like to use.  You must change the password to the router if it is still using its default password.<br><br>";
helpmgt.phase8="<b>UPnP: </b>Used by certain programs to automatically open ports for communication.<br>";
helpmgt.phase9="Used by certain programs to automatically open ports for communication.";

//Log Help
var helplog = new Object();
helplog.phase1="Log Help";
helplog.phase2="The Router can keep logs of all incoming or outgoing traffic for your Internet \
    		connection. To keep activity logs, select <b>Enable</b>. To see a temporary \
    		log of the Router's most recent incoming traffic, click the <b>Incoming \
    		Access Log</b> button. To see a temporary log of the Router's most recent \
    		outgoing traffic, click the <b>Outgoing Access Log</b> button.";
helplog.phase3="You may enable or disable the use of <b>Incoming</b> and <b>Outgoing</b> logs by selecting the appropriate radio button.<br>";

var helpdiag = new Object();
helpdiag.phase1="<b>Ping Test: </b>Enter the IP address or domain name you would like to ping and click the Ping button.<br><br><br><br>\
		<b>Traceroute: </b>Enter the IP address or domain name you would like to trace, then click the Traceroute button<br>";

//Facdef Help
var hfacdef = new Object();
hfacdef.phase1="Factory Defaults";
hfacdef.phase2="Click the <b>Yes</b> button to reset all configuration settings to their default  \
    		values, and then click the<b> Save Settings</b> button. Note: Any settings you have  \
    		saved will be lost when the default settings are restored. This feature is \
    		disabled by default.";
hfacdef.phase3="This will reset all settings back to factory defaults.  All of your settings will be erased.<br>";

//Upgrade Help
var hupgrade = new Object();
hupgrade.phase1="Click the <b>Upgrade </b>button to load new firmware onto the Router. New firmware \
    		 versions are posted at<i> www.exploitlab.com</i> and can be downloaded for \
    		 free. If the Router is not experiencing difficulties, then there is no need  \
    		 to download a more recent firmware version, unless that version has a new \
    		 feature that you want to use.";
hupgrade.phase2="Note: When you upgrade the Router's firmware, you may lose its configuration \
    		 settings, so make sure you write down the Router settings before you  \
    		 upgrade its firmware.";
hupgrade.phase3="To upgrade the Router's firmware:";
hupgrade.phase4="Download the firmware upgrade file from the Exploitlab website.";
hupgrade.phase5="Extract the firmware upgrade file.";
hupgrade.phase6="Click the <b>Upgrade</b> button.";
hupgrade.phase7="On the <i>Firmware Upgrade</i> screen, click the <b>Browse</b> button to find the firmware upgrade file.";
hupgrade.phase8="Double-click the firmware upgrade file.";
hupgrade.phase9="Click the <b>Upgrade</b> button, and follow the on-screen instructions.";
hupgrade.phase10="Note: Do not power off the Router or press the Reset button while the firmware is being upgraded.";
hupgrade.phase11="Click on the browse button to select the firmware file to be uploaded to the router.<br><br>";
hupgrade.phase12="Click the Upgrade button to begin the upgrade process.  Upgrade must not be interrupted.<br>";

var hbkconfig = new Object();
hbkconfig.phase1="You may backup your current configuration in case you need to reset the router back to its factory default settings.";
hbkconfig.phase2="You may click the Back up button to backup your current configuration.";
hbkconfig.phase3="Click the Browse button to browse for a configuration file that is currently saved on your PC.";
hbkconfig.phase4="Click Restore to overwrite all current configurations with the ones in the configuration file.";

//Status Help
var hstatus = new Object();
hstatus.phase1="The <i>Status</i> screen displays the Router's current status and configuration. All information is read-only.";
hstatus.phase2="This is the Router's current firmware.";
hstatus.phase3="This shows the time, as you set on the Setup Tab.";
hstatus.phase4="If required by your ISP, this would have been entered on the Setup Tab.";
hstatus.phase5="If required by your ISP, this would have been entered on the Setup Tab.";
hstatus.phase6="This is the Router's MAC Address, as seen on your local, Ethernet network.";
hstatus.phase7="This shows the Router's IP Address, as it appears on your local, Ethernet network.";
hstatus.phase8="If you are using the Router as a DHCP server, that will be displayed here.";
hstatus.phase9="Wireless, 2.4GHz, 54g, Wireless-G";
hstatus.phase10="This is the Router's MAC Address, as seen on your local, wireless network.";
hstatus.phase11="As selected from the Wireless tab, this will display the wireless mode (Mixed, G-Only, or Disabled) used by the network.";
hstatus.phase12="As entered on the Wireless tab, this will display the wireless network name or SSID.";
hstatus.phase13="As entered on the Wireless tab, this will display the channel on which your wireless network is broadcasting.";
hstatus.phase14="As selected on the Security Tab, this will display what type of encryption the Router uses for security.";
hstatus.phase15="The MAC Address of the Internet interface is displayed here.";
hstatus.phase16="The current Internet connection type is displayed here.";
hstatus.phase17="IP Address, Subnet Mask, and Default Gateway";
hstatus.phase18="The Internet IP Address, Subnet Mask, and Default Gateway IP Address of the \
    		Router, as seen by external users on the Internet, are displayed here.";
hstatus.phase19="The DNS (Domain Name System) IP Addresses currently used by the Router are shown \
    		here. Multiple DNS IP settings are common. In most cases, the first available DNS entry is used.";
hstatus.phase20="Click the <b>DHCP Release</b> button to delete the Router's current Internet IP address.";
hstatus.phase21="Click the <b>DHCP Renew</b> button to get a new Internet IP address for the Router.";
hstatus.phase22="Click the <b>Refresh</b> button to refresh the Router's status and settings.";
hstatus.phase23="<b>Firmware Version. </b>This is the Router's current firmware.<br><br>\
		<b>Current Time. </b>This shows the time, as you set on the Setup Tab.<br><br>\
		<b>MAC Address. </b>This is the Router's MAC Address, as seen by your ISP.<br><br>\
		<b>Router Name. </b>This is the specific name for the Router, which you set on the Setup Tab.<br>";
hstatus.phase24="<b>Configuration Type. </b>This shows the information required by your ISP for connection to the Internet. \
		This information was entered on the Setup Tab. You can <b>Connect</b> or <b>Disconnect</b> your connection \
		here by clicking on that button.<br>";
hstatus.phase25="This is the Router's MAC Address, as seen by your ISP.";
hstatus.phase26="This is the specific name for the Router, which you set on the Setup Tab.";
hstatus.phase27="When the Router is using a Subnet Mask, it is shown here.";
hstatus.phase28="Start IP Address";
hstatus.phase29="For the range of IP Addresses used by devices on your local, Ethernet network, the beginning of that range is shown here.";
hstatus.phase30="End IP Address";
hstatus.phase31="For the range of IP Addresses used by devices on your local, Ethernet network, the end of that range is shown here.";
hstatus.phase32="DHCP Clients Table";
hstatus.phase33="Clicking this button will open a screen to show you which PCs are utilizing the Router as a DHCP server. You can \
		delete PCs from that list, and sever their connections, by checking a Delete box and clicking the Delete button.";
hstatus.phase34="<b>MAC Address</b>. This is the Router's MAC Address, as seen on your local, Ethernet network.<br><br>\
		<b>IP Address</b>. This shows the Router's IP Address, as it appears on your local, Ethernet network.<br><br>\
		<b>Subnet Mask</b>. When the Router is using a Subnet Mask, it is shown here.<br><br>\
		<b>DHCP Server</b>. If you are using the Router as a DHCP server, that will be displayed here.<br>";

//share of help string
var hshare = new Object();
hshare.phase1="Check all the values and click <b>Save Settings</b> to save your settings. Click the <b>Cancel \
		Changes</b> button to cancel your unsaved changes.";
hshare.phase2="LAN";
hshare.phase3="IP Address and Subnet Mask";

var hqos=new Object();
hqos.phase1="Two types of Quality of Service features are available, Wired QoS which controls devices plugged in to the router with a Ethernet cable, and Wireless QoS, which control devices that are wirelessly connected to the router.";
hqos.phase2="Wired QoS";
hqos.phase3="<b>Device Priority :</b>  You may specify priority for all traffic from a device on your network by giving the device a Device Name, specifying priority and entering its MAC address.";
hqos.phase4="<b>Ethernet Port Priority :</b> You may control your data rate according to which physical LAN port your device is plugged into. You may assign High or Low priority to data traffic from devices connected on LAN ports 1 through 4.";
hqos.phase5="<b>Application Priority :</b> You may control your data rate with respect to the application that is consuming bandwidth. Check <b>Optimize Gaming Applications</b> to automatically allow common game application ports to have a higher priority.  You may customize up to eight applications by entering the port number they use.";
hqos.phase6="Wireless QoS";
hqos.phase7="Wireless QoS is also referred to as <b>Wi-Fi MultiMediaTM (WMM) </b> by the Wi-Fi AllianceTM. Select Enable to utilize WMM if you are using other wireless devices that are also WMM certified.";
hqos.phase8="<b>No Acknowledgement :</b>  Enable this option if you would like to disable acknowledgement.  If this option is enabled, the router will not re-send data if an error occurs.";

var hsymc=new Object();
hsymc.phase1="Exiled";
hsymc.phase2="Restoring your computer to the network";
hsymc.phase3="Your computer will \
      remain exiled on an isolated network until you restore Norton Internet \
      Security protection settings using Outbreak Alert. You can protect your \
      computer by using the Norton Internet Security main window or an Outbreak \
      Alert notification. ";
hsymc.phase4="To protect your computer in the Norton Internet Security main window";
hsymc.phase5="1. In the main window, click Outbreak Alert.";
hsymc.phase6="2. In the lower-right corner, click Protect Me Now.";
hsymc.phase7="3. In the Outbreak Alert dialog box, click OK.";
hsymc.phase8="To protect your computer from an Outbreak Alert notification";
hsymc.phase9="1. In the notification, click Protect Me.";
hsymc.phase10="2. In the Outbreak Alert dialog box, click OK.";
hsymc.phase11="Has a threat attacked my computer?";
hsymc.phase12="If your computer is not protected against a detected threat, this \
        does not necessarily mean that the threat has attacked your computer. \
        Outbreak Alert is designed to help you protect your computer before \
        rapidly spreading threats affect it.";
hsymc.phase13="Outbreak Alert ";
hsymc.phase14="Your router \
      is equipped with the ability to work together with Norton Internet \
      Security to ensure the security of your network. Outbreak Alert \
      Enforcement will allow the router to place computers that are infected \
      with viruses or computers that are not up to date in its firewall or virus \
      definitions into exile and out of your network. This will prevent the \
      compromised computers from infecting other computers on your network. In \
      order to fully utilize this feature, please install Norton Internet \
      Security on every PC that is connected to the router. A copy of Norton \
      Internet Security with 60-days of free virus and firewall definition \
      updates is included with the router. Please insert the CD that is included \
      with the router to install Norton Internet Security. ";
hsymc.phase15="This field \
      will show up after you enable Outbreak Alert Enforcement. This field \
      displays the devices that are currently on your network. The Host field \
      displays the computer name. The IP field indicates the IP address that is \
      assigned to the device. The MAC field displays the unique Media Access \
      Control (MAC) address of the device. The Up to Date field indicates \
      whether or not the device is up to date in its virus and firewall \
      definitions. Check the Ignore checkbox if you would like to exclude the \
      device from Outbreak Alert Enforcement. Please be advised, if you choose \
      to ignore the device, it can possibly cause an outbreak on your network if \
      it becomes infected or compromised.";
hsymc.phase16="This field \
      will show up after you enable Outbreak Alert Enforcement. This field \
      displays devices that are part of the network, but are not active. The \
      Host field displays the computer name. The IP field indicates the IP \
      address that is assigned to the device. The MAC field displays the unique \
      Media Access Control (MAC) address of the device. The Up to Date field \
      indicates whether or not the device is up to date in its virus and \
      firewall definitions. Check the Ignore checkbox if you would like to \
      exclude the device from Outbreak Alert Enforcement. Please be advised, if \
      you choose to ignore the device, it can possibly cause an outbreak on your \
      network if it becomes infected or compromised.";
hsymc.phase17="Network Devices in Exile";
hsymc.phase18="This field \
      will show up after you enable Outbreak Alert Enforcement. This field \
      displays the devices that are currently exiled from your network. The Host \
      field displays the computer name. The IP field indicates the IP address \
      that is assigned to the device. The MAC field displays the unique Media \
      Access Control (MAC) address of the device. The Reason field displays the \
      reason code that caused this device to be exiled from the network. Please \
      see the Reason code table below for an explanation";
hsymc.phase19="Reason Code";
hsymc.phase20="<B>Reason 1: </B>Out of date virus definitions. Your computer has \
      been exiled from the network because Norton Internet Security virus \
      definitions are out of date. To return your computer to the network, run \
      Symantec LiveUpdate.";
hsymc.phase21="<B>Reason 2: </B>IDS out of date. Your computer has been exiled from \
      the network because Norton Internet Security Intrusion Detection \
      signatures are out of date. To return your computer to the network, run \
      Symantec LiveUpdate.";
hsymc.phase22="<B>Reason 4: </B>One or more IDS signatures are missing. Your \
      computer has been exiled from the network because Norton Internet Security \
      is missing an Intrusion Detection signature. To return your computer to \
      the network, uninstall and then reinstall Norton Internet Security. ";
hsymc.phase23="<B>Reason 8: </B>One or more IDS signatures are excluded. Your \
      computer has been exiled from the network because one or more Norton \
      Internet Security Intrusion Detection signatures have been excluded. To \
      return your computer to the network, include all Intrusion Detection \
      signatures. ";
hsymc.phase24="<B>Reason 16: </B>Firewall disabled. Your computer has been exiled \
      from the network because the Norton Internet Security Personal Firewall is \
      turned off. To return your computer to the network, turn on the Personal \
      Firewall. ";
hsymc.phase25="<B>Reason 32: </B>IDS disabled. Your computer has been exiled from \
      the network because Norton Internet Security Intrusion Detection is turned \
      off. To return your computer to the network, turn on Intrusion Detection.";
hsymc.phase26="<B>Reason 64: </B>AutoProtect disabled. Your computer has been \
      exiled from the network because Norton AntiVirus AutoProtect is turned \
      off. To return your computer to the network, turn on AutoProtect.";
