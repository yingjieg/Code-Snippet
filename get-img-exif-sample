```html
<input type="file" id="image-input" accept="image/jpeg, image/png, image/jpg" />
<img id="display-image" />
<code id="img-meta"></code>
<input name="result" id="result" type="hidden" />

```


```js
var script = document.createElement('script');
script.src = "https://projecteng.oss-cn-shanghai.aliyuncs.com/a9_js/exif-js.js";
script.onload = function () {
    console.log("js loaded");
};

document.head.appendChild(script); 


const $image_input = document.querySelector("#image-input");

$image_input.addEventListener("change", function() {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const uploaded_image = reader.result;
    $uploadedImg = document.querySelector("#display-image");
    $uploadedImg.src = `${uploaded_image}`;
    $uploadedImg.onload = getExif;
  });
  reader.readAsDataURL(this.files[0]);
});



function getExif() {
    const $uploadedImg = document.getElementById("display-image");
    $uploadedImg.exifdata = null; // clear cache
    
    const $metaDisplay = document.getElementById("img-meta");

    EXIF.getData($uploadedImg, function() {
        const allMetaData = EXIF.getAllTags(this);
        console.log(allMetaData);
        $metaDisplay.textContent = JSON.stringify(allMetaData, null, "\t");
    });

}
```
