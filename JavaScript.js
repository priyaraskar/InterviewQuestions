var reversedArray = "";
var inputValue = "The food is hot";
var array = [];
array = inputValue.split(' ');

jQuery.each(array, function (index, value) {
    for (var i = value.length - 1; i >= 0; i--) { //for each character
        reversedArray += value[i];
    }
    reversedArray += " ";
});
//$("#txtValue").value = reversedArray;
console.log(reversedArray);