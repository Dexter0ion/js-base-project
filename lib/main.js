function main() {

    var bottles = 99;
    var tempString = '';
    while (bottles > 1) {
        tempString += bottles + 'bottles of beer on the wall, ' + bottles + ' bottles of beer.\n';
        bottles -= 1;
        tempString += 'Take one down and pass it around, ' + bottles + ' bottles of beer on the wall.\n';
    }
    tempString +=
        '1 bottle of beer on the wall, 1 bottle of beer.\n' +
        'Take one down and pass it around, no more bottles of beer on the wall.\n' +
        'No more bottles of beer on the wall, no more bottles of beer.\n' +
        'Go to the store and buy some more, 99 bottles of beer on the wall.';

    console.log(tempString);


}

module.exports = main;
