const svgContainer = document.getElementById("mainSVG");
const commadButtons = document.querySelectorAll(".path-command-controls button");
const coords = document.querySelector("#coordinates");

let showCanvasDialogBox = false;
let objectNo = 1;

function getCoordinates(svg, x, y) {
    let point = svg.createSVGPoint();
    point.x = x;
    point.y = y;

    return point.matrixTransform(svg.getScreenCTM().inverse());
}

svgContainer.addEventListener("pointermove", (event) => {
    const svgPoint = getCoordinates(svgContainer, event.clientX, event.clientY)
    coords.innerHTML = `X : ${Math.round(svgPoint.x)} Y : ${Math.round(svgPoint.y)}`;
})

class SVG {
    svgContainer;

    constructor(selector) {
        this.svgContainer = document.querySelector(selector);
    }

    setDimensions(height, width) {
        this.svgContainer.setAttribute("height",height);
        this.svgContainer.setAttribute("width",width);
    }

    #setAttribute(obj,attr) {
        for(let value in attr) {
            obj.setAttribute(value,attr[value]);
        }
        return obj;
    }
    
    addLine(attr) {
        const line = document.createElementNS("http://www.w3.org/2000/svg","line");
        this.svgContainer.appendChild(this.#setAttribute(line,attr));
    }

    addCircle(attr) {
        const circle = document.createElementNS("http://www.w3.org/2000/svg","circle");
        this.svgContainer.appendChild(this.#setAttribute(circle,attr));
    }

    addCurve(attr) {
        const cubicCurve = document.createElementNS("http://www.w3.org/2000/svg","path");
        this.svgContainer.appendChild(this.#setAttribute(cubicCurve,attr));
    }

    addQudraticCurve(attr) {
        const qudraticCurve = document.createElementNS("http://www.w3.org/2000/svg","path");
        this.svgContainer.appendChild(this.#setAttribute(qudraticCurve,attr));
    }

    addArc(attr) {
        const arc = document.createElementNS("http://www.w3.org/2000/svg","path");
        this.svgContainer.appendChild(this.#setAttribute(arc,attr));
    }

    clearCanvas() {
       document.querySelectorAll("#mainSVG>*").forEach((element) => this.svgContainer.removeChild(element));
       
    }
}

const svgMain = new SVG("#mainSVG");

for(let i=0;i<commadButtons.length;i++) {
    commadButtons[i].addEventListener("click",()=> {
        switch (i) {
            case 0: //for line object
                svgMain.addLine({
                    x1: 10,
                    y1: 10,
                    x2: 20,
                    y2: 20,
                    class: `primary_object${objectNo}`,
                    objectNumber: objectNo
                });
                svgMain.addCircle({
                    cx: 10,
                    cy: 10,
                    r:1,
                    class: `secondary_object${objectNo}`,
                    objectNumber: objectNo,
                    objectType: 'Line',
                    circlePos : 'left'
                });
                svgMain.addCircle({
                    cx: 20,
                    cy: 20,
                    r:1,
                    class: `secondary_object${objectNo}`,
                    objectNumber: objectNo,
                    objectType: 'Line',
                    circlePos : 'right'
                });
                objectNo++;
                break;
                
            case 1: // for cubic Curve object
                svgMain.addCurve({
                    d: "M10,10 C10,20 30,20 30,10",
                    class: `primary_object${objectNo}`,
                    objectNumber: objectNo
                });
                svgMain.addLine({
                    x1: 10,
                    y1: 10,
                    x2: 10,
                    y2: 20,
                    class: `secondary_object${objectNo}`,
                    objectNumber: objectNo,
                });
                svgMain.addCircle({
                    cx: 10,
                    cy: 10,
                    r:1,
                    class: `secondary_object${objectNo}`,
                    objectNumber: objectNo,
                    objectType: 'cubicCurve',
                    circlePos : 'topLeft'
                });
                svgMain.addCircle({
                    cx: 10,
                    cy: 20,
                    r:1,
                    class: `secondary_object${objectNo}`,
                    objectNumber: objectNo,
                    objectType: 'cubicCurve',
                    circlePos : 'bottomLeft'
                });
                svgMain.addLine({
                    x1: 30,
                    y1: 10,
                    x2: 30,
                    y2: 20,
                    class: `secondary_object${objectNo}`,
                    objectNumber: objectNo,
                });
                svgMain.addCircle({
                    cx: 30,
                    cy: 10,
                    r:1,
                    class: `secondary_object${objectNo}`,
                    objectNumber: objectNo,
                    objectType: 'cubicCurve',
                    circlePos : 'topRight'
                });
                svgMain.addCircle({
                    cx: 30,
                    cy: 20,
                    r:1,
                    class: `secondary_object${objectNo}`,
                    objectNumber: objectNo,
                    objectType: 'cubicCurve',
                    circlePos : 'bottomRight'
                });
                
                objectNo++;
                break;
            
            case 2: //for qudratic curve
                svgMain.addQudraticCurve({
                    d: "M10,10 Q 20,10 20,20",
                    class: `primary_object${objectNo}`,
                    objectNumber: objectNo
                });
                svgMain.addLine({
                    x1: 10,
                    y1: 10,
                    x2: 20,
                    y2: 10,
                    class: `secondary_object${objectNo}`,
                    objectNumber: objectNo 
                });
                svgMain.addLine({
                    x1: 20,
                    y1: 10,
                    x2: 20,
                    y2: 20,
                    class: `secondary_object${objectNo}`,
                    objectNumber: objectNo
                });
                svgMain.addCircle({
                    cx: 10,
                    cy: 10,
                    r:1,
                    class: `secondary_object${objectNo}`,
                    objectNumber: objectNo,
                    objectType: 'qudraticCurve',
                    circlePos : 'topLeft'
                });
                svgMain.addCircle({
                    cx: 20,
                    cy: 10,
                    r:1,
                    class: `secondary_object${objectNo}`,
                    objectNumber: objectNo,
                    objectType: 'qudraticCurve',
                    circlePos : 'topRight'
                });
                svgMain.addCircle({
                    cx: 20,
                    cy: 20,
                    r:1,
                    class: `secondary_object${objectNo}`,
                    objectNumber: objectNo,
                    objectType: 'qudraticCurve',
                    circlePos : 'bottomRight'
                });
                objectNo++;
                break;
        }
    })
}

svgContainer.onload = (event)=> {
    let svg = event.target;

    svg.addEventListener("mousedown",startDrag);
    svg.addEventListener("mousemove",drag);
    svg.addEventListener("mouseup",endDrag);
    // svg.addEventListener("mouseleave",endDrag);
    svg.addEventListener("focus",()=>{});
    svg.addEventListener("keydown",keyFun);
    
    let selectedObj = null;
    let lastSelectedObj = null;
    let primaryObj = null;

    function startDrag(event) {
        selectedObj = event.target;
        if((event.target.getAttribute("class")).includes("primary_object")){
            if(primaryObj != null){
                if((primaryObj.getAttribute("objectNumber") != selectedObj.getAttribute("objectNumber")) || (selectedObj == document.querySelector("#svgMain"))){
                    hideSecondaryObjects(primaryObj);
                }
            }
            primaryObj = event.target;
            showSecondaryObjects(primaryObj);
        }
    }

    function drag(event) {
        if(selectedObj) {
            const objNo = Number(selectedObj.getAttribute("objectNumber"));
            const objectType = selectedObj.getAttribute("objectType");
            if(objectType == 'Line') {
                if(selectedObj.getAttribute("circlePos") == 'left') {
                    let coord = getMousePosition(event);
                    selectedObj.setAttribute("cx",Math.floor(coord.x));
                    selectedObj.setAttribute("cy",Math.floor(coord.y));

                    const lineObj = document.querySelector(`.primary_object${objNo}`);
                    lineObj.setAttribute("x1", Math.floor(coord.x));
                    lineObj.setAttribute("y1", Math.floor(coord.y));
                }
                else
                {
                    let coord = getMousePosition(event);
                    selectedObj.setAttribute("cx",Math.floor(coord.x));
                    selectedObj.setAttribute("cy",Math.floor(coord.y));

                    const lineObj = document.querySelector(`.primary_object${objNo}`);
                    lineObj.setAttribute("x2", Math.floor(coord.x));
                    lineObj.setAttribute("y2", Math.floor(coord.y));
                }
            }
            else if(objectType == 'cubicCurve') {
                let regEx, coord = getMousePosition(event);
                let pathDElement = document.querySelector(`.primary_object${objNo}`);
                const circlePos = selectedObj.getAttribute("circlePos");
                const lineObj = document.querySelectorAll(`.secondary_object${objNo}`);
                switch(circlePos) {
                    case 'topLeft':
                        selectedObj.setAttribute("cx",Math.floor(coord.x));
                        selectedObj.setAttribute("cy",Math.floor(coord.y));

                        lineObj[0].setAttribute("x1", Math.floor(coord.x));
                        lineObj[0].setAttribute("y1", Math.floor(coord.y));
                        regEx = /m\d*\,\d*/i;;
                        pathDElement.setAttribute("d",pathDElement.getAttribute("d").replace(regEx,`M${coord.x},${coord.y}`));
                        break;

                    case 'bottomLeft':
                        selectedObj.setAttribute("cx",Math.floor(coord.x));
                        selectedObj.setAttribute("cy",Math.floor(coord.y));

                        lineObj[0].setAttribute("x2", Math.floor(coord.x));
                        lineObj[0].setAttribute("y2", Math.floor(coord.y));
                        regEx = /c\s*\d*\s*\,\s*\d*/i;
                        pathDElement.setAttribute("d",pathDElement.getAttribute("d").replace(regEx,`C${coord.x},${coord.y}`));
                        break;

                    case 'topRight':
                        selectedObj.setAttribute("cx",Math.floor(coord.x));
                        selectedObj.setAttribute("cy",Math.floor(coord.y));

                        lineObj[3].setAttribute("x1", Math.floor(coord.x));
                        lineObj[3].setAttribute("y1", Math.floor(coord.y));
                        regEx =/(\s\d*\,\d*)$/i;
                        pathDElement.setAttribute("d",pathDElement.getAttribute("d").replace(regEx,` ${coord.x},${coord.y}`));
                        break;

                    case 'bottomRight':
                        selectedObj.setAttribute("cx",Math.floor(coord.x));
                        selectedObj.setAttribute("cy",Math.floor(coord.y));

                        lineObj[3].setAttribute("x2", Math.floor(coord.x));
                        lineObj[3].setAttribute("y2", Math.floor(coord.y));
                        regEx = /\b\s\d*\,\d*\s\b/i;
                        pathDElement.setAttribute("d",pathDElement.getAttribute("d").replace(regEx,` ${coord.x},${coord.y} `));
                        break;
                }
            }
            else {
                let regEx, coord = getMousePosition(event);
                let pathDElement = document.querySelector(`.primary_object${objNo}`);
                const circlePos = selectedObj.getAttribute("circlePos");
                const lineObj = document.querySelectorAll(`.secondary_object${objNo}`);
                switch(circlePos) {
                    case 'topLeft':
                        selectedObj.setAttribute("cx",Math.floor(coord.x));
                        selectedObj.setAttribute("cy",Math.floor(coord.y));

                        lineObj[0].setAttribute("x1", Math.floor(coord.x));
                        lineObj[0].setAttribute("y1", Math.floor(coord.y));
                        regEx = /m\d*\,\d*/i;;
                        pathDElement.setAttribute("d",pathDElement.getAttribute("d").replace(regEx,`M${coord.x},${coord.y}`));
                        break;

                    case 'topRight':
                        selectedObj.setAttribute("cx",Math.floor(coord.x));
                        selectedObj.setAttribute("cy",Math.floor(coord.y));

                        lineObj[0].setAttribute("x2", Math.floor(coord.x));
                        lineObj[0].setAttribute("y2", Math.floor(coord.y));
                        lineObj[1].setAttribute("x1", Math.floor(coord.x));
                        lineObj[1].setAttribute("y1", Math.floor(coord.y));
                        regEx = /q\s*\d*\,\d*/i;
                        pathDElement.setAttribute("d",pathDElement.getAttribute("d").replace(regEx,`Q${coord.x},${coord.y} `));
                        break;

                    case 'bottomRight':
                        selectedObj.setAttribute("cx",Math.floor(coord.x));
                        selectedObj.setAttribute("cy",Math.floor(coord.y));

                        lineObj[1].setAttribute("x2", Math.floor(coord.x));
                        lineObj[1].setAttribute("y2", Math.floor(coord.y));
                        regEx = /(\s\d*\,\d*)$/i;;
                        pathDElement.setAttribute("d",pathDElement.getAttribute("d").replace(regEx,` ${coord.x},${coord.y}`));
                        break;
                }
            }
            
        }
    }

    function endDrag(event) {
        lastSelectedObj = selectedObj;
        selectedObj = null;
        console.log(lastSelectedObj);
    }

    function keyFun(event) {
        if(event.key == 'Delete')
        {
            console.log(event.key);
            let svgContainer = document.querySelector("#svgMain");
            const objNum = lastSelectedObj.getAttribute("objectNumber");
            svgContainer.removeChild(document.querySelector(`.primary_object${objNum}`));
            // let secEle = document.querySelectorAll(`.secondary_object${objNo}`);
            // secEle.forEach((element) => svgContainer.removeChild(element));
            document.querySelectorAll(`.secondary_object${objNum}`).forEach((element) => svgContainer.removeChild(element));
        }
    }

    function showSecondaryObjects(obj){
        const objNum = obj.getAttribute("objectNumber");
        document.querySelectorAll(`.secondary_object${objNum}`).forEach((element) => element.setAttribute("style","visibility : visible"));
    }

    function hideSecondaryObjects(obj) {
        const objNum = obj.getAttribute("objectNumber");
        document.querySelectorAll(`.secondary_object${objNum}`).forEach((element) => element.removeAttribute("style"));
    }

    function getMousePosition(evt) {
        var CTM = svg.getScreenCTM();
        return {
          x: Math.floor((evt.clientX - CTM.e) / CTM.a),
          y: Math.floor((evt.clientY - CTM.f) / CTM.d)
        };
    }
}


