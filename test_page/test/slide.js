var image_name = {
	"image/image1.png":0,
	"image/image2.png":1,
	"image/image3.png":2,
	"image/image4.png":3,
	"image/image5.png":4
}

function fillSlide() {
	var slide = document.getElementById("slide");
	slide.innerHTML = "";
	var counter = 0;
	// load the image in the div block
	for(var idx in image_name) {
		var div_tag = document.createElement("span");
		div_tag.id = "divImageBlockId" + counter;
		div_tag.classList.add("divImageBlockClass");

		var img_tag = document.createElement("img")
		img_tag.src = idx;
		img_tag.classList.add("imgBlockClass");
		img_tag.id = "imgBlockId" + counter;
		var temp = document.createAttribute("onclick");
		temp.value = "rotate(" +  image_name[idx] + ")";
		img_tag.setAttributeNode(temp)

		div_tag.appendChild(img_tag);
		slide.appendChild(div_tag);
		counter++;
	}
}

function loadSlide() {
	fillSlide();
}


function rotate(idx) {

	switch(idx){
		case 0:
			image_name = {
				"image/image4.png":4-1,
				"image/image5.png":5-1,
				"image/image1.png":1-1,
				"image/image2.png":2-1,
				"image/image3.png":3-1
			};
			break;
		case 1:
			image_name = {
				"image/image5.png":5-1,
				"image/image1.png":1-1,
				"image/image2.png":2-1,
				"image/image3.png":3-1,
				"image/image4.png":4-1
			};
			break;
		case 2:
			image_name = {
				"image/image1.png":1-1,
				"image/image2.png":2-1,
				"image/image3.png":3-1,
				"image/image4.png":4-1,
				"image/image5.png":5-1
			};
			break;
		case 3:
			image_name = {
				"image/image2.png":2-1,
				"image/image3.png":3-1,
				"image/image4.png":4-1,
				"image/image5.png":5-1,
				"image/image1.png":1-1
			};
			break;
		case 4:
			image_name = {
				"image/image3.png":3-1,
				"image/image4.png":4-1,
				"image/image5.png":5-1,
				"image/image1.png":1-1,
				"image/image2.png":2-1
			};
			break;
		default:
			image_name = {
				"image/image1.png":1-1,
				"image/image2.png":2-1,
				"image/image3.png":3-1,
				"image/image4.png":4-1,
				"image/image5.png":5-1,
			}
			break;
	}
	fillSlide();
}





