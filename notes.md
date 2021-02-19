body {
    width: 960px;
    margin: 40px auto;
    padding: 40px 120px;
  }
  p {
    font-family: "Times New Roman", Times, serif;
    font-size: 1.3em;
    color: rgb(150, 143, 135);
    text-align: left;
    font-weight: 100;
  }
  h1 {
    font-family: 'Oswald', sans-serif;
    font-size: 2.7em;
    font-weight: 500;
    color: rgb(0, 0, 0);
    padding-top: 25px;
    margin-bottom: 0px;
  }
  h2 {
    line-height: 5px;
    color: rgb(112, 97, 79);
  }
  button {   
    width: 210px;
    height: 60px; 
    background-color: rgb(213, 104, 64);
    text-transform: uppercase;
    border: none;
  }
  .thin-diagonal-lines{
    margin-top: 25px;
    width: 960px;
    height: 14px;
    background-size: 4px 4px; 
    background-image: linear-gradient(45deg, transparent 46%, rgb(170, 170, 170) 49%, rgb(170, 170, 170) 51%, transparent 55%);
  }
  .sub-title{
    font-family: 'Oswald', sans-serif;
    font-weight: 300;
    font-size: 1em;
    text-transform: uppercase; 
    color: rgb(185, 184, 184); 
  }
  
/* LAYOUT */

  .box-5 {
    float: left;
    width: 5%; 
  }
  .box-10 {
    float: left;
    width: 10%; 
  }
  .box-25 {
    float: left;
    width: 25%; 
  }
  .box-47 {
    float: left;
    width: 47.5%; 
  }
  .box-50 {
    float: left;
    width: 50%; 
  }
  .box-65 {
    float: left;
    width: 65%; 
  }
  .clearfix::after {
    content: "";
    clear: both;
    display: table;
  }

  /* HEADER */

  .logo{
    float: left;
    margin-right: 10px;
  }
    header p {
    display:  block;
    margin: 0;
    line-height: 27px;
  }
  header .title {
    font-family: 'Yellowtail', cursive;
    font-size: 2.7em;
    color: rgb(0, 0, 0);  
  }
  header .sub-title {
    font-family: 'Yanone Kaffeesatz', sans-serif;
    font-weight: 200;
    font-size: 0.9em;
    text-transform: uppercase; 
    color: rgb(72, 72, 72);  
  }
  header .share-links{
    text-align: right; 
    font-size: 5px;
}
  header .share-links-2{
    margin-left: 7px;
}

/* MAIN */

  .timestamp{
    text-align: left;  
    line-height: 5px;
  }
  .print{
    text-align: right; 
    font-size: 0.8em;
  }
  .main-img{
    width: 960px;
    margin-top: 20px;
  }
  .main-text{
    text-indent: 2em;
  }
 .form {
    background-image: url("../assets/list-bg.png");
    background-size: 960px 360px;  
    padding-left: 3em;
    padding-top: 42px;
    padding-bottom: 50px;
    font-family: 'Sniglet', cursive;
    font-weight: 400;
    font-size: 1.4em; 
    line-height: 38px;
    color: rgb(112, 97, 79);
  } 
  input[type="checkbox"].cust-checkbox {
    display: none; 
  }
  input[type='checkbox'].cust-checkbox ~ .check-toggle{
    height: 0.6em;
    width: 0.6em;
    display:inline-block;
    position: relative;
    padding: 0 0 0 0px;
    border-style: solid;
    border-color: rgb(179, 165, 165);
    border-radius: 5px; 
    border-width: thin;
    cursor: pointer;
    }   
  input[type='checkbox'].cust-checkbox:checked ~ .check-toggle::after {
    content: "\2714";
    position: absolute;
    font-size: 0.8em;
    color: rgb(184, 159, 159);
    left: calc(50% - 4px);
    top: calc(50% - 20px);
    }
  .label{
    margin-left: 0.5em;
    }
  .done {
    text-decoration: line-through; 
  }
  .author-img {
    margin-top: 25px;
  }
 .bio {
     margin-top: 20px;
     margin-bottom: 40px;
 }
  .share-button {
    font-family: 'Oswald', sans-serif;
    font-weight: 200;
    font-size: 1.3em;
    color: rgb(255, 255, 255);
    margin: 25px;
    cursor: pointer;
  }
  

 /* FOOTER */
  footer div {
    text-align: center;
    color: rgb(182, 181, 181); 
    font-size: 1.1em;
    margin: 0;
    display:  block;
  }
 .line{
    font-size: 1.25em;
 }
 
 
 
 
 
 
 
 ////////////////////////////////////////////////
 
 <!DOCTYPE html>
<html>
<head>
  <title>Delicious | Chocolate Pizza</title>
  <link rel="stylesheet" href="style2.css">
  <link href="https://fonts.googleapis.com/css?family=Yellowtail&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Yanone+Kaffeesatz:200,300,400,700&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Sniglet:400,800&display=swap&subset=latin-ext" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Oswald:400,500,600&display=swap" rel="stylesheet">
  
</head>
<body>
    <header>
        <div class="clearfix">
            <div class="box-50">
                <img class ="logo" src="assets/logo.png" alt="logo"/>
                <p class = "title">Delicious</p>
                <p class= "sub-title">the best food blog on the web.</p>
            </div>
            <div class="box-50 share-links">
                    <a href =#><img src="assets/fb-icon.png" alt="facebook"/></a>
                    <a href =#><img src="assets/twit-icon.png" alt="twitter"/></a>
                    <a href =#><img src="assets/gp-icon.png" alt="google plus"/></a>
                    <a href =#><img src="assets/insta-icon.png" alt="instagram"/></a>
                    <a href =#><img src="assets/flic-icon.png" alt="flicker"/></a>
                    <a href =#><img src="assets/pint-icon.png" alt="pinterest"/></a>
                    <span class="share-links-2">
                        <a href =#><img src="assets/rss-icon.png" alt="rss"/></a>
                        <a href =#><img src="assets/mail-icon.png" alt="email"/></a>
                    </span>
            </div>
        </div>
        <div class = "thin-diagonal-lines"> </div>
    </header>
    <main>
        <h1>Chocolate Pizza</h1>
        <div class="clearfix">
            <div class="box-50 sub-title timestamp">Posted on 15 Dec 2013 / Desserts </div>
            <div class="box-50 sub-title print">
                <img id="printer-img" src="assets/print-icon.png" alt="print"/>
                Print
            </div>
        </div>

        <img class = "main-img" src="assets/choco-pizza.png" alt="pizza"/>
        
        <div class = "main-text">
            <p>For the fig-swirl: Melt butter over medium heat in a saucepan. 
            Add brown sugar and stir to dissole. Halve all of the figs and toss in the saucepan with water and lemon juice. 
            Cook over medium heat, stirring frequently, until you have a chunky-jammy mixture. 
            Add salt with one or two stirs, set aside and let cool completely.</p>
                    
            <p>Ice cream: In a small pot over medium heat, combine milk, and granulated sugar until sugar is
            completely dissolved and the milk is just barely lukewarm. 
            Whisk in the egg yolks. Set mixture in the fridge and wait until the fig mixture is cooled.</p>
                
            <p>Using an ice cream machine,  pour liquids into the frozen basin and process according to manufacturer instrctions,
            i.e., let spin and thicken for 20 minutes before adding mascarpone, fig jam mixture, and the nuts.
            Continue to process for +/- 10 minutes.  Pour semi-frozen mixture into pyrex dish or glass tupperware.
            Freeze for at least two hours before serving.</p>
        </div>
    
        <div class="clearfix form">
            <div  class="box-50">
                <label><input type="checkbox" class="cust-checkbox" ><span class="check-toggle"></span><span class = "label">11/2 cups milk</span></label><br>
                <label><input type="checkbox" class="cust-checkbox" ><span class="check-toggle"></span><span class = "label">1/2 cup mascarpone</span></label><br>
                <label><input type="checkbox" class="cust-checkbox" ><span class="check-toggle"></span><span class = "label">1/2 tsp pink salt</span></label><br>
                <label><input type="checkbox" class="cust-checkbox" ><span class="check-toggle"></span><span class = "label">1 lb Black Mission Figs</span></label><br>
                <label><input type="checkbox" class="cust-checkbox" ><span class="check-toggle"></span><span class = "label">1/2 cup brown sugar</span></label><br>
                <label><input type="checkbox" class="cust-checkbox" ><span class="check-toggle"></span><span class = "label">2-4 tbsp water</span></label>
            </div>
            <div class="box-50">
                <label><input type="checkbox" class="cust-checkbox" ><span class="check-toggle"></span><span class = "label">1 1/2 cups heavy cream</span></label><br>
                <label><input type="checkbox" class="cust-checkbox" checked ><span class="check-toggle"></span><span class = "label done">1/3 granulated sugar</span></label><br>
                <label><input type="checkbox" class="cust-checkbox" checked><span class="check-toggle"></span><span class = "label done">2 egg yolks</span></label><br>
                <label><input type="checkbox" class="cust-checkbox" ><span class="check-toggle"></span><span class = "label">1 lemon, juiced</span></label><br>
                <label><input type="checkbox" class="cust-checkbox" ><span class="check-toggle"></span><span class = "label">2 tbsp butter</span></label><br>
                <label><input type="checkbox" class="cust-checkbox" ><span class="check-toggle"></span><span class = "label">1 cup honey roaster pecans, roughly chopped</span></label>
            </div>
        </div><br>
        <div class = "thin-diagonal-lines"> </div>
            <div class="clearfix bio">
                <div  class="box-10 author-img">
                    <img id="author-img" src="assets/van-pic.png" alt="author"/>
                </div>
                <div  class="box-65">
                    <h2>Vanessa Stevenson</h2>
                    <p>Food enthusiast, photography fan. Add a pinch of raw foodism and that's pretty much who I am.</p>
                </div>
                <div  class="box-25">
                    <button class = "share-button">Share Recipe</button>
                </div>
         </div>
    </main>
    <footer>
        <div class="clearfix">
            <div  class="box-47">
                <hr class="line">
            </div>
            <div  class="box-5">
                <img src="assets/small-logo.png" alt="delicious logo small"/>
            </div>
            <div  class="box-47">
                <hr class="line">
            </div>
        </div>
        <div>
            <br>
            Delicious &copy; 2013 &middot; All Rights Reserved.<br/>
            Proudly published with Ghost.
        </div>
     </footer>
</body>
</html>
