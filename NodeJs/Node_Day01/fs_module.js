// var fs = require('fs');
// let dt = require('./expTest');
// fs.readFile('test.txt', function(err, data){
//     if(err){
//         console.log(err + dt.newDate())
//     }else{
//         console.log(data.toString() + ' ' + dt.newDate())
//     }
// })
// var fs = require('fs');

// fs.appendFile('test.txt', 'Hello content!', function (err, data) {
//   if (err) throw err;
//   console.log('Saved!' + data);
// });

// var fs = require('fs');

// fs.open('test2.txt',  function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });

var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});



fs.readFile('test1.txt', function(err, data){
    if(err) throw err;
    console.log('\n'+ data.toString())
})

let wordList = [
    'test word 1',
    'test word 2',
    'test word 3',
    'test Word 4',
    'Again and again'
];

function test(){
    for(let i=0; i<wordList; i++){
    fs.appendFile('test1.txt', `${wordList[i]}`, function(err){
    if(err) throw err;
    console.log('\nupdated, you can check now')
    });
}
}
test()
//to delete a module file
fs.unlink('mynewfile3.txt', function(err){
    if(err) throw err;
    console.log("The file has been deleted.");
})

//to rename a file
fs.rename('test.txt', 'checkingTest.md', function(err){
    if(err) throw err;
    console.log("It's renamed now");
})