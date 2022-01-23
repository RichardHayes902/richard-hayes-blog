---
title:      'Legacy'
date:       '2022-01-23'
tag:        'htb'
subtag1:    'Windows'
subtag2:    'CVE'
subtag3:    'SMB'
---

###### Legacy is a retired easy-ranked Windows machine on HacktheBox.


### INFORMATION GATHERING

---
##### nmap scan

![nmap scan](/images/boxes/legacy/nmap.png "nmap scan")
```bash
nmap -sC -sV -Pn -oA Legacy 10.10.10.4
```
Here we discover:
- Windows XP (Windows 2000 LAN Manager)
- smb

---
##### nmap vuln scan

![nmap vuln scan](/images/boxes/legacy/nmap_vuln_scan.png "nmap vuln scan")
```bash
nmap --script smb-vuln* -p445 -Pn 10.10.10.4
```
Here we discover:
- The machine is VULNERABLE to an exploit called _ms17-010_
- The machine is VULNERABLE to an exploit called _ms08-067_

---
##### exploit lookup

![searchsploit](/images/boxes/legacy/searchsploit.png "searchsploit")
```bash
searchsploit ms08-067
```
We discover a Metasploit exploit (_16362.rb_)

### EXPLOITATION

---
##### metasploit

![metasploit](/images/boxes/legacy/msf_search.png "metasploit")
```bash
search MS08-067
use 0
```
![metasploit options](/images/boxes/legacy/msf_options.png "metasploit options")

ready to exploit

---
##### exploited

![exploited](/images/boxes/legacy/msf_exploit.png "exploited")
running the exploit pops an administrator shell

### POST EXPLOITATION

---
##### exploration
![exploration](/images/boxes/legacy/exploration.png "exploration")
we discover a user named _john_

---
##### user.txt
![user flag](/images/boxes/legacy/user_flag.png "user flag")
user flag was on the desktop of user _john_

---
##### root.txt
![root flag](/images/boxes/legacy/root_flag.png "root flag")
root flag was on the desktop of user _Administrator_

### SUMMARY

---
Legacy is one of the easiest Windows box on HackTheBox and only requires the use of a metasploit, to immediately gain an elevated shell. It is, like _Blue_, a great introductory box for anyone interested in learning pentesting techniques as the barrier to entry is low, and the results are quick.
