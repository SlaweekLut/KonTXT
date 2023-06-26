// async function updateMetaTags(req, res) {

//   // Get and parse products array from app src
//   const productsSrc = `${__dirname}/client/src/products.js`;
//   const productsText = await fs.promises.readFile(productsSrc);
//   const productsArr = JSON.parse(productsText);

//   // Retrieve product object that includes the current URL item id
//   const productID = (req.originalUrl.match(/\d{9}/) || [])[0];
//   const productObj = productsArr.find(prod => prod.id == productID);

//   // Update the meta tag properties in the built bundle w/ Cheerio
//   const baseSrc = `${__dirname}/client//dist/index.html`;
//   const baseHTML = await fs.promises.readFile(baseSrc);
//   const $base = $(baseHTML);
//   const $url = $base.find('meta[property=og\\:url]');
//   const $title = $base.find('meta[property=og\\:title]');
//   const $image = $base.find('meta[property=og\\:image]');
//   $desc = $base.find('meta[property=og\\:description]');

//   $url.attr('content', `https://${req.get('host')}${req.originalUrl}`);
//   $title.attr('content', productObj.title);
//   $image.attr('content', productObj.ogImage);
//   $desc.attr('content', productObj.description);

//   // Send the modified HTML as the response
//   res.send($.html($base));
// }

// export default app.use('/*', (req, res, next) => {
//   if (/^\/api\//.test(req.originalUrl)) next();
//   else if (/\/item\//.test(req.originalUrl)) updateMetaTags(req, res);
//   else res.sendFile(`${__dirname}/client/dist/index.html`);
// });