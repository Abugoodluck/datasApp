const datas = [
    {
      id: 1,
      name: 'Bertie Yates',
      age: 29,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
    },
    {
      id: 2,
      name: 'Hester Hogan',
      age: 32,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg',
    },
    {
      id: 3,
      name: 'Larry Little',
      age: 36,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
    },
    {
      id: 4,
      name: 'Sean Walsh',
      age: 34,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    },
    {
      id: 5,
      name: 'Lola Gardner',
      age: 29,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    },
  ];

 let parent = document.querySelector('.box-container');
 let birthdayNo = document.getElementById('birthdayNo').innerText=datas.length;



 datas.map(person =>{
    const {id,name,age,image} = person;
   let elem =`<div class='box-content'><div class='img-container'><img src='${image}' alt='' class='image-left'></div><div class='box-text'><h4 class='sec-header'>${name}</h4><p class='paragraph'>Age: ${age}</p><button id="deleteBtn" class="delBtn">Delete</button></div></div>`;
   parent.insertAdjacentHTML('afterBegin', elem)
 });

function updateUI() {
  document.getElementById('birthdayNo').innerText = datas.length;
};
let deleteBtn = document.querySelectorAll('.delBtn');
 for(let i = 0; i < deleteBtn.length; i++ ) {
  deleteBtn[i].onclick = function  myfunc (index) {
     this.parentNode.parentNode.remove();
     datas.splice(index, 1)
     updateUI()
   }
 };

function clearAll () {
  datas = [];
  document.querySelector('.box-container').remove(document.querySelector('.box-content'));
  updateUI();
}


