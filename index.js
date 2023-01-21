function newImage(name,url,left,bottoms){
    let newObject = document.createElement("img")
    newObject.alt= name
    newObject.src = url
    newObject.style.position = "fixed"
    newObject.style.left =  left + "px"
    newObject.style.bottom = bottoms + "px"
    document.body.append(newObject)
    return newObject

}

newImage('green-character','assets/green-character.gif',100,100)
newImage('pinetree',"assets/pine-tree.png",450,200)
newImage('tree',"assets/tree.png",200,300)
newImage('pillar',"assets/pillar.png",350,100)
newImage('crate',"assets/crate.png",150,200)
newImage('well',"assets/well.png",500,425)

function newItem(name,url,left,bottoms){
    let newObject = newImage(name,url,left,bottoms)
    newObject.addEventListener('dblclick', () => {
    newObject.remove()
    })}
  

newItem("shield","assets/sheild.png",167,185)
newItem("staff", "assets/staff.png",600,100)
newItem("sword","assets/sword.png",500,405)
