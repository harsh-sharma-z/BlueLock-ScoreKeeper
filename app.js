const p1={
    score:0,
    button:document.querySelector('#p1Button'),
    display:document.querySelector('#p1Display'),
    wins:0,
    num:1
}
const p2={
    score:0,
    button:document.querySelector('#p2Button'),
    display:document.querySelector('#p2Display'),
    wins:0,
    num:2
}
const resetButton=document.querySelector('#reset');
const winningScoreSelect=document.querySelector('#playto');
let winningScore=3;
let isGameOver=false;
const winBoard=document.querySelector('.subtitle')
let isHattrick=false;
function updatesScores(player,opponent)
{
    if(!isGameOver)
    {
        player.score+=1;
        if(player.score===winningScore)
        {
            isGameOver=true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled=true;
            opponent.button.disabled=true;
            player.wins+=1;
            if(player.wins===3)
            {
                winBoard.textContent=`Yayy!! Player ${player.num} made a hattrick!`
                winBoard.classList.add('has-text-warning')
                isHattrick=true;
            }
        }
        player.display.textContent=player.score; 
    }
}
p1.button.addEventListener('click',function(){
    updatesScores(p1,p2);
});

p2.button.addEventListener('click',function(){
    updatesScores(p2,p1);
});

resetButton.addEventListener('click',reset );

function reset(){
    isGameOver=false;
    for( p of [p1,p2])
    {
        p.score=0;
        p.display.textContent=p.score;
        p.display.classList.remove('has-text-success','has-text-danger');
        p.button.disabled=false;
        if(isHattrick)
        {
            p.wins=0;
            winBoard.classList.remove('has-text-warning');
            winBoard.textContent='Use the buttons below to manage the score.';
            
        }
        
    } 

    if(isHattrick)
    {
        isHattrick=false;
    }
    
    
}


winningScoreSelect.addEventListener('change',function(){
    winningScore=parseInt(this.value);
    reset();
})