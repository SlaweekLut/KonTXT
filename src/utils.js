import Users from './database/users'
// import {useUserStore} from './stores/user'
// const store = useUserStore()
const changeMetaTags = (meta) => {
	const metaInfo = Users[meta.id] ? Users[meta.id] : Users['0000001']
	const getSrc = (src) => new URL(`/src/assets/images/${src}`, import.meta.url).href
	// console.log(metaInfo)
  document.title = `${metaInfo.name ? metaInfo.name + ' | ' : ''} KonTXT`;
  document.querySelector('meta[name="og:type"]').setAttribute("content", `${metaInfo.id ? 'profile' : 'website'}`);
  document.querySelector('meta[name="og:title"]').setAttribute("content", `${metaInfo.name ? metaInfo.name + ' | ' : ''} KonTXT`);
  document.querySelector('meta[name="og:description"]').setAttribute("content", `${metaInfo.description ? metaInfo.description : ''}`);
  document.querySelector('meta[name="description"]').setAttribute("content", `${metaInfo.description ? metaInfo.description : ''}`);
  document.querySelector('meta[name="og:image"]').setAttribute("content", `${getSrc(metaInfo.src)}`);
  document.querySelector('meta[name="profile:first_name"]').setAttribute("content", metaInfo.name.split(' ')[0] ? metaInfo.name.split(' ')[0] : 'Имя');
  document.querySelector('meta[name="profile:last_name"]').setAttribute("content", metaInfo.name.split(' ')[1] ? metaInfo.name.split(' ')[1] : 'Фамилия');
  document.querySelector('meta[name="profile:username"]').setAttribute("content", metaInfo.name ? metaInfo.name : 'Логин');
  document.querySelector('meta[name="profile:gender"]').setAttribute("content", metaInfo.gender ? metaInfo.gender : 'male/female');
  document.querySelector('meta[name="profile:email"]').setAttribute("content", metaInfo.email ? metaInfo.email : 'электронный адрес');
  document.querySelector('meta[name="profile:phone_number"]').setAttribute("content", metaInfo.phone ? metaInfo.phone : 'номер телефона');
  // document.querySelector('meta[name="og:description"]').setAttribute("content", meta['og:description']);
	// document.querySelector('meta[name="og:image"]').setAttribute("content", meta['og:image']);
}

export { changeMetaTags }