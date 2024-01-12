const   AsyncFn = () => {

    console.log("Hi...");

   

    const result = fetch("http://localhost:5000/api/products");
        //.then(res => res.json).then(data => {
      // console.log(result.json());
    

    if (!result.ok) {

        console.log("in error");
        console.log(result);
        throw new Error(result.status);
    }

   // const resp = await result.json();
    return " Hello Test";
    
}



export default AsyncFn;