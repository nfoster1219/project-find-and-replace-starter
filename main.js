// You should NOT change the HTML or CSS in this project (at least until you reach
// the bonus objectives). Focus on the JavaScript.

const findInput = document.querySelector(".find-input")
const replaceInput = document.querySelector(".replace-input")
const replaceAllButton = document.querySelector(".replace-all-button")

// The following variable holds your OUTER ARRAY of row elements.
// Later you will need an OUTER LOOP to loop over the individual elements within
// this array.
const rowElements = document.querySelectorAll(".row")

// When you call the function belwo, it will get and return an INNER ARRAY
// containing the cell elements for a given row.
// Call this function from WITHIN your row elements loop. Then you will, in turn,
// need to loop over the resulting cell elements. But where should this whole
// NESTED LOOP go? Think through the user's experience: when should WHAT happen? 
function getCellElements (currentRowElement) {
    return currentRowElement.querySelectorAll(".cell")
}

replaceAllButton.addEventListener("click", function () {
    let find = findInput.value
    let replace = replaceInput.value
    for (let i = 0; i < rowElements.length; i ++) {
        let rowArray = getCellElements(rowElements[i])
        for (let index = 0; index < rowArray.length; index ++) {
            let cell = rowArray[index]
            if (cell.innerText.includes(find)) {
                let replaceCell = cell.innerHTML.replace(find, replace)
                cell.innerHTML = replaceCell
            }
        }
    }
})
