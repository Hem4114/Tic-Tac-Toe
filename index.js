let turn='O';
let t=0;
let a=[['a','b','c'],['d','e','f'],['g','h','i']];
turn='O';
function fun(i,j,id)
{
    a[i][j]=turn;
    let c=document.getElementById(id).textContent;
    if(c =='' && t<9)
    {   
        if(turn=='O')
        {
            document.getElementById(id).innerHTML=turn;
            turn='X';
        }
        else if(turn=='X')
        {
            document.getElementById(id).innerHTML=turn;
            turn='O';
        }
    
        if((a[0][0]==a[0][1] && a[0][1]==a[0][2]) || (a[1][0]==a[1][1] && a[1][1]==a[1][2]) || (a[2][0]==a[2][1] && a[2][1]==a[2][2]) || (a[0][0]==a[1][1] && a[1][1]==a[2][2]) || (a[0][2]==a[1][1] &&a[1][1]==a[2][0]) || (a[0][0]==a[1][0] && a[1][0]==a[2][0]) || (a[0][1]==a[1][1] && a[1][1]==a[2][1]) || (a[0][2]==a[1][2] && a[1][2]==a[2][2]))
        {
            if(turn=='X')
            {
                window.alert("O wins");
                location.reload();
            }
            else{
                window.alert("X wins");
                location.reload();
            }
        }
        t++;
        if(t==9)
        {
            location.reload();
        }
        
    }
    
}
