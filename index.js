let turn='O';
let i=0;
function fun(id)
{
    let c=document.getElementById(id).textContent;
    if(c =='' && i<9)
        {
        if(turn=='O')
        {
            document.getElementById(id).innerHTML=turn;
            turn='X';
        }
        else
        {
            document.getElementById(id).innerHTML=turn;
            turn='O';
        }
        
        i++;
    }
    if(i==9)
    {
        window.alert("Game is tie");
    }
}