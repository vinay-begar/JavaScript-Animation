document.addEventListener("DOMContentLoaded", () => {
  CustomEase.create("hop", ".8,0,.3,1");
  const splitTextElements = (
    selector,
    type = "words,chars",
    addFirstChar = false
  ) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((elements)=>{
        const splitText = new SpliText(element,{
        type,
        wordClass:"word",
        charClass:"char",
        });
        if(type.includes("chars")){
            splitText.chars.forEach((char,index)={
                const originalText = char.textContent;
                char.innerHTML='<span>${originalText}</span>';
                
         if(addFirstChar && index===0){
            char.classList.add("First-chart")
         }       
            });
        }
    });
  };
  
  splitTextElements(".intro-title h1", "words, chars",true);
  splitTextElements(".outro-title h1");
  splitTextElements(".tag p","words");
  splitTextElements(".card h1","words,chars",true)

});
