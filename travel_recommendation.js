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

        let recommendations = [];

        if(country[0]){
            let cities_ = country.map(country => country.cities)[0];
            cities_.forEach((cities_0) => {
                let name_ = cities_0.name;
                let description_ = cities_0.description;
                let imageurl_ = "";   
                recommendations.push({"name":name_, "description":description_, "imageurl":imageurl_});
            });
        }
        if(beach[0]){
            beach.forEach((beach0) => {
                let name_ = beach0.name;
                let description_ = beach0.description;
                let imageurl_ = "";   
                recommendations.push({"name":name_, "description":description_, "imageurl":imageurl_});
            });
        }
        if(temple[0]){
            temple.forEach((temple0) => {
                let name_ = temple0.name;
                let description_ = temple0.description;
                let imageurl_ = "";   
                recommendations.push({"name":name_, "description":description_, "imageurl":imageurl_});
            });
        }
        console.log(recommendations);

    }).catch((err)=>{
        window.alert(err);
    });

}