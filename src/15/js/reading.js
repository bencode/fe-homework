//获取元素
const reading=document.querySelector('.reading');
const articleInputBox=reading.querySelector('.article-inputBox');
const articleShowPanel=reading.querySelector('.article-showPanel');
const newWords=reading.querySelector('.new-words');
const oldArticleContent=articleInputBox.querySelector('.old-article-content');
const newArticleContent=articleShowPanel.querySelector('.new-article-content');
const newWordsList=newWords.querySelector('.new-words-list');
const deleteBtn=reading.querySelector('.delete-btn');
const upBtn=reading.querySelector('.up-btn');
const downBtn=reading.querySelector('.down-btn');
let newWordsItem=null;
let wordList=null;
let selectedWord=null;

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
            newWordsItem=newWordsList.querySelectorAll('li');
            selectedWordList();
        });
    });
}
function selectedWordList(){
    newWordsItem.forEach(function(item){
        item.addEventListener('click',function(){
            newWordsItem.forEach(function(item){
                item.classList.remove('active');
            });
            item.classList.add('active');
            selectedWord=item;
        });
    });
}

//删除单词
deleteBtn.addEventListener('click',function(){
    onDeleteWord(selectedWord);
});
function onDeleteWord(node){
    newWordsList.removeChild(node);
}

//上移单词
upBtn.addEventListener('click',function(){
    onUpSelecteWord(selectedWord);
});
function onUpSelecteWord(node){
    const nextNode=node.nextSibling;
    // console.log(previousNode);
    newWordsList.insertBefore(node,nextNode);
}

//下移单词
upBtn.addEventListener('click',function(){
    onDownSelecteWord(selectedWord);
});
function onDownSelecteWord(node){
    // const nextNode=node.nextSibling;
    // newWordsList.insertBefore(nextNode,node);
}

