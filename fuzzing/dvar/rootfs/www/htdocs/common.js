var ie4 = ((navigator.appName == "Microsoft Internet Explorer") && (parseInt(navigator.appVersion) >= 4 ))
var ns4 = ((navigator.appName == "Netscape") && (parseInt(navigator.appVersion) < 6 ))
var ns6 = ((navigator.appName == "Netscape") && (parseInt(navigator.appVersion) >= 6 ))

// 0.0.0.0
var ZERO_NO = 1;	// 0x0000 0001
var ZERO_OK = 2;	// 0x0000 0010
// x.x.x.0
var MASK_NO = 4;	// 0x0000 0100
var MASK_OK = 8;	// 0x0000 1000
// 255.255.255.255
var BCST_NO = 16;	// 0x0001 0000
var BCST_OK = 32;	// 0x0010 0000

function choose_enable(en_object)
{
	if(!en_object)	return;
	en_object.disabled = false;			// netscape 4.x can not work, but 6.x can work

	if(!ns4)
		en_object.style.backgroundColor = "";	// netscape 4.x have error
}
function choose_disable(dis_object)
{
	if(!dis_object)	return;
	dis_object.disabled = true;

	if(!ns4)
		dis_object.style.backgroundColor = "#e0e0e0";
}
function check_action(I,N)
{
	if(ns4){	//ie.  will not need and will have question in "select"
		if(N == 0){
			if(EN_DIS == 1) I.focus();
			else I.blur();
		}
		else if(N == 1){
			if(EN_DIS1 == 1) I.focus();
			else I.blur();
		}
		else if(N == 2){
			if(EN_DIS2 == 1) I.focus();
			else I.blur();
		}
		else if(N == 3){
			if(EN_DIS3 == 1) I.focus();
			else I.blur();
		}
	}
}
function check_action1(I,T,N)
{
	if(ns4){	//ie.  will not need and will have question in "select"
		if(N == 0){
			if(EN_DIS == 1) I.focus();
			else I.value = I.defaultChecked;
		}
		if(N == 1){
			if(EN_DIS1 == 1) I.focus();
			else I.value = I.defaultChecked;
		}
	}
}
function valid_range(I,start,end,M,dfValue)
{
	M1 = unescape(M);
	isdigit(I,M1,dfValue);

	d = parseInt(I.value, 10);
	if ( !(d<=end && d>=start) )
	{
		I.value = dfValue;
		alert(M1 + errmsg.err14 + '[' + start + ' - ' + end +']');
		return false;
	}
	else
		I.value = d;	// strip 0
	return true;
}
function qos_bandwidth_valid_range(I,start,end,M,dfValue)
{
	M1 = unescape(M);
	isdigit(I,M1,dfValue);

	d = parseInt(I.value, 10);
	if ( !(d<=end && d>=start) )
	{
		I.value = dfValue;
		alert(M1 + errmsg.err14 + '[' + start + ' - ' + end +']');
		return false;
	}
	else
		I.value = d;	// strip 0
	return true;
}
function valid_mac(I,T,dfValue)
{
	var m1,m2=0;

	if(I.value.length == 1)
		I.value = "0" + I.value;
	m1 =parseInt(I.value.charAt(0), 16);
	m2 =parseInt(I.value.charAt(1), 16);
	if( isNaN(m1) || isNaN(m2) )
	{
		I.value = dfValue;
		alert(errmsg.err15);
	}
	I.value = I.value.toUpperCase();
	if(T == 0)
        {
		if((m2 & 1) == 1){
			I.value = dfValue;
			alert(errmsg.err16);
		}
        }
        return true
}
function valid_macs_12(I,dfValue){
	var m,m3,m4;
	if(I.value == "")
		return true;

	else if(I.value.length==12){
		for(i=0;i<12;i++){
			m=parseInt(I.value.charAt(i), 16);
			if( isNaN(m) )
				break;
		}
		if( i!=12 ){
			I.value = dfValue;
			alert(errmsg.err17);
		}
	}
	else{
		I.value = dfValue;
		alert(errmsg.err18);
	}
	I.value = I.value.toUpperCase();
	if(I.value == "FFFFFFFFFFFF"){
		I.value = dfValue;
		alert(errmsg.err19);
	}
	m3 = I.value.charAt(1);
	
	if(m3 == "B")
		m4 = 11;
	else if(m3 == "D")
		m4 = 13;
	else if(m3 == "F")
		m4 = 15;
	else
		m4 = m3;
	
	if((m4 & 1) == 1){
		I.value = dfValue;
		alert(errmsg.err16);
	}
	return true
}
function valid_macs_17(I,dfValue)
{
	oldmac = I.value;
	if(I.value.length < 17){
		I.value = dfValue;
		alert(errmsg.err18);
		return false;
	}
	var mac = ignoreSpaces(oldmac);
	if (mac == "")
	{
		return true;
	}
	var m = mac.split(":");
	if (m.length != 6)
	{
		I.value = dfValue;
		alert(errmsg.err21);
		return false;
	}
	var idx = oldmac.indexOf(':');
	if (idx != -1) {
		var pairs = oldmac.substring(0, oldmac.length).split(':');
		for (var i=0; i<pairs.length; i++) {
			nameVal = pairs[i];
			len = nameVal.length;
			if (len < 1 || len > 2) {
				I.value = dfValue;
				alert (errmsg.err22);
				return false;
			}
			for(iln = 0; iln < len; iln++) {
				ch = nameVal.charAt(iln).toLowerCase();
				if (ch >= '0' && ch <= '9' || ch >= 'a' && ch <= 'f') {
				}
				else {
					I.value = dfValue;
					alert (errmsg.err23 + nameVal + errmsg.err24 + oldmac);
					return false;
				}
			}
		}
	}
	I.value = I.value.toUpperCase();
	if(I.value == "FF:FF:FF:FF:FF:FF"){
		I.value = dfValue;
		alert(errmsg.err19);
	}
	m3 = I.value.charAt(1);
	
	if(m3 == "B")
		m4 = 11;
	else if(m3 == "D")
		m4 = 13;
	else if(m3 == "F")
		m4 = 15;
	else
		m4 = m3;
	
	if((m4 & 1) == 1){
		I.value = dfValue;
		alert(errmsg.err16);
	}
	return true;
}
function valid_macs_12_no_alert(I,dfValue){
	var m,m3,m4;
	if(I.value == "")
		return true;

	else if(I.value.length==12){
		for(i=0;i<12;i++){
			m=parseInt(I.value.charAt(i), 16);
			if( isNaN(m) )
				break;
		}
		if( i!=12 ){
			I.value = dfValue;
			return false;
		}
	}
	else{
		I.value = dfValue;
		return false;
	}
	I.value = I.value.toUpperCase();
	if(I.value == "FFFFFFFFFFFF"){
		I.value = dfValue;
		return false;
	}
	m3 = I.value.charAt(1);
	
	if(m3 == "B")
		m4 = 11;
	else if(m3 == "D")
		m4 = 13;
	else if(m3 == "F")
		m4 = 15;
	else
		m4 = m3;
	
	if((m4 & 1) == 1){
		I.value = dfValue;
		return false;
	}
	return true
}
function valid_macs_17_no_alert(I,dfValue)
{
	oldmac = I.value;
	if(I.value.length < 17){
		I.value = dfValue;
		return false;
	}
	var mac = ignoreSpaces(oldmac);
	if (mac == "")
	{
		return true;
	}
	var m = mac.split(":");
	if (m.length != 6)
	{
		I.value = dfValue;
		return false;
	}
	var idx = oldmac.indexOf(':');
	if (idx != -1) {
		var pairs = oldmac.substring(0, oldmac.length).split(':');
		for (var i=0; i<pairs.length; i++) {
			nameVal = pairs[i];
			len = nameVal.length;
			if (len < 1 || len > 2) {
				I.value = dfValue;
				return false;
			}
			for(iln = 0; iln < len; iln++) {
				ch = nameVal.charAt(iln).toLowerCase();
				if (ch >= '0' && ch <= '9' || ch >= 'a' && ch <= 'f') {
				}
				else {
					I.value = dfValue;
					return false;
				}
			}
		}
	}
	I.value = I.value.toUpperCase();
	if(I.value == "FF:FF:FF:FF:FF:FF"){
		I.value = dfValue;
		return false;
	}
	m3 = I.value.charAt(1);
	
	if(m3 == "B")
		m4 = 11;
	else if(m3 == "D")
		m4 = 13;
	else if(m3 == "F")
		m4 = 15;
	else
		m4 = m3;
	
	if((m4 & 1) == 1){
		I.value = dfValue;
		return false;
	}
	return true;
}
function ignoreSpaces(string) {
  var temp = "";

  string = '' + string;
  splitstring = string.split(" ");
  for(i = 0; i < splitstring.length; i++)
    temp += splitstring[i];
  return temp;
}
function valid_key(I,l){
	var m;
	if(I.value.length==l*2)	{
		for(i=0;i<l*2;i++){
			m=parseInt(I.value.charAt(i), 16);
			if( isNAN(m) )
				break;
		}
		if( i!=l*2 ){
			I.value = I.defaultValue;
			alert(errmsg.err25);
		}
	}
	else{
		I.value = I.defaultValue;
		alert(errmsg.err26);
	}
}
function valid_name(I,M,dfValue)
{
	isascii(I,M,dfValue);

	var bbb = I.value.replace(/^\s*/,"");
        var ccc = bbb.replace(/\s*$/,"");
        I.value = ccc;
}
function valid_srvname(I,M,dfValue)
{
	var len, ServiceNameLen;
	var bbb = I.value.replace(/^\s*/,"");
        var ccc = bbb.replace(/\s*$/,"");
        var str=dfValue;
        var AryData;
        var dfValue_tmp;
        
	AryData=str.split(",");
	dfValue_tmp=AryData[0];
        isascii(I,M,dfValue_tmp);
        I.value = ccc;
        ServiceNameLen = I.value.length;
        
        if(I.value == ""){
                I.value = dfValue_tmp;
                alert(errmsg.err72);
                return false;
        }
	else
	{
        	for(len=0; len<ServiceNameLen; len++){
			ch = I.value.charAt(len).toLowerCase();
			
			if (ch >= '0' && ch <= '9' || ch >= 'a' && ch <= 'z') {
			}
			else if (ch == '-' || ch == '_'){
			}
			else{
				I.value = dfValue_tmp;
				alert(errmsg.err87);
				return false;
			}
		}
	}
}
function valid_mask(F,N,flag){
	var match0 = -1;
	var match1 = -1;
	var m = new Array(4);

	for(i=0;i<4;i++)
		m[i] = eval(N+"_"+i).value;

	if(m[0] == "0" && m[1] == "0" && m[2] == "0" && m[3] == "0"){
		if(flag & ZERO_NO){
			alert(errmsg.err27);
			return false;
		}
		else if(flag & ZERO_OK){
			return true;
		}
	}

	if(m[0] == "255" && m[1] == "255" && m[2] == "255" && m[3] == "255"){
		if(flag & BCST_NO){
			alert(errmsg.err27);
			return false;
		}
		else if(flag & BCST_OK){
			return true;
		}
	}

	for(i=3;i>=0;i--){
		for(j=1;j<=8;j++){
			if((m[i] % 2) == 0)   match0 = (3-i)*8 + j;
			else if(((m[i] % 2) == 1) && match1 == -1)   match1 = (3-i)*8 + j;
			m[i] = Math.floor(m[i] / 2);
		}
	}
	if(match0 > match1){
		alert(errmsg.err27);
		return false;
	}
	return true;
}
function isdigit(I,M,dfValue)
{
	for(i=0 ; i<I.value.length; i++){
		ch = I.value.charAt(i);
		if(ch < '0' || ch > '9'){
			I.value = dfValue;
			alert(M + errmsg.err28);
			return false;
		}
	}
	return true;
}
function isascii(I,M,dfValue)
{
	for(i=0 ; i<I.value.length; i++){
		ch = I.value.charAt(i);
		if(ch < ' ' || ch > '~'){
			I.value = dfValue;
			alert(M + errmsg.err29);
			return false;
		}
	}
	return true;
}
function isxdigit(I,M,dfValue)
{
	for(i=0 ; i<I.value.length; i++){
		ch = I.value.charAt(i).toLowerCase();
		if(ch >= '0' && ch <= '9' || ch >= 'a' && ch <= 'f'){}
		else{
			I.value = dfValue;
			alert(M + errmsg.err30);
			return false;
		}
	}
	return true;
}
function closeWin(var_win){
	if ( ((var_win != null) && (var_win.close)) || ((var_win != null) && (var_win.closed==false)) )
		var_win.close();
}
function valid_ip(F,N,M1,flag){
	var m = new Array(4);
	M = unescape(M1);

	for(i=0;i<4;i++)
		m[i] = eval(N+"_"+i).value

	if(m[0] == 127 || m[0] == 224){
		alert(M+ errmsg.err31);
		return false;
	}

	if(m[0] == "0" && m[1] == "0" && m[2] == "0" && m[3] == "0"){
		if(flag & ZERO_NO){
			alert(M+ errmsg.err31);
			return false;
		}
	}

	if((m[0] != "0" || m[1] != "0" || m[2] != "0") && m[3] == "0"){
		if(flag & MASK_NO){
			alert(M+ errmsg.err31);
			return false;
		}
	}
	return true;
}
function valid_ip_gw(F,I,N,G)
{
	var IP = new Array(4);
	var NM = new Array(4);
	var GW = new Array(4);

	for(i=0;i<4;i++)
		IP[i] = eval(I+"_"+i).value
	for(i=0;i<4;i++)
		NM[i] = eval(N+"_"+i).value
	for(i=0;i<4;i++)
		GW[i] = eval(G+"_"+i).value

	for(i=0;i<4;i++){
		if((IP[i] & NM[i]) != (GW[i] & NM[i])){
			alert(errmsg.err32);
			return false;
		}
	}
	if((IP[0] == GW[0]) && (IP[1] == GW[1]) && (IP[2] == GW[2]) && (IP[3] == GW[3])){
		alert(errmsg.err33);
		return false;
	}

	return true;
}

function valid_ip1(F,N,M1,flag){
	var m = new Array(4);
	M = unescape(M1);

	for(i=0;i<4;i++)
		m[i] = eval(N+i).value

	if(m[0] == 127 || m[0] == 224){
		alert(M+ errmsg.err31);
		return false;
	}

	if(m[0] == "0" && m[1] == "0" && m[2] == "0" && m[3] == "0"){
		if(flag & ZERO_NO){
			alert(M+ errmsg.err31);
			return false;
		}
	}

	if((m[0] != "0" || m[1] != "0" || m[2] != "0") && m[3] == "0"){
		if(flag & MASK_NO){
			alert(M+ errmsg.err31);
			return false;
		}
	}
	return true;
}

function Capture(obj)
{
	document.write(obj);
}
