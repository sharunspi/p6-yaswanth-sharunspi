# When a user enters an URL in the browser, how does the browser fetch the desired result ?

![internet](https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)

Just like a mail receiving to your address , internet is having it's own way to send and recieve data . Just like your address ,resources in internet is also having thier own address.  

When u enter the website url in the browser these are the steps happening behind
1. Find the location in which the website is hosted
2. Make request to ther server to get the required data
3. Send request to get specific page
4. Handle response send by the server 
5. Render whatever the content send by server in to the browser

Let's discuss each step

## 1. Find the location in which the website is hosted
All the resources connect to internet is having it's own address . When we enter a url in the browser we are actually searching for a machine in which all the files realted to the website is stored. for example the address of the machine will br 12.12.12.12 , this i hard to remember and there are lacks of websites in the world. To solve this issue we are using urls. DNS is the one who help us in this citauion .DNS stands for Domain Name System, is like a directory contaning all the urls and it's ips. DNS will drive us to the correct ip address . 

## 2. Make request to ther server to get the required data
Now we know where is the data is located . In this step we ask the server about our requirement . Server will check for the data inside thier machine and send to our machine
## 3.  Send request to get specific page
 This step is similar to the 2 but, here we are checking specific source inside a server like a /about page of a website, Server will check for the page and send us the data, if the data is not there it will send us a not found error
## 4. Handle response send by the server 
In this case all the data send from the server will reach to our machine . This will include html, css, js, svg, and image files . Now we actually need to parse the data and combine it and show in a meaningful way. All these steps are handled by our browser.Browser have seperate parsers for handling this
## 5. Render whatever the content send by server in to the browser
Render is the time were we see the content in a browser . for parsing HTML,CSS and JS. there are parser and interpreters . These tools parse the data and show in browser . 

## Other topics
These are so many points , we have to dicuss , something like security, protocols, SSL, server side rendering and client side rendering 
 

 

















## Reference
1. https://aws.amazon.com/blogs/mobile/what-happens-when-you-type-a-url-into-your-browser/

2.  