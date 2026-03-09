$(document).ready(function(){

let data = [
"Apple",
"Banana",
"Mango",
"Orange",
"Pineapple",
"Grapes",
"Watermelon",
"Papaya",
"Strawberry",
"Kiwi"
];

$("#searchBox").keyup(function(){

let value = $(this).val().toLowerCase();
$("#suggestionList").empty();

if(value !== ""){

let filtered = data.filter(function(item){
return item.toLowerCase().includes(value);
});

filtered.forEach(function(item){
$("#suggestionList").append("<li>"+item+"</li>");
});

}

});

});
