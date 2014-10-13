dependencies
------------

To get the pages to render install some rubygems, run webgen and then open firefox:

```bash
autoproj osdeps .
webgen
...
firefox out/index.html
```

additional notes
----------------

Installing the rubygems from Debian repositories didn't work:

```bash
$ sudo apt-get install webgen0.5 ruby-coderay ruby-kramdown
$ webgen
Starting webgen...
Updating tree...
...done in 0.8345 seconds
Writing changed nodes...
An error has occurred:
  Error while rendering </changelog/index.en.html>:
    wrong number of arguments (1 for 2)
```

With:

```bash
$ apt-cache policy webgen0.5 ruby-coderay ruby-kramdown
webgen0.5:
  Installed: 0.5.14+dfsg1-3
  Candidate: 0.5.14+dfsg1-3
  Version table:
 *** 0.5.14+dfsg1-3 0
        500 http://ftp.de.debian.org/debian/ wheezy/main amd64 Packages
        100 /var/lib/dpkg/status
ruby-coderay:
  Installed: 1.1.0-2
  Candidate: 1.1.0-2
  Version table:
 *** 1.1.0-2 0
        990 http://ftp.de.debian.org/debian/ jessie/main amd64 Packages
        400 http://ftp.de.debian.org/debian/ unstable/main amd64 Packages
        100 /var/lib/dpkg/status
     1.0.6-2 0
        500 http://ftp.de.debian.org/debian/ wheezy/main amd64 Packages
ruby-kramdown:
  Installed: 1.4.1-1
  Candidate: 1.4.1-1
  Version table:
 *** 1.4.1-1 0
        990 http://ftp.de.debian.org/debian/ jessie/main amd64 Packages
        400 http://ftp.de.debian.org/debian/ unstable/main amd64 Packages
        100 /var/lib/dpkg/status
     0.13.7-2 0
        500 http://ftp.de.debian.org/debian/ wheezy/main amd64 Packages
```
