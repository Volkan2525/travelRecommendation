var stxt = document.getElementById("searchtext");
var sbutton = document.getElementById("searchbutton");
document.getElementById("searchbutton").addEventListener('click',search);
document.getElementById("clearbutton").addEventListener('click',cleartext);

function cleartext(){
    document.getElementById("searchtext").value = "";
}

async function search(){
    document.getElementById("recdiv").innerHTML = "";
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

        let _cities1 = res.countries.map(item => item.cities);
        let cities1 = [];
        _cities1.forEach(element => {
            element.forEach(item =>{
                    cities1.push(item);
            });            
        });

        let recommendations = [];
        if(keyword=="beaches" || keyword=="beach"){recommendations = res.beaches;}
        else if(keyword=="temple" || keyword=="temples"){recommendations = res.temples;}
        else if(keyword=="country" || keyword=="countries"){recommendations = cities1;}
        else
            recommendations = cities0.concat(beach,temple);
        
 
        
        //document.getElementById("secondDivIMG").getAttribute("src")
        /*document.getElementById("firstDiv").innerHTML = recommendations[0].name+"<br>";
        document.getElementById("firstDiv").innerText += recommendations[0].description;
        document.getElementById("firstDivIMG").setAttribute("src",recommendations[0].imageUrl);
        document.getElementById("secondDiv").innerHTML = recommendations[1].name+"<br>";
        document.getElementById("secondDiv").innerText += recommendations[1].description;
        document.getElementById("secondDivIMG").setAttribute("src",recommendations[1].imageUrl);*/

        for(let i=0;i<recommendations.length;i++){
            let figure = document.createElement("figure");
            let figCaption = document.createElement("figcaption");
            let figureIMG= document.createElement("img");
    figCaption.innerHTML=recommendations[i].name+"\n";
    figCaption.innerText+=recommendations[i].description;
    figCaption.style.backgroundColor = "white";
    figCaption.style.opacity = "0.9";
    figCaption.style.minHeight = "70px";
    figCaption.style.height = "auto";

    figureIMG.src = recommendations[i].imageUrl;
    figureIMG.style.width = "100%";
    figure.append(figureIMG);
    figure.append(figCaption);
            document.getElementById("recdiv").append(figure);
        }

    }).catch((err)=>{
        console.log(err);
    });

}