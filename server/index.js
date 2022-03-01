
const express = require('express');
const app=express();
const port=4000;
const cors =require("cors");
const puppeteer = require('puppeteer');         // Require Puppeteer module

app.use(express.urlencoded({
  extended:true
}));
app.use(express.json());
app.use(cors());

app.get("/",cors(),async(req,res)=>{
  res.send("this is working")
})
app.post("/screen-shot",async(req,res)=>{
  let {currentUrl}=req.body
  console.log(currentUrl)
                                                  // Define Screenshot function 
    const browser = await puppeteer.launch();    // Launch a "browser"
    const page = await browser.newPage();        // Open a new page
    await page.goto(currentUrl);                        // Go to the website
    await page.screenshot({                      // Screenshot the website using defined options
     path: `./screenshot${Date.now()}.png`,                   // Save the screenshot in current directory
     fullPage: true                              // take a fullpage screenshot
   });
   await page.close();                           // Close the website
   await browser.close();                        // Close the browser
})
app.listen(port,()=>{
  console.log(`listening at http://localhost:${port}`)
})

 
