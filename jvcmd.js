var subbtn = document.getElementById("sub");
var inp = document.getElementById("inp");
var resp = document.getElementById("res");

const cmd = {};
var msg = null;

var help_list = {
    crt: "Create variable; /ctr [string]"
};

cmd.crt = (str) => {
    var buv = [];
    if (str == "") {
        msg = "Create variable; /ctr [string]";
    } else {
        if (str != "List") {
            let(str);//未知是否会报错（待验证）
        } else {
            // 闲置待设
        }
    }
};

cmd.help = (typ) => {
    if (typ == "") {
        msg = "/help [type]";
    } else if (help_list[typ] == undefined) {
        msg = "Not help found for " + typ + "!";
    } else {
        msg = help_list[typ];
    }
};

subbtn.addEventListener('click', () => {

    var inp_cmd = null;
    inp_cmd = inp.value;
    inp.value = '';

    if (inp_cmd[0] == "/") {
        if (inp_cmd[inp_cmd.length - 1] != " ") {
            inp_cmd = inp_cmd + " ";
        }
        let cmd_top = inp_cmd.slice(1, inp_cmd.indexOf(" "));// 指令头获取;
        let cmd_a = inp_cmd.split(" ");
        let cm_list = [];
        let cmd_str = null;
        for (var i = 1; i < cmd_a.length; i++) {
            cm_list.push(cmd_a[i]);
        }
        cm_list.pop();
        cmd_str = String(cm_list);

        if (cmd[cmd_top] != undefined) {
            cmd[cmd_top](cmd_str);
        } else {
            msg = "'" + cmd_top + "' is not command!";
        }
        // msg = cmd_str;
        let res_msg = document.createElement("p");
        let txt = document.createTextNode("<styeam>:" + msg);
        res_msg.appendChild(txt);
        resp.appendChild(res_msg);
    } else {
        let msg = "<user>:" + inp_cmd;
        let res_msg = document.createElement("p");
        let txt = document.createTextNode(msg);
        res_msg.appendChild(txt);
        resp.appendChild(res_msg);
    }
});