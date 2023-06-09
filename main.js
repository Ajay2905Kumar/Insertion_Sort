function insertionSort(){
    var a=document.getElementById("input-array").value;
    var x=document.getElementsByClassName("sorting-animation")[0];
    var b=a.split(",");
    x.style.width=(150*b.length)+"px";
    if(b.length>10){
        window.alert("Only 10 elements could be displayed!!!");
        document.location.reload();
    }
    var c=document.getElementsByClassName("number-box")[0];
    document.getElementsByClassName("number")[0].innerHTML=b[0];
    var d=c.getElementsByClassName("inner-box")[0];
    d.classList.add("inner-box-"+b[0]);
    var e=document.getElementsByClassName("inner-box-"+b[0])[0];
    e.style.backgroundColor="aqua";
    e.style.width=(30+Number(b[0]))+"px";
    e.style.height=(30+Number(b[0]))+"px";
    var index_array=[0];
    var position_Array=[[-(30+Number(b[0]))/2,-(30+Number(b[0]))/2]]
    for(var i=1;i<b.length;i++){
        var cc=c.cloneNode(true);
        index_array.push(i);
        position_Array.push([-(30+Number(b[i]))/2,-(30+Number(b[i]))/2]);
        x.appendChild(cc);
        document.getElementsByClassName("inner-box")[i].classList.add("inner-box-"+b[i]);
        document.getElementsByClassName("inner-box")[i].classList.remove("inner-box-"+b[0]);
        document.getElementsByClassName("inner-box-"+b[i])[0].style.backgroundColor="aqua";
        document.getElementsByClassName("inner-box-"+b[i])[0].style.width=(30+Number(b[i]))+"px";
        document.getElementsByClassName("inner-box-"+b[i])[0].style.height=(30+Number(b[i]))+"px";
        document.getElementsByClassName("number")[i].innerHTML=b[i];
        if(Number(b[i]<0)){
            document.getElementsByClassName("inner-box-"+b[i])[0].style.backgroundColor="white";
        }
    }
    sortElements(b,position_Array);
}
async function sortElements(b,s){
    document.getElementsByClassName("inner-box-"+b[0])[0].style.backgroundColor="orange";
    for(var i=1;i<b.length;i++){
        var key=b[i];
        var j=i-1;
        var key_position=s[i];
        var x=document.getElementsByClassName("inner-box-"+b[i])[0];
        x.style.backgroundColor="lightcoral";
        await new Promise((resolve) =>setTimeout(() => {resolve();}, 2000));
        key_position[1]+=260;
        x.style.transform="translate("+s[i][0]+"px,"+s[i][1]+"px)";
        await new Promise((resolve) =>setTimeout(() => {resolve();}, 2000));
        var y=document.getElementsByClassName("inner-box-"+b[j])[0];
        y.style.backgroundColor="lightgreen";
        await new Promise((resolve) =>setTimeout(() => {resolve();}, 2000));
        while(j>=0 && Number(b[j])>Number(key)){
            await new Promise((resolve) =>setTimeout(() => {resolve();}, 2000));
            b[j+1]=b[j];
            s[j+1]=s[j];
            s[j+1][0]+=150;
            y.style.transform="translate("+s[j+1][0]+"px,"+s[j+1][1]+"px)";
            key_position[0]-=150;
            x.style.transform="translate("+key_position[0]+"px,"+key_position[1]+"px)";
            await new Promise((resolve) =>setTimeout(() => {resolve();}, 2000));
            j=j-1;
            y.style.backgroundColor="orange";
            await new Promise((resolve) =>setTimeout(() => {resolve();}, 2000));
            if(j>=0){
                y=document.getElementsByClassName("inner-box-"+b[j])[0];
                y.style.backgroundColor="lightgreen";
            }
        }
        await new Promise((resolve) =>setTimeout(() => {resolve();}, 2000));
        b[j+1]=key;
        key_position[1]-=260;
        s[j+1]=key_position;
        x.style.transform="translate("+key_position[0]+"px,"+key_position[1]+"px)";
        await new Promise((resolve) =>setTimeout(() => {resolve();}, 2000));
        x.style.backgroundColor="orange";
        y.style.backgroundColor="orange";
    }
    await new Promise((resolve) =>setTimeout(() => {resolve();}, 2000));
    window.alert("Insertion Sort done.....");
    document.location.reload();
}