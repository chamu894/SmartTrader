var modellist;

async function loadFatures() {

    const response = await fetch(
            "LoadFatures"
            );

    if (response.ok) {
        const json = await response.json();

        const categorylist = json.categorylist;
        modellist = json.modellist;
        const colorlist = json.colorlist;
        const storagelist = json.storagelist;
        const productConditionlist = json.productConditionlist;

        loadSelect("categorySelect", categorylist, "name");
//        loadSelect("modelSelect", modellist, "name");
        loadSelect("storageSelect", storagelist, "value");
        loadSelect("colorSelect", colorlist, "name");
        loadSelect("conditionSelect", productConditionlist, "name");

    } else {
        document.getElementById("message").innerHTML = "Please try again Later ";
    }

}

function loadSelect(selectTagId, list, property) {

    const SelectTag = document.getElementById(selectTagId);
    list.forEach(item => {
        let optionTag = document.createElement("option");
        optionTag.value = item.id;
        optionTag.innerHTML = item[property];
        SelectTag.appendChild(optionTag);
    });

}

function updateModels() {

    let modelSelectTag = document.getElementById("modelSelect");
    modelSelectTag.length = 1;

    let selectCategoryId = document.getElementById("categorySelect").value;

    modellist.forEach(model => {
        if (model.category.id == selectCategoryId) {
            let optionTag = document.createElement("option");
            optionTag.value = model.id;
            optionTag.innerHTML = model.name;
            modelSelectTag.appendChild(optionTag);
        }
    });

}

async function productListing() {
    const categorySelectTag = document.getElementById("categorySelect");
    const modelSelectTag = document.getElementById("modelSelect");
    const titleTag = document.getElementById("title");
    const descriptionTag = document.getElementById("description");
    const storageSelectTag = document.getElementById("storageSelect");
    const colorSelectTag = document.getElementById("colorSelect");
    const conditionSelectTag = document.getElementById("conditionSelect");
    const priceTag = document.getElementById("price");
    const quantityTag = document.getElementById("quantity");
    const image1Tag = document.getElementById("image1");
    const image2Tag = document.getElementById("image2");
    const image3Tag = document.getElementById("image3");

    const data = new FormData();
    data.append("categoryId", categorySelectTag.value);
    data.append("modelId", modelSelectTag.value);
    data.append("title", titleTag.value);
    data.append("description", descriptionTag.value);
    data.append("storageId", storageSelectTag.value);
    data.append("colorId", colorSelectTag.value);
    data.append("conditionId", conditionSelectTag.value);
    data.append("price", priceTag.value);
    data.append("quantity", quantityTag.value);
    data.append("image1", image1Tag.files[0]);
    data.append("image2", image2Tag.files[0]);
    data.append("image3", image3Tag.files[0]);



    const response = await fetch(
            "ProductListing",
            {
                method: "POST",
                body: data
            }
    );

    if (response.ok) {
        const json = await response.json();

        if (json.success) {

        } else {

            console.log(json.content);

        }

    } else {
        document.getElementById("message").innerHTML = "Please try again Later ";
    }


}