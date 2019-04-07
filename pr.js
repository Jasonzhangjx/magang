var sheet = {
    1:345.86,
    2:368.21,
    3:756
};

function predict(key)
{
    v = sheet[key];
    return v;
}

function appe()
{
    var key = document.getElementById("key").value;
    document.getElementById("predict").innerHTML = "预测结果为" + predict(key)
}

