export const peopleLoader = async () => {
    const res = await fetch('http://localhost:2319/people');
    const people = await res.json()
    console.log(people)
    return people;
    };


    export const useLoader = async () => {
    const res = await fetch('http://localhost:2319/people');
    const people = await res.json()
    console.log(people)
    return people;
    };

    export const showLoader = async ({params})=> {
    const res = await fetch('http://localhost:2319/people/' + params.id)
    const people = await res.json()
    return people;
    };