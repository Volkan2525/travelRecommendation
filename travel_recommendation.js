var stxt = document.getElementById("searchtext");
var sbutton = document.getElementById("searchbutton");
document.getElementById("searchbutton").addEventListener('click',search);


async function search(){
    

    document.getElementById("firstDiv").innerText += "";
    document.getElementById("secondDiv").innerHTML = "";
    let myRequest= ('travel_recommendation_api.json');
    await fetch(myRequest).then(res =>res.json())
    .then((res)=>{
        let keyword = stxt.value.toString().toLowerCase();
        let country = (res.countries.filter(c => (JSON.stringify(c.cities)).toString().toLowerCase().includes(keyword)));
        let beach =  (res.beaches.filter(b => (JSON.stringify(b)).toString().toLowerCase().includes(keyword)));
        let temple = (res.temples.filter(t => (JSON.stringify(t)).toString().toLowerCase().includes(keyword)));

        let _cities = country.map(item => item.cities);
        let cities0 = [];
        _cities.forEach(element => {
            element.forEach(item =>{
                if(JSON.stringify(item).toLowerCase().includes(keyword))
                    cities0.push(item);
            });            
        });

        let recommendations = cities0.concat(beach,temple);

        document.getElementById("firstDiv").innerHTML = recommendations[0].name+"<br>";
        document.getElementById("firstDiv").innerText += recommendations[0].description;
        document.getElementById("secondDiv").innerHTML = recommendations[1].name+"<br>";
        document.getElementById("secondDiv").innerText += recommendations[1].description;


    }).catch((err)=>{
        console.log(err);
    });

}