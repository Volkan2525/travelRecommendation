var stxt = document.getElementById("searchtext");
var sbutton = document.getElementById("searchbutton");
document.getElementById("searchbutton").addEventListener('click',search);


async function search(){
    

    let myRequest= ('travel_recommendation_api.json');
    await fetch(myRequest).then(res =>res.json())
    .then((res)=>{
        let keyword = stxt.value.toString().toLowerCase();
        let country = (res.countries.filter(c => (JSON.stringify(c.cities)).toString().toLowerCase().includes(keyword)));
        let beach =  (res.beaches.filter(b => (JSON.stringify(b)).toString().toLowerCase().includes(keyword)));
        let temple = (res.temples.filter(t => (JSON.stringify(t)).toString().toLowerCase().includes(keyword)));


        if (keyword == "country")
            console.log(country);
        else if (keyword == "beach")        
            console.log(beach);
        else if (keyword=="temple")
            console.log(temple);
        else {
            let recommendations = country.concat(beach,temple);
            console.log(recommendations);           
        }

    }).catch((err)=>{
        window.alert(err);
    });

}