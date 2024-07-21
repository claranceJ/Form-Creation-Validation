//initialize the Async Function
async function fetchUserData() {
    const apiUrl = "https://jsonplaceholder.typicode.com/users";

    //selecting Data Container Element
    const dataContainer = document.getElementById("api-data");


    // Fetch Data Using try-catch
    try {
        // Fetch data from the API
        const response = await fetch(apiUrl);
        // Check if the response is okay
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }  
        
        // Convert response to JSON
        const users = await response.json();

        //Clear the Loading Message
        dataContainer.innerHTML = '';

        //Create and Append User List

        //creating <ul> element
        const userList = document.createElement("ul");

        // loop through users array
        users.forEach(function(user) {
            //Create a <li> element
            const listItem = document.createElement("li");

            //set the text of the <li> to the users name
            listItem.textContent = user.name;

            //Append<li> to the userList
            userList.appendChild(listItem);
        });

        //append userList to dataContainer
        dataContainer.appendChild(userList);

    }

  catch (error) {
        // Handle errors and display an error message
        //clear existing content
        dataContainer.innerHTML = '';

        //Display error message
        dataContainer.textContent = "Failed to load user data.";
        console.error('There was a problem with the fetch operation:', error);
    }
    

}
//Fetch user data when the page loads 
document.addEventListener("DOMContentLoaded", function(){
    fetchUserData();
});