import { useEffect, useState } from "react";


const messages = [
    "Building your perfect stack...",
    "Preparing modern technologies...",
    "Organizing development tools...",
    "Loading your workspace...",
    "Almost ready..."
];


function Loader() {

    const [message, setMessage] = useState(messages[0]);


    useEffect(() => {

        let index = 0;

        const timer = setInterval(() => {

            index =
                (index + 1) % messages.length;

            setMessage(messages[index]);

        }, 2000);


        return () => clearInterval(timer);

    }, []);


    return (

        <div className="loader-screen">


            <div className="globe">

                {
                    Array.from({ length: 40 }).map((_, i) => (

                        <span
                            key={i}
                            style={{
                                "--i": i
                            }}
                        />

                    ))
                }

            </div>


            <p>{message}</p>


        </div>

    );

}


export default Loader;