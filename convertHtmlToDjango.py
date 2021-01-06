import sys, os, re

def add_dj(ngo):
	return "{% static '" + ngo + "' %}"



yaju = ""
html = ""
with open(sys.argv[1], "r") as f:
	html = f.read()
	html = '{% load static %}\n\n' + html 

	mainjs = re.findall("main.*?js", html)[0]
	runtjs = re.findall("runtime.*?js", html)[0]
	plofjs = re.findall("polyfills.*?js", html)[0]
	csscss = re.findall('href="styles.*?css"', html)[0]
	vendor = re.findall("vendor.*?js", html)
	vendor = vendor[0] if len(vendor) > 0 else "vendorvendorvendororororororro"
	csscss = csscss.replace("href=","").replace('"', "")

	main2 = add_dj(mainjs)
	runt2 = add_dj(runtjs)
	plof2 = add_dj(plofjs)
	css2 = add_dj(csscss)
	vendor2 = add_dj(vendor)
	
	html = html.replace(mainjs, main2)
	html = html.replace(runtjs, runt2)
	html = html.replace(plofjs, plof2)
	html = html.replace(csscss, css2)
	html = html.replace(vendor, vendor2)

	print(mainjs)
	print(runtjs)
	print(plofjs)
	print(csscss)
	print(vendor)

with open(sys.argv[1], "w") as f:
	f.write(html)