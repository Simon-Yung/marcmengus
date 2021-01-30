// const fg = require('fast-glob');

// function searchByGlob(glob){
// 	//this function DOES NOT return the initial / slash
// 	//returns : folder/file.png
// 	//not : /folder/file.png
// 	//YOU NEED to add it in the layout file
// 	let resultArray = fg.sync(glob);
// 	return resultArray;
// }

module.exports = function(eleventyConfig) {

// 	//get every folders in /gallery
// 	const galleries = fg.sync('gallery/*', { onlyDirectories: true, deep: 0 , dot: false });

// 	//for each of the folder
// 	galleries.forEach(
// 		function (value) {

// 			//create a collection named as the folder 's name without the preceding 'gallery/' folder
// 			let title = value.replace('gallery/','');

// 			eleventyConfig.addCollection( title, function(collectionApi) {

// 				//get the images in the 'larges' folder and sort them alphabetically
// 				let collection = searchByGlob( value + "/thumbnails/*.???");
// 				collection.sort();
// 				//return collection
// 				return collection;
// 			});
// 		}

// 	);
		 

	//pass through copy for css javascript and internal images
	eleventyConfig.addPassthroughCopy({ "_includes/assets": "includes/assets" });
	eleventyConfig.addPassthroughCopy({ "gallery": "gallery" });
	eleventyConfig.addPassthroughCopy({ "favicon.ico": "favicon.ico" });
	eleventyConfig.addPassthroughCopy({ "favicon.png": "favicon.png" });

};