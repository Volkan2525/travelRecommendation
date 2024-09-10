const fetch = require('fetch');

var stxt = document.getElementById("searchtext");
var sbutton = document.getElementById("searchbutton");
document.getElementById("searchbutton").addEventListener('click',search);

function search(){;
    console.log(stxt.value);
}