function explainCallBack (name, age, task) {
    console.log('Hello', name);
    console.log('Your age is:', age);
    task()
}
function takeShowar(){
    console.log('Take Shower');
}
function takeScore(){
    console.log('Score nia acish');
}
explainCallBack('Nowaj Chowdhury', 22, takeShowar)
explainCallBack('Gnostic Sabbir', 21, takeScore);