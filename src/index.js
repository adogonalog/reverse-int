module.exports = function reverse (n) {
    let array;
    let reversed;
    let string;
    let joined;
    let result;
    let subresult='';


    string = n.toString().replace('-','');
    array = string.split('');
    reversed = array.reverse();
    joined = reversed.join('');

    return joined;
  }
  