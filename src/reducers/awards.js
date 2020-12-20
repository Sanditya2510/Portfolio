const initState = {
    awardsList: [
        {
            name: "Citi Campus Innovation Challenge 3.0",
            description: "3rd(India)",
            year: "2020",
            field: "Competitive Programming",
            img: "citi",
            sz: "8%"
        },
        {
            name: "Google Kickstart",
            description: "Ranked 238th Globally, 68th (India)",
            year: "2020" ,
            field: "Competitive Programming",
            img: "google",
            sz: "13%"
        },
        {
            name: "Expedia Global Contest",
            description: "Ranked in Top 10",
            year: "2020" ,
            field: "Competitive Programming",
            img: "expedia",
            sz: "16%"
        },
        {
            name: "AtCoder Contest",
            description: "Ranked 23rd in India",
            year: "2020" ,
            field: "Competitive Programming",
            img: "atcoer",
            sz: "10%"
        },
        {
            name: "Interviewbit Discovery Challenge",
            description: "Ranked 2nd",
            year: "2020",
            field: "Competitive Programming",
            img: "ib",
            sz: "12%"
        },
        {
            name: "Hack the Interview II-Global",
            description: "Ranked 105 Globally", 
            year: "2020",
            field: "Competitive Programming",
            img: "hr",
            sz: "11%"
        },
        {
            name: "Facebook HackerCup",
            description: "Part of top 150 participants from India selected for prefinal round",
            year: "2020" ,
            field: "Competitive Programming",
            img: "fb",
            sz: "11%"
        },
        {
            name: "Flipkart GRiD 2.0 - Software Development Hackathon",
            description: "Qualified for Round 3",
            year: "2020",
            field: "Software Development",
            img: "flipkart",
            sz: "15%"
        }
    ]
}


const awardsReducer = (state=initState, action) => {
    return state
}

export default awardsReducer