let countEl = document.getElementById("count-el")

let saveEl = document.getElementById("save-el")

console.log(countEl)

let count = 0

function increment()
{
   count += 1

   countEl.innerHTML = count
}

// 1. Create a function, save(), which logs out the count when it's called

function save() 
{
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "

    let both = count + " - "

    // 3. Render the variable in the saveEl using innerText

    saveEl.textContent += both

    // Reset the count back to 0

    count = 0

    // Update the displayed count
    
    countEl.textContent = count

    // NB: Make sure to not delete the existing content of the paragraph

    console.log(count)
}
