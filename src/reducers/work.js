const initState = {
    workList: [
        {
            company: "Fractal Analytics",
            startDate: "May 2020",
            endDate: "June 2020",
            position: "Project Intern",
            img: "fractal",
            sz: "24%",
            description: [
                "Developed asynchronous API wrappers for AI algorithms in Django and Dockerized the entire application.",
                "Integrated Celery for running and setting an asynchronous task queue through Redis as the broker.",
                "Integrated Django Channels(websockets) for sending real time Celery task status updates to the client.",
                "Implemented 2 factor authentication system with OTP verification in Django and implemented Caching.",
                "Wrote a bulk insert script for storing large files in Postgres database.",
                "Stack involved Django, PostgreSQL, Redis."
            ]
        },
        {
            company: "Fractal Analytics",
            startDate: "May 2019",
            endDate: "July 2019",
            position: "Project Intern",
            img: "fractal",
            sz: "24%",
            description: [
                "Customised standard charts available on D3 & Amcharts using ReactJs and Redux.",
                "Dockerized and Deployed Django and Postgres as microservices on Kubernetes.",
                "Converted a Django app into a PIP package, which was added to the devpi server.",
                "Stack involved ReactJs, Redux, Django and MongoDB."
            ] 
        },
        {
            company: "ShortCastle Technologies",
            startDate: "May 2019",
            endDate: "July 2019",
            position: "Software Engineer Intern ",
            img: "shortcastle",
            sz: "12%",
            description: [
                "AntD was used for frontend, PostgreSQL was used for queries and Metabase for analyzing them.",
                "Integrated MobX for state management in ReactJs as there was a need for multiple stores.",
                "Used CircleCI for Continuous Integration and Dockerized and Deployed backend on an AWS EC2 instance.",
                "Stack involved ExpressJs, ReactJs and Postgres and the language used was Typescript."
            ]
        }
    ]
}

const workReducer = (state=initState, action) => {
    return state
}

export default workReducer