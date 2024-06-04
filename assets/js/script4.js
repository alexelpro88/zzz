function generateEmail() {

    let fname = document.getElementById("name1").value.trim().toLowerCase();
    let sname = document.getElementById("name2").value.trim().toLowerCase();
    let year = document.getElementById("year").value;
    let month = document.getElementById("moth").value;
    let day = document.getElementById("day").value;

    let firstSpaceIndex = fname.indexOf(' ');
    let firstPart = firstSpaceIndex === -1 ? fname : fname.substring(0, firstSpaceIndex);
    let secondPart = firstSpaceIndex === -1 ? "" : fname.substring(firstSpaceIndex + 1);

    let lastSpaceIndex = sname.indexOf(' ');
    let lastNameFirstPart = lastSpaceIndex === -1 ? sname : sname.substring(0, lastSpaceIndex);
    let lastNameSecondPart = lastSpaceIndex === -1 ? "" : sname.substring(lastSpaceIndex + 1);

    let middleChar;
    if (lastNameSecondPart.length % 2 === 0) {
        let midIndex = lastNameSecondPart.length / 2;
        middleChar = lastNameSecondPart[midIndex - 1] + lastNameSecondPart[midIndex];
    } else {
        let midIndex = Math.floor(lastNameSecondPart.length / 2);
        middleChar = lastNameSecondPart[midIndex];
    }

    let username = firstPart[0] + (secondPart[0] || '') + middleChar + lastNameFirstPart.slice(-3) + year.slice(-2) + month + day;

    window.alert("TU NUEVO USUARIO ES: \n" + username + "@gmail.com");
}
