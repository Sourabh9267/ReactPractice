


const arr=[
    
        {
            name: "Sourabh Gour",
            attendance:60,
            roll:"0187CS211167",
            gender:"Male",
            email:"saurabhgour2222@gmail.com"
        },
        {
            name: "Vishal Sisodiya",
            attendance:90,
            roll:"0187CS211184",
            gender:"Male",
            email:"vishal@gmail.com"
        },
        {
            name: "Ritika Dubey",
            attendance:10,
            roll:"0187CS211184",
            gender:"Male",
            email:"vishal@gmail.com"
        }
        ,
        {
            name: "Sneha Sharma",
            attendance:10,
            roll:"0187CS211137",
            gender:"Male",
            email:"vishal@gmail.com"
        }

];



let ans1= arr.map(elem=>{
    elem.status = elem.attendance<50 ? "defaulter student" : "Good student";
    return elem.status;
})


console.log(ans1);

ans2=arr.filter(elem=> elem.attendance<20 );

console.log(ans2);
