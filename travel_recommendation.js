var stxt = document.getElementById("searchtext");
var sbutton = document.getElementById("searchbutton");
document.getElementById("searchbutton").addEventListener('click',search);

async function search(){

    let myRequest= ('travel_recommendation_api.json');
    await fetch(myRequest).then((res) => {
        

        return res.json;
        
    }).then((res)=>{

        //let jvar = JSON.stringify(res);
        console.log(res);

    }).catch((err)=>{
        window.alert(err);
    })
}