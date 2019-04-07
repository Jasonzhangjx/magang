var sheet = {
    1:123,
    2:456,
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

