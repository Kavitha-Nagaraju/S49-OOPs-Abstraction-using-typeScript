import React from 'react'
import img1 from "../images/img1.jpeg"
import img2 from "../images/img2.webp"
import img3 from "../images/img3.jpeg"
function Navigation() {
  return (
    <div className='navigation'>
        <h1 id="nav">Naviagation</h1>
     <a href="#image2">Click here to move Image2</a><br></br>
     <a href="#image3">Click her to move Image3</a>
     <h1 className="image1">Image1</h1>
      <div className='div1' id="image1">
        <img src={img1} width="400px"></img>
        <p>We're sorry we've asked you a few times recently, but it's Friday, 13 September, and our fundraiser doesn't last long. Wikipedia is free and doesn't rely on ads. If everyone reading this gave ₹ 25, we'd reach our goal in a few hours. Just 2% of our readers donate, so if Wikipedia has given you ₹ 25 worth of knowledge, kindly donate today. Any contribution helps, whether it's ₹ 25 or ₹ 1,000.We're sorry we've asked you a few times recently, but it's Friday, 13 September, and our fundraiser doesn't last long. Wikipedia is free and doesn't rely on ads. If everyone reading this gave ₹ 25, we'd reach our goal in a few hours. Just 2% of our readers donate, so if Wikipedia has given you ₹ 25 worth of knowledge, kindly donate today. Any contribution helps, whether it's ₹ 25 or ₹ 1,000.We're sorry we've asked you a few times recently, but it's Friday, 13 September, and our fundraiser doesn't last long. Wikipedia is free and doesn't rely on ads. If everyone reading this gave ₹ 25, we'd reach our goal in a few hours. Just 2% of our readers donate, so if Wikipedia has given you ₹ 25 worth of knowledge, kindly donate today. Any contribution helps, whether it's ₹ 25 or ₹ 1,000.</p>
      </div>
      
      <h1 className="image2"> Image2</h1>
      <a href="#image1">Click here to move Image1</a><br></br>
      <a href="#image3">Click her to move Image3</a>
      <div className='div1' id="image2">
        <p>We're sorry we've asked you a few times recently, but it's Friday, 13 September, and our fundraiser doesn't last long. Wikipedia is free and doesn't rely on ads. If everyone reading this gave ₹ 25, we'd reach our goal in a few hours. Just 2% of our readers donate, so if Wikipedia has given you ₹ 25 worth of knowledge, kindly donate today. Any contribution helps, whether it's ₹ 25 or ₹ 1,000.We're sorry we've asked you a few times recently, but it's Friday, 13 September, and our fundraiser doesn't last long. Wikipedia is free and doesn't rely on ads. If everyone reading this gave ₹ 25, we'd reach our goal in a few hours. Just 2% of our readers donate, so if Wikipedia has given you ₹ 25 worth of knowledge, kindly donate today. Any contribution helps, whether it's ₹ 25 or ₹ 1,000.We're sorry we've asked you a few times recently, but it's Friday, 13 September, and our fundraiser doesn't last long. Wikipedia is free and doesn't rely on ads. If everyone reading this gave ₹ 25, we'd reach our goal in a few hours. Just 2% of our readers donate, so if Wikipedia has given you ₹ 25 worth of knowledge, kindly donate today. Any contribution helps, whether it's ₹ 25 or ₹ 1,000.</p>
        <img src={img2} width="400px"></img>
      </div>
      
      <a href="#image1">Click here to move Image1</a><br></br>
      <a href="#image2">Click here to move Image2</a>
      <h1>Image3</h1>
      <div className='div1' id="image3">
        <img src={img3} width="400px"></img>
        <p>We're sorry we've asked you a few times recently, but it's Friday, 13 September, and our fundraiser doesn't last long. Wikipedia is free and doesn't rely on ads. If everyone reading this gave ₹ 25, we'd reach our goal in a few hours. Just 2% of our readers donate, so if Wikipedia has given you ₹ 25 worth of knowledge, kindly donate today. Any contribution helps, whether it's ₹ 25 or ₹ 1,000.We're sorry we've asked you a few times recently, but it's Friday, 13 September, and our fundraiser doesn't last long. Wikipedia is free and doesn't rely on ads. If everyone reading this gave ₹ 25, we'd reach our goal in a few hours. Just 2% of our readers donate, so if Wikipedia has given you ₹ 25 worth of knowledge, kindly donate today. Any contribution helps, whether it's ₹ 25 or ₹ 1,000.We're sorry we've asked you a few times recently, but it's Friday, 13 September, and our fundraiser doesn't last long. Wikipedia is free and doesn't rely on ads. If everyone reading this gave ₹ 25, we'd reach our goal in a few hours. Just 2% of our readers donate, so if Wikipedia has given you ₹ 25 worth of knowledge, kindly donate today. Any contribution helps, whether it's ₹ 25 or ₹ 1,000.</p>
      </div>
     
    </div>
  )
}

export default Navigation
