---
title:      'Blue'
date:       '2022-01-20'
tag:        'htb'
subtag1:    'Windows'
subtag2:    'CVE'
subtag3:    'Metasploit'
---

###### Blue is a retired easy-ranked Windows machine on HacktheBox.


### INFORMATION GATHERING

---
##### nmap scan

![nmap scan](/images/boxes/blue/nmap.png "nmap scan")
```bash
nmap -sC -sV -oA Blue 10.10.10.40
```
Here we discover:
- Windows 7 Professional 7601 Service Pack 1 OS

---
##### nmap vuln scan

![nmap vuln scan](/images/boxes/blue/nmap_vul_scan.png "nmap vuln scan")
```bash
nmap -p135,139,445 --script vuln 10.10.10.40
```
Here we discover:
- The machine is VULNERABLE to an exploit called _ms17-010_

---
##### exploit lookup

![exploit lookup](/images/boxes/blue/exploit_lookup.png "exploit lookup")
[https://www.rapid7.com/db/modules/exploit/windows/smb/ms17_010_eternalblue/](https://www.rapid7.com/db/modules/exploit/windows/smb/ms17_010_eternalblue/)


### EXPLOITATION

---
##### metasploit

![metasploit](/images/boxes/blue/msfconsole.png "metasploit")
```bash
search ms17-010
use 1
```
![metasploit options](/images/boxes/blue/exploit_options.png "metasploit options")

ready to exploit

---
##### exploited

![exploited](/images/boxes/blue/exploited.png "exploited")
running the exploit pops an administrator shell

### POST EXPLOITATION

---
##### exploration
![exploration](/images/boxes/blue/exploration.png "exploration")
we discover a user named _haris_

---
##### user.txt
![user flag](/images/boxes/blue/user_flag.png "user flag")
user flag was on the desktop of user _haris_

---
##### root.txt
![root flag](/images/boxes/blue/root_flag.png "root flag")
root flag was on the desktop of user _Administrator_

### SUMMARY

---
Blue is arguably the easiest box on HackTheBox and requires the use of a very well-known vulnerability, **Eternal Blue**, to immediately gain an elevated shell. It is a great introductory box for anyone interested in learning pentesting techniques as the barrier to entry is low, and the results are quick.
