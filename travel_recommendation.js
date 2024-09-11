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

        let _cities = country.map(item => item.cities);
        let cities0 = [];
        _cities.forEach(element => {
            element.forEach(item =>{
                cities0.push(item);
            });            
        });

        //console.log(cities0);


        let recommendations = cities0.concat(beach,temple);
            


        //let rec = recommendations.map(item => item.description);
        //console.log(recommendations);
        document.getElementById("firstDiv").innerText = recommendations[0].description;
        document.getElementById("firstDiv").innerText = recommendations[1].description;
        /*if (keyword == "country"){
            console.log(country);
            //document.getElementById("firstDiv").innerText= country.description;
        }
        else if (keyword == "beach")        
            console.log(beach);
        else if (keyword=="temple")
            console.log(temple);
        else if(keyword) {
            let recommendations = country.concat(beach,temple);
            console.log(recommendations);           
        }*/

    }).catch((err)=>{
        window.alert(err);
    });

}