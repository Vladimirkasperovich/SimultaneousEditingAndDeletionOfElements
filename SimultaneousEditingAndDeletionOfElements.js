//Добавьте ссылку на удаление в конец каждого абзаца.Сделайте так, чтобы по клику на span в нем появлялся инпут для редактирования.
/*let parents = document.querySelectorAll('#parent p');
for (let parent of parents){
    let remove = document.createElement('a');
    remove.href = 'remove';
    remove.text = 'remove';

   let span = parent.firstElementChild;
   
   span.addEventListener('click', function func(){
    let input = document.createElement('input');
    input.value = span.textContent;
    span.appendChild(input);

    input.addEventListener('blur', function(){
        span.textContent = input.value;
    })

    span.removeEventListener('click', func);
   })
    

    parent.appendChild(remove);

   
}*/ 



//Пусть теперь изначально тегов span нет:Оберните сначала текст абзаца в теги span, добавьте к этим тегам возможность редактирования, а затем добавьте в конец каждого абзаца ссылку на удаление
let parent = document.querySelectorAll('#parent p');

for (let elem of parent){
    let span = document.createElement('span');
     span.textContent = elem.textContent;
     firstTextNode = elem.firstChild,
     //elem.textContent = 'qwe'
     span.appendChild( document.createTextNode(firstTextNode.nodeValue) );
     //elem.replaceChild( span, firstTextNode );
     
  
    console.log(elem)
}



