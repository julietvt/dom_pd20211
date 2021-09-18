const users = [
  {
    id: 1,
    name: 'name1',
    surname: 'surname1',
    imgSrc: '#',
  },
  {
    id: 2,
    name: 'name2',
    surname: 'surname2',
    imgSrc: '#',
  },
  {
    id: 3,
    name: 'name3',
    surname: 'surname3',
    imgSrc: '#',
  },
];

function createUserFullName({ name, surname }) {
  const userFullNameElem = document.createElement('h2');
  userFullNameElem.innerText = `${name} ${surname}`;
  return userFullNameElem;
}

function createUserImage({ imageSrc }) {
  const userImgContElem = document.createElement('div');
  userImgContElem.classList.add('userImgContainer');
  const userImageElem = document.createElement('img');
  userImageElem.classList.add('userImage');
  userImageElem.setAttribute('src', user.imageSrc);
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
