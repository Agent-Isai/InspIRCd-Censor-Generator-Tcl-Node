//InspIRCd-Censor-Generator.js Created by AlphaTech
//Fill out this configuration to get started!

//Set this to "file" to load a file. var this to "http" to load an HTTP or HTTPS document.
var type = "http";

//var this to the document or webpage to use.
var file = "http://www.bannedwordlist.com/lists/swearWords.txt";

//var this to what to replace the bad words with.
var replace = "<CENSORED>";

//DON'T EDIT BELOW! - DON'T EDIT BELOW! - DON'T EDIT BELOW! - DON'T EDIT BELOW! - DON'T EDIT BELOW! - DON'T EDIT BELOW! - DON'T EDIT BELOW! - DON'T EDIT BELOW!
//DON'T EDIT BELOW! - DON'T EDIT BELOW! - DON'T EDIT BELOW! - DON'T EDIT BELOW! - DON'T EDIT BELOW! - DON'T EDIT BELOW! - DON'T EDIT BELOW! - DON'T EDIT BELOW!
//DON'T EDIT BELOW! - DON'T EDIT BELOW! - DON'T EDIT BELOW! - DON'T EDIT BELOW! - DON'T EDIT BELOW! - DON'T EDIT BELOW! - DON'T EDIT BELOW! - DON'T EDIT BELOW!

function validateText(str) {
    if (str.indexOf("http://") == 0) {
        return 0;
    } else if (str.indexOf("https://") == 0) {
		return 1;
	} else {
		return 2;
	}
}

function cb(content, replace) {
	console.log("#Censor.conf for InspIRCd");
	console.log("\n#This file was generated by InspIRCd Censor Generator by AlphaTech");
	console.log("\n#Check out https://github.com/AlphaT3ch/InspIRCd-Censor-Generator-Node for more information\n");
	content.forEach(function(entry) {
		console.log("\n<badword text=\""+entry+"\" replace=\""+replace+"\">");
	});
}

if ($type == "http") {
	var httpType = validateText($file);
	if ($httpType == 0)
		var http = require('http');
		http.get($file, function (res) {
			var body = '';
			res.on('data', function(chunk) { body += chunk; });
			res.on('end', function() { cb(body, replace); });
        });
	} else if ($httpType == 1) {
		var https = require('https');
		https.get($file, function (res) {
			var body = '';
			res.on('data', function(chunk) { body += chunk; });
			res.on('end', function() { cb(body, replace); });
        });
	}
} else if ($type == "file") {
	fs = require('fs')
	fs.readFile($file, 'utf8', function (err,data) {
		cb(data, replace);
	});
}
