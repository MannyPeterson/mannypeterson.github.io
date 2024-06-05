function key() {
    str = 's9545p86s2193on9445o52p4pq5sr42r';
    input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
    index = x => input.indexOf(x);
    translate = x => index(x) > -1 ? output[index(x)] : x;
    return str.split('').map(translate).join('');
}