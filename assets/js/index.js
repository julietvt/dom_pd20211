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

// функция для одного пользователя для 1 карточки
function createUserListItemElem(user) {
  //li
  const userListItemElem = document.createElement('li');
  //контейнер для карточки
  const userCardWrapperElem = document.createElement('div');
  userCardWrapperElem.classList.add('userCardWrapper');
  // контейнер для изображение
  const userImgContElem = document.createElement('div');
  userImgContElem.classList.add('userImgContainer');
  //img
  const userImageElem = document.createElement('img');
  userImageElem.classList.add('userImage');
  userImageElem.setAttribute('src', user.imageSrc);
  userImageElem.setAttribute('alt', 'userphoto');
  //соединить
  userImgContElem.append(userImageElem);
  userCardWrapperElem.append(userImgContElem);
  //fullname
  const userFullNameElem = document.createElement('h2');
  userFullNameElem.innerText = `${user.name} ${user.surname}`;
  userCardWrapperElem.append(userFullNameElem);

  //собираем в карточку все
  userListItemElem.append(userCardWrapperElem);
  userListItemElem.setAttribute('id', user.id);
  return userListItemElem;
}
