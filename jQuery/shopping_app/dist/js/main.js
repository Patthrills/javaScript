let fruitList = ["Persimmon","Strawberry","Banana","Tomato","Pear","Durian","Blackberry","Lingonberry","Kiwi","Lychee","Pineapple",
"Fig","Gooseberry","Passionfruit","Plum","Orange","GreenApple","Raspberry","Watermelon","Lemon","Mango","Blueberry","Apple","Guava",
"Apricot","Papaya","Melon","Tangerine","Pitahaya","Lime","Pomegranate","Dragonfruit","Grape","Morus","Feijoa","Avocado","Kiwifruit",
"Cranberry","Cherry","Peach","Jackfruit","Horned Melon","Hazelnut","Pomelo","Mangosteen"];

$(document).ready(function(){
    // autocomplete search
    $('#search').autocomplete({
        source: fruitList,
        minLength: 2
    }),

    $('#btn').click(function(){
        let search = $('#search').val();
        let expr = new RegExp(search, "i");
        $.getJSON('test.json', function(data){
            $.each(data, function(key, value){
                if(value.search(expr) != -1){
                    console.log(valusearch("mango"))
                    // $('#result').append(`
                    // <div class="flex justify-between content-evenly">
                    // <p class="block">${value.name}</p>
                    // <p class="block italic">${value.family}</p>
                    // </div>
                    // `)
                }
            })
        })
    })
})
$.getJSON('fruits.json', function(data){console.log(data.mango)})