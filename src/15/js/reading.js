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
    // 尝试使用Array#map和 Array#join来完成下面四句话的逻辑。
    let innerText='';
    articleArr.forEach(element => {
        innerText+='<span>'+element+'</span> ';
    });
    newArticleContent.innerHTML=innerText;
    addNewWord();
},true);

const addNewWord=()=>{
    // 这里需要注意的是 wordList是一个NodeList，它并不是数组
    // 所以不同浏览器对forEach支持的程度有限，比如IE不支持
    // 你可以使用 Array.from 将它转化成Array，然后就可以安全地使用forEach。
    // https://developer.mozilla.org/en-US/docs/Web/API/NodeList
    const wordList=newArticleContent.querySelectorAll('span');
    wordList.forEach((item)=>{
        item.addEventListener('dblclick',()=>{
            // 这里的单词添加是使用innerHTML添加的，这会有两个问题
            // 1. 如果单词量多的话，每次添加都得整个列表都要重橷渲染
            // 2. 当选中某项后，添加时选中态会消失
            // 建议使用appendChild，createElement等DOM操作来完成
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
// 这个删除有个问题，就是删掉后selectedWord就会变得无效了，
// 所以删除，上移和下移可能就有bug了
const onDeleteWord=(node)=>{
    node && newWordsList.removeChild(node);
};
btnClickEvent(deleteBtn, 'click', onDeleteWord);

//上移单词
const onUpSelecteWord=(node)=>{
    if(node){
        // 目前这种上移下移，在你的例子中可行
        // 但是如果li之间有换行或者空格就会不行
        // 因为li的previousSibling或nextSibling不是li，而是中间的空白节点。
        // 在jquery中，使用prev和next是可以的，因为它还会判断nodeType的类型
        // 可以见源码：https://github.com/jquery/jquery/blob/master/src/traversing.js#L126
        // 判断在108行。
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
        // lastElementChild这个兼容性不好
        // https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/lastElementChild
        const lastNode=newWordsList.lastElementChild;
        if(node===lastNode){
            return;
        }
        newWordsList.insertBefore(nextNode,node);      
    }
};
btnClickEvent(downBtn, 'click', onDownSelecteWord);