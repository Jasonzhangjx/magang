var sheet = {
    20180101:345.86,
    20180102:368.21,
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
    document.getElementById("predict").innerHTML = "预测结果为" + <font color="#33CC00"> predict(key) </font>
}

