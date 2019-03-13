export default p => {
    let rotation = 0;
  
    p.setup = function () {
      p.createCanvas(600, 400, p.WEBGL);
    };
    
    // this function is called everytime properties from react changed
    p.propsChanged = function (props) {
      if (props.rotation){
        rotation = props.rotation * Math.PI / 180;
      }
    };

    p.mouseDragged = event =>{
        // how to fire a custom event
        let e = new Event('custom', {bubbles: true, detail: event.x});
        window.dispatchEvent(e);
    }
    
    p.draw = function () {
      p.background(100);
      p.noStroke();
      p.push();
      p.rotateY(rotation);
      p.fill(100,100,120);
      p.stroke(100,100,240)
      p.box(100);
      p.pop();
    };
  };