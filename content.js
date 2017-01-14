var row = document.getElementById("ctl00_ContentPlaceHolder1_lblRedak").innerHTML;
var column = document.getElementById("ctl00_ContentPlaceHolder1_lblStupac").innerHTML;

var data = {
    "1": {
        "A": "",
        "B": "",
        "C": "",
        "D": ""
    },
    "2": {
        "A": "",
        "B": "",
        "C": "",
        "D": ""
    },
    "3": {
        "A": "",
        "B": "",
        "C": "",
        "D": ""
    },
    "4": {
        "A": "",
        "B": "",
        "C": "",
        "D": ""
    },
    "5": {
        "A": "",
        "B": "",
        "C": "",
        "D": ""
    },
    "6": {
        "A": "",
        "B": "",
        "C": "",
        "D": ""
    },
    "7": {
        "A": "",
        "B": "",
        "C": "",
        "D": ""
    },
    "8": {
        "A": "",
        "B": "",
        "C": "",
        "D": ""
    }
}

document.getElementById("ctl00_ContentPlaceHolder1_txbTan").value = data[row][column];
document.getElementById("ctl00_ContentPlaceHolder1_btnPrijavaTan").click();