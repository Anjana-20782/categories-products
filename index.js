async function getData() {
    try{
    const response=await fetch("https://dummyjson.com/products");
    const data=await response.json();
    console.log("User Data:", data);

    }
    catch(error){

        console.log("error happenend:",error)
    }
}
getData();

