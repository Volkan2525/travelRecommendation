var stxt = document.getElementById("searchtext");
var sbutton = document.getElementById("searchbutton");
document.getElementById("searchbutton").addEventListener('click',search);


async function search(){
    let country = [];
    let beach = [];
    let temple = [];

    let myRequest= ('travel_recommendation_api.json');
    await fetch(myRequest).then(res =>res.json())
    .then((res)=>{
        let keyword = stxt.value.toString().toLowerCase();
        country.push(res.countries.find(c => c.name.toLowerCase().toString().includes(keyword)));
        beach.push(res.beaches.find(b => b.name.toLowerCase().toString().includes(keyword)));
        temple.push(res.temples.find(t => t.name.toLowerCase().toString().includes(keyword)));

        if(country[0])
            console.log(country);
        if(beach[0])
            console.log(beach);
        if(temple[0])
            console.log(temple);

    }).catch((err)=>{
        window.alert(err);
    })
}