#Importing scapy and regular expressions to use later for finding the ip address in the correct format.
import scapy.all as scapy
import re

#Regular expression for the correct IP address.
ip_address=re.compile("^(?:[0-9]{1,3}\.){3}[0-9]{1,3}/[0-9]*$")

#A loop to try and find out if the host is online (ARPing).
#If a valid IP address was entered the scapy arping() function will 
#create packets and will send them to the MAC address and then results will be displayed.
while True:
    ip_address=input("\nEnter the IP address you want to scan (ex 192.168.1.0/24): ")
    if ip_address.search(ip_address):
        print(f"{ip_address} IP address entered is valid.")
        break

results=scapy.arping(ip_address)