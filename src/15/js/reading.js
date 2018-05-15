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
let selectedWord=null;

articleInputBox.addEventListener('blur',()=>{
    const oldArticleValue=oldArticleContent.value.trim();
    const articleArr=oldArticleValue.split(/\b/);
    let innerText='';
    articleArr.forEach(element => {
        innerText+='<span>'+element+'</span> ';
    });
    newArticleContent.innerHTML=innerText;
    addNewWord();
},true);

const addNewWord=()=>{
    const wordList=newArticleContent.querySelectorAll('span');
    wordList.forEach((item)=>{
        item.addEventListener('dblclick',()=>{
            newWordsList.innerHTML+='<li class="list-group-item">'+item.innerHTML+'</li>';
            newWordsItem=newWordsList.querySelectorAll('li');
            selectedWordList();
        });
    });
};

const selectedWordList=()=>{
    newWordsItem.forEach((item)=>{
        item.addEventListener('click',()=>{
            newWordsItem.forEach((item)=>{
                item.classList.remove('active');
            });
            item.classList.add('active');
            selectedWord=item;
        });
    });
};

const btnClickEvent=(obj, eventType, callback)=>{
    obj.addEventListener(eventType,()=>{
        callback(selectedWord);
    });
};

//删除单词
const onDeleteWord=(node)=>{
    node && newWordsList.removeChild(node);
};
btnClickEvent(deleteBtn, 'click', onDeleteWord);

//上移单词
const onUpSelecteWord=(node)=>{
    if(node){
        const previousNode=node.previousSibling;
        const firstNode=newWordsList.firstElementChild;
        if(node===firstNode){
            return;
        }
        newWordsList.insertBefore(node,previousNode);
    }
};
btnClickEvent(upBtn, 'click', onUpSelecteWord);

//下移单词
const onDownSelecteWord=(node)=>{
    if(node){
        const nextNode=node.nextSibling;
        const lastNode=newWordsList.lastElementChild;
        if(node===lastNode){
            return;
        }
        newWordsList.insertBefore(nextNode,node);      
    }
};
btnClickEvent(downBtn, 'click', onDownSelecteWord);