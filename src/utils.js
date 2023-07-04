import Users from './database/users'
// import {useUserStore} from './stores/user'
// const store = useUserStore()
const changeMetaTags = (meta) => {
	const metaInfo = Users[meta.id] ? Users[meta.id] : Users['0000001']
	const getSrc = (src) => new URL(`/src/assets/images/${src}`, import.meta.url).href
	console.log(metaInfo)
  document.title = `${metaInfo.name ? metaInfo.name + ' | ' : ''} KonTXT`;
  document.querySelector('meta[name="og:title"]').setAttribute("content", `${metaInfo.name ? metaInfo.name + ' | ' : ''} KonTXT`);
  document.querySelector('meta[name="og:description"]').setAttribute("content", `${metaInfo.description ? metaInfo.description : ''}`);
  document.querySelector('meta[name="description"]').setAttribute("content", `${metaInfo.description ? metaInfo.description : ''}`);
  document.querySelector('meta[name="og:image"]').setAttribute("content", `${getSrc(metaInfo.src)}`);
  // document.querySelector('meta[name="og:description"]').setAttribute("content", meta['og:description']);
	// document.querySelector('meta[name="og:image"]').setAttribute("content", meta['og:image']);
}

export { changeMetaTags }