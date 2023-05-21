// const loginLink="https://www.hackerrank.com/auth/login"

let puppeteer=require('puppeteer')
let email='basafi1927@gam1fy.com'
let pswd='ayush123'
const codeFile = require("./code");



console.log('Before')
let page
let browserWillbeLauncedPromise=puppeteer.launch({
    headless:false,
    defaultViewport:null,
    args: ['--start-maximized']
})

 browserWillbeLauncedPromise.then(function(browserInstance){
    let newTabPromise=browserInstance.newPage()
    return newTabPromise
 }).then(function(newTab){
    page=newTab;
    console.log("new tab opened")
    let pageWillbeOpenedPromise=newTab.goto("https://www.hackerrank.com/auth/login")
    return pageWillbeOpenedPromise;
 }).then(function(){ 
    let typedEmailPromise=page.type("input[id='input-1']",email,{
    delay: 50,
 });
 return typedEmailPromise;
}).then(function(){
    let typedPasswordPromise=page.type("input[id='input-2']",pswd,{
      delay:50 , 
    });
    return typedPasswordPromise;
}).then(function(){
  let loginPromise=page.click('button[data-analytics="LoginPassword"]',{
    delay:50,
  });
  return loginPromise
}).then(function () {
    let algoWillBeclickedPromise = waitAndClick(
      '.topic-card a[data-attr1="algorithms"]',page)
   
    return algoWillBeclickedPromise;
  }).then(function () {
    let getToWarmupPromise = waitAndClick("input[value='warmup']", page);
    return getToWarmupPromise;
  }).then(function () {
    let ChallengesArrPromise = page.$$(
      ".ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled",
      { delay: 100 }
    );

    return ChallengesArrPromise;
  })
  .then(function (questionsArr) {
    console.log("No of Questions" + questionsArr.length);

    let questionWillBeSolvedPromise = questionSolver(
      page,
      questionsArr[0],
      codeFile.answers[0]
    );
    return questionWillBeSolvedPromise
  });


  function waitAndClick(selector, cPage) {
    return new Promise(function (resolve, reject) {
      let waitForModalPromise = cPage.waitForSelector(selector);
      waitForModalPromise.then(function () {
          let clickModalPromise = cPage.click(selector, { delay: 100 });
          return clickModalPromise;
        }).then(function () {
          resolve();
        }).catch(function () {
          reject();
        });
    });
  }

  function questionSolver(page, question, answer) {
    return new Promise(function (resolve, reject) {
      let questionWillBeClickedPromise = question.click();
      questionWillBeClickedPromise
        .then(function () {
          let waitForEditorPromise = waitAndClick(
            ".monaco-editor.no-user-select.vs",
            page
          );
          return waitForEditorPromise;
        })
        .then(function () {
          return waitAndClick(".checkbox-input", page);
        })
        .then(function () {
          return page.waitForSelector(".text-area.custominput");
        })
        .then(function () {
          return page.type(".text-area.custominput", answer, { delay: 20 });
        })
        .then(function () {
          let ctrlonHoldPromise = page.keyboard.down('Control');
          return ctrlonHoldPromise
        }).then(function(){
          let AisPressedPromise = page.keyboard.press('A' , {delay : 20});
          return AisPressedPromise
        }).then(function(){
           let XisPressedPromise = page.keyboard.press('X' , {delay:20})
           return XisPressedPromise
        }).then(function(){
           let ctrlIsReleasedPromise = page.keyboard.up('Control')
           return ctrlIsReleasedPromise
        }).then(function () {
          let waitForEditorPromise = waitAndClick(
            ".monaco-editor.no-user-select.vs",
            page
          );
          return waitForEditorPromise;
        }).then(function () {
          let ctrlonHoldPromise = page.keyboard.down('Control');
          return ctrlonHoldPromise
        }).then(function(){
          let AisPressedPromise = page.keyboard.press('A' , {delay : 20});
          return AisPressedPromise
        }).then(function(){
          let VisPressedPromise = page.keyboard.press('V' , {delay:20})
          return VisPressedPromise
       }).then(function(){
        let ctrlIsReleasedPromise = page.keyboard.up('Control')
        return ctrlIsReleasedPromise
     }).then(function(){
        return page.click('.hr-monaco-submit' , {delay : 20})
     }).then(function(){
      resolve()
    }).catch(function(err){
      console.log(err)
    })
    });
  }
  

console.log('After')