

console.log(checkRegex('<span class="label label-success">27 Feb 2011</span>'));

function checkRegex(value){
    var regex = /([0-9]+\s[a-zA-Z]+\s[0-9]+)/g;
    var found = value.match(regex);
    console.log(found);
    var date = new Date(found);
    console.log(date);
    return found;
}