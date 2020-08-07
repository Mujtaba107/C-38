class Game {
constructor(){
}
getState(){

    database.ref('gameState').on("value",function(data){
        gameState = data.val()
    })
}
update(state){
    database.ref('/').update({
        gameState:state
    })
}
 start(){
if(gameState===0){
    player = new Player()
    player.getCount()
    form = new Form()
    form.display()
}
car1=createSprite(100,200)
car2=createSprite(300,200)
car3=createSprite(500,200)
car4=createSprite(700,200)
cars=[car1,car2,car3,car4]
}

play(){
form.hide()
textSize(30)
text("gameStart",120,100)
Player.getPlayerInfo()
if(allPlayers!==undefined){
    var index = 0
    var x = 0
    var y
    //var y_position = 130
for(var i in allPlayers){
    index = index+1
    x=x+200
    y=displayHeight-allPlayers[i].distance;
    cars[index-1].x=x
    cars[index-1].y=y
    if(index===player.index){
      cars [index-1].shapeColor==="red"  
    }

   // textSize(15)
  //  y_position+=20
   // text(allPlayers[i].name+":"+allPlayers[i].distance,120,y_position)
}
}
if(keyIsDown(UP_ARROW)&&player.index!==null){
    player.distance+=50
    player.update();
}
}
}