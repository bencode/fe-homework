//获取元素
const reading=document.querySelector('.reading');
const articleInputBox=reading.querySelector('.article-inputBox');
const articleShowPanel=reading.querySelector('.article-showPanel');
const newWords=reading.querySelector('.new-words');
const oldArticleContent=articleInputBox.querySelector('.old-article-content');
const newArticleContent=articleShowPanel.querySelector('.new-article-content');
const newWordsList=newWords.querySelector('.new-words-list');
let newWordItem=null;
let wordList=null;

articleInputBox.addEventListener('blur',function(){
    const oldArticleValue=oldArticleContent.value.trim();
    const articleArr=oldArticleValue.split(/\s+/);
    let innerText='';
    articleArr.forEach(element => {
        innerText+='<span>'+element+'</span> ';
    });
    newArticleContent.innerHTML=innerText;
    wordList=newArticleContent.querySelectorAll('span');
    addNewWord();
},true);

function addNewWord(){
    wordList.forEach(function(item){
        item.addEventListener('dblclick',function(){
            const newWord=item.innerHTML;
            newWordsList.innerHTML+='<li class="list-group-item">'+newWord+'</li>';
            newWordItem=newWordsList.querySelectorAll('li');
            selectedWordList();
        });
    });
}
function selectedWordList(){
    newWordItem.forEach(function(item){
        item.addEventListener('click',function(){
            newWordItem.forEach(function(item){
                item.classList.remove('active');
            });
            item.classList.add('active');
        });
    });
}
function deleteWord(){

}

