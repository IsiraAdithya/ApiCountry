fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(data => {
        let tblCountries = document.getElementById("tbl");

        let tblBody = `<tr>
                    <th>Name</th>
                    <th>Flag</th>
                </tr>`;

        data.forEach(element => {
            tblBody += `<tr>
                    <td>${element.name.common}</td>
                    <td>${element.flag}</td>
                </tr>`
        });

        tblCountries.innerHTML = tblBody;
    })






function serchcountries() {
    let searchValue = document.getElementById("txtSearchValue").value;

    let officialName = document.getElementById("officialName");
    let name = document.getElementById("name")
    let img = document.getElementById("img")


    console.log(searchValue);
    fetch(`https://restcountries.com/v3.1/name/${searchValue}`)
        .then(res => res.json())
        .then(data => {

            data.forEach(obj => {
                officialName.innerText = obj.name.official;
                name.innerText = obj.name.common;

                img.innerHTML = `<img src="${obj.flags.png}" alt="">`
            })
            console.log(data);




        })
}

function serchcountriestocard(){
    let searchValue = document.getElementById("txtSearchValue").value;
    let countryName = document.getElementById("countryName");
    let officialName = document.getElementById("officialName");
    let name = document.getElementById("name");
    let img = document.getElementById("img");

    fetch(`https://restcountries.com/v3.1/name/${searchValue}`)
    .then(res => res.json())
    .then(data => {

        data.forEach(obj => {
            document.getElementById("countryName").value = obj.name.common;
            name.innerText = obj.name.common;

            doucumet.getElementById("countryFlag").value = `<img src="${obj.flags.png}" alt="">`
        })
        console.log(data);




    })

    
}
