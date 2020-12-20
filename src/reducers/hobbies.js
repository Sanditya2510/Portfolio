const initState = {
    hobbiesList: [
        {
            src: "chess.jpeg",
            name: "Chess",
            description: [
                "2000 rated player on Lichess.",
                "Won Gold medals at Inter University Chess tournaments.",
                "Big Fan of Bobby Fischer."
            ]
        },
        {
            src: "f1.jpg",
            name: "Formula 1",
            description: [
                "Ardent follower of George Russell.",
                "F1 League racer on PS4."
            ]
        }
    ]
}

const hobbiesReducer = (state=initState, action) => {
    return state
}

export default hobbiesReducer