//data structure for table play - simple person with first name , last name, and favorite color
class Person{
    constructor(firstName, lastName, favColor){
        this.firstName = firstName;
        this.lastName = lastName;
        this.favColor = favColor;
    }
}

// jquery onload function to perform further actions when DOM is done drawing
$(document).ready(function() {
    createTable()
});


function createTable() {
    //create table and place
    var table = document.createElement("TABLE");
    table.setAttribute('class', "josh_table");
    document.body.appendChild(table);
    table.setAttribute("class", "josh_table");
    let headerRow = table.insertRow();
    headerRow.setAttribute("class", "josh_header");
    headerRow.insertCell(0).innerHTML = "First Name"
    headerRow.insertCell(1).innerHTML = "Last Name"
    headerRow.insertCell(2).innerHTML = "Favorite Color"

//create the request object
    let request = new AsyncRequest();

    request.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            var people = JSON.parse(this.responseText);

            for (let j = 0; j < people.length; j++) {
                let tempRow = table.insertRow()

                tempRow.insertCell(0).innerHTML = people[j]["first_name"];

                tempRow.insertCell(1).innerHTML = people[j]["last_name"];

                tempRow.insertCell(2).innerHTML = people[j]["favorite_color"];

            }
        }
    }

    request.open("GET", "../assets/MOCK_DATA.json", true);
    request.send();
}


