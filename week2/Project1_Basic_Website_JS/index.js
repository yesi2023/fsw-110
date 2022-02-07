// Javascript navbar below, conlcludes of Home, Next, Contact, index and Blog. 

var x = document.createElement("NAV");
    
var anchorElmnt = document.createElement("A");
anchorElmnt.setAttribute("href", "#");
var home = document.createTextNode(" Home ");
anchorElmnt.append(home);
x.append(anchorElmnt);


var nav = document.createElement("A");
nav.setAttribute("href", "#");
var Next = document.createTextNode(" Next ")
nav.append(Next);
x.append(nav);

var nav2 = document.createElement("A");
nav2.setAttribute("href", "#");
var contact = document.createTextNode(" Contact ")
nav2.append(contact);
x.append(nav2);
    
var nav3 = document.createElement("A");
nav3.setAttribute("href", "#");
var index = document.createTextNode(" index ")
nav3.append(index);
x.append(nav3);

var nav4 = document.createElement("A");
nav4.setAttribute("href", "#");
var blog = document.createTextNode(" Blog ")
nav4.append(blog);
x.append(nav4);

document.body.append(x);


// My H1 Tag 

var h1 = document.createElement('h1');
h1.textContent = 'What is the Document Object Model?';
document.body.append(h1);


// My Paragraph Tag

var p = document.createElement('p');
p.textContent = 'The Document Object Model (DOM) is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each  node is an object representing a part of the document. The DOM represents a document with a logical tree. Each branch of the tree ends in a node, and each node contains objects. DOM methods allow programmatic access to the tree; with them one can change the structure, style or content of a document. Nodes can have event handlers attached to them. Once an event is triggered, the event handlers get executed.';
document.body.append(p);


// This is what i created for A "list". 

var x = document.createElement('ul');
var y = document.createElement('li');
y.textContent = 'Standards';
x.append(y)

var r = document.createElement('li');
r.textContent = 'Applications';
x.append(r)

var s = document.createElement('li');
s.textContent = 'Implementations';
x.append(s)
document.body.append(x);

    
// My Footer 

var foot = document.createElement('footer');
foot.textContent = 'FOOTER';
document.body.append(foot);

var myRights = document.createElement("rights");
myRights.textContent = ' Copyright 2022 | All Rights Reserved '
document.body.append(myRights);