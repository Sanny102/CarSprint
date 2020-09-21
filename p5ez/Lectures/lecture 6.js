function preload() {
    fileContent = loadStrings('Shape.txt');

}
    
    function setup() {
     createCanvas(500,400);
     coords = new Array (fileContent.length);
     for (let i = 0; i < fileContent.length; i++) {
        let tokens = splitTokens (fileContent[i])
        if (tokens.length == 2) {
        coords[i] = {x: int ( tokens[0]), y: int(tokens[1])}
    }
}
    }
    let fileContent;
    let coords;

    function draw() {
        noLoop();
     background(220);
     strokeWeight(3);
     shapeminx = coords[0].x;
     shapeminy = coords[0].y;
     shapemaxx = coords[0].x;
     shapemaxy = coords[0].y;
console.log(shapeminx);

    beginShape();
    for (let i = 0; i < coords.length; i++)
     {vertex(coords[i].x, coords[i].y);
        if (coords[i].x < shapeminx) {shapeminx = coords[i].x}
        if (coords[i].x < shapeminy) {shapemniny = coords[i].y}
        if (coords[i].x < shapemaxx) {shapemaxx = coords[i].x}
        if (coords[i].x < shapemaxy) {shapemaxy = coords[i].y}
    }

        endShape(CLOSE);
        stroke(0,0,255);
         
        for (let i =1; i <=9; i++) {

            // What x value do we have ? Easy - (minx+ (i+1)*10/100*maxx)
            let xval = shapeminx + ((i*10)*(shapemaxx - shapeminx));
            
            let ytop = 0;
            let ybot = 1000;

            for(let z = 0; z < coords.length; z++) {
                if ( z != coords.length - 1) {
                if(min (coords[z].x, coords[z+1]) < xval && max (coords [z].x, coords [z+1].x) > xval )
          let per = min(coords[z].x, coords[z+1].x + (min(coords[z].x, coords [z+1].x)));
          let lowy = min (coords [z].y,coords[z+1].y);
          let highy = max (coords[z].y,coords[z+1].y);

                let yval = lowy + ((highy-lowy)*per);
                
        
        
            if (yval>ytop) {ytop = yval}
        if(yval < ybot) {ybot = yval}       
        }
        }
        
        {
            if (min(coords[z].x, coords[0]) < xval && max(coords[z].x, coords[0].x) > xval)
            line(xval,0,xval,500);

        
    }

    }
        
}