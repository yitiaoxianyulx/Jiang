var arr = [" ", "一", "二", "三", "四", "五", "六"];
var ctime = [
  {
    num: "1",
    time: "8:00",
  },
  {
    num: "2",
    time: "9:35",
  },
  {
    num: "3",
    time: "10:00",
  },
  {
    num: "4",
    time: "11:35",
  },
  {
    num: "5",
    time: "13:30",
  },
  {
    num: "6",
    time: "15:05",
  },
  {
    num: "7",
    time: "15:30",
  },
  {
    num: "8",
    time: "17:05",
  },
  {
    num: "9",
    time: "18:00",
  },
  {
    num: "10",
    time: "19:35",
  },
];

var courses = [
  {
    course: "管理学",
    teacher: "马鹤丹",
    location: "@四海楼-601",
    Bgcolor: "#B93B61",
    info: "双2-16周",
  },
  {
    course: "宏观经济学",
    teacher: "吴洪涛",
    location: "@四海楼-101",
    Bgcolor: "#15C377",
    info: "1-16周",
  },
  {
    course: "毛泽东思想与中国特色社会主义理论体系概论",
    teacher: "孙大鹏",
    location: "@学汇楼-110",
    Bgcolor: "#48B0FC",
    info: "1-16周",
  },
  {
    course: "供应链战略管理",
    teacher: "韩兵",
    location: "@尚德楼-112",
    Bgcolor: "#4974B8",
    info: "9-16周",
  },
  {
    course: "供应链管理",
    teacher: "匡海波",
    location: "@尚德楼-309",
    Bgcolor: "#399088",
    info: "1-12周",
  },
  {
    course: "管理运筹学",
    teacher: "许愿",
    location: "@尚德楼-115",
    Bgcolor: "#C78A47",
    info: "单1-15周",
  },
  {
    course: "概率论与数理统计",
    teacher: "殷子然",
    location: "@学汇楼-208",
    Bgcolor: "#B93B61",
    info: "1-16周",
  },
  {
    course: "大学英语",
    teacher: "张颖秋",
    location: "@尚德楼-112",
    Bgcolor: "#15C377",
    info: "1-16周",
  },
  {
    course: "供应链管理",
    teacher: "匡海波",
    location: "@尚德楼-221",
    Bgcolor: "#399088",
    info: "1-12周",
  },
  {
    course: "供应链战略管理",
    teacher: "韩兵",
    location: "@积学楼-313",
    Bgcolor: "#4974B8",
    info: "9-16周",
  },
  {
    course: "毛泽东思想与中国特色社会主义理论体系概论",
    teacher: "孙大鹏",
    location: "@学汇楼-110",
    Bgcolor: "#48B0FC",
    info: "双2-16周",
  },
  {
    course: "管理学",
    teacher: "马鹤丹",
    location: "@四海楼-302",
    Bgcolor: "#B93B61",
    info: "1-16周",
  },
  {
    course: "休闲学",
    teacher: "邓光玉",
    location: "@百川楼-102",
    Bgcolor: "#4974B8",
    info: "1-16周",
  },
  {
    course: "管理运筹学",
    teacher: "许愿",
    location: "@积学楼-103",
    Bgcolor: "#C78A47",
    info: "1-16周",
  },
  {
    course: "概率论与数理统计",
    teacher: "殷子然",
    location: "@学汇楼-203",
    Bgcolor: "#B93B61",
    info: "单1-15周",
  },
  {
    course: "体育",
    teacher: "刘美秀",
    location: "@游泳馆-游泳馆5",
    Bgcolor: "#C78A47",
    info: "1-17周",
  },
  {
    course: "英语初级口语",
    teacher: "Lim John",
    location: "@外语楼-210",
    Bgcolor: "#399088",
    info: "1-16周",
  },
  {
    course: "形势与政策",
    teacher: "田一鸣",
    location: "@学汇楼-301",
    Bgcolor: "#15C377",
    info: "6-7周",
  },
];

window.onload = function () {
  var Stable = document.getElementsByClassName("Stable"); //创建动态课程表格对象

  for (let i = 0; i < arr.length; i++) {
    let div = document.createElement("div"); //动态创建div
    div.className = "item" + String(i + 1) + " day"; //类名为两个 itemx day

    Stable[0].appendChild(div); //创建第一行 星期1,2,3,4,5,6,7
    let h3 = document.createElement("h3");
    h3.textContent = arr[i];
    div.appendChild(h3);
  }

  for (let i = 0; i < ctime.length; i++) {
    // 添加第一列 时间
    let div = document.createElement("div");
    div.className = "item" + String(i + 8) + " ctime";
    Stable[0].appendChild(div);
    let h3 = document.createElement("h3");
    let h5 = document.createElement("h5");
    h3.textContent = ctime[i].num;
    h5.textContent = ctime[i].time;
    div.appendChild(h3);
    div.appendChild(h5);
  }

  for (let i = 0; i < courses.length; i++) {
    //添加课程，课程名+地点
    let div = document.createElement("div");
    div.className = "c" + String(i + 1) + " course"; //类名为 ci course
    div.style.backgroundColor = courses[i].Bgcolor;
    Stable[0].appendChild(div); //课程表
    let h3 = document.createElement("h3");
    h3.textContent = courses[i].course;
    let h5 = document.createElement("h5");
    h5.textContent = courses[i].location;
    div.appendChild(h3);
    div.appendChild(h5);
  }

  // var c1 = document.querySelector(".c1");
  // var cn = document.querySelector(".cname");
  // var tc =

  // c1.onmouseover = function () {
  //     cn.innerHTML = '课&ensp;程&ensp;名：微机原理';
  // }

  // 鼠标移动到课程表对应课程响应事件处理，右侧显示相关信息
  function MouseOver(i) {
    console.log("我动态加载了");
    var cname = document.getElementsByClassName("cname");
    cname[0].textContent += courses[i].course;

    var teacher = document.getElementsByClassName("teacher");
    var location = document.getElementsByClassName("location");
    var info = document.getElementsByClassName("info");
    teacher[0].textContent += courses[i].teacher;
    location[0].textContent += courses[i].location;
    info[0].textContent += courses[i].info;
  }

  // 鼠标离开，清空右侧信息
  function MouseOut() {
    console.log("我清空了");
    let cname = document.getElementsByClassName("cname");
    cname[0].textContent = "课  程  名:  ";
    let teacher = document.getElementsByClassName("teacher");
    let location = document.getElementsByClassName("location");
    let info = document.getElementsByClassName("info");
    teacher[0].textContent = "任课老师: ";
    location[0].textContent = "上课地点: ";
    info[0].textContent = "相关信息: ";
  }

  var courselist = document.getElementsByClassName("course");
  for (let i = 0; i < courselist.length; i++) {
    courselist[i].onmouseover = MouseOver.bind(this, i);
    courselist[i].onmouseout = MouseOut;
  }
};
