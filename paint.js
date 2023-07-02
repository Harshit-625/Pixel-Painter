const paintDiv = document.querySelectorAll('.Box')
const tool = document.getElementsByName('Tools');
const styles = document.getElementsByName('styles');
let clr = document.getElementsByName("color");
let clear = document.getElementById("clear");


function AddCol()
{
  pickCol = prompt("Choose Color: ")
}
clear.addEventListener('click' , () =>
{
  paintDiv.forEach(div=>
    {
      div.style.background="white"; 
    })
})

let styler=" "
toolStyle = () =>
{
  for(var i=0;i<styles.length;i++)
  {
    if(styles[i].checked)
    {
      styler = styles[i].id
    }
  }
  return styler
  console.log(styler)
}
let check = " "
toolCheck = (check) =>
{
  
  for(var i=0; i<tool.length; i++) 
    {
      if(tool[i].checked)
      {
        check = tool[i].id
      }
    }
  return check
  console.log(check)
}
setInterval(toolCheck,2000)


let color
colorPick = () =>
{
  for(i=0;i<clr.length;i++)
  {
    if(clr[i].checked)
    {
      color=clr[i].id
    }
  }
  return color
}


paintDiv.forEach(div => 
  {
    div.addEventListener('click',() =>
    {
      if((toolCheck() === "pen") && (toolStyle() === "stamp"))
      {
        colorPick()
        div.style.background = color;
      }
      else if(toolCheck() === "Era" && toolStyle() === "stamp")
      {
        div.style.background = "white";
      }
    })

    div.addEventListener('mouseover',() =>
    {
      if((toolCheck() === "Era") && (toolStyle() === "smooth"))
      {
        div.style.background = "white"
      }

      else if((toolCheck() === "pen") && (toolStyle() === "smooth"))
      {
        colorPick()
        div.style.background = color;
      }


    })


  
  });

