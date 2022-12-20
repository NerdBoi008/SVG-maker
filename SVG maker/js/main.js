const svgMainWrapper = document.getElementById("mainCanvasContainer");
const svgMain = document.getElementById("mainSVG");
const commadButtons = document.querySelectorAll(".path-command-controls button");
const coords = document.querySelector("#coordinates");

let showCanvasDialogBox = false;

function getCoordinates(svg, x, y) {
    let point = svg.createSVGPoint();
    point.x = x;
    point.y = y;

    return point.matrixTransform(svg.getScreenCTM().inverse());
}

svgMain.addEventListener("pointermove", (event) => {
    const svgPoint = getCoordinates(svgMain, event.clientX, event.clientY)
    coords.innerHTML = `X : ${Math.round(svgPoint.x)} Y : ${Math.round(svgPoint.y)}`;
})

svgMainWrapper.addEventListener("click", ()=> {
    let temp = document.querySelectorAll("#mainSVG>*");
    console.log("sfsaga");
    if(temp == 0) {
        document.querySelector(".dailogBox").style.visibility = "visible";
        document.querySelector("#canvas_size_dailogBox").style.visibility = "visible";
    }
})

class SVG {
    constructor(svgMain) {
        this.svgMain = svgMain;
    }

    addMoveTo() {

    }
    
}

for(let i=0;i<commadButtons.length;i++) {
    commadButtons[i].addEventListener("click",()=> {
        if(!showCanvasDialogBox) {
            let temp = document.querySelectorAll("#mainSVG>*");
            console.log("sfsasdasfasaga");
            if(temp == 0) {
                document.getElementsByClassName("dailogBox").style.visibility = "visible";
                document.querySelector("#canvas_size_dailogBox").style.visibility = "visible";
            }
        }
        switch(i) {
            case 0:
                console.log("sdfd");
                addMoveTo();
                break;
            case 1:
                addLine();
                break;
            case 2:
                addZ();
                break;
            case 3:
                addCubicCurve();
                break;
            case 4:
                addSCurve();
                break;
            case 5:
                addQudraticCurve();
                break;
            case 6:
                addTCurve();
                break;
            case 7:
                addArc();
                break;
            
        }
    })
}


