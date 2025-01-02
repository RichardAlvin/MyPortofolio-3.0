import React from 'react'

const page = () => {
    const fetchDataFromApi = async () => {
        try{
            const response = await fetch("/api/articles", {
                headers: {
                    Accept: "application/json",
                    method: "GET",
                },
            });
            if (response) {
                const data = await response.json();
                console.log(data);
            }
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div>page</div>
  )
}

export default page