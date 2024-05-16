
function display(){
    let storedVal = JSON.parse(localStorage.getItem('items')) || [];
    const list = document.getElementById('listItems');
  //  console.log(storedVal);
    list.innerHTML = '';
    storedVal.forEach((element,index) => {
       // console.log(element);
        const createlist = document.createElement('li');
        const val = document.createTextNode(element);
         
        const btncls = document.createElement('div');
        btncls.className = 'btn-cls';

        const editButton = document.createElement('button');
        editButton.textContent = 'edit';
        editButton.className='edit-button';
        editButton.addEventListener('click',()=>editItem(index));


        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className='delete-button';
        deleteButton.addEventListener('click', () => deleteItem(index));
        
        createlist.appendChild(val);
        btncls.appendChild(editButton);
        btncls.appendChild(deleteButton);
        createlist.appendChild(btncls);
        list.appendChild(createlist);

    });
    
}
display();


function addItem(){
    const inputVal = document.getElementById('item').value;
    //console.log(inputVal);
    if(inputVal != ''){
    let storedItems = JSON.parse(localStorage.getItem("items")) || [];

    storedItems.push(inputVal);

    localStorage.setItem("items",JSON.stringify(storedItems));
    document.getElementById('item').value = '';
    display();
    }
    else{
        alert("please enter any item");
    }
}


function deleteItem(index){
    if (confirm("Are you sure you want to delete this item?")) {
        let storedVal = JSON.parse(localStorage.getItem('items'));
        storedVal.splice(index, 1);
        localStorage.setItem("items", JSON.stringify(storedVal));
        display();
    } 
}

function editItem(index){
    let storedVal = JSON.parse(localStorage.getItem('items'));
    let newItem = prompt("edit here",storedVal[index]);
    if(newItem != '' && newItem != storedVal[index]){
      //  alert("success");
        storedVal[index] = newItem;
        localStorage.setItem("items",JSON.stringify(storedVal));
        display();
    }
}

document.getElementById('btncls').addEventListener('click', addItem);
    