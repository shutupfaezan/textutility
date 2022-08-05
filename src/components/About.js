import React from 'react'

export default function About(props) {
let myStyle={
    color: props.mode==="dark"?"white":"black",
    backgroundColor: props.mode==="dark"?"black":"white"
}

  return (
    <div>
                <div className="accordion" id="accordionExample" style={myStyle}>
                    <h2 className="mx-2 my-2 mb-4">About</h2>
            <div className="accordion-item ma-3">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                <strong>Text Utility</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                This is a website created using multiple utility and provides varios functions such as Uppercase, LowerCase, Copy to Clipboard, Remove spaces and Count words.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                <strong>Created by a student, for a student</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                   This website was created by me, a student to help students like you to not manually change the way text is written. As this keeps growing i will keep on growing the utility on this website to include more buttons and stats that will amke your life easier.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                <strong>Creator</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    So this was my first project using react and im quite a newbie at this and here are like thousands of word counters but hope this helps.
                </div>
                </div>
            </div>
            </div>
    </div>
  )
}
