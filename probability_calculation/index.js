
//test
let test = document.getElementById("name");
test.addEventListener("input", () => console.log(test.value));

// percentage variables
let music = 0;
let hair = 0;
let shoe = 0; 
let country = 0;
let friends = 0;
let jeweleries = 0;
let happy = 0;


let check = false;
let result_percentage = 0;

// question variables
let q = document.getElementById("submit");
let q1 = document.getElementById("q1");
let q1t = document.getElementById("q1t");
let rresult = document.getElementById("rresult");


//q.addEventListener('click', () => console.log("works"));

q.addEventListener('click', () => {
        probability_calculation();
        calculation();
    });


q.addEventListener('click', () => checking())

function probability_calculation()
{
    if(q1t.value === 'Rap')
    {
        music = 66;
    }
    else if(q1t.value === 'Alter')
    {
        music = 33;
    }
    else if(q1t.value === 'Pop')
    {
        music = 99;
    }
    else if(q1t.value === 'Hip-Hop')
    {
        music = 86;
    }
    else if(q1t.value === 'Classical')
    {
        music = 62;
    }
    else if(q1t.value === 'Jazz')
    {
        music = 47;
    }
    //question 2
    if(q2t.value === 'Curly')
    {
        hair = 52;
    }
    else if(q2t.value === 'Straight')
    {
        hair = 24;
    }
    else if(q2t.value === 'Fuckboy')
    {
        hair = 99;
    }
    else if(q2t.value === 'Long')
    {
        hair = 78;
    }
    else if(q2t.value === 'Middle Long & Curly')
    {
        hair = 100;
    }
    else if(q2t.value === 'Bald')
    {
        hair = 30;
    }
    //question 3
    if(q3t.value === 'Jordan')
    {
        shoe = 99;
    }
    else if(q3t.value === 'Adidas')
    {
        shoe = 73;
    }
    else if(q3t.value === 'Puma')
    {
        shoe = 18;
    }
    else if(q3t.value === 'Asics')
    {
        shoe = 25;        
    }
    else if(q3t.value === 'Converse')
    {
        shoe = 48;
    }
    else if(q3t.value === 'Vans')
    {
        shoe = 56;
    }
    //question 4
    if(q4t.value === 'USA')
    {
        country = 82;
    }
    else if(q4t.value === 'France')
    {
        country = 79;
    }
    else if(q4t.value === 'Turkey')
    {
        country = 53;
    }
    else if(q4t.value === 'China')
    {
        country = 27;
    }
    else if(q4t.value === 'Japan')
    {
        country = 36;
    }
    else if(q4t.value === 'Germany')
    {
     
        country = 43;
    }
    //question 5
    if(q5t.value === '5+')
    {
        friends = 32;
    }
    else if(q5t.value === '15+')
    {
        friends = 47;
    }
    else if(q5t.value === '50+')
    {
        friends = 88;
    }
    if(q6t.value === 'Yes')
    {
        jeweleries = 75;
    }
    else if(q6t.value === 'No')
    {
        jeweleries = 50;
    }
    if(q7t.value === 'Yes')
    {
 
        happy = 85;
    }
    if(q7t.value === 'No')
    {
        happy = 33;
    }
}
function calculation()
{
    result_percentage = (music + hair + country + shoe + friends + jeweleries + happy)/7
}

function checking()
{
    if((music != 0 && hair != 0 && shoe != 0 && country != 0 && friends != 0 && jeweleries != 0 && happy != 0))
    {
        check = true;
    }

    if(check === true)
    {
        console.log("Works as well")
        rresult.innerHTML = Math.ceil(result_percentage) + "%";
    }
    else
    {
        alert("You have to answer all questions!");
    }
}
console.log("api should be added")

const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://quotient.p.rapidapi.com/equity/live?symbol=TSLA&timezone=UTC",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "a605d354a4msh906c743e3a9eff5p1254c3jsnb4e62139467b",
		"X-RapidAPI-Host": "quotient.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});