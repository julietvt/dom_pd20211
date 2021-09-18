const users = [
  {
    id: 1,
    name: 'name1',
    surname: 'surname1',
    imgSrc:
      'https://i.pinimg.com/originals/8f/5a/79/8f5a7910b9d97bb15fd315bcb7111d2a.jpg',
  },
  {
    id: 2,
    name: 'name2',
    surname: 'surname2',
    imgSrc:
      'https://www.computerra.ru/wp-content/uploads/2019/12/posjk5RPMqk.jpg',
  },
  {
    id: 3,
    name: 'name3',
    surname: 'surname3',
    imgSrc:
      'https://oir.mobi/uploads/posts/2021-04/thumbs/1619786354_50-oir_mobi-p-dovolnii-kotik-zhivotnie-krasivo-foto-52.jpg',
  },
];

//получение списка с разметки в body
const userListElem = document.getElementById('userList');
// для каждого обьекта в массиве создается новая li в общем списке ul
users.forEach((user) => {
  userListElem.append(createUserListItemElem(user));
});

function createUserFullName({ name, surname }) {
  const userFullNameElem = document.createElement('h2');
  userFullNameElem.innerText = `${name} ${surname}`;
  return userFullNameElem;
}

function createUserImage({ imgSrc }) {
  const userImgContElem = document.createElement('div');
  userImgContElem.classList.add('userImgContainer');
  const userImageElem = document.createElement('img');
  userImageElem.classList.add('userImage');
  userImageElem.setAttribute('src', imgSrc);
  userImageElem.setAttribute('alt', 'userphoto');
  userImgContElem.append(userImageElem);
  return userImgContElem;
}

// функция для одного пользователя для 1 карточки
function createUserCard(user) {
  const userCardWrapperElem = document.createElement('div');
  userCardWrapperElem.classList.add('userCardWrapper');
  userCardWrapperElem.append(createUserImage(user));
  userCardWrapperElem.append(createUserFullName(user));
  return userCardWrapperElem;
}

// функция для одного пользователя для 1 карточки LI
function createUserListItemElem(user) {
  //li
  const userListItemElem = document.createElement('li');
  userListItemElem.append(createUserCard(user));
  // <li id=1></li>
  userListItemElem.setAttribute('id', user.id);
  return userListItemElem;
}
