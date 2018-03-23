function test() {
    var comArray = new Array();
    var str = "SELECT" +
        "repository_name," +
        "repository_description," +
        "repository_language," +
        "repository_created_at" +
        "FROM [bigquery-public-data:samples.github_timeline]" +
        "WHERE" +
        "repository_language = '{language default=\"Java\" values=\"Java,PHP,Ruby,C++\" type=\"select\"}' AND " +
        "TIMESTAMP(repository_created_at)" +
        "between TIMESTAMP('{dateFrom default=\"2012-03-01\"}') AND TIMESTAMP('{dateTo default=\"2012-04-10\" type=\"datetime\"}')" +
        "LIMIT {limit_val default=\"10\" pattern=\"^[0-9]+$\" type=\"input\"}";
    var s1 = mySplit(new String(str), new String("where"))[1];
    var s2 = mySplit(new String(s1), new String("and"));
    for (var i = 0; i < s2.length; i++) {
        var s3 = mySplit(new String(s2[i]), new String("LIMIT "));
        if(s3 && s3.length > 0){
            s2.push(s3[1]);
        }
        console.log(s2[i]);
        try {
            var myCom = new MyCom();
            myCom.name = s2[i].match(/{([^\"]*) /) != null ? s2[i].match(/{([^\"]*) /)[1] : "";
            myCom.defaultValue = s2[i].match(/ default=\"([^\"]*)\"/) != null ? s2[i].match(/ default=\"([^\"]*)\"/)[1] : "";

            var type = s2[i].match(/ type=\"([^\"]*)\"/);
            if (type && type != null) {
                myCom.type = type[1];
            }
            myCom.other = s2[i].match(/ values=\"([^\"]*)\"/) != null ? s2[i].match(/ values=\"([^\"]*)\"/)[1] : "";
            console.log(myCom);
            comArray.push(myCom);
        } catch (e) {
            console.log(e.stack);
        }
    }
    renderToTest($('#test'), comArray);

}

function renderToTest(dom, coms) {
    $.each(coms, function (index, value) {
        if (value.name && value.name != "") {
            $(dom).append(parseCom(value));
        }
    });
}

function parseCom(com) {
    var str = "";
    switch (com.type) {
        case "select":
            str = com.name + " : <select>";
            var vs = com.other.split(',');
            $.each(vs, function (i, v) {
                if (v == com.defaultValue) {
                    str += "<option value ='" + v + "' selected='selected'>" + v + "</option>";
                } else {
                    str += "<option value ='" + v + "'>" + v + "</option>"
                }
            })
            str += "type='text' value=' " + com.defaultValue + "'";
            str += "</select><br/>";
            break;
        case "input":
            str = "<input ";
            str = com.name + " : " + str;
            str += "type='text' value=' " + com.defaultValue + "'";
            str += "/><br/>";
            break;
        case "datetime":
            str = "<input ";
            str = com.name + " : " + str;
            str += "type='date' value='" + com.defaultValue + "'";
            str += "/><br/>";
            break;

        default:
            break;
    }
    return str;
}

function mySplit(str, spStr) {
    var result;
    if (str.indexOf(spStr.toLowerCase()) > -1) {
        result = str.split(spStr.toLowerCase());
    } else if (str.indexOf(spStr.toUpperCase()) > -1) {
        result = str.split(spStr.toUpperCase());
    }
    return result;
}

function MyCom() {
    this.type = "input";
}

//启动项目
$(test);