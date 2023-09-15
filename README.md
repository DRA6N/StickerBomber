![](https://i.imgur.com/yaiiEhN.png)

This is a pretty simple to use Stickerbomb maker. Download the code and follow the instructions below. It may seem daunting but trust me, it is really easy!

### Follow these easy steps to use the Stickerbomber!
------------
### Getting your list of images
- After you have downloaded the source, put the images you want to use to stickerbomb with, in the** img/logos** folder
- Navigate back to the main folder, Open CMD in this folder.
	- in the address bar in the explorer window, type in "CMD"
- Run the command `dir /b > list.txt`
	- This will create a list of all the images in your logos folder, called list.txt
- Open the txt file and remove "list.txt" from the list. Save.

### Formatting your list
- Go to https://www.browserling.com/tools/prefix-suffix-lines
- Paste your list into the first box
**Set the following:**
	- **Prefix String:** `"img/logos/`
	- **Suffix:** `",`
- Go to the last line and remove `"img/logos/",`
- Remove the comma `,` at the end of the very last line *after* you perform the previous step.
- Click Copy to Clipboard

### Adding your formatted list to the code
- Open main.js (located in the js folder) in a text editor like notepad++ or VS code. You could even use notepad if you feel froggy. 
- Find the area that looks like this:
```javascript
var imgUrls = [
// Paste your list between these lines:
//------------------------------------------------------------

//------------------------------------------------------------
];
```

- Paste your formatted list between those lines, it should look like:
```javascript
var imgUrls = [
// Paste your list between these lines:
//------------------------------------------------------------
"img/logos/example1.png",
"img/logos/example2.png",
"img/logos/example3.png"
//------------------------------------------------------------
];
```

**Note:** the last line does *not* have a comma `,` at the end!
- If you're still here with me, Save and run index.html
	- Save your newly generated stickerbomb image! (Right Click > Save Image As)
