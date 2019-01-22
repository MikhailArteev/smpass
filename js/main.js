// Вырезать и копировать в буффер с помощью JavaScript



// Генератор паролей

function generate_plain() {
    var pass = "";
    var strong = 8;
    var dic = "123456789BCDFGHJKLMNPQRSTVWXYZ";

    for (var i = 0; i < strong; i++)
    {
        pass += dic.charAt(Math.floor(Math.random() * dic.length));
    }
    document.getElementById('random').innerHTML = pass;
}

function generatep_safe() {
    var pass = "";
    var strong = 10;
    var dic = "123456789BCDFGHJKLMNPQRSTVWXYZabcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < strong; i++)
    {
        pass += dic.charAt(Math.floor(Math.random() * dic.length));
    }
    document.getElementById('random').innerHTML = pass;
}

function generatep_ultra() {
    var pass = "";
    var strong = 15;
    var dic = "123456789BCDFGHJKLMNPQRSTVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+";

    for (var i = 0; i < strong; i++)
    {
        pass += dic.charAt(Math.floor(Math.random() * dic.length));
    }
    document.getElementById('random').innerHTML = pass;
}
