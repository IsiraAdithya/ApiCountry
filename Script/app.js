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
    });

function serchcountriestocard() {
    let searchValue = document.getElementById("txtSearchValue").value;
    let countryName = document.getElementById("countryName");
    let countryFlag = document.getElementById("countryFlag");
    let officialName = document.getElementById("officialName");
    let name = document.getElementById("name");
    let img = document.getElementById("img");

    fetch(`https://restcountries.com/v3.1/name/${searchValue}`)
        .then(res => res.json())
        .then(data => {
            data.forEach(obj => {
                countryName.value = obj.name.common;
                officialName.innerText = obj.name.official;
                name.innerText = obj.name.common;
                countryFlag.src = obj.flags.png;
            });
            console.log(data);
        })
        .catch(err => console.error('Error fetching country data:', err));
}
