
var test = document.getElementById("test")
var multipleTest = document.getElementById("multipleTest")
var wrong = document.getElementById("wrong")






var tiph3 = document.createElement("h3")
tiph3.innerText = "没有校对 单选题: " + testdata.length + "题目"

test.append(tiph3)










// console.log(testdata[2].items[4].itemE)
for (i = 0; i < testdata.length; i++) {

    var sigleTitle = testdata[i].title;
    var items = testdata[i].items;
    answer = testdata[i].answer;

    

    var muiPanelDiv = document.createElement("div")
    muiPanelDiv.classList.add("mui-panel")
    var titleTextP = document.createElement("p")
    titleTextP.classList.add("titleText")
    titleTextP.innerHTML = sigleTitle

    muiPanelDiv.append(titleTextP)



    
    
    // console.log("answer: " + answer)
    for (let index = 0; index < items.length; index++) {
        const element = items[index];
        console.log(element)

        var itemsForm = document.createElement("form")

        var itemsDiv = document.createElement("div")        
        itemsDiv.classList.add("mui-radio")


        var itemsLabel = document.createElement("label")
        itemsLabel.classList.add("sl")

        var itemsInput = document.createElement("input")
        itemsInput.type = "radio"
        itemsInput.name = "optionsRadios"
        itemsInput.classList.add(answer + "-answer")

        var inputSpan = document.createElement("span")
        inputSpan.innerHTML = element


        itemsLabel.append(itemsInput)
        itemsLabel.append(inputSpan)
        itemsDiv.append(itemsLabel)
        itemsForm.append(itemsDiv)

        muiPanelDiv.append(itemsForm)

        itemsInput.addEventListener("click", checkeAnswer, false)        
    }


    test.append(muiPanelDiv)

}



//function

function checkeAnswer(event) {

    var clickAnswer = this.nextElementSibling.innerHTML.slice(0, 1)
    var classListAnswer = this.classList.value.split("-")[0]

    if (classListAnswer.includes(clickAnswer)) {
        console.log("yes: " + this)
                     
         this.nextElementSibling.classList.add("answerright")
        
    } else {
        errorAanswerpanel = this.parentElement.parentElement.parentElement.parentElement

        // wrong.append(errorAanswerpanel)

        console.log("no")                
         this.nextElementSibling.classList.toggle("answererro")

    }
}


var putBtn = document.getElementById("putBtn")

putBtn.addEventListener("click", function name(params) {
    var total = document.querySelectorAll(".answerright")
    alert("共答对: " + total.length + " 道题")
})


//INIT

test.style.width = Math.min(1024, window.innerWidth) + "px"
multipleTest.style.width = Math.min(1024, window.innerWidth) + "px"

console.log(window.innerWidth)